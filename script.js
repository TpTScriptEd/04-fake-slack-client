var host = 'https://node-slack-christopherjkim.c9.io';
var sendRoute = host + '/send';
var messagesRoute = host + '/messages';

function sendMessage (user, content, callback) 
{
  $.post(sendRoute, {user: user, content: content}).done(callback);
}

function getMessages (callback) 
{
  $.get(messagesRoute).done(callback);
}


$('#submit-message').submit(function (e) {
  e.preventDefault();

  /* TODO: send message to server */
  var username = $('#submit-user').val();
  var content = $('#submit-content').val();
  
  console.log(username, content);
  
  sendMessage(username, content);
});


/* use setInterval to periodically get new messages and update the list */

window.setInterval(function () 
{

  getMessages(function (messages) 
  {
    // empty message log
    $('.messages').empty();

    // TODO: append messages to <ul class="messages">
    for(var i = 0; i < messages.length; i++)
    {
      var messages = messages[i]; 
      //$('.messages').append(JSON.stringify(messages));
      var text = message.user + ': ' + message.content;
      $('.messages').append('<li>' + text + '<li>');
    }
  });

}, 300);
