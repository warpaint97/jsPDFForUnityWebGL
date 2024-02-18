var jsPDFLib = {
    loadLibrary: function() {
        var script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js'; // Update with the correct path
        script.onload = function() {
            console.log('jsPDF library loaded.');
        };
        document.head.appendChild(script);
    },

    generatePDF: function(header1Ptr, paragraph1Ptr, header2Ptr, paragraph2Ptr) {
        // define helper functions
        function toHeader(doc) {
            // Set font styles for headers
            doc.setFont("helvetica", "bold");
            doc.setFontSize(16);
            doc.setTextColor(0, 0, 255); // Blue color
        }

        function toParagraph(doc) {
            // Set font styles for paragraphs
            doc.setFont("times", "normal");
            doc.setFontSize(12);
            doc.setTextColor(0, 0, 0); // Black color
        }

        function addText(doc, content, y0) {
            var y = y0;
            var border = 10;

            // Add paragraphs
            var textLines = doc.splitTextToSize(content, doc.internal.pageSize.width - border*2);
            for (var i = 0; i < textLines.length; i++) {
                doc.text(textLines[i], border, y);
                y += 10; // Increase y-coordinate for the next element
            }

            return y;
        }

        function addContent(doc, header1, paragraph1, header2, paragraph2) {
            var yPos = 10;

            toHeader(doc);
            yPos = addText(doc, header1, yPos);

            toParagraph(doc);
            yPos = addText(doc, paragraph1, yPos);

            toHeader(doc);
            yPos = addText(doc, header2, yPos);

            toParagraph(doc);
            yPos = addText(doc, paragraph2, yPos);
        }

        // main execution
        const header1 = UTF8ToString(header1Ptr);
        const paragraph1 = UTF8ToString(paragraph1Ptr);
        const header2 = UTF8ToString(header2Ptr);
        const paragraph2 = UTF8ToString(paragraph2Ptr);

        var doc = new jspdf.jsPDF();
        addContent(doc, header1, paragraph1, header2, paragraph2);
        doc.save('test.pdf');
    }
}

mergeInto(LibraryManager.library, jsPDFLib);
