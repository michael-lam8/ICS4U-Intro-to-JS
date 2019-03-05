// Last updated March 5, 2019
// - Added Roll Again button

// Generates random number on program start
var answer = floor(random(1, 5));

draw = function() {
    background(255);
    textSize(18);
    textAlign(CENTER, CENTER);

     // Ball
    fill(0, 0, 0);
    ellipse(200, 200, 375, 375);

    // Draws triangle and changes colour based on answer
    if (answer === 1) {
        fill(3, 128, 19);
    } else if (answer === 2) {
        fill(181, 154, 0);
    } else if (answer === 3) {
        fill(252, 70, 70);
    } else if (answer === 4) {
        fill(181, 154, 0);
    }
    triangle(200, 104, 280, 280, 120, 280);

    // Displays response
    fill(255, 255, 255);
    if (answer === 1) {
        text("It is certain.", 200, 210);
    } else if (answer === 2) {
        text("Ask", 200, 200);
        text("again later.", 200, 220);
    } else if (answer === 3) {
        text("Very", 200, 200);
        text("doubtful.", 200, 220);
    } else if (answer === 4) {
        text("Better not", 200, 200);
        text("tell you now.", 200, 220);
    }

    // Roll Again button
    rect(0, 0, 100, 25);
    fill(0);
    textSize(12);
    text("Roll Again", 50, 12.5);
};

// Regenerates random number on Roll Again button click
mousePressed = function() {
    if (mouseX > 0 && mouseX < 100 && mouseY > 0 && mouseY < 25) {
        answer = floor(random(1, 5));
    }
};
