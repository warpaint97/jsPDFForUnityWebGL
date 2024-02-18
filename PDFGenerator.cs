using System.Collections;
using System.Collections.Generic;
using System.Runtime.InteropServices;
using UnityEngine;

public class PDFGenerator : MonoBehaviour
{
    [DllImport("__Internal")]
    private static extern void loadLibrary();

    [DllImport("__Internal")]
    private static extern void generatePDF();

    public void Awake()
    {
        loadLibrary();
    }

    public void GeneratePDF()
    {
        generatePDF();
    }
}
