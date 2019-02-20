function Snake() {

    this.head_loc = [0, 0];
    this.x = 20;
    this.y = 20;
    this.dir = [1, 0];
    this.tail = [{
        x: this.x,
        y: this.y
        }];
    this.total = 0;
    this.w = scl;
    this.h = this.w;

    this.move = function () {

        //move head
        this.x += (this.dir[0] * this.w);
        this.y += (this.dir[1] * this.h);


        if (this.x > width) {
            this.x = 0;
        }
        if (this.x < 0) {
            this.x = width;
        }

        if (this.y > height) {
            this.y = 0;
        }
        if (this.y < 0) {
            this.y = height;
        }

        this.tail.unshift({
            x: this.x,
            y: this.y
        });

        this.tail.pop();

    }

    this.show = function () {


        
        //show tail
        for (var i = this.tail.length - 1; i > -1; i--) {
            
            var color = i === 0 ? 255 : 230;
                
                fill(color);
            
            rect(this.tail[i].x, this.tail[i].y, this.w, this.h);
            
            
        }

    }


    this.eats = function (food) {

        var d = dist(this.x, this.y, food.loc.x, food.loc.y);
        return d < 1;

    }

    this.grows = function () {

        this.total++;

        this.tail.unshift({
            x: this.x,
            y: this.y
        });

    }


    this.changeDir = function (dir) {

        if (this.tail.length < 2) {
            this.dir = dir;
        }

        if ([dir[0] + this.dir[0], dir[1] + this.dir[1]].join(",") != "0,0") {

            this.dir = dir;
        }

    }


    this.crashes = function () {
        for (var i = 0; i < this.tail.length; i++) {

            if (i > 3) {

                var pos = this.tail[i];
                var d = dist(this.x, this.y, pos.x, pos.y);
                if (d < 1) {
                    this.total = 0;
                    this.tail = [];
                    background("red");
                }
            }

        }
    }





}