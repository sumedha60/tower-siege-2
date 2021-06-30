class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image=loadImage("block.png")
      World.add(world, this.body);
    }
    display(){

      if(this.body.speed<2){
         var pos= this.body.position;
      rectMode(CENTER)
      rect(pos.x,pos.y,this.width, this.height);

      }else{
        World.remove(world,this.body)
        push ()
        this.visiblity=this.visiblity-5
        tint (15,this.visiblity) 
       image(this.image,this.body.position.x,this.body.position.y,50,50)
       pop ()
      }
      
      }
      //var pos= this.body.position;
      //rectMode(CENTER)
      //image(this.image,0,0,this.body.width,Block.height)
        //70,80,30,40)
     // rect(pos.x,pos.y,this.width, this.height);

    }
