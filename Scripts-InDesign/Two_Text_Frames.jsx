/*
Help Sources

https://community.adobe.com/t5/indesign-discussions/script-to-change-document-measures-and-other-size-details-to-all-open-documents/m-p/7311598

*/

app.documents.length && app.documents.everyItem().properties = {

    viewPreferences:{
        horizontalMeasurementUnits: +MeasurementUnits.INCHES,
        verticalMeasurementUnits: +MeasurementUnits.INCHES,
        cursorKeyIncrement: '1mm',
        },

    marginPreferences: {
	top: 800,
	left: 80,
	right: 10,
	bottom: 80},

    documentPreferences:
        {
        pageWidth: parseFloat(prompt("Enter document width (in inches):", "")),
        pageHeight: parseFloat(prompt("Enter document height (in inches):", "")),
        documentSlugUniformSize: true,
        slugTopOffset: '.125in',
	top: '3in',
	
        },

    };


var myDoc = app.activeDocument;

var MoVividTeal = myDoc.colors.add();
MoVividTeal.colorValue = [80,5,5,6];
MoVividTeal.name = "Mo Vivid Teal (80 5 5 6)";

var MoTrueBlue = myDoc.colors.add();
MoTrueBlue.colorValue = [85,70,0,0];
MoTrueBlue.name = "Mo True Blue (85 70 0 0)";