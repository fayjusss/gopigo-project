import easygopigo3 as easy
import time

# create an EasyGoPiGo3 object
gpg3_obj = easy.EasyGoPiGo3()

# and now instantiate a LoudnessSensor object through the gpg3_obj object
loudness_sensor = gpg3_obj.init_loudness_sensor()

# do the usual stuff, like read the data of the sensor
while True:
    value = loudness_sensor.read()
    value_percentage = loudness_sensor.percent_read()

    print value, value_percentage

    time.sleep(1)

# take a look at AnalogSensor class and Sensor class for more methods and attributes
