class launcher{
    constructor(body, anchor){
        var option={
            bodyA: body,
            pointB: anchor,
            stiffness: 0.007,
            length: 1
        }
        
        this.bodyA=body
            this.pointB=anchor
            this.launcherObject=Constraint.create(option)
            World.add(world,this.launcherObject)
        }
    
        attach(body){
            this.launcherObject.bodyA=body;
        }
    
        fly()
        {
            this.launcherObject.bodyA=null;
        }
    
        display()
        {
            if(this.launcherObject.bodyA)
            {
                var pointA=this.bodyA.position;
                var pointB=this.pointB
    
                strokeWeight(2);
                stroke('red')
                line(pointA.x,pointA.y,pointB.x,pointB.y);
            }
        }
    }