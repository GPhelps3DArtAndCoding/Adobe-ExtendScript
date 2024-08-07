//Global Variables
var size = doc.documentPreferences;
var marginPrefs = doc.pages[0].marginPreferences;

//Set the page size
size.pageWidth = "8.5 in";
size.pageHeight = "11in";

var marginDefault = ".5 in";
var topMargin = marginDefault;
var leftMargin = marginDefault;
var rightMargin = marginDefault;
var bottomMargin = marginDefault;

//Set the margins
marginPrefs.properties = {
  top: topMargin,     bottom: bottomMargin,
  left: leftMargin,   right: rightMargin
};