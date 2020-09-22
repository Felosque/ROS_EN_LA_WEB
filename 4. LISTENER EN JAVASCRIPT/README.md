<p align='center'>
    <img src="../CREDITOS/IMG/listener/titulo.png" alt="drawing"/>
</p>

# INTRODUCCIÓN
En el siguiente topico realizaremos nuestro primer listener, de esta manera podremos leer los datos que se encuentran en nuestro ROS y mostrarlos en la pagina web. Para realizar la practica del Listener, haremos un publisher en Python que lance un mensaje cada cierto tiempo, luego desde nuestra pagina web nos suscribiremos al publisher y finalmente lo mostraremos en la pagina web.


# MENÚ


# Creando el publisher en Python
Para empezar, crearemos un publicador para ROS, de esta manera podremos enviar un mensaje personalizado a la pagina. El publicador simplemente será un script en Python que lance un mensaje cada 10hz, quedaría de esta manera:

<p align='center'>
    <img src="../CREDITOS/IMG/listener/talker-python.png" alt="drawing"/>
    <p align='center'>Imagen 1. Código del talker escrito en Python</p>
</p>

(Recuerda que puedes tomar el codigo de la imagen 1 en cualquier momento visitando la carpeta src)

Ahora que tenemos un talker, para lanzar el script solo basta con ir hasta donde se encuentra el archivo desde la consola y seguidamente ejecutarlo con python de esta manera:

    python talker.py

<p align='center'>
    <img src="../CREDITOS/IMG/listener/talker.gif" alt="drawing"/>
    <p align='center'>Imagen 2. Ejecutando nuestro talker</p>
</p>

¡Muy bien! Ahora estamos publicando un nuevo nodo en nuestro ROS llamado "mensaje". Para ver la información que lleva nuestro nodo vamos a usar el siguiente comando:

    rostopic info /mensaje

<p align='center'>
    <img src="../CREDITOS/IMG/listener/rostopic-info-mensaje.png" alt="drawing"/>
    <p align='center'>Imagen 3. Información que contiene el nodo mensaje</p>
</p>

Como podemos ver, nos lanza el tipo de mensaje: std_msgs/String, esto será muy importante a la hora de construir nuestro listener desde roslibjs, ya que nos permitirá saber que vamos a recibir. 

Ahora que tenemos el talker personalizado, vamos a realizar nuestro listener en roslibjs.

# Script listener roslibjs


# Probando el listener
