document.addEventListener('DOMContentLoaded', function () {
    const generateBtn = document.getElementById('generateBtn');
    const fontSelect = document.getElementById('fontSelect');
    const fontColor = document.getElementById('fontColor');
    const nameFontSize = document.getElementById('nameFontSize');
    const phoneFontSize = document.getElementById('phoneFontSize');
    const emailFontSize = document.getElementById('emailFontSize');
    const boldCheckbox = document.getElementById('boldCheckbox');
    const italicCheckbox = document.getElementById('italicCheckbox');
    const underlineCheckbox = document.getElementById('underlineCheckbox');
    const blurCheckbox = document.getElementById('blurCheckbox');
    const nameDisplay = document.getElementById('nameDisplay');
    const phoneDisplay = document.getElementById('phoneDisplay');
    const emailDisplay = document.getElementById('emailDisplay');
    const fontPreview = document.querySelector('.font-preview');
    const downloadBtn = document.getElementById('downloadBtn');

    function updateFontPreview() {
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;

        const font = fontSelect.value;
        const nameSize = nameFontSize.value + "px";
        const phoneSize = phoneFontSize.value + "px";
        const emailSize = emailFontSize.value + "px";

        fontPreview.style.color = 'white';  
        fontPreview.style.fontFamily = font;
        fontPreview.style.fontSize = nameSize; 
        fontPreview.textContent = `${name} | ${phone} | ${email}`;
    }

    // Generate button event listener
    generateBtn.addEventListener('click', function () {
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;

        const font = fontSelect.value;
        const color = fontColor.value;
        const nameSize = nameFontSize.value + "px";
        const phoneSize = phoneFontSize.value + "px";
        const emailSize = emailFontSize.value + "px";

        const isBold = boldCheckbox.checked;
        const isItalic = italicCheckbox.checked;
        const isUnderline = underlineCheckbox.checked;
        const isBlur = blurCheckbox.checked;

        nameDisplay.textContent = name;
        phoneDisplay.textContent = phone;
        emailDisplay.textContent = email;

        [nameDisplay, phoneDisplay, emailDisplay].forEach(el => {
            el.style.fontFamily = font;
            el.style.color = color;
        });

        nameDisplay.style.fontSize = nameSize;
        phoneDisplay.style.fontSize = phoneSize;
        emailDisplay.style.fontSize = emailSize;

        [nameDisplay, phoneDisplay, emailDisplay].forEach(el => {
            el.classList.toggle('bold', isBold);
            el.classList.toggle('italic', isItalic);
            el.classList.toggle('underline', isUnderline);
            el.classList.toggle('blur', isBlur);
        });

        updateFontPreview();
        saveSettings();  // Save the current settings to localStorage
    });

    function saveSettings() {
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const font = fontSelect.value;
        const color = fontColor.value;
        const nameFontSizeValue = nameFontSize.value;
        const phoneFontSizeValue = phoneFontSize.value;
        const emailFontSizeValue = emailFontSize.value;
        const bold = boldCheckbox.checked;
        const italic = italicCheckbox.checked;
        const underline = underlineCheckbox.checked;
        const blur = blurCheckbox.checked;

        localStorage.setItem('name', name);
        localStorage.setItem('phone', phone);
        localStorage.setItem('email', email);
        localStorage.setItem('font', font);
        localStorage.setItem('color', color);
        localStorage.setItem('nameFontSize', nameFontSizeValue);
        localStorage.setItem('phoneFontSize', phoneFontSizeValue);
        localStorage.setItem('emailFontSize', emailFontSizeValue);
        localStorage.setItem('bold', bold);
        localStorage.setItem('italic', italic);
        localStorage.setItem('underline', underline);
        localStorage.setItem('blur', blur);
    }

    function loadSavedSettings() {
        const savedName = localStorage.getItem('name');
        const savedPhone = localStorage.getItem('phone');
        const savedEmail = localStorage.getItem('email');
        const savedFont = localStorage.getItem('font');
        const savedColor = localStorage.getItem('color');
        const savedNameFontSize = localStorage.getItem('nameFontSize');
        const savedPhoneFontSize = localStorage.getItem('phoneFontSize');
        const savedEmailFontSize = localStorage.getItem('emailFontSize');
        const savedBold = localStorage.getItem('bold') === 'true';
        const savedItalic = localStorage.getItem('italic') === 'true';
        const savedUnderline = localStorage.getItem('underline') === 'true';
        const savedBlur = localStorage.getItem('blur') === 'true';

        if (savedName) document.getElementById('name').value = savedName;
        if (savedPhone) document.getElementById('phone').value = savedPhone;
        if (savedEmail) document.getElementById('email').value = savedEmail;
        if (savedFont) fontSelect.value = savedFont;
        if (savedColor) fontColor.value = savedColor;
        if (savedNameFontSize) nameFontSize.value = savedNameFontSize;
        if (savedPhoneFontSize) phoneFontSize.value = savedPhoneFontSize;
        if (savedEmailFontSize) emailFontSize.value = savedEmailFontSize;

        if (savedBold) boldCheckbox.checked = true;
        if (savedItalic) italicCheckbox.checked = true;
        if (savedUnderline) underlineCheckbox.checked = true;
        if (savedBlur) blurCheckbox.checked = true;

        // Apply saved settings to the page
        generateBtn.click();  // Trigger the generation of the card
    }

    function makeDraggableAndRotatable(element, storageKey) {
        let isDragging = false;
        let startX, startY, initialX, initialY;
        let rotation = 0;

        const storedPosition = JSON.parse(localStorage.getItem(storageKey)) || { left: '0px', top: '0px' };
        element.style.left = storedPosition.left;
        element.style.top = storedPosition.top;

        element.addEventListener('mousedown', (e) => {
            isDragging = true;
            startX = e.clientX;
            startY = e.clientY;
            initialX = element.offsetLeft;
            initialY = element.offsetTop;
            element.style.cursor = 'grabbing';
        });

        document.addEventListener('mousemove', (e) => {
            if (isDragging) {
                const dx = e.clientX - startX;
                const dy = e.clientY - startY;
                element.style.left = `${initialX + dx}px`;
                element.style.top = `${initialY + dy}px`;
            }
        });

        document.addEventListener('mouseup', () => {
            isDragging = false;
            element.style.cursor = 'grab';

            localStorage.setItem(storageKey, JSON.stringify({
                left: element.style.left,
                top: element.style.top
            }));
        });

        element.addEventListener('wheel', (e) => {
            e.preventDefault();
            rotation += e.deltaY * 0.05;
            element.style.transform = `rotate(${rotation}deg)`;
        });
    }

    makeDraggableAndRotatable(nameDisplay, 'namePosition');
    makeDraggableAndRotatable(phoneDisplay, 'phonePosition');
    makeDraggableAndRotatable(emailDisplay, 'emailPosition');

    const inputFields = ['name', 'phone', 'email', 'fontSelect', 'fontColor', 'nameFontSize', 'phoneFontSize', 'emailFontSize'];
    inputFields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        field.addEventListener('input', updateFontPreview);
    });

    downloadBtn.addEventListener('click', function () {
        const cardContainer = document.getElementById('card-container');
        html2canvas(cardContainer, {
            useCORS: true,
            backgroundColor: null
        }).then(canvas => {
            const imageData = canvas.toDataURL('image/png');
            const downloadLink = document.createElement('a');
            downloadLink.href = imageData;
            downloadLink.download = 'custom-card.png';
            downloadLink.click();
        });
    });

    loadSavedSettings();
    updateFontPreview();
});
