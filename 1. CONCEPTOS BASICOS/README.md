<p align='center'>
    <img src="../CREDITOS/IMG/conceptos-basicos/titulo.png" alt="drawing"/>
</p>

# INTRODUCCIÓN
El siguiente topico relata algunos conceptos basicos que se utilizarán a la hora de redactar el tutorial. Se hace con el fin de que el lector posterior a leer este articulo se sienta un poco más en contexto con las tecnologias que trataremos durante todo el material pedagogico. 

# MENÚ
 - [**Instalar Ros (Melodic)**](#instalación-del-ros)
 - [**¿Qué es Ros?**](#qué-es-ros)
 - [**Herramientas del ROS**](#herramientas-del-ros)
 - [**¿Qué es Rosbridge?**](#qué-es-rosbridge)
 - [**¿Qué es HTTP?**](#qué-es-http)
 - [**Python - SimpleHttpServer**](#instalacion-del-ros)
 - [****](#instalacion-del-ros)

# INSTALACIÓN DEL ROS

Para iniciar, Ros debe de ser instalado el sistema operativo Ubuntu, es recomendable usar las versiones 18.04 para implementar el ROS Melodic o 16.04 para implementar el ROS Kinetic. A continuacion se encuentran los respectivos instructivos de instalacion de las versiones de ROS mencionadas:

- Melodic:
`<link>` : <http://wiki.ros.org/melodic/Installation/Ubuntu>

- Kinetic
`<link>` : <http://wiki.ros.org/kinetic/Installation/Ubuntu>

# ¿QUÉ ES ROS?

Sistema Operativo Robótico (en inglés Robot Operating System, ROS) es un framework para el desarrollo de software para robots que provee la funcionalidad de un sistema operativo. ROS está basado en una arquitectura de grafos donde el procesamiento toma lugar en nodos que pueden recibir, enviar y multiplexar mensajes de sensores, controles, estados, planificaciones y actuadores, entre otros.

La funcionalidad del núcleo ROS se expande con una variedad de herramientas que permiten a los desarrolladores: visualizar y recopilar información, navegar de manera sencilla la estructura de paquetes y crear código para automatizar tareas complejas y otros procesos de configuración. La suma de estas herramientas aumentan las posibilidades de los sistemas que utilizan ROS, proveyendo a estos de soluciones simples a tareas comunes en el desarrollo dentro de la robótica. Estas herramientas son provistas por medio de paquetes como otro algoritmo, pero a diferencia de brindar implementaciones de hardware o algoritmos para tareas del robot, estos paquetes proveen tareas y herramientas separadas que las incluidas por el núcleo de la mayoritaria de las instalaciones modernas de ROS.

# HERRAMIENTAS DEL ROS

- rviz:
Es una herramienta de simulación y visualización 3d para robots, el ambiente en el que estos se desempeñan y la información de sensores que estos generan dentro de este. Es altamente configurable y posee distintos tipos de plugins y formatos de visualización.

           ![](https://raw.githubusercontent.com/ros-visualization/rviz/melodic-devel/images/splash.png)

- rosbag:
Es una herramienta de línea de comandos para grabar y reproducir datos de mensajes y comunicaciones dentro de ROS. rosbag utiliza un formato de archivo llamado bags, que registra los mensajes de ROS mediante escuchar los ROS topic y grabando los mensajes en la medida que son emitidos. Reproducir los mensajes desde bag es mayormente lo mismo que tener los ROS nodes originales reproduciendo esta. Esto hace de bags una herramienta muy útil para capturar la información que posteriormente se puede usar analizar y posteriormente ser usada para el desarrollo de paquetes ROS por ejemplo. Mientas rosbag es una herramienta puramente de línea de comando, también posee una implementación rqt llamada rqt_bag que brinda una interfaces gráfica.

- gazebo:
Gazebo es un simulador de entornos 3D que posibilita evaluar el comportamiento de un robot en un mundo virtual. Permite, entre muchas otras opciones, diseñar robots de forma personalizada, crear mundos virtuales usando sencillas herramientas CAD e importar modelos ya creados. Además, es posible sincronizarlo con ROS de forma que los robots emulados publiquen la información de sus sensores en nodos, así como implementar una lógica y un control que dé ordenes al robot.

![](http://gazebosim.org/assets/logos/gazebo_horz_pos_small-3c54696c489a16ffe91a52e38e3cab0bcdaee04a82fb477412cf300fa61005ec.png)

- catkin:
Es la herramienta de compilación de ROS actual, habiendo reemplazado a rosbuild. catkin esta basada en CMake, es multiplataforma, de código abierto e independiente del lenguaje de programación.

- rosbash:
El paquete rosbash package provee un conjunto de herramientas que aumentan la funcionalidad del Bash. Estas herramientas incluyen rosls, roscd y roscp, que replican las funcionalidades de Ls, Cd, y cp respectivamente. La versión de ROS de estas herramientas de línea de comando permiten a los usuarios usar el nombre de los paquetes ROS en vez de los nombres de los archivos, abreviando de esta forma la extensión de los mismos. Es paquete incluye el auto completado por medio de tab en la mayoría de las utilidades ROS, y también rosed que permite la edición de los archivos seleccionados en el editor de código preferido y también rosrun que permite la ejecución de archivos mediante paquetes ROS. rosbash brinda soporte a las mismas funcionalidades para zsh y tcsh, en una menor cuantiá..

- roslaunch:
Es una herramienta usada para ejecutar múltiples nodos ROS de forma local o remota, de igual forma es usado para configurar parámetros en un servidor de parámetros ROS. Los archivos de configuración roslaunch , cuyo código esta escrito usando XML pueden de forma sencilla automatizar complejos procesos de arranque y configuraciones con un solo comando. Las secuencias de comandos dentro de archivos roslaunch pueden anidar dentro de ellas llamadas a otras secuencias de comandos roslaunch, inicio de nodos ROS en máquinas específicas y hasta reiniciar procesos que han caído durante esta.

# ¿QUÉ ES ROSBRIDGE?

Segun la pagina oficial de ROS, Rosbridge proporciona una funcionalidad JSON API a ROS para programas que no son ROS. Hay una variedad de interfaces que interactúan con rosbridge, incluido un servidor WebSocket para que los navegadores web interactúen. Rosbridge_suite es un metapaquete que contiene rosbridge, varios paquetes de interfaz para rosbridge como un paquete WebSocket y paquetes de ayuda.

A continuacion se encuentra el instructivo el cual se divide en 3 partes fundamentales como son su protocolo, su implemenacion y para finalizar su forma de instalacion:
`<link>` : <http://wiki.ros.org/rosbridge_suite>

# ¿QUÉ ES HTTP?

El HTTP es una de las 3 tecnologías básicas desarrolladas para la creación de la web en el año 1990 por Tim Berners Lee. La web como sistema de gestión de información para la transmisión de datos a través de Internet necesita para su funcionamiento de 3 elementos básicos: el HTTP, el URL y el HTML.

HTTP de HyperText Transfer Protocol (Protocolo de transferencia de hipertexto) es un protocolo de transferencia donde se utiliza un sistema mediante el cual se permite la transferencia de información entre diferentes servicios y los clientes que utilizan páginas web. Es la base de cualquier intercambio de datos en la Web, y un protocolo de estructura cliente-servidor, esto quiere decir que una petición de datos es iniciada por el elemento que recibirá los datos (el cliente), normalmente un navegador Web. Así, una página web completa resulta de la unión de distintos sub-documentos recibidos, como, por ejemplo: un documento que especifique el estilo de maquetación de la página web (CSS), el texto, las imágenes, vídeos, scripts, etc...    

![](https://media.prod.mdn.mozit.cloud/attachments/2016/08/09/13677/d031b77dee83f372ffa4e0389d68108b/Fetching_a_page.png)

Clientes y servidores se comunican intercambiando mensajes individuales (en contraposición a las comunicaciones que utilizan flujos continuos de datos). Los mensajes que envía el cliente, normalmente un navegador Web, se llaman peticiones, y los mensajes enviados por el servidor se llaman respuestas.




