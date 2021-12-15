class Fioooo{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.fiofo = Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.fiofo);
    }

    fly(){
        this.fiofo.bodyA = null;
    }

    display(){
        if(this.fiofo.bodyA){
        var pointA = this.fiofo.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(0.4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}