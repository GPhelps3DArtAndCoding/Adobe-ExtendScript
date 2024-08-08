// Create a new document
var doc = app.documents.add();
doc.rulerUnits = RulerUnits.Inches;


// Define rectangle properties
var rectWidth = 200;  // Width of the rectangle
var rectHeight = 100; // Height of the rectangle
var rectX = 0;       // X position of the rectangle
var rectY = 50;       // Y position of the rectangle

// Create a rectangle path item
var rect = doc.pathItems.rectangle(rectY, rectX, rectWidth, rectHeight);

// Set the fill color to blue
var blueColor = new RGBColor();
blueColor.red = 0;
blueColor.green = 0;
blueColor.blue = 255;
rect.fillColor = blueColor;

// Set the stroke color to red
var redColor = new RGBColor();
redColor.red = 255;
redColor.green = 0;
redColor.blue = 0;
rect.strokeColor = redColor;
rect.strokeWidth = 5;

// Set the stroke color to none (if you want no stroke)
rect.stroked = true;

// Save and close the document (optional)
// doc.saveAs(File("~/Desktop/BlueRectangle.ai"));
// doc.close();
