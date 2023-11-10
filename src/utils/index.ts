function copyToClipboard(text:string) {
    // Create a temporary textarea element to hold the text
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';  // Make it invisible
    document.body.appendChild(textarea);

    // Select and copy the text to the clipboard
    textarea.select();
    document.execCommand('copy');

    // Remove the temporary textarea
    document.body.removeChild(textarea);
}


export { copyToClipboard}
