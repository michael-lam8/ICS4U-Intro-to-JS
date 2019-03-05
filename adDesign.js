// Declaring variables
var titleTextSize = 0, x = -150;

// Setting up sketch
fill(255, 247, 0);
textAlign(CENTER, CENTER);

// Loops code and draws animation
draw = function() {
    background(127, 234, 255);
    if (titleTextSize < 40) {
        titleTextSize++;
    }
    textSize(titleTextSize);
    fill(0);
    text("BLOCK OF CHEESE", width/2, height/2-25);
    if (x < width/2) {
        x += 2;
    }
    textSize(20);
    text("DELICIOUS. HEALTHY. WOW.", x, height/2+25);
    textSize(8);
    text("Only delicious if you like it. But I don't think you should buy cheese that looks like this.", width/2, 390);
    fill(255, 247, 0);
    rect(100, 275, 200, 50);
    fill(255, 200, 112);
    ellipse(125, 290, 15, 15);
    ellipse(175, 305, 15, 15);
    ellipse(225, 295, 15, 15);
    ellipse(265, 310, 15, 15);
};
