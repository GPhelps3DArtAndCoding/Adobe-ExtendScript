//I write and test scripts here.


var doc = app.documents.add();

function background(){
    var background = doc.pathItems.add();
    background.filled = true;
    var bgFillColor = new CMYKColor();
    bgFillColor.cyan = 60;
    bgFillColor.magenta = 0;
    bgFillColor.yellow = 20;
    bgFillColor.black = 0;
    background.fillColor = bgFillColor;
    background.setEntirePath([[0,0],[doc.width,0],[doc.width,doc.height],[0,doc.height]]);
    background.stroked = false;
}
background();





