//Gary Phelps 2024 gpmail1@gmail.com

/*
Nomenclature
    * Il: Illustrator
    * In: InDesign
    * Ps: Photoshop
*/
//Basic Commands--------------------
    
    //Alert (In)
        alert("hello there");

//Document--------------------------
 
    //Access Active Document (In)
        var document = app.activeDocument;

    //Name Document (In)
        varName.name = "name";
        //example
        newDocument.name = "Summer Ad";
 
    //New Document (In)
        var newDocument = app.documents.add();

//Pages-------------------------------
    
    //Access Pages (In)
        var pages = document.pages;

    //Number of Pages (In)
        alert(pages.length);

//Layers------------------------------
    //INFO: layers is an array, starting at top layer at index 0
    
    //Access Layer Stack (In)
        var layers = document.layers;
    
    //Show/Get Name of a Layer at index i (In)
        alert(layer[i].name);
    
    //Number of Layers (In)
        alert(layer.length);

//Swatches-----------------------------