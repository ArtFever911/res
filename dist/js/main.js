'use strict'

function convertCanvasToImage() {
    const canvas = document.getElementsByTagName('canvas')[0];
    console.log(canvas);
    const image = new Image();
    image.crossOrigin = 'anonymous';
	image.src = canvas.toDataURL("image/png");
	return image;
}

function saveToImage(){
    if(document.getElementsByTagName('canvas')[0])document.getElementsByTagName('canvas')[0].remove();
    html2canvas(document.body).then(function(canvas) {
        document.body.appendChild(canvas);
        document.getElementsByTagName('canvas')[0].style.display = 'none';
    }).then(function(canvas){
        const imageSrc = convertCanvasToImage(canvas);
        const saveBtn = document.getElementById('save-to-png');
        saveBtn.download = "Yurii-Pleshynets-resume.png";
        saveBtn.href = imageSrc.src;
    })
}


function toDarkMode(){
    let root = document.documentElement;
    root.style.setProperty('--font-color', 'blue');
    root.style.setProperty('--font-lighten-color', 'blue');
    root.style.setProperty('--background-color', '#202020');
    root.style.setProperty('--common-color', '#000013');
}

function toLightMode() {
    let root = document.documentElement;
    root.style.setProperty('--font-color', 'black');
    root.style.setProperty('--font-lighten-color', 'gray');
    root.style.setProperty('--background-color', 'white');
    root.style.setProperty('--common-color', '#100096');
}
