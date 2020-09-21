<p align='center'>
    <img src="../CREDITOS/IMG/configuraciones-iniciales/titulo.png" alt="drawing"/>
</p>

# INTRODUCCIÓN
En el siguiente topico vamos a realizar las configuraciones que debemos tener antes de comenzar a comunicar a ROS con una pagina web. 

# MENU

- [**1. Descargar e instalar rosbridge server**](#1-descargando-rosbridge-server)
- [**2. Descargando roslibjs**]()


# 1. Descargando rosbridge server
Para la descarga de rosbridge solo será necesario una instrucción en nuestra consola de comandos siempre y cuando cumplamos con los requisitos del tutorial que se encuentran en el readme de la carpeta raiz de este mismo repositorio. Para instalar rosbridge ejecutamos:

    sudo apt-get install ros-<rosdistro>-rosbridge-server
**NOTA:** Se debe remplazar \<rosdistro\> por nuestra distribución de ROS, en nuestra caso trabajaremos con melodic, por lo tanto nuestro comando queda de la siguiente forma:
    
    sudo apt-get install ros-melodic-rosbridge-server

# 1. Descargando roslibjs
Para descargar roslibjs, existen dos formas de hacerlo. Mediante una etiqueta \<script\> en nuestra pagina web usando los repositorios oficiales de robotwebtools.org/ o por el contrario, podemos descargar todo el repositorio oficial que se encuentra en github github.com/RobotWebTools/roslibjs
