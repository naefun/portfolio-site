function moveSlide(clickedId) {
    var mainSlideId = "main-slide";

    var clickedSlide = document.getElementById(clickedId);
    var mainSlide = document.getElementById(mainSlideId);

    var mainContainer = "msc";
    var sideContainer = "ssc";

    var x = document.getElementsByClassName("slide").length;
    var y = Math.floor(x / 2);

    if (clickedId != mainSlideId) {
        for (var i = 0; i < y; i++) {
            if (document.getElementsByClassName("slide")[i].id == clickedId) {
                document.getElementById(sideContainer).prepend(mainSlide);
            } else {
                document.getElementById(sideContainer).append(mainSlide);
            }
        }
        document.getElementById(mainContainer).append(clickedSlide);

        document.getElementById(mainSlideId).id = clickedId + "+";
        document.getElementById(clickedId).id = mainSlideId;
    }

    //console.log(clickedId);
}


function navIconClick(x, conId) {
    if (x.classList.contains("clicked")) {
        x.classList.remove("clicked");
        document.getElementById(conId).style.display = "none";
    } else if (!x.classList.contains("clicked")) {
        x.classList.add("clicked");
        document.getElementById(conId).style.display = "flex";
    }
}

function checkViewWidth() {
    var navId = "nav-con";
    var miscId = "misc-con";
    var buttonId = "nav-pull-tab";
    var miscBtnId = "misc-pull-tab";



    if (window.innerWidth >= 769) {
        // showing nav & hiding nav btn
        document.getElementById(navId).style.display = "flex";
        document.getElementById(buttonId).classList.remove("clicked");
        document.getElementById(buttonId).style.display = "none";
        // showing misc & hiding misc btn
        document.getElementById(miscId).style.display = "flex";
        document.getElementById(miscBtnId).classList.remove("clicked");
        document.getElementById(miscBtnId).style.display = "none";
    } else if (window.innerWidth <= 768) {
        if (!document.getElementById(buttonId).classList.contains("clicked")) {
            document.getElementById(navId).style.display = "none";
            document.getElementById(buttonId).style.display = "block";
        }
        if (!document.getElementById(miscBtnId).classList.contains("clicked")) {
            document.getElementById(miscId).style.display = "none";
            document.getElementById(miscBtnId).style.display = "block";
        }
    }
}

function closeNav() {
    var pullTab = document.getElementById("nav-pull-tab");
    var nav = document.getElementById("nav-con");

    var miscTab = document.getElementById("misc-pull-tab");
    var misc = document.getElementById("misc-con");

    if (window.innerWidth < 769 && nav.style.display == "flex") {
        nav.style.display = "none";
        pullTab.classList.remove("clicked");
    }
    if (window.innerWidth < 769 && misc.style.display == "flex") {
        misc.style.display = "none";
        miscTab.classList.remove("clicked");
    }
}