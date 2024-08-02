//Tutorial Source: https://www.youtube.com/watch?v=IMzRTPr19Bs

(function(){

	//SCRIPT VARIABLES.
	var abort;
	var title = "Adobe Script Tutorial 2";

	//REUSABLE UI VARIABLES
	var g; //group
	var p; //panel
	var w; //window

	//PERMANENT UI VARIABLES
	var btnOk; var btncancel;
	var btnFolderInput; var txtFolderInput; //input images variables
	var btnFolderOutput; var txtFolderOutput; //output images variables

	//SETUP-----------------------------------------------------------

	//CREATE INTERFACE
	w = new Window("dialog", title)
	w.alignChildren = "fill"; //set all child elements of a panel to width of the widest one;
	//Selecte a folder for input images.
	p = w.add("panel", undefined, "Input");//adds a new panel
	g = p.add("group");//creates an area where only the grouped items show up in a row
	btnFolderInput = g.add("button", undefined, "Folder..."); // type(always a string), size, label(txt displayed) 
	txtFolderInput = g.add("statictext", undefined, "", {truncate: "middle"});
	txtFolderInput.preferredSize = [200, 10]; // [width, height] in pixels
	//Select a folder for output images.
	p = w.add("panel", undefined, "Output");//adds a new panel
	g = p.add("group");//creates an area where only the grouped items show up in a row
	btnFolderOutput = g.add("button", undefined, "Folder..."); // type(always a string), size, label(txt displayed) 
	txtFolderOutput = g.add("statictext", undefined, "", {truncate: "middle"});
	txtFolderOutput.preferredSize = [200, 10]; // [width, height] in pixels

	g = w.add("group");
	g = w.add("group");//creates a new row of items
	g.alignment = "center";
	btnOK = g.add("button", undefined, "OK");
	btnCancel = g.add("button", undefined, "Cancel");

	//UI EVENT HANDLERS------------------------------------------------
	btnFolderInput.onClick = function(){
		var f = Folder.selectDialog();
		if(f){
			txtFolderInput.text = f.fullName;
		}
	};
	btnFolderOutput.onClick = function(){
		var f = Folder.selectDialog();
		if(f){
			txtFolderOutput.text = f.fullName;
		}
	};
	btnOK.onClick = function(){
		if(!txtFolderInput.text){
			alert("Select input folder", "", false);
			return;
		}
		if(!txtFolderOutput.text){
			alert("Select output folder", "", false);
			return;
		}
		w.close(1);
	};
	btnCancel.onClick = function(){
		w.close(0);
	};

	//SHOW WINDOW------------------------------------------------------
	if (w.show() == 1){
		try{
			process();
			alert(abort || "Done", title, false);
		}
		catch(e){
			alert("An error has occurred.\nLine" + e.line + ": " + e.message, title, true);
		}		
	};

	function process(){
		var files;
		var i;
		//Ignore message when opening documents.
		app.displayDialogs = DialogModes.NO;
		progress("Reading folder...");
		$.sleep(2000) // gives time before progresbar shows up if processing a large number of files  
		//Get Photosop files in folder.
		files = new Folder(txtFolderInput.text).getFiles("*"); //Look for Phothsop files in selected folder.
		
		//If no Photoshop files are found, inform the user.
		if(!files.length){
			abort = "No Photoshop files were found in the selected folder";
			return;
		}
		progress.set(files.length);
		try{
			//Loop through the files array.
			for(i=0; i<files.length; i++){
				processFile(files[i])	
			}
		}
		finally{
			progress.close();
		}
	}

	//To create a similar script to export another file format, change the processFile function below.
	function processFile(file){
		var doc;
		var fileJpg;
		var saveOptions;
		try{
			doc = app.open(file);
			fileJpg = new File(txtFolderOutput.text + "/" + file.name.replace(/\.[^\.]*$/, "") + ".jpg");
			progress.message(File.decode(file.name));
			//Do somethign with image here.
			saveOptions = new JPEGSaveOptions();
			saveOptions.embedColorProfile = true;
			saveOptions.formatOptions = FormatOptions.STANDARDBASELINE;
			saveOptions.quality = 12;
			doc.saveAs(fileJpg, saveOptions);
			progress.increment();
			}
		finally{
			if(doc){
				doc.close(SaveOptions.DONOTSAVECHANGES);
			}
		}
	}

	function progress(message){
		var b;
		var t;
		var w;
		var progWidth = 600; 
		w = new Window("palette", "Progress", undefined, {closeButton: false}); //window type is palette
		t = w.add("statictext", undefined, message);
		t.preferredSize = [progWidth, -1]; //-1 just means ignore height (set it to default)
		b = w.add("progressbar");
		b.preferredSize = [progWidth, -1];
		progress.close = function(){
			w.close();
		};
		progress.increment = function(){
			b.value++;
		};
		progress.message = function(message){
			t.text = message;
			app.refresh();
		};
		progress.set = function(steps){
			b.value = 0;
			b.minvalue = 0;
			b.maxvalue = steps;
		};
		w.show();
		app.refresh();
	}
})();