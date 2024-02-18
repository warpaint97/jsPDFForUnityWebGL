mergeInto(LibraryManager.library, {
    loadLibrary: function() {
        var script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js'; // Update with the correct path
        script.onload = function() {
            console.log('jsPDF library loaded.');
        };
        document.head.appendChild(script);
    },

    generatePDF: function() {
        var doc = new jspdf.jsPDF();
        doc.text('Hello, world!', 10, 10);
        doc.save('test.pdf');
    }
});
