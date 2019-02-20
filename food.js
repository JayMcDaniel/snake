function Food() {
    
    this.w = scl;

    this.loc = createVector(floor(random(width / scl)), floor(random(height / scl)));
    this.loc.mult(scl);

    this.show = function () {
        
        fill("red");
        rect(this.loc.x, this.loc.y, this.w , this.w );
    }

    this.respawns = function () {

        this.loc = createVector(floor(random(width / scl)), floor(random(height / scl)));
        this.loc.mult(scl);

    };

}