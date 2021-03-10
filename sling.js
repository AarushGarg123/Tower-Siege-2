class Sling{
    constructor(pointA,pointB) {
        var options= {
            pointA:pointA,
            pointB:pointB,
            isStatic:true,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB;
        this.sling=Constraint.create(options);
        World.add(world, this.sling);
    }
    display() {
        push();
        stroke("gray");
        fill("gray");
        line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
        pop();
    }
};