package com.websocket.assignmentwebscocket;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Component;

import jakarta.websocket.*;
import jakarta.websocket.server.ServerEndpoint;

import java.io.IOException;

@FieldDefaults(level = AccessLevel.PRIVATE)
@Getter(AccessLevel.PROTECTED)
@Component
@ServerEndpoint(value = "/chat")
public class ChatWebSocketEndpoint {

    @OnOpen
    public void onOpen(Session session) throws IOException, EncodeException {

        System.out.println("Client connected: " + session.getId());
    }

    @OnMessage
    public void onMessage(Session session, String message) throws IOException, EncodeException {

        System.out.println("Message from " + session.getId() + ": " + message);
        try {
            session.getBasicRemote().sendText("Echo: " + message);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @OnClose
    public void onClose(Session session) throws IOException, EncodeException {

        System.out.println("Connection closed: " + session.getId());
    }

    @OnError
    public void onError(Session session, Throwable throwable) {

        throwable.printStackTrace();
    }

}