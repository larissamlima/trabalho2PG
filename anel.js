let degree = 0;

function setup() {
	createCanvas(500, 450, WEBGL);
}

function draw() {
	background('black');
	fill('gold');
	noStroke();

	rotateX(degree);
	rotateZ(degree);
	translate(0, 0, mouseX);

    
	torus(120, 20);

	degree += 0.03;
}
