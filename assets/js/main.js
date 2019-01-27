function convertCanvasToImage() {
    var canvas = document.getElementsByTagName('canvas')[0];
    console.log(canvas);
    var image = new Image();
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
        var imageSrc = convertCanvasToImage(canvas);
        var saveBtn = document.getElementById('save-to-png');
        saveBtn.download = "Yurii-Pleshynets-resume.png";
        saveBtn.href = imageSrc.src;
    })
    
}
function dyncamicallyColorGeneration(){
    let root = document.documentElement;
    root.addEventListener("mousemove", e => {
        let r,g,b,x,y,z,screenW,screenH,docH;
        screenW = window.screen.width;
        screenH = window.screen.height;
        docH = document.body.clientHeight;
        x = e.clientX;
        y = e.clientY;
        z = window.scrollY;
        r = Math.round(255 * (x / screenW));
        g = Math.round(255 * (y / screenH));
        b = Math.round(255 * (z /docH));
        console.log({
            "max" : {
                "screenW" : screenW,
                "screenH" : screenH,
                "docH" : docH
            },
            "current": {
                "x" : e.clientX,
                "y" : e.clientY,
                "z" : window.scrollY
            },
            "index": {
                "screenW / x" : x / screenW,
                "screenH / y" : y / screenH,
                "docH / z" : z /docH
            }
        });
        root.style.setProperty('--common-color', `rgb(${r},${g},${b})`);
        root.style.setProperty('--second-color', `rgba(${r},${g},${b},0.5)`);
    });
}
