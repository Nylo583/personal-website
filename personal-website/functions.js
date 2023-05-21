var container = document.getElementById("ctr");
var landing = document.getElementById("landing");
var about = document.getElementById("about");

function RGB(red, green, blue)
{
    var decColor =0x1000000+ blue + 0x100 * green + 0x10000 *red ;
    return '#'+decColor.toString(16).substr(1);
}

function BGColor() {
    var scroll = container.scrollTop;
    console.log(scroll);
    if (scroll <= 500) {
        container.style.backgroundColor = RGB(0, 0, 0);
        about.style.backgroundColor = RGB(0, 0, 0);
        landing.style.backgroundColor = RGB(0, 0, 0);
    } else if (scroll > 500 && scroll <= 1500) {
        container.style.backgroundColor = RGB(55, 55, 55);
        about.style.backgroundColor = RGB(55, 55, 55);
        landing.style.backgroundColor = RGB(55, 55, 55);
    } else {
        container.style.backgroundColor = RGB(0, 0, 0);
        about.style.backgroundColor = RGB(0, 0, 0);
        landing.style.backgroundColor = RGB(0, 0, 0);
    }
    
}

container.addEventListener("scroll", BGColor);