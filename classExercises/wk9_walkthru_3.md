The basic wiring is the same as the previous walk thru:
* The long lead of the LED connects to D6 using the blue wire.
* The short lead of the LED connects to a 220 ohm (red-red-brown-gold) resistor. The other side of the resistor connects to ground.

The photo resistor is connected as follows:
* One lead of the photo resistor connects to 3V3. In the picture, that's the right lead, using the red wire.
* The other lead of the photo resistor connects to another 220 ohm resistor. The other side of the resistor connects to ground.
* The left lead of the photo resistor (connected to the resistor) also connects to pin A0 using the orange wire.
Bend the LED and the photo sensor so that they are pointing at each other. (You want the LED, when turned on, to shine its beam of light directly at the photo sensor.)

![Third diagram](https://compagnb.github.io/PUFY1225-Digital_Craft/classExercises/assets/wk9_photon3.png "Third diagram")

In this example, we're going to register a Particle.variable() with the cloud so that we can read brightness levels from the photoresistor or phototransistor. We'll also register a Particle.function so that we can turn the LED on and off remotely. 

We're going to start by declaring which pins everything is plugged into.
``` C 
int led = D6; // This is where your LED is plugged in. The other side goes to a resistor connected to GND.

int photosensor = A0; // This is where your photoresistor or phototransistor is plugged in. The other side goes to the "power" pin (below).

int analogvalue; // Here we are declaring the integer variable analogvalue, which we will use later to store the value of the photoresistor or phototransistor.

int ledToggle(String command); // Forward declaration

```

Next we go into the setup function.
``` C
void setup() {
    // This is here to allow for debugging using the USB serial port
    Serial.begin();

    // First, declare all of our pins. This lets our device know which ones will be used for outputting voltage, and which ones will read incoming voltage.
    pinMode(led, OUTPUT); // Our LED pin is output (lighting up the LED)
    digitalWrite(led, HIGH);

    // We are going to declare a Particle.variable() here so that we can access the value of the photosensor from the cloud.
    Particle.variable("analogvalue", &analogvalue, INT);
    // This is saying that when we ask the cloud for "analogvalue", this will reference the variable analogvalue in this app, which is an integer variable.

    // We are also going to declare a Particle.function so that we can turn the LED on and off from the cloud.
    Particle.function("led",ledToggle);
    // This is saying that when we ask the cloud for the function "led", it will employ the function ledToggle() from this app.
}
```

Next is the loop function...
``` C
void loop() {

    // check to see what the value of the photoresistor or phototransistor is and store it in the int variable analogvalue
    analogvalue = analogRead(photosensor);

    // This prints the value to the USB debugging serial port (for optional debugging purposes)
    Serial.printlnf("%d", analogvalue);

    // This delay is just to prevent overflowing the serial buffer, plus we really don't need to read the sensor more than
    // 10 times per second (100 millisecond delay)
    delay(100);
}
```

Finally, we will write out our ledToggle function, which is referenced by the Particle.function() called "led"
``` C
int ledToggle(String command) {

    if (command=="on") {
        digitalWrite(led,HIGH);
        return 1;
    }
    else if (command=="off") {
        digitalWrite(led,LOW);
        return 0;
    }
    else {
        return -1;
    }
}
```