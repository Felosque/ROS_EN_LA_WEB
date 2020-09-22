import rospy
from std_msgs.msg import String

def talker():
    pub = rospy.Publisher('mensaje', String, queue_size=10)
    rospy.init_node('talker', anonymous=True)
    rate = rospy.Rate(1) # 1hz
    mensaje_numero = 1
    while not rospy.is_shutdown():
        mi_mensaje = "Mensaje enviado desde ROS, numero: " + str(mensaje_numero)
        mensaje_numero += 1
        rospy.loginfo(mi_mensaje)
        pub.publish(mi_mensaje)
        rate.sleep()

if __name__ == '__main__':
    try:
        talker()
    except rospy.ROSInterruptException:
        pass

