//Gary Phelps 2024 gpmail1@gmail.com!!!

/*--------------------------------------------------------------------
Input Sources for This File

    *Adobe Indesign Scripting Tutorial: Create a Basic Sccript
    Youtube, NT Productions, https://www.youtube.com/watch?v=r1WWK7pl6so

--------------------------------------------------------------------*/

/*
    Nomenclature
        * MS Microsoft 
        * [Il]: Illustrator
        * [In]: InDesign
        * [Ps]: Photoshop
    
    Variables
        * Anything after "var" is of course a variable declaration.
        * I use *text* to indicate a variable that is used in context other than declaration.
*/
//Basic Commands--------------------
    
    //Alert [In]
        alert("hello there");

//Document--------------------------
 
    //Access Active Document [In]
        var document = app.activeDocument;

    //Dimensions [In]
        var doc = app.documents.add({
            documentPreferences: {
                pageWidth: "8.5in",
                pageHeight: "11in"
            }
        });
    
    //Name Document [In]
        *newDocument*.name = "Summer Ad";
 
    //New Document [In]
        var newDocument = app.documents.add();

//Input
    //File input [In]
        var inputFile = File("File name or path to file here");
        var inputData;
        *inputFile*.open("r");
        *inputData* = *inputFile*.read().toString();
        *inputFile*.close();
        //see https://www.youtube.com/watch?v=r1WWK7pl6so @ 15:47

//Layers------------------------------
    //INFO: layers is an array, starting at top layer at index 0
    
    //Access Layer Stack [In]
        var layers = *document*.layers;

    //Name a Layer [In]
        *myLayer* = "name";

     //New Layer(s) [In]
        var newLayer = layers.add();

    //Show/Get Name of a Layer at index i [In]
        alert(layer[i].name);
    
    //Number of Layers [In]
        alert(layer.length);

//Layout

    //Margins [In]
            var page = doc.pages.item(0);
            var margin = .5;
            //using the 2 variables (page and margin) above...
            page.marginPreferences.properties = { 
                top : margin,
                left: margin,
                right: margin,
                bottom:margin
                };

//Pages-------------------------------
    
    //Access Pages [In]
        var pages = *document*.pages;

    //Dimensions [In]
        *doc*.documentPreferences.pageWidth = "8.5in";
        *doc*.documentPreferences.pageHeight = "11in";

    //New Page(s) [In]
        var newPage = pages.add();

    //Number of Pages [In]
        alert(*pages*.length);

//Swatches-----------------------------

    //Access File Swatches [In]
        var swatches = app.swatches;

    //Loop through Swatches, Display Names [In]
        for(var=i; i<*swatches*.length; i++){
            alert(swatches[i].name); //returns name of swatch at index i
        }

//Text--------------------------------

    //Create a Text Frame [In]
        var newTextFrame = *newPage*.textFrames.add();

    //Location and Size of Text Frame [In]
        *newTextFrame*.geometricBounds = [y1,x1,y2,x2]
        /* y1,x1 = y,x coordinates of the top left corner
           y2,x2 = y,x coordinates of the bottom right corner */

    //QR Code [In]
        *newTextFrame*.createPlainQRCode("url for QR Code here");

    //Text (Content) of Text Frame (put text into it) [In]
        *newTextFrame*.contents = "Your chosen text here";
        /* Note: The text frame might be really small,
        typically places in the upper, left corner. See "Location
        and Size of Text Frame" above to create text frames of a 
        specific size. */
