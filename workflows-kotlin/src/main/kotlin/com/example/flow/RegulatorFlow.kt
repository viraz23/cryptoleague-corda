package com.example.flow

import co.paralleluniverse.fibers.Suspendable
import com.example.contract.TradeContract
import com.example.flow.TradeFlow.Acceptor
import com.example.flow.TradeFlow.Initiator
import com.example.state.TradeState
import net.corda.core.contracts.Command
import net.corda.core.contracts.requireThat
import net.corda.core.flows.*
import net.corda.core.identity.CordaX500Name
import net.corda.core.identity.Party
import net.corda.core.node.StatesToRecord
import net.corda.core.transactions.SignedTransaction
import net.corda.core.transactions.TransactionBuilder
import net.corda.core.utilities.ProgressTracker
import net.corda.core.utilities.ProgressTracker.Step
import java.sql.Timestamp



object RegulatorFlow {

    @InitiatedBy(Initiator::class)
    class AutoOfferAcceptor(otherPartyFlow: FlowSession) : Acceptor(otherPartyFlow) {
        @Suspendable
        override fun call(): SignedTransaction {
            val finalTx = super.call()
            // Our transaction is now committed to the ledger, so report it to our regulator. We use a custom flow
            // that wraps SendTransactionFlow to allow the receiver to customise how ReceiveTransactionFlow is run,
            // and because in a real life app you'd probably have more complex logic here e.g. describing why the report
            // was filed, checking that the reportee is a regulated entity and not some random node from the wrong
            // country and so on.
            val regulator = serviceHub.identityService.partiesFromName("Regulator", true).single()
            subFlow(ReportToRegulatorFlow(regulator, finalTx))
            return finalTx
        }
    }

    @InitiatingFlow
    class ReportToRegulatorFlow(private val regulator: Party, private val finalTx: SignedTransaction) : FlowLogic<Unit>() {
        @Suspendable
        override fun call() {
            val session = initiateFlow(regulator)
            subFlow(SendTransactionFlow(session, finalTx))
        }
    }

    @InitiatedBy(ReportToRegulatorFlow::class)
    class ReceiveRegulatoryReportFlow(private val otherSideSession: FlowSession) : FlowLogic<Unit>() {
        @Suspendable
        override fun call() {
            // Start the matching side of SendTransactionFlow above, but tell it to record all visible states even
            // though they (as far as the node can tell) are nothing to do with us.
            subFlow(ReceiveTransactionFlow(otherSideSession, true, StatesToRecord.ALL_VISIBLE))
        }
    }
}
