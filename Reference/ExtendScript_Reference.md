
Gary Phelps 2024 gpmail1@gmail.com

<h2>ExtendScript Reference Introduction</h2>

<b>Input Sources for This File</b><br>
    * <a href="https://www.youtube.com/watch?v=r1WWK7pl6so">Adobe InDesign Scripting Tutorial: Create a Basic Script</a> - Youtube, NT Productions 

---
<b>Variables</b><br>
  * Anything after "var" is of course a variable declaration.<br>
  * In any section where variables are created, I will use their names in other lines of that section.</br>
  * Variable names will be generic: "varName" or "typeVarName" (where "type" will be an object type name (such as docVarName)). This way it will be easy to know what data type a variable is.
  
This is all to remove confusion on what is a variable name versus what is an actual element inherent in the actual languages, such as the name of an object or an object method which of course can't be changed.

---

<h2>Basic Commands</h2>

**Alert** ***[Illustrator, InDesign, Photoshop]***

        alert("hello there");

---

<h2>Document, Creation and Accessing</h2>
 

**Access Active Document** ***[Illustrator, InDesign, Photoshop]***</span>

        var doc = app.activeDocument;

**Create New Document** ***[Illustrator, InDesign, Photoshop]***
          
        var doc = app.documents.add();

**Create New Document, Set Dimensions** ***[Illustrator]***

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

**Create New Document, Set Dimensions** ***[InDesign]***
  
        var doc = app.documents.add({
            documentPreferences: {
                pageWidth: "8.5in",
                pageHeight: "11in"
            }
        });

**Create New Document, Set Dimensions** ***[Photoshop]***
  
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

<h2>Document, Naming</h2>

Name Document (used in scripts that create a new document)
  
**Create and Save to Name** ***[Illustrator]***

        var width = 8.5*72;
        var height = 11*72;
        var doc = app.documents.add(DocumentColorSpace.RGB, width, height, 1);
        //The file must be saved to give it a name
        doc.saveAs(File("pathToSaveLocation/fileName.ai"));
        
**Create and Name** ***[InDesign]*** 

        doc.name = "Summer Ad"; ***[InDesign]***
        
        //example
        var doc = app.documents.add({
                documentPreferences: {
                pageWidth: "8.5in",
                pageHeight: "11in",ß
            }
        });
        doc.name = "Summer Ad";

**Create and Name** ***[Photoshop]***

        var width = 3; var height = 11;
        //Name is a parameter(input variable) of the .add method. Type is String (text). ***[Photoshop]***
        var doc = app.documents.add(width, height, 300, "File Name", NewDocumentMode.CMYK, DocumentFill.WHITE, 1, BitsPerChannelType.EIGHT);
        doc.rulerUnits = Units.INCHES;

---

<h2>Layers</h2>

INFO: Layers are a collection (like an array), where the top layer is index 0.

**Access Layer Stack** ***[InDesign]***
          
        var layers = docVarName.layers;

**Create New Layer(s)** ***[Illustrator, InDesign]***

        var newLayer = docVarName.layers.add(); ***[Illustrator, InDesign]***

**Create New Layer(s) and Name Layer(s)** ***[InDesign]***

        var newLayer = docVarName.layers.add({name: "below top layer"}); //create and name

**Create New Sublayer(s) inside a Layer, at index "i"** ***[Illustrator]***

        //Creating 1 Sublayer
        var subLayer = docVarName.layers[i].layers.add(); //Change i to the index you want, where 0 will be the top layer.
        subLayer.name = "layer" + i; //optional

        //Creating multiple sublayers. Set middle option in for loop to addLayers<x to make x sublayers.
        for(var addLayers = 0; addLayers<10; addLayers++){
        var newLayer = docVarName.layers[0].layers.add();
        newLayer.name = "LayerName" + (addLayers+1);
        //all layers will have the LayerName
      }

**Find a Layer** ***[Illustrator, Photoshop]**
          
        Where "x" is the name of the layer you are looking for...
        var layer = docVarName.layers.getByName("x");
        alert(layer.name); //optional but provides textual ouput


**Find a Layer** ***[InDesign]**
        
        Where "x" is the name of the layer you are looking for...
        var layer = docVarName.layers.itemByName("x");
        alert(layer.name); //optional but provides textual ouput

**Lock/Unlock Layer** ***[Illustrator, InDesign]**
          
        docVarName.layers[0].locked = true; //locks top layer
    
**Name a Layer** ***[Illustrator]**

         //name it when creating it
        var myLayer = docVarName.layers.add({name: "below top layer"});
        //or leave out the "{name:"..."} above and add...
        myLayer.name = "name";

**New Layer(s)*** (See Create New Layer(s) above)

**Number of Layers** ***[InDesign]***
       
        alert(layer.length);
     
**Show/Get Name of a Layer** ***[InDesign]***
        
        alert(layer[i].name); //at index i
        //see other method below

**Show/Get Name of a Layer** ***[Illustrator, InDesign, Photoshop]***
        
        alert(layerVarName.name); //get name of a specific layer        
    
**Visibility of Layer** ***[Illustrator, InDesign]***
        
        docVarName.layers[0].visible = false; //turns off top layer visibility

<h2>Layout</h2>

***Margins*** ***[InDesign]***
           
        var myPage = doc.pages.item(0);
        var myMargin = .5;
        //using the 2 variables (page and margin) above...
        myPage.marginPreferences.properties = { 
            top : myMargin,
            left: myMargin,
            right: myMargin,
            bottom: myMargin
            };

<h2>Pages</h2>
    
**Access Pages** ***[InDesign]***
       
        var myPages = *document*.pages;

**Create Page(s)** ***[InDesign]***
        
        var myNewPage = pages.add();

**Dimensions** ***[InDesign]***
       
        docVarName.documentPreferences.pageWidth = "8.5in";
        docVarName.documentPreferences.pageHeight = "11in";

**Number of Pages** ***[InDesign]***
        
        alert(myPages.length);

<h2>Selections</h2>

**Access Selected Objects**
        
        var mySelection = app.activeDocument.selection;

**Name, Get Type Name of Selected Object**
        
        alert(varName.typename)

**Select Item at index x** 
(First Item (last object added to the page) is at index 0)
        
        var selectNewestObject = app.activeDocument.selection[x];

<h2>Shapes</h2>

**Rectangle** ***[Illustrator]***

        //Define rectangle properties
        var rectWidth = 200;    var rectX = 0;
        var rectHeight = 100;   var rectY = 50;

        //Create a rectangle path item
        var rect = doc.pathItems.rectangle(rectY, rectX, rectWidth, rectHeight);
        
<h2>Stroke</h2>
    
**Stroke** ***[Illustrator]***
    
        itemVarName.stroked = true; 
        //true: on/show stroke, false: off/no stroke
    
**Stroke Color** ***[Illustrator]***

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
    
**Stroke Weight/Width** ***[Illustrator]***

        itemVarName.strokeWidth = 1;

<h2>Swatches</h2>

**Access File Swatches** ***[InDesign]***
        
        var mySwatches = app.swatches;

**Loop through Swatches, Display Names** ***[InDesign]***
        
        var mySwatches = app.swatches;
        for(var i=0; i<mySwatches.length; i++){
            alert(mySwatches[i].name); //returns name of swatch at index i
        }

<h2>Text</h2>

**Create a Text Frame** ***[InDesign]***
        
        var newTextFrame = pageVarName.textFrames.add();

**Create a Text Frame** ***[Illustrator]***
        
        var newTextLayer = docVarName.textFrames.add();

**Location and Size of Text Frame** ***[InDesign]***
        
        textFrameVarName.geometricBounds = [y1,x1,y2,x2]
        /* y1,x1 = y,x coordinates of the top left corner
           y2,x2 = y,x coordinates of the bottom right corner */

**QR Code** ***[InDesign]***
       
        textFrameVarName.createPlainQRCode("url for QR Code here");

**Text (Content) of Text Frame (put text into it** ***[InDesign]***

        
        textFrameVarName.contents = "Your chosen text here";

        The text frame might be really small,
        typically places in the upper, left corner. See "Location
        and Size of Text Frame" above to create text frames of a 
        specific size. 
