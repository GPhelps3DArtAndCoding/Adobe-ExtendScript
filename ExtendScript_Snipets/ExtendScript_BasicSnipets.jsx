//Gary Phelps 2024 gpmail1@gmail.com

/*
Nomenclature
    * Il: Illustrator
    * In: InDesign
    * Ps: Photoshop
    * *text* means text is a variable
*/
//Basic Commands--------------------
    
    //Alert (In)
        alert("hello there");

//Document--------------------------
 
    //Access Active Document (In)
        var document = app.activeDocument;

    //Name Document (In)
        *newDocument*.name = "Summer Ad";
 
    //New Document (In)
        var newDocument = app.documents.add();

//Layers------------------------------
    //INFO: layers is an array, starting at top layer at index 0
    
    //Access Layer Stack (In)
        var layers = *document*.layers;

    //Name a Layer (In)
        *myLayer* = "name";

     //New Layer(s) (In)
        var newLayer = layers.add();

    //Show/Get Name of a Layer at index i (In)
        alert(layer[i].name);
    
    //Number of Layers (In)
        alert(layer.length);

//Pages-------------------------------
    
    //Access Pages (In)
        var pages = *document*.pages;

    //New Page(s) (In)
        var newPage = pages.add();

    //Number of Pages (In)
        alert(*pages*.length);

//Swatches-----------------------------

    //Access File Swatches (In)
        var swatches = app.swatches;

    //Loop through Swatches, Display Names (In)
        for(var=i; i<*swatches*.length; i++){
            alert(swatches[i].name); //returns name of swatch at index i
        }

//Text--------------------------------

    //Create a Text Frame (In)
        var newTextFrame = *newPage*.textFrames.add();