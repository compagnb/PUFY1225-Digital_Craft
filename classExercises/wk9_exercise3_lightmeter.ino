int reading = 0;
double volts = 0.0;
int analogPin = A0;

void setup() {
    Spark.variable("analog", &reading, INT);
    Spark.variable("volts", &volts, DOUBLE);
}

void loop() {
  reading = analogRead(analogPin);
  volts = reading * 3.3 / 4096.0;
}