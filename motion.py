import easygopigo3 as easy
# create an EasyGoPiGo3 object
gpg3_obj = easy.EasyGoPiGo3()

# and now instantiate a Motion Sensor object through the gpg3_obj object on default port AD1
motion_sensor = gpg3_obj.init_motion_sensor()

while True:
    if motion_sensor.motion_detected():
        print("motion detected")
    else:
        print("no motion")

# take a look at DigitalSensor & Sensor class for more methods and attributes
