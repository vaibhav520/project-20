var car1, block1, deformation;
var speed, weight;

function setup() {
    createCanvas(800, 400);
    speed = random(55, 90);
    weight = random(400, 1500);
    car1 = createSprite(30, 200, 60, 20);
    car1.velocityX = speed;
    block1 = createSprite(760, 200, 40, 70);
}

function draw() {
    background("black");
    car1.shapeColor = "white";
    if (block1.x - car1.x < (car1.width - block1.width) / 2) {
        car1.velocityX = 0;
        deformation = (0.5 * weight * speed) / 22500;
        if (deformation > 180) {
            car1.shapeColor = color(255, 0, 0);
        }
        if (deformation < 180 && deformation > 100) {
            car1.shapeColor = color(230, 230, 0);
        }
        if (deformation < 100) {
            car1.shapeColor = color(0, 255, 0);
        }
    }
    drawSprites();
}