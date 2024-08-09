
$${\color{red}MyText}$$

Gary Phelps 2024 gpmail1@gmail.com

<b>Input Sources for This File</b><br>
    * <a href="https://www.youtube.com/watch?v=r1WWK7pl6so">Adobe InDesign Scripting Tutorial: Create a Basic Script</a> - Youtube, NT Productions 

--------------------------------------------------------------------

<b>Nomenclature</b><br>
    * [MS] Microsoft<br> 
    * [IL]: Illustrator<br>
    * [IN]: InDesign<br>
    * [PS]: Photoshop

<b>Variables</b><br>
    * Anything after "var" is of course a variable declaration.<br>
    * In any item where variables are created, I  will just use them in further lines like you would when writing your own code.</br>
    * In any other scenario, I will do one of these options:<br>
      * Use "varName" or "typeVarName" (where "type" will be an object type name (such as docTypeName)).<br>
      * Use "my..." such as "myNewSwatch".
  
This is all to remove confusion on what is a variable name versus what is an actual element inherent in the actual languages, such as names of objects or object methods.

<b>Basic Commands</b>

* Alert [IL][IN][PS]

        alert("hello there");

---

<h2>Document</h2>
 
<span style="color:blue">some *blue* text</span>
**Access Active Document** ***<bl>[Illustrator, InDesign, Photoshop]</bl>***</span>

        var doc = app.activeDocument;

**Create New Document** ***[Illustrator, InDesign, Photoshop]***
          
        var doc = app.documents.add();

**Create Document, Set Dimensions** ***[Illustrator]***

        //Method 1 
        /* The *72 multiplier for width and height is because Illustrator often defaults to Points for Units, General.
        If Illustrator defaults to inches (I've yet to find out how to do this), then remove the *72 from each var below. */)
        var width = 8.5*72;
        var height = 11*72;
        var doc = app.documents.add(DocumentColorSpace.RGB, width, height, 1);

        //Method 2
        var doc = app.documents.add();
        //Dimensions in points (1 inch = 72 points)
        var width = 8.5 * 72;
        var height = 11 * 72;
        //Set the artboard's position (leftX, topY, rightX, bottomY)
        //Note: origin (0,0) is bottom, left
        doc.artboards[0].artboardRect = [0, height, width, 0];

**Create Document, Set Dimensions** ***[InDesign]***
  
        var doc = app.documents.add({
            documentPreferences: {
                pageWidth: "8.5in",
                pageHeight: "11in"
            }
        });

* Create Document, Set Dimensions [PS]
  
        //Basic Creation
        var width = 3;
        var height = 11;
        var doc = app.documents.add(width, height, 300, "File Name", NewDocumentMode.CMYK, DocumentFill.WHITE, 1, BitsPerChannelType.EIGHT);
        doc.rulerUnits = Units.INCHES;

        //More Detailed Creation (300DPI CMYK (print) or 72DPI RGB (screen) depending on value of res variable)
        var width = 3;
        var height = 11;
        var hiRes = 300; //high res print
        var lowRes = 72; //low res screen
        var res = lowRes;

        if (res == hiRes){
                alert("Res is " + res + "dpi for print.");
                var doc = app.documents.add(width, height, res, "File Name", NewDocumentMode.CMYK, DocumentFill.WHITE, 1, BitsPerChannelType.EIGHT);
                doc.rulerUnits = Units.INCHES
        }
        else if (res == lowRes){
                alert("Res is " + res + "dpi for screen.");
                var doc = app.documents.add(width, height, res, "File Name", NewDocumentMode.RGB, DocumentFill.WHITE, 1, BitsPerChannelType.EIGHT);

---

<b>Document, Naming</b>

Name Document (used in scripts that create a new document)
  
* **Illustrator**

        var width = 8.5*72;
        var height = 11*72;
        var doc = app.documents.add(DocumentColorSpace.RGB, width, height, 1);
        //The file must be saved to give it a name
        doc.saveAs(File("pathToSaveLocation/fileName.ai"));
        
* **InDesign** 

        doc.name = "Summer Ad"; [IN]
        
        //example
        var doc = app.documents.add({
                documentPreferences: {
                pageWidth: "8.5in",
                pageHeight: "11in",
            }
        });
        doc.name = "Summer Ad";

* **Photoshop**

        var width = 3; var height = 11;
        //Name is a parameter(input variable) of the .add method. Type is String (text). [PS]
        var doc = app.documents.add(width, height, 300, "File Name", NewDocumentMode.CMYK, DocumentFill.WHITE, 1, BitsPerChannelType.EIGHT);
        doc.rulerUnits = Units.INCHES;

---

<b>Input, Files</b>

**InDesign**
          
        var inputFile = File("File name or path to file here");
        var inputData;
        inputFile.open("r");
        inputData = inputFile.read().toString();
        inputFile.close();
        see https://www.youtube.com/watch?v=r1WWK7pl6so @ 15:47

---

<b>Layers</b></br>
INFO: Layers are a collection (like an array), where the top layer is index 0.



* Access Layer Stack

**InDesign**
          
        var layers = docVarName.layers;

* Create New Layer(s)

        var newLayer = docVarName.layers.add(); //[IL][IN] create
        var newLayer = docVarName.layers.add({name: "below top layer"}); //[IN]create and name

* Create New Sublayer(s) inside a Layer, at index "i" [IL]

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
        var layer = docVarName.layers.getByName("x"); //[IL][PS]
        var layer = docVarName.layers.itemByName("x"); //[IN]
        alert(layer.name); //[IL][IN][PS] optional but provides textual ouput

* Lock/Unlock Layer [IL][IN]
          
        docVarName.layers[0].locked = true; //locks top layer
    
* Name a Layer [IN]

         //name it when creating it
        var myLayer = docVarName.layers.add({name: "below top layer"});
        //or leave out the "{name:"..."} above and add...
        myLayer.name = "name";

* New Layer(s) (See Create New Layer(s) above)

* Number of Layers [IN]
       
        alert(layer.length);
     
* Show/Get Name of a Layer
        
        alert(layer[i].name); //at index i [IN]
        alert(layerVarName.name); //of specific layer [IL][IN][PS]
    
* Visibility of Layer [IL][IN]
        
        docVarName.layers[0].visible = false; //turns off top layer visibility

<b>Layout</b>

* Margins [IN]
           
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
    
* Access Pages [IN]
       
        var myPages = *document*.pages;

* Create Page(s) [IN]
        
        var myNewPage = pages.add();

* Dimensions [IN]
       
        docVarName.documentPreferences.pageWidth = "8.5in";
        docVarName.documentPreferences.pageHeight = "11in";

* Number of Pages [IN]
        
        alert(myPages.length);

<b>Selections</b>

* Access Selected Objects
        
        var mySelection = app.activeDocument.selection;

* Name, Get Type Name of Selected Object
        
        alert(varName.typename)

* Select Item at index x (First Item (last object added to the page) is at index 0)
        
        var selectNewestObject = app.activeDocument.selection[x];

<b>Shapes</b>

* Rectangle[IL]

        //Define rectangle properties
        var rectWidth = 200;    var rectX = 0;
        var rectHeight = 100;   var rectY = 50;

        //Create a rectangle path item
        var rect = doc.pathItems.rectangle(rectY, rectX, rectWidth, rectHeight);
        
<b>Stroke</b>
    
* Stroke[IL]
    
        itemVarName.stroked = true; 
        //true: on/show stroke, false: off/no stroke
    
* Stroke Color[IL]

        //Create RGB Color: colors range from 0 (0%) to 255 (100%)
        var myColor = new RGBColor();
        myColor.red = 255;
        myColor.green = 0;
        myColor.blue = 0;
        //applying color to an item
        itemVarName.strokeColor = myColor;

        //Create CMYK Color: colors rang from 0% to 100%
        var myColor = new CMYKColor();
        myColor.cyan = 100;
        myColor.magenta = 0;
        myColor.yellow = 0;
        myColor.black = 0;
        //applying color to an item
        itemVarName.strokeColor = myColor;
    
* Stroke Weight/Width[IL]

        itemVarName.strokeWidth = 1;

<b>Swatches</b>

* Access File Swatches [IN]
        
        var mySwatches = app.swatches;

* Loop through Swatches, Display Names [IN]
        
        var mySwatches = app.swatches;
        for(var i=0; i<mySwatches.length; i++){
            alert(mySwatches[i].name); //returns name of swatch at index i
        }

<b>Text</b>

* Create a Text Frame [IN]
        
        var newTextLayer = docVarName.textFrames.add(); //[IL]
        var newTextFrame = pageVarName.textFrames.add(); //[IN]

* Location and Size of Text Frame [IN]
        
        textFrameVarName.geometricBounds = [y1,x1,y2,x2]
        /* y1,x1 = y,x coordinates of the top left corner
           y2,x2 = y,x coordinates of the bottom right corner */

* QR Code [IN]
       
        textFrameVarName.createPlainQRCode("url for QR Code here");

* Text (Content) of Text Frame (put text into it) [IN]
        
        textFrameVarName.contents = "Your chosen text here";
        /* Note: The text frame might be really small,
        typically places in the upper, left corner. See "Location
        and Size of Text Frame" above to create text frames of a 
        specific size. */
