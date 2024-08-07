/*
QUERY
    Adobe ExtendScript to create new InDesign CC file with 
    width of 8.5" height of 11" page set to page 1 with 
    page.marginpreferences.properties set to
    top 2" left .5" right .5" bottom .5"
*/

//RESULTS
//Both of the codes below worked when I tested them.

//Website-----------------------------------------------------------
//Create a new document and set page size
var doc = app.documents.add({
    documentPreferences: {
        pageWidth: "8.5in",
        pageHeight: "11in"
    }
});
//Set the margins
var page = doc.pages.item(0);
page.marginPreferences.properties = {
    top: "2in",
    left: "0.5in",
    right: "0.5in",
    bottom: "0.5in"
};


//VS Code Extension--------------------------------------------------
//Create a new document
var doc = app.documents.add();

//Set the page size
doc.documentPreferences.pageWidth = "8.5 in";
doc.documentPreferences.pageHeight = "11 in";

//Set the margins I prefer this way over the 
//website's method as it sets up more on the first line
var marginPrefs = doc.pages[0].marginPreferences;
marginPrefs.properties = {
  top: "2 in",
  left: "0.5 in",
  right: "0.5 in",
  bottom: "0.5 in"
};

//My Way --------------------------------------------------
//Create a new document
var doc = app.documents.add();

//Global Variables
var pageWidth = doc.documentPreferences.pageWidth;
var pageHeight = doc.documentPreferences.pageHeight
var marginPrefs = doc.pages[0].marginPreferences;
var marginDefault = ".5 in";
var topMargin = marginDefault*3;
var leftMargin = marginDefault;
var rightMargin = marginDefault;
var bottomMargin = marginDefault;

//Set the page size
pageWidth = "8.5 in";
pageHeight = "11 in";

//Set the margins
marginPrefs.properties = {
  top: topMargin,
  left: leftMargin,
  right: rightMargin,
  bottom: bottomMargin
};
