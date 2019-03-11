package com.example.mq;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
public class Producer {

    public void send(String signedTransaction) {
        ApplicationContext ctx = new AnnotationConfigApplicationContext(RabbitMqConfig.class);
        RabbitTemplate rabbitTemplate = ctx.getBean(RabbitTemplate.class);
        rabbitTemplate.convertAndSend(signedTransaction);
    }
}
