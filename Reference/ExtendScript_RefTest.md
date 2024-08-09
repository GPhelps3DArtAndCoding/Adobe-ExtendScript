<b>Below are scripts that have been tested (with program(s) tested in in brackets []:</b>

[Il] = Illustrator
[Id] = InDesign
[Ps] = Photoshop)

<b>The scripts are then placed into the Reference/ExtendScript_Reference.md file.</b>

    Alert [Il][In][Ps] alert("hello there" + docx);

<b>Document(s)</b>

    Access Active Document [Il][In][Ps] var docx = app.activeDocument;

    Create New Document [Il][In][Ps] var doc = app.documents.add();

    Create New Document of Specified Size [Il]
        var doc = app.documents.add(); // Dimensions in points (1 inch = 72 points)
        var width = 8.5 72;
        var height = 10 72;
        //Set the artboard's position (leftX, topY, rightX, bottomY)
        //Note: origin (0,0) is bottom, left
        doc.artboards[0].artboardRect = [0, height, width, 0];
        */

    Create New Document of Specified Size [In]
        var doc = app.documents.add({
            documentPreferences: {
                pageWidth: "8.5in",
                pageHeight: "11in"
            }
        });

Create New Document of Specified Size [PS]
    var doc = app.documents.add(8.5, 11, 300, "File Name", NewDocumentMode.CMYK, DocumentFill.WHITE, 1, BitsPerChannelType.EIGHT);
    doc.rulerUnits = Units.INCHES;

    //More Detailed (300DPI CMYK or 72DP RGB depending on value of res variable)
    var width = 3;
    var height = 11;
    var hiRes = 300;   //high res print
    var lowRes = 72;    //low res screen
    var res = lowRes;

    if (res == hiRes){
        alert("Res is " + res + "dpi for print.");
        var doc = app.documents.add(width, height, res, "File Name", NewDocumentMode.CMYK, DocumentFill.WHITE, 1, BitsPerChannelType.EIGHT);
        doc.rulerUnits = Units.INCHES
    }
    else if (res == lowRes){
        alert("Res is " + res + "dpi for screen.");
        var doc = app.documents.add(width, height, res, "File Name", NewDocumentMode.RGB, DocumentFill.WHITE, 1, BitsPerChannelType.EIGHT);
        doc.rulerUnits = Units.INCHES;
    }

Name Document (used in scripts that create a new document) [In]
          
    docVarName.name = "Summer Ad"; 
        
    //example
    doc.name = "Summer Ad";

    var doc = app.documents.add({
        documentPreferences: {
            pageWidth: "8.5in",
            pageHeight: "11in",
        }
    });
    doc.name = "Summer Ad";

Name Document (used in scripts that create a new document) [Ps]

    docVarName.name = "Summer Ad";        var width = 3; var height = 11;
    //Name is a parameter(input variable) of the .add method. Type is String (text). [PS]
    var doc = app.documents.add(width, height, 300, "File Name", NewDocumentMode.CMYK, DocumentFill.WHITE, 1, BitsPerChannelType.EIGHT);
    doc.rulerUnits = Units.INCHES;




