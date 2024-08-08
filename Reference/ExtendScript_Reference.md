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
    * I use "*" before and after a word to indicate a variable that is used in context other than declaration.

<b>Basic Commands</b>

* Alert [In]

        alert("hello there");

<b>Document</b>
 
* Access Active Document [In]
        
        <code>var document = app.activeDocument;</code>

* Dimensions [In]
          
        <code>var doc = app.documents.add({
            documentPreferences: {
                pageWidth: "8.5in",
                pageHeight: "11in"
            }
        });</code>
      
* Name Document [In]
          
        <code>*newDocument*.name = "Summer Ad";</code>
   
* New Document [In]
          
        <code>var newDocument = app.documents.add();</code>

<b>Input</b>

* File input [In]
          
        var inputFile = File("File name or path to file here");
        var inputData;
        *inputFile*.open("r");
        *inputData* = *inputFile*.read().toString();
        *inputFile*.close();
        see https://www.youtube.com/watch?v=r1WWK7pl6so @ 15:47

<b>Layers</b></br>
INFO: Layers are a collection (like an array), where the top layer is index 0.
    
* Access Layer Stack [In]
          
        <code>var layers = *document*.layers;</code>

* Create New Layer(s)

        <code>var newLayer = *doc*.layers.add(); //[Il][In] create
        var newLayer = *doc*.layers.add({name: "below top layer"}); //[In]create and name</code>

* Create New Sublayer(s) inside a Layer, at index "i" [Il]

        <code>//Creating 1 Sublayer
        var subLayer = *doc*.layers[i].layers.add(); //Change i to the index you want, where 0 will be the top layer.
        subLayer.name = "layer" + i; //optional

        //Creating multiple sublayers. Set middle option in for loop to addLayers<x to make x sublayers.
        for(var addLayers = 0; addLayers<10; addLayers++){
        var newLayer = *doc*.layers[0].layers.add();
        newLayer.name = "LayerName" + (addLayers+1);
        //all layers will have the LayerName
      }</code>

* Find a Layer
          
        <code>//Where "x" is the name of the layer you are looking for...
        var layer = doc.layers.getByName("x"); //[Il][Ps]
        var layer = doc.layers.itemByName("x"); //[In]
        alert(layer.name); //[Il][In][Ps] optional but provides textual ouput</code>

* Lock/Unlock Layer [Il][In]
          
        <code>doc.layers[0].locked = true; //locks top layer</code>
    
* Name a Layer [In]
        
        <code> //name it when creating it
        var newLayer = doc.layers.add({name: "below top layer"});
        //or leave out the "{name:"..."} above and add...
        *newLayer*.name = "name";</code>

* New Layer(s) (See Create New Layer(s) above)

* Number of Layers [In]
       
        <code>alert(layer.length);</code>
     
* Show/Get Name of a Layer
        
        <code>alert(layer[i].name); //at index i [In]
        alert(*layer*.name); //of specific layer [Il][In][Ps]</code>
    
* Visibility of Layer [Il][In]
        
        <code>doc.layers[0].visible = false; //turns off top layer visibility</code>

<b>Layout</b>

* Margins [In]
           
        <code>var page = doc.pages.item(0);
        var margin = .5;
        //using the 2 variables (page and margin) above...
        page.marginPreferences.properties = { 
            top : margin,
            left: margin,
            right: margin,
            bottom:margin
            };</code>

<b>Pages</b>
    
* Access Pages [In]
       
        <code>var pages = *document*.pages;</code>

* Create Page(s) [In]
        
        <code>var newPage = pages.add();</code>

* Dimensions [In]
       
        <code>*doc*.documentPreferences.pageWidth = "8.5in";
        *doc*.documentPreferences.pageHeight = "11in";</code>

* Number of Pages [In]
        
        <code>alert(*pages*.length);</code>

<b>Selections</b>

* Access Selected Objects
        <code>var selection = app.activeDocument.selection;</code>

* Name, Get Type Name of Selected Object
        <code>alert(*objectSelected*.typename)</code>

* Select Item at index x (First Item (last object added to the page) is at index 0)
        <code>var selectNewestObject = app.activeDocument.selection[x];</code>

<b>Swatches</b>

* Access File Swatches [In]
        
        <code>var swatches = app.swatches;</code>

* Loop through Swatches, Display Names [In]
        
        <code>for(var i=0; i<*swatches*.length; i++){
            alert(swatches[i].name); //returns name of swatch at index i
        }</code>

<b>Stroke</b>
    
* Stroke
    
        <code>rect.stroked = true; 
        /*true is on/show stroke
        false is off/no stroke
        */</code>
    
* Stroke Color
    
* Stroke Weight/Width

<b>Text</b>

* Create a Text Frame [In]
        
        <code>var newTextLayer = *doc*.textFrames.add(); //[Il]
        var newTextFrame = *newPage*.textFrames.add(); //[In]</code>

* Location and Size of Text Frame [In]
        
        <code>*newTextFrame*.geometricBounds = [y1,x1,y2,x2]
        /* y1,x1 = y,x coordinates of the top left corner
           y2,x2 = y,x coordinates of the bottom right corner */</code>

* QR Code [In]
       
        <code>*newTextFrame*.createPlainQRCode("url for QR Code here");</code>

* Text (Content) of Text Frame (put text into it) [In]
        
        <code>*newTextFrame*.contents = "Your chosen text here";
        /* Note: The text frame might be really small,
        typically places in the upper, left corner. See "Location
        and Size of Text Frame" above to create text frames of a 
        specific size. */</code>
