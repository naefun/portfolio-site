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