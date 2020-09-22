
function enviarVelocidad(pe, pz){

    var cmdVel = new ROSLIB.Topic({
        ros : ros,
        name : '/cmd_vel',
        messageType : 'geometry_msgs/Twist'
    })

    var twist = new ROSLIB.Message({
        linear : {
            x : pe,
            y : 0.0,
            z : 0.0
        },
        angular : {
            x : 0.0,
            y : 0.0,
            z : pz
        }
    })
    cmdVel.publish(twist)
}

//Funciones para avanzar y retroceder

function moverAdelante(){
    var velocidadL = parseFloat(document.getElementById("velocidadL").value);
    enviarVelocidad(velocidadL, 0);
}

function moverAtras(){
    var velocidadL = parseFloat(document.getElementById("velocidadL").value);
    enviarVelocidad(-velocidadL, 0);
}

function moverIzquierda(){
    var velocidadL = parseFloat(document.getElementById("velocidadL").value);
    var velocidadA = parseFloat(document.getElementById("velocidadA").value);
    enviarVelocidad(velocidadL, velocidadA);
}

function moverDerecha(){
    var velocidadL = parseFloat(document.getElementById("velocidadL").value);
    var velocidadA = parseFloat(document.getElementById("velocidadA").value);
    enviarVelocidad(velocidadL, -velocidadA);
}

//Aquí creamos el listener que nos ayudará a obtener las distancias

var listener = new ROSLIB.Topic({
    ros : ros,
    name : '/scan',
    messageType : 'sensor_msgs/LaserScan'
});

listener.subscribe(function(message) {
    var elem = document.getElementById('df');
    elem.innerHTML = "Distancia frente: " + message.ranges[1];
    var elem = document.getElementById('db');
    elem.innerHTML = "Distancia atrás: " + message.ranges[180];
    var elem = document.getElementById('dr');
    elem.innerHTML = "Distancia derecha: " + message.ranges[270];
    var elem = document.getElementById('dl');
    elem.innerHTML = "Distancia izquierda: " + message.ranges[90];
});