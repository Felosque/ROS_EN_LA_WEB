# ¿QUÉ ES ROS?

Sistema Operativo Robótico (en inglés Robot Operating System, ROS) es un framework para el desarrollo de software para robots que provee la funcionalidad de un sistema operativo. ROS está basado en una arquitectura de grafos donde el procesamiento toma lugar en nodos que pueden recibir, enviar y multiplexar mensajes de sensores, controles, estados, planificaciones y actuadores, entre otros.

La funcionalidad del núcleo ROS se expande con una variedad de herramientas que permiten a los desarrolladores: visualizar y recopilar información, navegar de manera sencilla la estructura de paquetes y crear código para automatizar tareas complejas y otros procesos de configuración. La suma de estas herramientas aumentan las posibilidades de los sistemas que utilizan ROS, proveyendo a estos de soluciones simples a tareas comunes en el desarrollo dentro de la robótica. Estas herramientas son provistas por medio de paquetes como otro algoritmo, pero a diferencia de brindar implementaciones de hardware o algoritmos para tareas del robot, estos paquetes proveen tareas y herramientas separadas que las incluidas por el núcleo de la mayoritaria de las instalaciones modernas de ROS.

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

# INSTALACION DEL ROS

Para iniciar, Ros debe de ser instalado el sistema operativo Ubuntu, es recomendable usarlas versiones 18.04 para implementar el ROS Melodic o 16.04 para implementar el ROS Kinetic.










