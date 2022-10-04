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
    
	torus(120, 20);

	degree += 0.03;
}
