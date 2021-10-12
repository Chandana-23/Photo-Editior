function myFunction() {
    var file = document.getElementById('image').files[0];
    var reader  = new FileReader();
    reader.onload = function(e)  {
        var image = document.querySelector("img");
        image.src = e.target.result;
        image.width = 500;
        image.height = 500;
     }
     reader.readAsDataURL(file);
}

function brightness()
{
    var bvalue = document.getElementById("brightness").value;
    document.querySelector("img").style.filter = "brightness("+bvalue+")";
} 

function opacity()
{
    var ovalue = document.getElementById("opacity").value;
    document.querySelector("img").style.opacity = ovalue;
} 

function contrast()
{
    var cvalue = document.getElementById("contrast").value;
    document.querySelector("img").style.filter = "contrast("+cvalue+")";
}
function bw() {
    var bw = document.getElementById("bw");
    if(bw.checked)
    {
        document.querySelector("img").style.filter = "grayscale("+1+")";
    }
    else
    {
        document.querySelector("img").style.filter = "grayscale("+0+")";
    }
}

function invert()
{
    var invert = document.getElementById("invert");
    if(invert.checked)
    {
        document.querySelector("img").style.filter = "invert("+100+"%)";
    }
    else
    {
        document.querySelector("img").style.filter = "invert("+0+"%)";
    }
}
function saturation() {
    var saturation = document.getElementById("saturation").value;
    document.querySelector("img").style.filter = "saturate("+saturation+"%)";
}

