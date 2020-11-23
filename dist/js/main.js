'use strict'

function convertCanvasToImage() {
    const canvas = document.getElementsByTagName('canvas')[0];
    const image = new Image();
    image.crossOrigin = 'anonymous';
	image.src = canvas.toDataURL("image/png");
	return image;
}

function saveToPdf(){
    const saveBtn = document.getElementById('save-to-pdf');
    saveBtn.addEventListener('click', (e)=> {
        const savePdfLink = document.createElement('a');
        savePdfLink.download = "resume.pdf";
        fetch({url: 'http://localhost:3000/pdf/'}).then((response)=> {
            debugger;
            const blob = new Blob([response.data], {type: 'application/pdf'})
            saveBtn.href = window.URL.createObjectURL(blob);
            // document.appendChild(savePdfLink);
            saveBtn.click();
            // document.removeChild(savePdfLink);
        });
    })
}

function toDarkMode(){
    let root = document.documentElement;
    root.style.setProperty('--font-color', '#B0BEC5');
    root.style.setProperty('--font-lighten-color', '#9E9E9E');
    root.style.setProperty('--background-color', '#263238');
    root.style.setProperty('--common-color', '#37474F');
}

function toLightMode() {
    let root = document.documentElement;
    root.style.setProperty('--font-color', '#B0BEC5');
    root.style.setProperty('--font-lighten-color', '#9E9E9E');
    root.style.setProperty('--background-color', '#263238');
    root.style.setProperty('--common-color', '#37474F');
}
window.onload = function(){
	saveToPdf();
};