//I write and test scripts here.


var docVarName = app.documents.add();

function background(){
                var background = docVarName.pathItems.add(); //Create path for background rectangle.
                background.filled = true; //Set it to filled with color;
                
                //create new background color
                var bgFillColor = new CMYKColor();
                bgFillColor.cyan = 60;          bgFillColor.magenta = 0;
                bgFillColor.yellow = 20;        bgFillColor.black = 0;
                //Set background rectangle fill to the new background color.
                background.fillColor = bgFillColor;
                
                //create rectangle
                var bgWidth = docVarName.width; //Set background width to document width.
                var bgHeight = docVarName.height; //Set background height to document height.
                background.setEntirePath([[0,0],[bgWidth,0],[bgWidth,bgHeight],[0,bgHeight]]);
                
                background.stroked = false; //set stroke to 0
        }

background();





