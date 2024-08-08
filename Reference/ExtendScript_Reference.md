Gary Phelps 2024 gpmail1@gmail.com

<b>Input Sources for This File</b><br>
    * <a href="https://www.youtube.com/watch?v=r1WWK7pl6so">Adobe InDesign Scripting Tutorial: Create a Basic Script</a> - Youtube, NT Productions 

--------------------------------------------------------------------

<b>Nomenclature</b><br>
    * [MS] Microsoft<br> 
    * [Il]: Illustrator<br>
    * [In]: InDesign<br>
    * [Ps]: Photoshop

<b>Variables</b><br>
    * Anything after "var" is of course a variable declaration.
    * I use "varName" or "typeVarName" (where "type" will be an object type name) if it applies to a object type to indicate a variable that is used in context other than declaration. Also, it sometimes works better to just call something "my..." such as "myNewSwatch".

<b>Basic Commands</b>

* Alert [Il][In]

        alert("hello there");

<b>Document</b>
 
* Access Active Document [In]
        
        var document = app.activeDocument;

* Dimensions [In]

        var doc = app.documents.add({
            documentPreferences: {
                pageWidth: "8.5in",
                pageHeight: "11in"
            }
        });
      
* Name Document [In]
          
        docVarName.name = "Summer Ad";
   
* New Document [In]
          
        var newDocument = app.documents.add();

<b>Input</b>

* File input [In]
          
        var inputFile = File("File name or path to file here");
        var inputData;
        inputFile.open("r");
        inputData = inputFile.read().toString();
        inputFile.close();
        see https://www.youtube.com/watch?v=r1WWK7pl6so @ 15:47

<b>Layers</b></br>
INFO: Layers are a collection (like an array), where the top layer is index 0.
    
* Access Layer Stack [In]
          
        var layers = docVarName.layers;

* Create New Layer(s)

        var newLayer = docVarName.layers.add(); //[Il][In] create
        var newLayer = docVarName.layers.add({name: "below top layer"}); //[In]create and name

* Create New Sublayer(s) inside a Layer, at index "i" [Il]

        //Creating 1 Sublayer
        var subLayer = docVarName.layers[i].layers.add(); //Change i to the index you want, where 0 will be the top layer.
        subLayer.name = "layer" + i; //optional

        //Creating multiple sublayers. Set middle option in for loop to addLayers<x to make x sublayers.
        for(var addLayers = 0; addLayers<10; addLayers++){
        var newLayer = docVarName.layers[0].layers.add();
        newLayer.name = "LayerName" + (addLayers+1);
        //all layers will have the LayerName
      }

* Find a Layer
          
        //Where "x" is the name of the layer you are looking for...
        var layer = docVarName.layers.getByName("x"); //[Il][Ps]
        var layer = docVarName.layers.itemByName("x"); //[In]
        alert(layer.name); //[Il][In][Ps] optional but provides textual ouput

* Lock/Unlock Layer [Il][In]
          
        docVarName.layers[0].locked = true; //locks top layer
    
* Name a Layer [In]

         //name it when creating it
        var myLayer = docVarName.layers.add({name: "below top layer"});
        //or leave out the "{name:"..."} above and add...
        myLayer.name = "name";

* New Layer(s) (See Create New Layer(s) above)

* Number of Layers [In]
       
        alert(layer.length);
     
* Show/Get Name of a Layer
        
        alert(layer[i].name); //at index i [In]
        alert(layerVarName.name); //of specific layer [Il][In][Ps]
    
* Visibility of Layer [Il][In]
        
        docVarName.layers[0].visible = false; //turns off top layer visibility

<b>Layout</b>

* Margins [In]
           
        var myPage = doc.pages.item(0);
        var myMargin = .5;
        //using the 2 variables (page and margin) above...
        myPage.marginPreferences.properties = { 
            top : myMargin,
            left: myMargin,
            right: myMargin,
            bottom: myMargin
            };

<b>Pages</b>
    
* Access Pages [In]
       
        var myPages = *document*.pages;

* Create Page(s) [In]
        
        var myNewPage = pages.add();

* Dimensions [In]
       
        docVarName.documentPreferences.pageWidth = "8.5in";
        docVarName.documentPreferences.pageHeight = "11in";

* Number of Pages [In]
        
        alert(myPages.length);

<b>Selections</b>

* Access Selected Objects
        
        var mySelection = app.activeDocument.selection;

* Name, Get Type Name of Selected Object
        
        alert(varName.typename)

* Select Item at index x (First Item (last object added to the page) is at index 0)
        
        var selectNewestObject = app.activeDocument.selection[x];

<b>Swatches</b>

* Access File Swatches [In]
        
        var mySwatches = app.swatches;

* Loop through Swatches, Display Names [In]
        
        var mySwatches = app.swatches;
        for(var i=0; i<mySwatches.length; i++){
            alert(mySwatches[i].name); //returns name of swatch at index i
        }

<b>Stroke</b>
    
* Stroke[Il]
    
        itemVarName.stroked = true; 
        //true: on/show stroke, false: is off/no stroke

    
* Stroke Color[Il]

        //RGB, colors range from 0 (0%) to 255 (100%)
        var myColor = new RGBColor();
        myColor.red = 255;
        myColor.green = 0;
        myColor.blue = 0;
        itemVarName.strokeColor = redColor;

        //CMYK, colors rang from 0% to 100%
        var myColor = new CMYKColor();
        myColor.cyan = 100;
        myColor.magenta = 0;
        myColor.yellow = 0;
        myColor.black = 0;
        itemVarName.strokeColor = myColor;
    
* Stroke Weight/Width[Il]

        itemVarName.strokeWidth = 1;

<b>Text</b>

* Create a Text Frame [In]
        
        var newTextLayer = docVarName.textFrames.add(); //[Il]
        var newTextFrame = pageVarName.textFrames.add(); //[In]

* Location and Size of Text Frame [In]
        
        textFrameVarName.geometricBounds = [y1,x1,y2,x2]
        /* y1,x1 = y,x coordinates of the top left corner
           y2,x2 = y,x coordinates of the bottom right corner */

* QR Code [In]
       
        textFrameVarName.createPlainQRCode("url for QR Code here");

* Text (Content) of Text Frame (put text into it) [In]
        
        textFrameVarName.contents = "Your chosen text here";
        /* Note: The text frame might be really small,
        typically places in the upper, left corner. See "Location
        and Size of Text Frame" above to create text frames of a 
        specific size. */
