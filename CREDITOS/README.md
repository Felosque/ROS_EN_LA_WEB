# CREDITOS

**BIBLIOGRAFÍA**
 - Federico Cuesta Rojo (2014). Integracion de Ros (ROBOT OPERATING SYSTEM). Recuperado el 15 de septiembre de 2020, del Sitio web del Departamento de Sistemas y Automatica Universidad de la Sevilla: `<link>` : <http://bibing.us.es/proyectos/abreproy/12186/fichero/PFC+Alvaro+Romero+Gandul+Revisado.pdf>
 
**WEBGRAFÍA**
 
 - ¿Qué es un ROS? 
 `<link>` : <https://www.compliance.com.co/que-es-un-ros/>
 
 - ROS – Herramientas de línea de comandos I 
 `<link>` : <https://geekgasteiz.wordpress.com/2018/05/04/ros-herramientas-de-linea-de-comandos-i/>
 
 - Ros-gazebo. una valiosa Herramienta de Vanguardia para el Desarrollo de la Robótica 
 `<link>` : <https://hemeroteca.unad.edu.co/index.php/publicaciones-e-investigacion/article/view/1593>
 
 - Gazebo Simulator 
 `<link>` : <https://robologs.net/2016/06/25/gazebo-simulator-simular-un-robot-nunca-fue-tan-facil/>
 
 - Instalar Gazebo usando paquetes de Ubuntu 
 `<link>` : <http://gazebosim.org/tutorials?tut=install_ubuntu>
 
 - Rviz ROS 
 `<link>` : <http://wiki.ros.org/rviz/UserGuide>
 
 - Rviz 
 `<link>` : <https://subscription.packtpub.com/book/hardware_and_creative/9781782175193/2/ch02lvl1sec17/rviz>
 
 - Different between gazebo and rviz 
 `<link>` : <https://answers.ros.org/question/200044/different-between-gazebo-and-rviz/>
 
 - Rosbag 
 `<link>` : <http://wiki.ros.org/rosbag>
 
 - Roslaunch 
 `<link>` : <http://wiki.ros.org/roslaunch>
 
 - Catkin 
 `<link>` : <http://wiki.ros.org/catkin>
 
 - Cómo utilizar SimpleHTTPServer 
 `<link>` : <https://www.pythonforbeginners.com/modules-in-python/how-to-use-simplehttpserver>
 

**PROGRAMAS AYUDANTES**
 
 - [ ] **ROS (Ser el nucleo de toda las iteraciones y ayudar al desarrollo de robots libre)**
 
Robot Operating System (ROS) es un middleware robótico, es decir, una colección de frameworks para el desarrollo de software de robots. ROS se desarrolló originariamente en 2007 bajo el nombre de switchyard por el Laboratorio de Inteligencia Artificial de Stanford para dar soporte al proyecto del Robot con Inteligencia Artificial de Stanford (STAIR2). Desde 2008, el desarrollo continuó principalmente en Willow Garage, un instituto de investigación robótico con más de veinte instituciones colaborando en un modelo de desarrollo federado.

A pesar de no ser un sistema operativo, ROS provee los servicios estándar de uno de estos tales como la abstracción del hardware, el control de dispositivos de bajo nivel, la implementación de funcionalidad de uso común, el paso de mensajes entre procesos y el mantenimiento de paquetes. Está basado en una arquitectura de grafos donde el procesamiento toma lugar en los nodos que pueden recibir, mandar y multiplexar mensajes de sensores, control, estados, planificaciones y actuadores, entre otros. La librería está orientada para un sistema UNIX (Ubuntu -Linux-) aunque también se está adaptando a otros sistemas operativos como Fedora, Mac OS X, Arch, Gentoo, OpenSUSE, Slackware, Debian o Microsoft Windows, considerados a día de hoy como ‘experimentales’.
 
 ![](https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Ros_logo.svg/1200px-Ros_logo.svg.png)
 
Para iniciar, Ros debe de ser instalado el sistema operativo Ubuntu, es recomendable usar las versiones 18.04 para implementar el ROS Melodic o 16.04 para implementar el ROS Kinetic. A continuacion se encuentran los respectivos instructivos de instalacion de las versiones de ROS mencionadas:

- Melodic:
`<link>` : <http://wiki.ros.org/melodic/Installation/Ubuntu>

- Kinetic
`<link>` : <http://wiki.ros.org/kinetic/Installation/Ubuntu>
 
 - [ ] **Gazebo (Permitirnos hacer simuacion 3D)**
 
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


 - [ ] **Rviz (Permitirnos hacer mapeo de entornos en 3D)**
 
 rviz es una herramienta de visualización en 3D para aplicaciones de ROS. Proporciona una vista del modelo de robot, captura la información de los sensores del robot y reproduce los datos capturados. Puede mostrar datos de cámara, láseres y dispositivos 3D y 2D, como imágenes y nubes de puntos.

![](https://raw.githubusercontent.com/ros-visualization/rviz/melodic-devel/images/splash.png)

RVIZ se puede usar para mostrar lecturas de sensores, datos devueltos por la visión estereoscópica (Cloud Point), hacer SLAM (localización y mapeo simultáneo) evitando obstáculos, etc. Esta herramienta dispone así mismo, de muchísimas opciones de configuración.

Instalación `<link>` : <http://wiki.ros.org/rosbridge_suite>

`$ sudo apt-get install ros- <rosdistro> -rosbridge-server `

![](https://user-images.githubusercontent.com/14684752/48455828-a53d5a80-e7f7-11e8-9f36-e4cb183d79e5.png)

