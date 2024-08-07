//Create a letter sized document with 1/2 inch margins
function createLetterDoc(){

  //Create a new document
  var doc = app.documents.add();

  //Variables
  var size = doc.documentPreferences;
  var margins= doc.pages[0].marginPreferences;
  var halfInch = ".5 in";
  
  //--------------------------------------------------

  //Set the page size
  size.pageWidth = "8.5 in";
  size.pageHeight = "11 in";

  //Set the margins
  margins.properties = {
    top: halfInch,
    bottom: halfInch,
    left: halfInch,
    right: halfInch
  }
  return doc;
}