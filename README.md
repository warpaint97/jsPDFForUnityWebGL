# jsPDF for Unity WebGL

This repository contains a Unity package `jsPDFUnity.unitypackage` that includes both the files `jsPDFBridge.jslib` and `PDFGenerator.cs` that will be imported into your Unity project that targets the WebGL platform.

You can modify the `jsPDFBridge.jslib` `generatePDF()` function to create a customized PDF document. Additionally, you can modify the generatePDF function to take a string argument and convert from a Pointer to a JavaScript string using `UTF8ToString()` in the `.jslib` file.

The `PDFGenerator.cs` can be easily replaced. All it does is access the functions inside the `.jslib` file and exposing them to C# using `DLLImport("__Internal")`. The `GeneratePDF()` method inside the `PDFGenerator.cs` file can be assigned to a Button click event in the Unity scene for example.

For more information visit the [unity's documentation](https://docs.unity3d.com/Manual/webgl-interactingwithbrowserscripting.html).
