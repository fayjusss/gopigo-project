import time
import easygopigo3 as easy

gpg = easy.EasyGoPiGo3()

my_distance_sensor = gpg.init_distance_sensor()

while True:
    if my_distance_sensor.read_mm() < 200:

        gpg.left()
        time.sleep(1)
    else:
        gpg.forward()
        time.sleep(1)
        # Directly print the values of the sensor.
        print("Distance Sensor Reading (mm): " + str(my_distance_sensor.read_mm()))




