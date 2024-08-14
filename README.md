<b>Moved to UXP</b>
I am moving to Adobe UXP my Adobe coding learning and projects. Feel free to visit <a href="https://github.com/GaryTeachesCoding/Adobe-UXP-Scripting">my UXP repository</a>. I will continue to update this section when I need to use ExtendScript, but it is not my primary focus any more. 

<b>Language Used:</b> <a href="https://www.adobe.com/home">Adobe's</a> <a href="https://exchange.adobe.com/apps/cc/108380/extendscript-developer-tools">ExtendScript</a>, an extension of <a href="https://www.w3schools.com/js/">JavaScript</a>.
Other options for scripting for Adobe Apps include <a href="https://learn.microsoft.com/en-us/dotnet/visual-basic/">Visual Basic</a> (PC only) and <a href="https://developer.apple.com/library/archive/documentation/AppleScript/Conceptual/AppleScriptLangGuide/introduction/ASLR_intro.html">Apple Script</a> (Mac only). I chose ExtendScript as it is cross-platform.

<b>IDE:</b> <a href="https://code.visualstudio.com/">MS Visual Studio Code (aka VS Code)</a>

<b>VS Code Extensions Used</b>
* Codeium: AI Coding Autocomplete and Chat for Python, JavaScript, Typescript, Java, Go, and More
* ESLint
* ExtendScript
* ExtendScript Debugger (see Note 1 below)
* ExtendScript Development Pack
* Types for Adobe

<b>Other Resources</b>
* CEP-Resources (<a href="https://github.com/Zuldaris/CEP-Resources">forked repository</a>): Adobe CEP Resources. 
  * Photoshop Scripting: Documentation/Product specific Documentation/Photoshop Scripting.
  * CEP for InDesign Developers (PDF): Documentation/Product specific Documentation/
  * CEP 9 Extensions Cookbook Bridge (PDF): Documentation/Product specific Documentation/
* ExtendScript Resources
  * <a href="https://www.youtube.com/@wc7">William Campbell, YouTube</a>: William has a large number of videos that expand into other areas such as system administration, and design and prepress. I watched several of his ExtendScript videos and from my experience, he does an excellent job as an instructor. The pacing is not rushed, and he explains things well even for a beginner like me!

<b>Future Plans</b>
* JSXBIN (used to write plug-ins for Adobe software)
  * <a href="https://marketplace.visualstudio.com/items?itemName=motionland.texttojsxbin">TextToJSXBIN plug-in for VS Code</b>

<b>Notes</b>
1.  ExtendScript Debugger only work on Macs if you run VS Code in Rosetta. <a href="https://support.apple.com/en-us/102527#:~:text=Rosetta%20is%20not%20an%20app,it%20like%20you%20normally%20would.">This webpage</a> explains how to do that. On that page the
    instructions under "Does your app need Rosetta?" is what worked for me. VS Code will run slower though.
    Here is how to <a href="https://extendscript.docsforadobe.dev/vscode-debugger/getting-started-with-vscode-debugger.html">set up and run the the ExtendScript Debugger extension</a>. It was all I needed to get everything to work, with a
    bit of trial and error.