  var snake;
  var scl = 20;


  function setup() {
      console.log("NEW!!");

      createCanvas(600, 600);
      frameRate(10);
      background(100);

      hud = new HUD();
      snake = new Snake();
      food = new Food();

  }

  function draw() {

      background(150);
      hud.show();
      snake.move();
      snake.show();

      food.show();


      if (snake.eats(food)) {
          snake.grows();
          food.respawns();
      }

      snake.crashes();

  }


  function keyPressed(e) {


      e.preventDefault();

      switch (keyCode) {

      case 38: //up
          snake.changeDir([0, -1]);
          break;
      case 39: //right
          snake.changeDir([1, 0]);
          break;
      case 40: //down
          snake.changeDir([0, 1]);
          break;
      case 37: //left
          snake.changeDir([-1, 0]);
          break;
      case 13: //left
          snake.grows();
          break;


      }


  }