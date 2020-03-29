
// GLOBAL VARIABLES

// Here we will define the pins we are going to call pinMode on
int led0 = D0;
int led7 = D7; 

void setup(){
    // initialize the pins as output
    pinMode(led0, OUTPUT);
    pinMode(led7, OUTPUT);
}

void loop(){
    digitalWrite(led0, HIGH);
    digitalWrite(led7, HIGH);
    delay(1000);
    digitalWrite(led0, LOW);
    digitalWrite(led7, LOW);
    delay(1000);
}