/*

Tutorial Sources
Tut1 Script Structure and Basic Interface: https://www.youtube.com/watch?v=XjmWX_qfLSU
Tut2 Drop Down List and Export PDFs: https://www.youtube.com/watch?v=Mkss2eZxsUo
Tut3 Add Progress Bar (for Tut2's script)https://www.youtube.com/watch?v=PSLEM-UO16Y&list=PL5Ib-T2waUE5hdJLmHahWL4JwBe84hrJr&index=3
Tut4 Option Validation and Catching Errors (validate our selected options before the script runs)https://www.youtube.com/watch?v=SWcpWG8FBXg

*/

(function(){

	//VARIABLES-------------------------------------------------------
	//SCRIPT VARIABLES
	var abort;
	var pdfPreset;
	var pdfPresetNames;
	var title = "Adobe Script Tutorial 2";

	//REUSABLE UI VARIABLES
	var g; //group
	var p; //panel
	var w; //window

	//PERMANENT UI VARIABLES
	var listPdfPresets;
	var btnOk; var btncancel;
	var btnFolderInput; var txtFolderInput;

	//SETUP-----------------------------------------------------------

	//LOAD APPLICATION PDF PRESETS
	pdfPresetNames = app.pdfExportPresets.everyItem().name;
	pdfPresetNames.sort();

	//CREATE INTERFACE
	w = new Window("dialog", title)
	w.alignChildren = "fill"; //set all child elements of a panel to width of the widest one;
	p = w.add("panel");//adds a new panel
	g = p.add("group");//creates an area where only the grouped items show up in a row
	btnFolderInput = g.add("button", undefined, "Folder..."); // type(always a string), size, label(txt displayed) 
	txtFolderInput = g.add("statictext", undefined, "", {truncate: "middle"});

	txtFolderInput.preferredSize = [200, 10]; // [width, height] in pixels
	p = w.add("panel", undefined, "Options");
	g = p.add("group");
	g.alignment = "left";
	g.add("statictext", undefined, "PDF presets:");
	listPdfPresets = g.add("dropdownlist", undefined, pdfPresetNames);
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

	btnOK.onClick = function(){
		if(!txtFolderInput.text){
			alert("Select a folder to process", "", false);
			return;
		}
		if(!listPdfPresets.selection)//test if a PDF preset is selected
		{
			alert("Select a PDF preset.", "", false);
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
		//Get PDF preset to use.
		pdfPreset = app.pdfExportPresets.item(listPdfPresets.selection.text);
		//Ignore message when opening documents.
		app.scriptPreferences.userInteractionLevel = UserInteractionLevels.NEVER_INTERACT;
		//Set export preferences to all pages.
		app.pdfExportPreferences.pageRange = PageRange.ALL_PAGES;
		progress("Reading folder...");
		$.sleep(2000) // gives time before progresbar shows up if processing a large number of files  
		//Get InDesign files in folder.
		files = new Folder(txtFolderInput.text).getFiles("*.indd"); //Look for InDesign files in selected folder.
		
		//If no InDesign files are found, inform the user.
		if(!files.length){
			abort = "No InDesign files were found in the selected folder";
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

	//If we want to create a similar script to export another file format,
	//we only need to change the processFile function below.
	function processFile(file){
		try{
			var doc;
			var filePdf;
			doc = app.open(file);
			filePdf = new File(file.fullName.replace(/\.indd$/i, "") + ".pdf");
			progress.message(File.decode(filePdf.name));
			
			//fake error for testing
			//throw new Error ("Fake Error");
			
			doc.exportFile(ExportFormat.PDF_TYPE, filePdf, false, pdfPreset);
			doc.close(SaveOptions.NO);
			progress.increment();
			}
		finally{
			if(doc){
				doc.close(SaveOptions.NO);
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
			w.update();
		};
		progress.set = function(steps){
			b.value = 0;
			b.minvalue = 0;
			b.maxvalue = steps;
		};
		w.show();
		w.update();
	}
})();