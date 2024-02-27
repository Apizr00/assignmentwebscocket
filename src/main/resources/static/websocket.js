var ws;

function connect() {
    var host = document.location.host;
    ws = new WebSocket("ws://" + host + "/chat");
}

function send() {
    var content = document.getElementById("msg").value;
    ws.send(content);
}