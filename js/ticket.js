document.addEventListener('DOMContentLoaded', function() {
    const image = document.getElementById('image');
    const textOverlay = document.getElementById('text-overlay');
    const submitButton = document.getElementById('submit-button');

    submitButton.addEventListener('click', function() {
        recognizeText();
    });

    function recognizeText() {
        image.addEventListener('load', function() {
            Tesseract.recognize(
                image.src,
                'eng', // Language (you can specify other languages)
                { logger: m => console.log(m) } // Optional logger
            ).then(({ data: { text } }) => {
                overlayTextOnImage(text);
            });
        });
    }

    function overlayTextOnImage(overlayText) {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');

        canvas.width = image.width;
        canvas.height = image.height;

        // Draw the image on the canvas
        context.drawImage(image, 0, 0, canvas.width, canvas.height);

        // Set font properties
        const fontSize = 20; // Adjust font size as needed
        const fontFamily = 'Arial'; // Adjust font family as needed
        context.font = `${fontSize}px ${fontFamily}`;
        context.fillStyle = 'white'; // Text color
        context.textAlign = 'center'; // Text alignment

        // Split text into lines
        const lines = overlayText.split('\n');
        const lineHeight = fontSize * 1.2; // Adjust line height as needed

        // Position text on the canvas
        let y = canvas.height - (lines.length * lineHeight) - 20; // Adjust vertical position as needed
        lines.forEach(line => {
            context.fillText(line, canvas.width / 2, y);
            y += lineHeight;
        });

        // Replace the original image with the canvas containing the overlay text
        image.parentNode.replaceChild(canvas, image);
    }
});
