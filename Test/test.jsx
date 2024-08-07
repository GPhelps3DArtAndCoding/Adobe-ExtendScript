//Create a new document
var doc = app.activeDocument; //
for(var addLayers = 0; addLayers<10; addLayers++){
var newL = doc.layers[0].layers.add();
newL.name = "LayerName" + (addLayers+1);
}