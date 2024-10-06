document.getElementById('removeCommentsBtn').addEventListener('click', function() {
    const codeInput = document.getElementById('codeInput').value;

    // single-line comments
    const singleLineComments = /\/\/.*$/gm;
    // multi-line comments
    const multiLineComments = /\/\*[\s\S]*?\*\//g;

    const cleanedCode = codeInput.replace(singleLineComments, '').replace(multiLineComments, '');

    document.getElementById('output').textContent = cleanedCode.trim();
});
