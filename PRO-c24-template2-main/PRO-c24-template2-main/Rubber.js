class Rubber{
	constructor(x,y,r){
		var options = {
			// assign options to the rubber ball
			'density':0.3,
			'friction': 5,
			'restitution':1
		  };
		  this.body = Bodies.square(x, y, 50, 50, options);
		  this.width = 150;
		  this.height = 40;
		  World.add(world, rubber.body)

	
	rubber.x=100;
		rubber.y=10;
		rubber.r=5;
		rubber.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			//draw the ellipse here to display the rubber ball
			
            ellipse(600,600,30,30);
			stroke('white')
			fill('orange')
			pop();
	}

}