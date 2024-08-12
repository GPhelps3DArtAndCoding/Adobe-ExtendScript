//Global Varibles
  var doc = app.documents.add(); //Create a new document
  //Size Variables
    var halfInch = ".5 in";
    var size = doc.documentPreferences;
  //Margins
    var margins= doc.pages[0].marginPreferences;
//-----------------------------------------------------------

  function createLetter(){
    //Set the page size
      size.pageWidth = "8.5 in"; size.pageHeight = "11in";
    //Set the margins
    margins.properties = {
        top: halfInch,bottom: halfInch,left: halfInch,right: halfInch
      }
    return doc;
  }

  function create8by10(){
    //Set the page size
      size.pageWidth = "8 in"; size.pageHeight = "10in";
    //Set the margins
    margins.properties = {
        top: halfInch,bottom: halfInch,left: halfInch,right: halfInch
      }
    return doc;
  }