var host = 'https://node-slack-christopherjkim.c9.io';
var sendRoute = host + '/send';
var messagesRoute = host + '/messages';

function sendMessage (user, content, callback) {
  $.post(sendRoute, {user: user, content: content})
  .done(callback);
}

function getMessages (callback) {
  $.get(messagesRoute)
  .done(callback);
}


$('#submit-message').submit(function (e) {
  e.preventDefault();

  /* TODO: send message to server */
  var username = $('#submit-user').val();
  var content = $('#submit-content').val();
  
  sendMessage(username, content);
});

function formatMessage(message) {
  return '<li>' + '<span class="username">' + message.user + '</span>' + ': ' + message.content + '</li>';
}
/* use setInterval to periodically get new messages and update the list */

window.setInterval(function () {

  getMessages(function (messages) {
    // empty message log
    $('.messages').empty();

    // TODO: append messages to <ul class="messages">
    for (var i = 0; i < messages.length; i++) {
      var message = messages[i];
      // var text = message.user + ': ' + message.content;
      $('.messages').append(formatMessage(message));
    }
  });

}, 300);
