//I write and test scripts here.


var doc = app.documents.add({
    documentPreferences: {
        pageWidth: "8.5in",
        pageHeight: "11in"
    }
});


var inputFile = File("File name or path to file here");
var inputData;
inputFile.open("r");
inputData = inputFile.read().toString();
inputFile.close();






