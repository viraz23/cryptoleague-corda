(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Landing-Page/landing-page/landing-page.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/Landing-Page/landing-page/landing-page.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0xhbmRpbmctUGFnZS9sYW5kaW5nLXBhZ2UvbGFuZGluZy1wYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/Landing-Page/landing-page/landing-page.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/Landing-Page/landing-page/landing-page.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <title>Trading - CorDapp</title>\n    <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\n  <!--<script src=\"js/bootstrap.min.js\"></script>-->\n   <link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\n    <link href='https://fonts.googleapis.com/css?family=Cardo:400,700,400italic' rel='stylesheet' type='text/css'>\n    <link href='https://fonts.googleapis.com/css?family=Lato:400,900italic,900,700italic,700,400italic,300italic,300,100italic,100' rel='stylesheet' type='text/css'>\n    \n    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css\">\n    <link href=\"https://fonts.googleapis.com/css?family=Lato\" rel=\"stylesheet\">\n\n</head>\n<body>\n<nav class=\"navbar navbar-default\">\n    <a class= \"navbar-brand\">\n    <img style=\"max-width:200px;max-height:100px;margin-bottom: 80px;\" src=\"../../../assets/iglogo.png\" alt=\"not found\">\n    </a>\n</nav>\n\n<!-- Trade Listing Start -->\n<div class=\"row\">\n    <div class=\"col-md-2\"></div>\n    <div class=\"col-md-8\">\n               <div class=\"container-fluid\">\n                <div class=\"navbar-header\">\n                    <a class=\"navbar-brand\">{{party}}</a>\n                </div>\n            </div>\n    </div>\n    <div class=\"col-md-2\"></div>\n</div>\n<!-- Trade Listing Ends -->\n\n<!-- Trade Listing Start -->\n<div class=\"row\">\n    <div class=\"col-md-2\"></div>\n    <div class=\"col-md-8\">\n        <div class=\"panel-group\" id=\"accordion\">\n            <div class=\"panel\">\n                <div class=\"panel-primary\">\n                    <div class=\"panel-heading\">\n                        <h4 class=\"panel-title\">Trades:</h4>\n                    </div>\n                </div>\n                <div>\n                    <div *ngFor=\"let trade of alltrades()\" class=\"panel panel-default\">\n                        <div class=\"bs-callout bs-callout-danger pull-right\" >\n                            <h3>{{trade.tradeStatus}}</h3>\n                        </div>\n                        <div class=\"panel-body panel-border\">\n                            <div class=\"tradeId\"><h4><a (click)=\"getSpecificTransaction(trade.linearId.id)\">Trade ID - {{trade.linearId.id}}</a></h4></div>\n                            <div class=\"container\">\n                                <div class=\"row\">\n                                    <div class=\"col-xs-5\">\n                                        <table class=\"table table-bordered\">\n                                            <tr>\n                                               <th>Transaction</th>\n                                            </tr>\n                                            <tr>\n                                                <td>\n                                                    <form class=\"form-horizontal\">\n                                                        <div class=\"form-group\">\n                                                            <label class=\"col-sm-4 control-label form-label\">Amount</label>\n                                                            <div class=\"col-sm-8 form-data\">\n                                                                <span>{{trade.transactionAmount}}</span>\n                                                            </div>\n                                                        </div>\n                                                        <div class=\"form-group\">\n                                                            <label class=\"col-sm-4 control-label form-label\">Asset Code</label>\n                                                            <div class=\"col-sm-8 form-data\">\n                                                                <span>{{trade.assetCode}}</span>\n                                                            </div>\n                                                        </div>\n                                                        <div class=\"form-group\">\n                                                            <label class=\"col-sm-4 control-label form-label\">Order Type</label>\n                                                            <div class=\"col-sm-8 form-data\">\n                                                                <span>{{trade.orderType}}</span>\n                                                            </div>\n                                                        </div>\n                                                    </form>\n                                                </td>\n                                            </tr>\n                                        </table>\n                                    </div>\n                                    <div class=\"col-xs-2\"></div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-2\"></div>\n</div>\n<!-- Trade Listing Ends -->\n\n<!-- Create Trade Content Start -->\n</body>\n</html>"

/***/ }),

/***/ "./src/app/Landing-Page/landing-page/landing-page.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/Landing-Page/landing-page/landing-page.component.ts ***!
  \*********************************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_corda_content_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/corda-content.service */ "./src/app/Services/corda-content.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LandingPageComponent = /** @class */ (function () {
    function LandingPageComponent(service, routes) {
        var _this = this;
        this.service = service;
        this.routes = routes;
        this.alltrades = function () {
            return _this.trades;
        };
        this.service.tradeMethodCalled$.subscribe(function () {
            console.log(_this.trades + "here");
            routes.params.subscribe(function (val) {
                _this.trades = Array.of(_this.service.gettrades());
                console.log(_this.trades);
            });
        });
    }
    LandingPageComponent.prototype.ngOnInit = function () {
        if (location.port === '50005') {
            this.party = "O=Fidelity,L=London,C=GB";
        }
        else if (location.port === '50006') {
            this.party = "O=Market,L=New York,C=US";
        }
        else {
            this.party = 'O=Regulator,L=Delhi,C=IN';
        }
    };
    LandingPageComponent.prototype.getSpecificTransaction = function (linearID) {
        console.log(linearID);
        this.service.getSpecificTrade(linearID);
    };
    LandingPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-landing-page',
            template: __webpack_require__(/*! ./landing-page.component.html */ "./src/app/Landing-Page/landing-page/landing-page.component.html"),
            styles: [__webpack_require__(/*! ./landing-page.component.css */ "./src/app/Landing-Page/landing-page/landing-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_corda_content_service__WEBPACK_IMPORTED_MODULE_2__["CordaContentService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], LandingPageComponent);
    return LandingPageComponent;
}());



/***/ }),

/***/ "./src/app/Landing-Page/single-transaction/single-transaction.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/Landing-Page/single-transaction/single-transaction.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0xhbmRpbmctUGFnZS9zaW5nbGUtdHJhbnNhY3Rpb24vc2luZ2xlLXRyYW5zYWN0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/Landing-Page/single-transaction/single-transaction.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/Landing-Page/single-transaction/single-transaction.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <title>Trading - CorDapp</title>\n    <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\n  <!--<script src=\"js/bootstrap.min.js\"></script>-->\n   <link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\n    <link href='https://fonts.googleapis.com/css?family=Cardo:400,700,400italic' rel='stylesheet' type='text/css'>\n    <link href='https://fonts.googleapis.com/css?family=Lato:400,900italic,900,700italic,700,400italic,300italic,300,100italic,100' rel='stylesheet' type='text/css'>\n    \n    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css\">\n    <link href=\"https://fonts.googleapis.com/css?family=Lato\" rel=\"stylesheet\">\n\n</head>\n<body>\n<nav class=\"navbar navbar-default\">\n    <a class= \"navbar-brand\">\n    <img style=\"max-width:200px;max-height:100px;margin-bottom: 80px;\" src=\"../../../assets/iglogo.png\" alt=\"not found\">\n    </a>\n</nav>\n\n<!-- Trade Listing Start -->\n<div class=\"row\">\n    <div class=\"col-md-2\"></div>\n    <div class=\"col-md-8\">\n               <div class=\"container-fluid\">\n                <div class=\"navbar-header\">\n                    <a class=\"navbar-brand\">{{party}}</a>\n                </div>\n            </div>\n    </div>\n    <div class=\"col-md-2\"></div>\n</div>\n<!-- Trade Listing Ends -->\n\n<!-- Trade Listing Start -->\n<div *ngFor=\"let trade of singletrade()\" class=\"row\">\n    <div class=\"col-md-2\"></div>\n    <div class=\"col-md-8\">\n        <div class=\"panel-group\" id=\"accordion\">\n            <div class=\"panel\">\n                <div class=\"panel-primary\">\n                    <div class=\"panel-heading\">\n                        <h4 class=\"panel-title\">Trade Details for {{trade.state.data.linearId.id}} </h4>\n                    </div>\n                </div>\n                       <div>\n                        <div class=\"panel panel-default\">\n                        <div class=\"panel-body panel-border\">\n                            <div class=\"container\">\n                                <div class=\"row\">\n                                    <div class=\"col-md-9\">\n                                        <table class=\"table table-bordered\">\n                                            <tr>\n                                               <th>Transaction</th>\n                                            </tr>\n                                            <tr>\n                                                <td>\n                                                    <form class=\"form-horizontal\">\n                                                        <div class=\"form-group\">\n                                                            <label class=\"col-sm-4 control-label form-label\">Transaction Hash</label>\n                                                            <div class=\"col-sm-8 form-data\">\n                                                                <span>{{trade.ref.txhash}}</span>\n                                                            </div>\n                                                        </div>\n                                                        <div class=\"form-group\">\n                                                            <label class=\"col-sm-4 control-label form-label\">Asset Code</label>\n                                                            <div class=\"col-sm-8 form-data\">\n                                                                <span>{{trade.state.data.assetCode}}</span>\n                                                            </div>\n                                                        </div>\n                                                        <div class=\"form-group\">\n                                                            <label class=\"col-sm-4 control-label form-label\">Order Type</label>\n                                                            <div class=\"col-sm-8 form-data\">\n                                                                <span>{{trade.state.data.orderType}}</span>\n                                                            </div>\n                                                        </div>\n                                                        <div class=\"form-group\">\n                                                            <label class=\"col-sm-4 control-label form-label\">Amount</label>\n                                                            <div class=\"col-sm-8 form-data\">\n                                                                <span>{{trade.state.data.transactionAmount}}</span>\n                                                            </div>\n                                                        </div>\n                                                        <div class=\"form-group\">\n                                                            <label class=\"col-sm-4 control-label form-label\">Units</label>\n                                                            <div class=\"col-sm-8 form-data\">\n                                                                <span>{{trade.state.data.transactionUnits}}</span>\n                                                            </div>\n                                                        </div>\n                                                        <div class=\"form-group\">\n                                                            <label class=\"col-sm-4 control-label form-label\">Time</label>\n                                                            <div class=\"col-sm-8 form-data\">\n                                                                <span>{{trade.state.data.transactionTime}}</span>\n                                                            </div>\n                                                        </div>\n                                                        <div class=\"form-group\">\n                                                            <label class=\"col-sm-4 control-label form-label\">Fees</label>\n                                                            <div class=\"col-sm-8 form-data\">\n                                                                <span>{{trade.state.data.transactionFees}}</span>\n                                                            </div>\n                                                        </div>\n                                                        <div class=\"form-group\">\n                                                            <label class=\"col-sm-4 control-label form-label\">User Id</label>\n                                                            <div class=\"col-sm-8 form-data\">\n                                                                <span>{{trade.state.data.userId}}</span>\n                                                            </div>\n                                                        </div>\n                                                        <div class=\"form-group\">\n                                                            <label class=\"col-sm-4 control-label form-label\">Date</label>\n                                                            <div class=\"col-sm-8 form-data\">\n                                                                <span>{{trade.state.data.transactionDate}}</span>\n                                                            </div>\n                                                        </div>\n                                                    </form>\n                                                </td>\n                                            </tr>\n                                        </table>\n                                    </div>\n                                    <div class=\"col-xs-1\"></div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-2\"></div>\n</div>\n<!-- Trade Listing Ends -->\n\n<!-- Create Trade Content Start -->\n</body>\n</html>"

/***/ }),

/***/ "./src/app/Landing-Page/single-transaction/single-transaction.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/Landing-Page/single-transaction/single-transaction.component.ts ***!
  \*********************************************************************************/
/*! exports provided: SingleTransactionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleTransactionComponent", function() { return SingleTransactionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_corda_content_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/corda-content.service */ "./src/app/Services/corda-content.service.ts");



var SingleTransactionComponent = /** @class */ (function () {
    function SingleTransactionComponent(service) {
        var _this = this;
        this.service = service;
        this.singletrade = function () {
            return _this.singleTrade;
        };
    }
    SingleTransactionComponent.prototype.ngOnInit = function () {
        this.singleTrade = Array.of(this.service.getSingleTrade());
        if (location.port === '50005') {
            this.party = "O=Fidelity,L=London,C=GB";
        }
        else if (location.port === '50006') {
            this.party = "O=Market,L=New York,C=US";
        }
        else {
            this.party = 'O=Regulator,L=Delhi,C=IN';
        }
    };
    SingleTransactionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-single-transaction',
            template: __webpack_require__(/*! ./single-transaction.component.html */ "./src/app/Landing-Page/single-transaction/single-transaction.component.html"),
            styles: [__webpack_require__(/*! ./single-transaction.component.css */ "./src/app/Landing-Page/single-transaction/single-transaction.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_corda_content_service__WEBPACK_IMPORTED_MODULE_2__["CordaContentService"]])
    ], SingleTransactionComponent);
    return SingleTransactionComponent;
}());



/***/ }),

/***/ "./src/app/Services/corda-content.service.ts":
/*!***************************************************!*\
  !*** ./src/app/Services/corda-content.service.ts ***!
  \***************************************************/
/*! exports provided: CordaContentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CordaContentService", function() { return CordaContentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





// import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';

var CordaContentService = /** @class */ (function () {
    function CordaContentService(http, route) {
        this.http = http;
        this.route = route;
        this.trades = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        // Observable string streams
        this.tradeMethodCalled$ = this.trades.asObservable();
    }
    CordaContentService.prototype.getAllTrades = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]();
        console.log('here');
        console.log(location.host);
        headers.append('Content-Type', 'application/json');
        this.http.get('http://' + location.host + '/api/trading/trades', {
            headers: headers
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }))
            .subscribe(function (res) {
            _this.payload = res[0].state.data;
            console.log('success');
            console.log(_this.payload);
            _this.trades.next();
        });
    };
    CordaContentService.prototype.getSpecificTrade = function (linearID) {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var params = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["URLSearchParams"]();
        params.set('linearID', linearID);
        var requestOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"];
        requestOptions.search = params;
        this.http.get('http://' + location.host + '/api/trading/getTrade', {
            headers: headers, search: params
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }))
            .subscribe(function (res) {
            _this.singleTrade = res[0];
            console.log(_this.singleTrade);
            _this.route.navigate(['/api/trading/getTrade'], { queryParams: { linearID: linearID } });
            console.log('success');
        });
    };
    CordaContentService.prototype.gettrades = function () {
        return this.payload;
    };
    CordaContentService.prototype.getSingleTrade = function () {
        return this.singleTrade;
    };
    CordaContentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], CordaContentService);
    return CordaContentService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_corda_content_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Services/corda-content.service */ "./src/app/Services/corda-content.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(cordaService) {
        this.cordaService = cordaService;
    }
    AppComponent.prototype.ngOnInit = function () {
        console.log('success2');
        this.cordaService.getAllTrades();
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_corda_content_service__WEBPACK_IMPORTED_MODULE_2__["CordaContentService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _Landing_Page_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Landing-Page/landing-page/landing-page.component */ "./src/app/Landing-Page/landing-page/landing-page.component.ts");
/* harmony import */ var _Landing_Page_single_transaction_single_transaction_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Landing-Page/single-transaction/single-transaction.component */ "./src/app/Landing-Page/single-transaction/single-transaction.component.ts");
/* harmony import */ var _Services_corda_content_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Services/corda-content.service */ "./src/app/Services/corda-content.service.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _Landing_Page_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_6__["LandingPageComponent"],
                _Landing_Page_single_transaction_single_transaction_component__WEBPACK_IMPORTED_MODULE_7__["SingleTransactionComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                //AppRoutingModule,
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                //HttpClientModule,
                _app_routes__WEBPACK_IMPORTED_MODULE_3__["APP_ROUTES_PROVIDER"]
            ],
            providers: [_Services_corda_content_service__WEBPACK_IMPORTED_MODULE_8__["CordaContentService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: APP_ROUTES_PROVIDER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_ROUTES_PROVIDER", function() { return APP_ROUTES_PROVIDER; });
/* harmony import */ var _Landing_Page_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Landing-Page/landing-page/landing-page.component */ "./src/app/Landing-Page/landing-page/landing-page.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Landing_Page_single_transaction_single_transaction_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Landing-Page/single-transaction/single-transaction.component */ "./src/app/Landing-Page/single-transaction/single-transaction.component.ts");



var APP_ROUTES = [
    {
        path: '', component: _Landing_Page_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_0__["LandingPageComponent"]
    },
    {
        path: 'api/trading/getTrade', component: _Landing_Page_single_transaction_single_transaction_component__WEBPACK_IMPORTED_MODULE_2__["SingleTransactionComponent"]
    }
];
var APP_ROUTES_PROVIDER = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(APP_ROUTES);


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\cryptoleague-corda\corda-frontend-cl\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map