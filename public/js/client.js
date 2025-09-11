var socket = io();

$(function () {
  console.log("Attempting to connect to server...");

  socket.on("connect", function () {
    console.log("Connected to Server");
    $("#disconnected").hide();
    $("#waiting-room").show();
  });

  socket.on("disconnect", function () {
    console.log("Disconnected from Server");
    $("#waiting-room").hide();
    $("#game").hide();
    $("#disconnected").show();
  });

  socket.on("connect_error", function (error) {
    console.log("Connection error:", error);
    $("#disconnected").show();
    $("#waiting-room").hide();
    $("#game").hide();
  });

  socket.on("join", function (gameId) {
    Game.initGame();
    $("#message").empty();
    $("#disconnected").hide();
    $("#waiting-room").hide();
    $("#game").show();
    $("#game-number").html(gameId);
  });

  socket.on("update", function (gameState) {
    Game.setTurn(gameState.turn);
    Game.updateGrid(gameState.gridIndex, gameState.grid);
  });
  socket.on("chat", function (msg) {
    $("#messages").append(
      "<li><strong>" + msg.name + ":</strong> " + msg.message + "</li>"
    );
    $("#messages-list").scrollTop($("#messages-list")[0].scrollHeight);
  });

  /**
   * Game notification
   */
  socket.on("notification", function (msg) {
    $("#messages").append("<li>" + msg.message + "</li>");
    $("#messages-list").scrollTop($("#messages-list")[0].scrollHeight);
  });

  /**
   * Change game status to game over
   */
  socket.on("gameover", function (isWinner) {
    Game.setGameOver(isWinner);
  });

  /**
   * Leave game and join waiting room
   */
  socket.on("leave", function () {
    $("#game").hide();
    $("#waiting-room").show();
  });

  /**
   * Send chat message to server
   */
  $("#message-form").submit(function () {
    socket.emit("chat", $("#message").val());
    $("#message").val("");
    return false;
  });
});

/**
 * Send leave game request
 * @param {type} e Event
 */
function sendLeaveRequest(e) {
  e.preventDefault();
  socket.emit("leave");
}

/**
 * Send shot coordinates to server
 * @param {type} square
 */
function sendShot(square) {
  socket.emit("shot", square);
}
