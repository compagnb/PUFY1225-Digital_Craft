// Global Variables here

void setup() {
    // this function sets up our program & it only runs once!
    RGB.control(true);
}

void loop() {
    // this function runs forever until we tell it to exit. 
    flash(1000, 255, 0, 0);
    flash(1000, 255, 0, 0);
    flash(1000, 255, 0, 0);
    flash(2000, 0, 255, 0);
    flash(2000, 0, 255, 0);
    flash(2000, 0, 255, 0);
    flash(1000, 0, 0, 255);
    flash(1000, 0, 0, 255);
    flash(1000, 0, 0, 255);
}


// we can make funtions in here the same as we make them in p5!
void flash(int duration, int rColor, int gColor, int bColor){
    RGB.color(rColor, gColor, bColor);
    delay(duration);
    RGB.color(0, 0, 0);
    delay(2000);
}