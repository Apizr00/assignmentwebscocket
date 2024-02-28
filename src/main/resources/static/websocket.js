var ws;

function connect() {

    alert("Connected to WebSocket");
    var host = document.location.host;
    ws = new WebSocket("ws://" + host + "/chat");
    ws.onmessage = onMessage;
    

}

function disconnect() {

    if (ws && ws.readyState !== WebSocket.CLOSED) {
    
    alert("Disconnect from WebSocket");
      
    // Send a close frame to the server (optional, but recommended for a graceful shutdown)
    ws.send(JSON.stringify({ type: "close" }));

    // Close the WebSocket connection
    ws.close(1000, "Normal closure initiated by user");

    // Remove event listeners to prevent memory leaks (optional, but good practice)
    ws.onmessage = ws.onerror = ws.onopen = null;
  }
}

function send() {
    var content = document.getElementById("msg").value;
    ws.send(content);
}

function onMessage(event) {

    var messageArea = document.getElementById("messageArea");
    var message = event.data;
    
    // Append the received message to the message area
    messageArea.innerHTML += "Received: " + message + "<br>";
}
