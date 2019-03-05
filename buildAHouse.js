// Note: all images are relative links from Khan Academy's servers

// Setting up sketch
background(219, 255, 255);

// Grass
for (var x = 0; x < width; x += 47) {
    image(getImage("cute/GrassBlock"), x, height-80, 47, 80);
}

// Roof
fill(174, 180, 214);
triangle(200, 28, 350, 150, 50, 150);

// House
rect(60, 149, 281, 208);
for (var i = 61; i < 340; i += 40) {
    for (var j = 130; j < 300; j += 40) {
        image(getImage("cute/BrownBlock"), i, j, 40, 68);
    }
}

// Door
fill(120, 80, 19);
rect(180, 280, 40, 77);
fill(0);
ellipse(210, 320, 5, 5);

// Windows
fill(158, 250, 255);
for (var i = 80; i <= 120; i += 40) {
    for (var j = 180; j <= 220; j += 40) {
        rect(i, j, 40, 40);
        rect(i+160, j, 40, 40);
    }
}

// Tree
image(getImage("cute/TreeTall"), 15, 215, 101, 171);
