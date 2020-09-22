var listener = new ROSLIB.Topic({
    ros : ros,
    name : '/mensaje',
    messageType : 'std_msgs/String'
});

listener.subscribe(function(message) {
    var elem = document.getElementById('mensaje');
    elem.innerHTML = message.data;
    console.log('Received message on ' + listener.name + ': ' + message.data);
});

