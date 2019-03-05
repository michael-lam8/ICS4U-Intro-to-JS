// Declaring variables and objects
var recommendation;
var book = [
    {
        title: "The Giver",
        author: "Lois Lowry",
        stars: 4,
        colour: color(214),
        recommendation: true
    },
    {
        title: "I Don't Read",
        author: "Me",
        stars: 1,
        colour: color(173, 221, 255),
        recommendation: false
    },
    {
        title: "Nature of Code",
        author: "Daniel Shiffman",
        stars: 5,
        colour: color(255, 82, 169),
        recommendation: true
    }
];

// Setting up sketch
background(245, 185, 108);

// Draws shelves
for (var i = 120; i < height; i += 130) {
    fill(173, 117, 33);
    rect(0, i, width, 10);
}

// Draws books
for (var i = 0; i < book.length; i++) {
    fill(book[i].colour);
    rect(i * 110 + 10, 20, 90, 100);
    fill(0, 0, 0);
    text(book[i].title, i * 110 + 15, 30, 100, 100);
    text(book[i].author, i * 110 + 15, 45, 70, 100);
    if (book[i].recommendation === true) {
        text("Excellent read!", i * 110 + 15, 97);
    } else {
        text("Don't bother.", i * 110 + 15, 97);
    }
    for (var j = 0; j < book[i].stars; j++) {
        image(getImage("cute/Star"), i * 110 + 12 + j * 15, 90, 20, 30);
    }
}
