Gary Phelps 2024 gpmail1@gmail.com

<b>Input Sources for This File</b><br>
    * <a href="https://www.youtube.com/watch?v=r1WWK7pl6so">Adobe InDesign Scripting Tutorial: Create a Basic Script</a> - Youtube, NT Productions 

--------------------------------------------------------------------

<b>Nomenclature</b>
    * MS Microsoft 
    * [Il]: Illustrator
    * [In]: InDesign
    * [Ps]: Photoshop

<b>Variables</b>
    * Anything after "var" is of course a variable declaration.
    * I use *text* to indicate a variable that is used in context other than declaration.

<b>Basic Commands<b>

  * Alert [In]

      alert("hello there");

<b>Document</b>
 
  * Access Active Document</b> [In]
        
      var document = app.activeDocument;

  * Dimensions [In]
          
      var doc = app.documents.add({
          documentPreferences: {
              pageWidth: "8.5in",
              pageHeight: "11in"
          }
      });
      
  * Name Document [In]
          
      *newDocument*.name = "Summer Ad";
   
  * New Document [In]
          
      var newDocument = app.documents.add();

<b>Input</b>

  * File input [In]
          
      var inputFile = File("File name or path to file here");
      var inputData;
      *inputFile*.open("r");
      *inputData* = *inputFile*.read().toString();
      *inputFile*.close();
      //see https://www.youtube.com/watch?v=r1WWK7pl6so @ 15:47

<b>Layers</b>
INFO: Layers are a collection (like an array), where the top layer is index 0.
    
  * Access Layer Stack [In]
          
      var layers = *document*.layers;

  * Create New Layer(s) [In]

      var newLayer = *doc*.layers.add();
      var newLayer = *doc*.layers.add({name: "below top layer"});

  * Create New Layer(s) inside a Layer, at index "i" [Il]

      var subLayer =*doc*.layers[i].layers.add();
      subLayer.name = "layer" + i;} //optional

      for(var addLayers = 0; addLayers<10; addLayers++){
      var newLayer = *doc*.layers[0].layers.add();
      newLayer.name = "LayerName" + (addLayers+1);
      //all layers will have the LayerName
      }

  * Find a Layer
          
      //Where "x" is the name of the layer you are looking for...
      var layer = doc.layers.getByName("x"); //[Il][Ps]
      var layer = doc.layers.itemByName("x"); //[In]
      alert(layer.name); //[Il][In][Ps] optional but provides textual ouput

    * Lock/Unlock Layer [Il][In]
          
        doc.layers[0].locked = true; //locks top layer
    
  * Name a Layer [In]
        
        //name it when creating it
        var newLayer = doc.layers.add({name: "below top layer"});
        //or leave out the "{name:"..."} above and add...
        *newLayer*.name = "name";

  * New Layer(s) (See Create New Layer(s) above)

  * Number of Layers [In]
       
     alert(layer.length);

    //Show/Get Name of a Layer
        
        alert(layer[i].name); //at index i [In]
        alert(*layer*.name); //of specific layer [Il][In][Ps]
    
    //Visibility of Layer [Il][In]
        
        doc.layers[0].visible = false; //turns off top layer visibility

<b>Layout</b>

  * Margins [In]
           
        var page = doc.pages.item(0);
        var margin = .5;
        //using the 2 variables (page and margin) above...
        page.marginPreferences.properties = { 
            top : margin,
            left: margin,
            right: margin,
            bottom:margin
            };

<b>Pages</b>
    
  * Access Pages [In]
       
        var pages = *document*.pages;

  * Dimensions [In]
       
        *doc*.documentPreferences.pageWidth = "8.5in";
        *doc*.documentPreferences.pageHeight = "11in";

  * New Page(s) [In]
        
        var newPage = pages.add();

  * Number of Pages [In]
        
        alert(*pages*.length);

<b>Swatches</b>

  * Access File Swatches [In]
        
        var swatches = app.swatches;

  * Loop through Swatches, Display Names [In]
        
        for(var i=0; i<*swatches*.length; i++){
            alert(swatches[i].name); //returns name of swatch at index i
        }

<b>Text</b>

  * Create a Text Frame [In]
        
        var newTextLayer = *doc*.textFrames.add(); //[Il]
        var newTextFrame = *newPage*.textFrames.add(); //[In]

  * Location and Size of Text Frame [In]
        
        *newTextFrame*.geometricBounds = [y1,x1,y2,x2]
        /* y1,x1 = y,x coordinates of the top left corner
           y2,x2 = y,x coordinates of the bottom right corner */

  * QR Code [In]
       
        *newTextFrame*.createPlainQRCode("url for QR Code here");

  * Text (Content) of Text Frame (put text into it) [In]
        
        *newTextFrame*.contents = "Your chosen text here";
        /* Note: The text frame might be really small,
        typically places in the upper, left corner. See "Location
        and Size of Text Frame" above to create text frames of a 
        specific size. */
