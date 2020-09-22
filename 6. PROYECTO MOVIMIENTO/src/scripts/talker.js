

function enviarVelocidad(){
    var cmdVel = new ROSLIB.Topic({
        ros : ros,
        name : '/cmd_vel',
        messageType : 'geometry_msgs/Twist'
    })

    var twist = new ROSLIB.Message({
        linear : {
            x : parseFloat(document.getElementById("lx").value),
            y : parseFloat(document.getElementById("ly").value),
            z : parseFloat(document.getElementById("lz").value)
        },
        angular : {
            x : parseFloat(document.getElementById("ax").value),
            y : parseFloat(document.getElementById("ay").value),
            z : parseFloat(document.getElementById("az").value)
        }
    })
    cmdVel.publish(twist)
}