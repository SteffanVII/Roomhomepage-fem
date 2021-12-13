const buttons = [
    document.querySelector(".arrow button:nth-child(1)"),
    document.querySelector(".arrow button:nth-child(2)")
]

var sliding = false;

buttons.forEach(element => {
    switch (element) {
        case buttons[0]:
            element.addEventListener("click", slideLeft);
            break;
        case buttons[1]:
            element.addEventListener("click", slideRight);
            break;
    }
});

function slideLeft() {
    if ( !sliding )
    {
        document.querySelector(".image:nth-child(3)").classList.add("slide_left");
        sliding = true;
    }
}
function slideRight() {
    if ( !sliding )
    {
        var saved = document.querySelector(".image:nth-child(1)");
        document.querySelector(".image_slider").insertBefore(saved, document.querySelector(".image_slider div:nth-child(4)"));
        saved.classList.add("slide_right");
        sliding = true;
    }
}

document.querySelectorAll(".image").forEach( element => {
    element.addEventListener( "animationend", function() {;
        if ( this.classList.contains("slide_left") )
        {
            var saved = this;
            document.querySelector(".image_slider").insertBefore(saved, document.querySelector(".image:nth-child(1)"));
        }
        this.classList.remove("slide_left");
        this.classList.remove("slide_right");
        sliding = false;
    } );
} );
