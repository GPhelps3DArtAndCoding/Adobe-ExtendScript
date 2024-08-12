<b>Below are scripts that have been tested (with program(s) tested in in brackets []:</b>

* [IL] = Illustrator
* [Id] = InDesign
* [PS] = Photoshop)

<b>The scripts are then placed into the Reference/ExtendScript_Reference.md file.</b>

* Alerts
  
        Alert [IL][IN][PS] alert("hello there" + docx);

<b>Document(s)</b>

  * Access Active Document [IL][IN][PS]
  
        var docx = app.activeDocument;

* Create New Document [IL][IN][PS]
  
        var doc = app.documents.add();

* Create New Document of Specified Size [IL]
  
        //Method 1 
        /* The *72 multiplier for hight and width is because Illustrator often defaults to Points for Units, General.
        If Illustrator defaults to inches (I've yet to find out how to do this), then remove the *72 from each var below. */)
        var width = 8.5*72;
        var height = 11*72;
        var doc = app.documents.add(DocumentColorSpace.RGB, width, height, 1);


        //Method 2
        var doc = app.documents.add(); // Dimensions in points (1 inch = 72 points)
        var width = 8.5 * 72;
        var height = 10 * 72;
        //Set the artboard's position (leftX, topY, rightX, bottomY)
        //Note: origin (0,0) is bottom, left
        doc.artboards[0].artboardRect = [0, height, width, 0];
        */

* Create New Document of Specified Size [IN]
  
        var doc = app.documents.add({
            documentPreferences: {
                pageWidth: "8.5in",
                pageHeight: "11in"
            }
        });

* Create New Document of Specified Size [PS]
  
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

* Name Document (used in scripts that create a new document) [IL]

        var width = 8.5*72;
        var height = 11*72;
        var doc = app.documents.add(DocumentColorSpace.RGB, width, height, 1);
        //The file must be saved to give it a name
        doc.saveAs(File("pathToSaveLocation/fileName.ai"));

* Name Document (used in scripts that create a new document) [IN]
          
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

* Name Document (used in scripts that create a new document) [PS]

        docVarName.name = "Summer Ad";        var width = 3; var height = 11;
        //Name is a parameter(input variable) of the .add method. Type is String (text). [PS]
        var doc = app.documents.add(width, height, 300, "File Name", NewDocumentMode.CMYK, DocumentFill.WHITE, 1, BitsPerChannelType.EIGHT);
        doc.rulerUnits = Units.INCHES;




