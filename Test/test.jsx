var doc = app.documents.add({
    documentPreferences: {
        pageWidth: "6in",
        pageHeight: "11in",
        }
});

    var page = doc.pages.item(0);

    page.marginPreferences.properties = {

        toplpo : 30,

        left: 30,

        right: 30,

        bottom:30

        };
