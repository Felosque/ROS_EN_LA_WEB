var ros = new ROSLIB.Ros({
    url : 'ws://localhost:9090'
});

ros.on('connection', function() {
    console.log('¡Me he conectado a ROS satisfactoriamente!.');
});

ros.on('error', function(error) {
    console.log('¡He tenido un error al conectarme con ros!', error);
});

ros.on('close', function() {
    console.log('¡Se ha cerrado la conexión correctamente!');
});