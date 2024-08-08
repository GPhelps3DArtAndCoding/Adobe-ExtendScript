var doc = app.documents.add();
var docx = app.activeDocument; //

var subLayer =docx.layers[0].layers.add();
subLayer.name = "layer yo"; //optional