<p align='center'>
    <img src="../CREDITOS/IMG/conceptos-basicos/titulo.png" alt="drawing"/>
</p>

# INTRODUCCIÓN
El siguiente topico relata algunos conceptos basicos que se utilizarán a la hora de redactar el tutorial. Se hace con el fin de que el lector posterior a leer este articulo se sienta un poco más en contexto con las tecnologias que trataremos durante todo el material pedagogico. 

# MENÚ

 - [**¿Qué es Ros?**](#qué-es-ros)
 - [**Herramientas del ROS**](#herramientas-del-ros)
 - [**Comandos del ROS**](#comandos-del-ros)
 - [**¿Qué es Rosbridge?**](#qué-es-rosbridge)
 - [**¿Qué es HTTP?**](#qué-es-http)
 - [**Python - SimpleHttpServer**](#Python---SimpleHttpServer)

# ¿QUÉ ES ROS?

Sistema Operativo Robótico (en inglés Robot Operating System, ROS) es un framework para el desarrollo de software para robots que provee la funcionalidad de un sistema operativo. ROS está basado en una arquitectura de grafos donde el procesamiento toma lugar en nodos que pueden recibir, enviar y multiplexar mensajes de sensores, controles, estados, planificaciones y actuadores, entre otros.

La funcionalidad del núcleo ROS se expande con una variedad de herramientas que permiten a los desarrolladores: visualizar y recopilar información, navegar de manera sencilla la estructura de paquetes y crear código para automatizar tareas complejas y otros procesos de configuración. La suma de estas herramientas aumentan las posibilidades de los sistemas que utilizan ROS, proveyendo a estos de soluciones simples a tareas comunes en el desarrollo dentro de la robótica. Estas herramientas son provistas por medio de paquetes como otro algoritmo, pero a diferencia de brindar implementaciones de hardware o algoritmos para tareas del robot, estos paquetes proveen tareas y herramientas separadas que las incluidas por el núcleo de la mayoritaria de las instalaciones modernas de ROS.
 
 ![](https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Ros_logo.svg/1200px-Ros_logo.svg.png)
 
Para iniciar, Ros debe de ser instalado el sistema operativo Ubuntu, es recomendable usar las versiones 18.04 para implementar el ROS Melodic o 16.04 para implementar el ROS Kinetic. A continuacion se encuentran los respectivos instructivos de instalacion de las versiones de ROS mencionadas:

- Melodic:
`<link>` : <http://wiki.ros.org/melodic/Installation/Ubuntu>

- Kinetic
`<link>` : <http://wiki.ros.org/kinetic/Installation/Ubuntu>
 

# HERRAMIENTAS DEL ROS

- rviz:
 
Rviz es una herramienta de visualización en 3D para aplicaciones de ROS. Proporciona una vista del modelo de robot, captura la información de los sensores del robot y reproduce los datos capturados. Puede mostrar datos de cámara, láseres y dispositivos 3D y 2D, como imágenes y nubes de puntos.

![](https://raw.githubusercontent.com/ros-visualization/rviz/melodic-devel/images/splash.png)

RVIZ se puede usar para mostrar lecturas de sensores, datos devueltos por la visión estereoscópica (Cloud Point), hacer SLAM (localización y mapeo simultáneo) evitando obstáculos, etc. Esta herramienta dispone así mismo, de muchísimas opciones de configuración.

Instalación `<link>` : <http://wiki.ros.org/rosbridge_suite>

`$ sudo apt-get install ros- <rosdistro> -rosbridge-server `

![](https://user-images.githubusercontent.com/14684752/48455828-a53d5a80-e7f7-11e8-9f36-e4cb183d79e5.png)


- rosbag:
Es una herramienta de línea de comandos para grabar y reproducir datos de mensajes y comunicaciones dentro de ROS. rosbag utiliza un formato de archivo llamado bags, que registra los mensajes de ROS mediante escuchar los ROS topic y grabando los mensajes en la medida que son emitidos. Reproducir los mensajes desde bag es mayormente lo mismo que tener los ROS nodes originales reproduciendo esta. Esto hace de bags una herramienta muy útil para capturar la información que posteriormente se puede usar analizar y posteriormente ser usada para el desarrollo de paquetes ROS por ejemplo. Mientas rosbag es una herramienta puramente de línea de comando, también posee una implementación rqt llamada rqt_bag que brinda una interfaces gráfica.

- gazebo:
 
La simulación de robots es una herramienta esencial en la caja de herramientas de todo robotista. Un simulador bien diseñado permite probar rápidamente algoritmos, diseñar robots, realizar pruebas de regresión y entrenar el sistema de inteligencia artificial utilizando escenarios realistas. 

![](http://gazebosim.org/assets/logos/gazebo_horz_pos_small-3c54696c489a16ffe91a52e38e3cab0bcdaee04a82fb477412cf300fa61005ec.png)

Uno de los mejores simuladores de robots que existen en la actualidad es Gazebo. Es un programa open source distibuido bajo la licencia Apache 2.0 que lleva largo tiempo utilizándose en ámbitos de investigación en robótica e Inteligencia Artificial. Tiene una interfaz muy amigable, con poca curva de aprendizaje y una comunidad que crece a diario. Gazebo ofrece la capacidad de simular de forma precisa y eficiente poblaciones de robots en entornos complejos de interior y exterior. Al alcance de su mano se encuentra un motor de física robusto, gráficos de alta calidad y convenientes interfaces programáticas y gráficas. Lo mejor de todo es que Gazebo es gratis con una comunidad vibrante.

Instalación `<link>` : <http://gazebosim.org/tutorials?tut=install_ubuntu>

1. Configure su computadora para aceptar software de packages.osrfoundation.org.

`$ sudo sh -c 'echo "deb http://packages.osrfoundation.org/gazebo/ubuntu-stable lsb_release -cs main" > /etc/apt/sources.list.d/gazebo-stable.list' `

2. Claves de configuración

`$ wget https://packages.osrfoundation.org/gazebo.key -O - | sudo apt-key add - `

3. Instala Gazebo.

`$ sudo apt-get update `

Para  trabajar con el simulado del robot Turtlebot en Gazebo y otros ficheros que intervienen en la simulación, descargamos del repositiorio oficial las últimas versiones de estos componentes: `<link>` : <https://moodle2017-18.ua.es/moodle/mod/book/view.php?id=2046&chapterid=1>

`$ git clone https://github.com/turtlebot/turtlebot_simulator `

![](https://www.oreilly.com/library/view/ros-robotics-by/9781788479592/graphics/B08463_03_17.jpg)


- catkin:
Es la herramienta de compilación de ROS actual, habiendo reemplazado a rosbuild. catkin esta basada en CMake, es multiplataforma, de código abierto e independiente del lenguaje de programación.

- rosbash:
El paquete rosbash package provee un conjunto de herramientas que aumentan la funcionalidad del Bash. Estas herramientas incluyen rosls, roscd y roscp, que replican las funcionalidades de Ls, Cd, y cp respectivamente. La versión de ROS de estas herramientas de línea de comando permiten a los usuarios usar el nombre de los paquetes ROS en vez de los nombres de los archivos, abreviando de esta forma la extensión de los mismos. Es paquete incluye el auto completado por medio de tab en la mayoría de las utilidades ROS, y también rosed que permite la edición de los archivos seleccionados en el editor de código preferido y también rosrun que permite la ejecución de archivos mediante paquetes ROS. rosbash brinda soporte a las mismas funcionalidades para zsh y tcsh, en una menor cuantiá..

- roslaunch:
Es una herramienta usada para ejecutar múltiples nodos ROS de forma local o remota, de igual forma es usado para configurar parámetros en un servidor de parámetros ROS. Los archivos de configuración roslaunch , cuyo código esta escrito usando XML pueden de forma sencilla automatizar complejos procesos de arranque y configuraciones con un solo comando. Las secuencias de comandos dentro de archivos roslaunch pueden anidar dentro de ellas llamadas a otras secuencias de comandos roslaunch, inicio de nodos ROS en máquinas específicas y hasta reiniciar procesos que han caído durante esta.

# COMANDOS DEL ROS

- [ ] roscd: cambia a un directorio de paquete o pila (ej. roscd stage)
- [ ] roscore: ejecuta todo lo necesario para que dar soporte de ejecución al sistema completo de ROS. Siempre tiene que estar ejecutándose para permitir que se comuniquen los nodos. Permite ejecutarse en un determinado puerto (ej. roscore o roscore -p 1234)
- [ ] roscreate-pkg: crea e inicializa un paquete. Se tiene que ejecutar desde uno de los directorios válidos para que contengan paquetes. El formato de ejecución es: roscreate-pkg paquete [depen1 ...] donde depen1 es una dependencia. Por ejemplo, si el paquete que estamos creando va a usar los mensajes estándar y va a usar código c++, debemos indicar las dependencias std_msgs y roscpp. 
- [ ] rosnode: nos proporciona información sobre un nodo. Disponemos de las siguientes opciones:
- rosnode info nodo (muestra información sobre el nodo)
- rosnode kill nodo (mata ese proceso)
- rosnode list (muestra los nodos ejecutándose)
- rosnode machine maquina (muestra los nodos que se están ejecutando en la máquina).
- rosnode ping nodo (comprueba la conectividad del nodo).
- [ ] rosrun: permite ejecutar cualquier aplicación de un paquete sin necesidad de cambiar a su directorio. Podemos pasarle parámetros con _my_param:=value (ej. rosrun stage stageros) stage es el paquete y stageros es la aplicación que ejecutamos.
- rostopic: permite obtener información sobre un tópico.
- rostopic bw (muestra el ancho de banda consumido por un tópico)
- rostopic echo (imprime datos del tópico por la salida estándar)
- rostopic find (encuentra un tópico)
- rostopic info (imprime información de un tópico)
- rostopic list (imprime información sobre los tópicos activos)
- rostopic pub (publica datos a un tópico activo)
- rostopic type (imprime el tipo de información de un tópico)
- [ ] roswtf: permite chequear si algo va mal. Ejecutamos roscd y después roswtf.


# ¿QUÉ ES ROSBRIDGE?

Segun la pagina oficial de ROS, Rosbridge proporciona una funcionalidad JSON API a ROS para programas que no son ROS. Hay una variedad de interfaces que interactúan con rosbridge, incluido un servidor WebSocket para que los navegadores web interactúen. Rosbridge_suite es un metapaquete que contiene rosbridge, varios paquetes de interfaz para rosbridge como un paquete WebSocket y paquetes de ayuda.

A continuación se encuentra el instructivo el cual se divide en 3 partes fundamentales como son su protocolo, su implementación y para finalizar su forma de instalación: <link> : http://wiki.ros.org/rosbridge_suite

# ¿QUÉ ES HTTP?

El HTTP es una de las 3 tecnologías básicas desarrolladas para la creación de la web en el año 1990 por Tim Berners Lee. La web como sistema de gestión de información para la transmisión de datos a través de Internet necesita para su funcionamiento de 3 elementos básicos: el HTTP, el URL y el HTML.

HTTP de HyperText Transfer Protocol (Protocolo de transferencia de hipertexto) es un protocolo de transferencia donde se utiliza un sistema mediante el cual se permite la transferencia de información entre diferentes servicios y los clientes que utilizan páginas web. Es la base de cualquier intercambio de datos en la Web, y un protocolo de estructura cliente-servidor, esto quiere decir que una petición de datos es iniciada por el elemento que recibirá los datos (el cliente), normalmente un navegador Web. Así, una página web completa resulta de la unión de distintos sub-documentos recibidos, como, por ejemplo: un documento que especifique el estilo de maquetación de la página web (CSS), el texto, las imágenes, vídeos, scripts, etc...    

![](https://media.prod.mdn.mozit.cloud/attachments/2016/08/09/13677/d031b77dee83f372ffa4e0389d68108b/Fetching_a_page.png)

Clientes y servidores se comunican intercambiando mensajes individuales (en contraposición a las comunicaciones que utilizan flujos continuos de datos). Los mensajes que envía el cliente, normalmente un navegador Web, se llaman peticiones, y los mensajes enviados por el servidor se llaman respuestas.

# PYTHON - SimpleHttpServer

SimpleHttpServer - Manejador de solicitudes HTTP simple

El módulo SimpleHTTPServer que viene con Python es un servidor HTTP simple que proporciona controladores de solicitud GET y HEAD estándar. Una ventaja del servidor HTTP integrado es que no es necesario instalar ni configurar nada, lo único que se necesita es tener Python instalado.

Eso lo hace perfecto para usar cuando necesita un servidor web rápido en ejecución y no quiere meterse con la configuración de Apache. Puede usar esto para convertir cualquier directorio de su sistema en el directorio de su servidor web.

