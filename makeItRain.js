// Last updated June 19, 2018
// - Added colours and variable falling speeds to raindrops
//    - Colours and speeds are randomly generated upon startup and on each mouse click

// Declaring variables
var colour, ySpeed;
var xPositions = [], yPositions = [], dropColour = [], rainSpeed = [];

// Initializes random x coordinates for raindrops
for (var i = 0; i < 4; i++) {
    var j = random(400);
    xPositions.push(j);
    yPositions.push(0);
}

// Initializes random colours and falling speed for raindrops
for (var i = 0; i < xPositions.length; i++) {
    colour = color(random(255), random(255), random(255));
    dropColour.push(colour);
    ySpeed = random(5, 10);
    rainSpeed.push(ySpeed);
}

// Runs animation continuously
draw = function() {
    background(204, 247, 255);
    // Draws and animates rain falling down screen
    for (var i = 0; i < xPositions.length; i++) {
        noStroke();
        fill(dropColour[i]);
        ellipse(xPositions[i], yPositions[i], 10, 10);
        yPositions[i] += rainSpeed[i];
        // Resets y coordinate when raindrops reach bottom of screen
        if (yPositions[i] >= height) {
            yPositions[i] = 0;
        }
    }
};

// Adds raindrops based on mouseX coordinates
mouseClicked = function() {
    xPositions.push(mouseX);
    yPositions.push(0);
    colour = color(random(255), random(255), random(255));
    dropColour.push(colour);
    ySpeed = random(5, 10);
    rainSpeed.push(ySpeed);
};
