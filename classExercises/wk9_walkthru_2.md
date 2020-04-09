## INPUTS & OUTPUTS
* In order to blink LEDs set to other pins on the Photon board, first we need to declare **global** variables to hold the pin information. 
``` C
int led0 = D0;
int led7 = D7;
 ```
    * These are declared first and outside of all other functions, so that they can be used in all of the functions we write. These types are variables are also known as **Global**.
    * Notice how each of the variables have a type defined next to the name. Even though they may not look like numbers, they are the pin number that we are assigning.  
    * The **D0** pin does not control an LED on the photon board itself, so we will need to wire an LED to the pin labeled D0 (Digital 0). 
    * The **D7** pin not only controls the D7 (Digital 7) pin, but also controls a small LED next to it on the board. 
* Before we move further with the code, lets wire our breadboard. 
    * First, push the Photon into the center of the breadboard. 
    * Connect the GND pin to the negative (blue) vertical line on the breadboard with a small black wire.
    * Connect the 3.3V pin to the positive (red) vertical line on the breadboard with a small red wire.
    * Connect the two negative (blue) vertical lines on the breadboard with a longer black wire. This will ensure both sides are grounded, and can be used. 
    * Connect the two positive (red) vertical lines on the breadboard with a longer red wire. This will ensure both sides are powered, and can be used. 
    * This is the skeleton for all breadboarded projects. Here is a diagram and the Schematic drawing for this skeleton:

    ![First diagram](https://compagnb.github.io/PUFY1225-Digital_Craft/classExercises/assets/wk9_photon1.png "First diagram")

    * Now, put one end of the 220 Ohm resistor into the whole next to the pin D0.
    * The LED will have two pins. The smaller leg is the negative terminal and the longer is the positive terminal. Place these in the breadboard in two different horizontal rows. * Put the other end of the resistor into a hole in the same row as the positive terminal on the LED. 
    * Put a small black cable to connect the negative terminal to the negative (blue) vertical line on the breadboard.

    ![Second diagram](https://compagnb.github.io/PUFY1225-Digital_Craft/classExercises/assets/wk9_photon2.png "Second diagram")

* With the hardware ready and the variables declared, now we have to initialize them. This will take place in the **set up function**.
``` C
void setup(){
    // initialize the pins as output
    pinMode(led0, OUTPUT);
    pinMode(led7, OUTPUT);
}
```
    * The **pinMode** function requires two parameters, one to list what pin will be setup and the other to tell us how that pin will be used. 
    * **OUTPUT** allows us to controll the voltage flowing out of that pin, while **INPUT** allows us to read what is coming into that pin. * The **pinMode** is called in the **setup** function/method, because it only needs to be called once. 
* Now that each of our pins are declared and initialized, we can turn them on and off in the **loop** method. 
``` C
void loop(){
    digitalWrite(led0, HIGH);
    digitalWrite(led7, HIGH);
    delay(1000);
    digitalWrite(led0, LOW);
    digitalWrite(led7, LOW);
    delay(1000);
}
```
    * The **digitalWrite** function takes two parameters, one for the pin and one for HIGH or LOW. It sets the pin to HIGH or LOW, which either connects it to 3.3V (the maximum voltage of the system) or to GND (ground). 
    