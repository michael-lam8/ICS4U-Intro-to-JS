// Setting up sketch
background(89, 216, 255);

// Draws pebbles at the bottom of screen
var drawPebbles = function() {
    for (var i = 9; i < width; i += 20) {
        stroke(0);
        fill(207, 207, 207);
        ellipse(i, 397, 18, 10);
    }
};

// Draws seaweed according to set values
var drawSeaweed = function(seaweedX, seaweedY, seaweedHeight) {
    noStroke();
    fill(40, 115, 0);
    rect(seaweedX, seaweedY, 15, seaweedHeight);
};

// Draws fish according to set values
var drawFish = function(centerX, centerY, bodyColour, bodyLength, bodyHeight,
                        tailWidth, tailHeight, tailColour, eyeSize) {
    // Body
    fill(bodyColour);
    ellipse(centerX, centerY, bodyLength, bodyHeight);
    // Tail
    fill(tailColour);
    triangle(centerX-bodyLength/2, centerY,
             centerX-bodyLength/2-tailWidth, centerY-tailHeight,
             centerX-bodyLength/2-tailWidth, centerY+tailHeight);
    // Eye
    fill(33, 33, 33);
    ellipse(centerX+bodyLength/4, centerY, eyeSize, eyeSize);
};

// Draws objects on screen
draw = function() {
    drawPebbles();
    drawSeaweed(50, 300, 100);
    drawSeaweed(67, 325, 75);
    drawSeaweed(325, 325, 75);
    drawSeaweed(343, 275, 125);
    drawFish(100, 100, color(162, 0, 255), 60, 50, 10, 25, color(0, 120, 200), 5);
    drawFish(250, 175, color(255, 100, 100), -100, 50, -25, 25, color(162, 0, 255), 10);
    drawFish(150, 300, color(0, 120, 200), 75, 50, 20, 25, color(255, 100, 100), 8);
};

// Randomly generates fish when mouse is clicked
var mouseClicked = function() {
  drawFish.centerX = random(400);
  drawFish.centerY = random(350);
  drawFish.bodyColour = color(random(255), random(255), random(255));
  drawFish.bodyLength = random(10, 100);
  drawFish.bodyHeight = random(10, 100);
  drawFish.tailWidth = random(10, 50);
  drawFish.tailHeight = random(10, 50);
  drawFish.tailColour = color(random(255), random(255), random(255));
  drawFish.eyeSize = random(5, 10);
  drawFish(drawFish.centerX, drawFish.centerY, drawFish.bodyColour, drawFish.bodyLength,
           drawFish.bodyHeight, drawFish.tailWidth, drawFish.tailHeight, drawFish.tailColour,
           drawFish.eyeSize);
};
