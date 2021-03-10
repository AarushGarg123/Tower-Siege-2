class Hexagon{
    constructor(x,y) {
        var option={
            restitution:0.8,
            friction:1.0,
            density:1.0
        }
        this.body = Bodies.rectangle(x, y, options);
        this.image = loadImage("sprites/base.png");
    }
    display() {
        push();
        imageMode(CENTER);
        image(this.image, 50,50);
        pop();
    }
};