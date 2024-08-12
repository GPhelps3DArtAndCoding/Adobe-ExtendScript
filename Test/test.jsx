//I write and test scripts here.


var docVarName = app.documents.add();

function createText(text){
    var textFrame = docVarName.textFrames.add();
    textFrame.name = "Test Text Frame.";
        
    textFrame.contents = text;
    var textRange = textFrame.textRange;
    textRange.size = 36;
    textRange.justification = Justification.LEFT;
    textFrame.position = [docVarName.width*.5-textFrame.width*.5, docVarName.height*.5+textFrame.height*.5];
}

createText("Howdy noob!");





