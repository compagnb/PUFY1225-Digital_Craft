var angle = 0;
var w = 40;
var ma;
var maxD;


function setup() {
    createCanvas(400, 400, WEBGL);
    ma = atan(1/sqrt(2));
    maxD = dist(0,0,200,200);
}

function draw() {
    background(0);
    ortho(-400, 400, 400, -400, 0, 1000);

    rotateX(ma);
    rotateY(QUARTER_PI);

    for(var z = 0; z < height; z += w) {
        for(var x = 0; x < width; x += w) {
            push();
            var d = dist(x, z, width / 2, height / 2);
            var offset = map(d, 0, maxD, -PI/8, PI);
            var a = angle + offset;
            var h = map(sin(a), -1, 1, 50, 300);
            translate(x - width/2, 0, z - height/2);
            box(w - 2, h, w - 2);
            pop();
        }
    }

    angle += 0.05;
}