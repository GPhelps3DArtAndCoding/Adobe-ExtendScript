//new
var document = app.activeDocument;

//var newDocument = app.documents.add();
//newDocument = "Test Name";

var layers = document.layers;
var pages = document.pages;

var swatches = app.swatches;

for(var i=0; i<swatches.length; i++){
  //alert(swatches[i].name);
}

//MEASUREMENTS -----------------------------
var half = .5;
var quarter = .25;
var eighth = .125;
var sixteenth = .0625

//MARGINS ----------------------------------
marginLeft = half;
marginTop = half;
marginRight = 8;

//HEADER -----------------------------------
var headerHeight = 1;
var headerY1 = marginTop;
var headerX1 = marginLeft;
var headerY2 = headerY1+headerHeight;
var headerX2 = marginRight;

var txtHeight = 3;
var txtY1 = headerY2 + sixteenth;
var txtX1 = marginLeft;
var txtY2 = txtY1+txtHeight;
var txtX2 = marginRight;

//PAGE AND LAYER CREATION
//var newPage = pages.add(); //add a page
//var newLayer = layers.add(); //add a layer
//newLayer.name = "Gary's Layer"; //name the new layer

//TEXT ELEMENTS CREATION
var newTextFrame = document.textFrames.add();
newTextFrame.contents = "My BRAND NEW TEXT";
newTextFrame.geometricBounds = [headerY1,headerX1,headerY2,headerX2,]; //[y1,x1,y2,x2]

var contentText = document.textFrames.add();

contentText.contents = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam iaculis convallis dui quis vulputate. Duis dolor felis, maximus ac dignissim et, pharetra a tellus. Quisque non nisi vel lacus ultricies.";
contentText.geometricBounds = [txtY1,txtX1,txtY2,txtX2]; //[y1,x1,y2,x2];