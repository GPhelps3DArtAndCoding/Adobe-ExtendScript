Language Used: <a href="https://www.adobe.com/home">Adobe's</a> <a href="https://exchange.adobe.com/apps/cc/108380/extendscript-developer-tools">ExtendScript</a>, an extension of <a href="https://www.w3schools.com/js/">JavaScript</a>.
Other options for scripting for Adobe Apps include <a href="https://learn.microsoft.com/en-us/dotnet/visual-basic/">Visual Basic</a> (PC only) and <a href="https://developer.apple.com/library/archive/documentation/AppleScript/Conceptual/AppleScriptLangGuide/introduction/ASLR_intro.html">Apple Script</a> (Mac only). I chose ExtendScript as it is cross-platform.

IDE: <a href="https://code.visualstudio.com/">MS Visual Studio Code (aka VS Code)</a>

VS CODE EXTENSIONS USED
* Codeium: AI Coding Autocomplete and Chat for Python, JavaScript, Typescript, Java, Go, and More
* ESLint
* ExtendScript
* ExtendScript Debugger (see Note 1 below)
* ExtendScript Development Pack
* Types for Adobe


Notes
1.  ExtendScript Debugger only work on Macs if you run VS Code in Rosetta. <a href="https://support.apple.com/en-us/102527#:~:text=Rosetta%20is%20not%20an%20app,it%20like%20you%20normally%20would.">This webpage</a> explains how to do that. On that page the
    instructions under "Does your app need Rosetta?" is what worked for me. VS Code will run slower though.
    Here is how to <a href="https://extendscript.docsforadobe.dev/vscode-debugger/getting-started-with-vscode-debugger.html">set up and run the the ExtendScript Debugger extension</a>. It was all I needed to get everything to work, with a
    bit of trial and error.