

var image = ["CATlasers.jpg", "IndoorBeams.jpg", "EDMlasers4.jpg", "WaterScreen1.jpg", "SchweitzerLasers.jpg", "LaserBillboard.jpg"];
var image2 = ["LaserGuitar.jpg", "BalloonFestLasers1.jpg", "BalloonFestLasers2.jpg", "SnowLasers.jpg", "LaserEagle.jpg", "SpaceNeedleLasers.jpg"];
var imageSales = ["clublasers2.jpg", "clublasers4.jpg", "clublasers1.jpg", "laserencore60.jpg", "Stinger11Watt.jpg", "Stinger11WattBack.jpg"];
var imageConcert = ["LaserEncore8.jpg", "LaserEncore22.png", "EDCvegasLasers.jpg", "EDMlasers3.jpg", "LaserEncore68.jpg"];
const imagePath = "./img/images/";


addImage();
addImage2();
addImage3();
addImageSales()
addImageConcert()
var imageNumber = 0;
var imageModal = 0;



function addImage() {
    for (i = 0; i < image.length; i++) {
        $(".insertImagesHere").append(`<div id = "${image[i]}" class=" imageContainer "><img class="imageStyle"src= "${imagePath}${image[i]}" alt="${image[i]}"></div>`);
        var imageNumber = i;

    }

}

function addImage2() {
    for (i = 0; i < image2.length; i++) {
        $(".insertImagesHere2").append(`<div id = "${image2[i]}" class=" imageContainer"><img class="imageStyle"src= "${imagePath}${image2[i]}" alt="${image2[i]}"></div>`);
        var imageNumber = i;

    }

}

function addImage3() {
    for (i = 0; i < image.length; i++) {
        $(".insertImagesHereIndex").append(`<div id = "${image[i]}" class=" imageContainer3 " style="background-color:black;"><img class="imageStyle"src= "${imagePath}${image[i]}" alt="${image[i]}"></div>`);
        var imageNumber = i;

    }

}

function addImageSales() {
    for (i = 0; i < imageSales.length; i++) {
        $(".insertImagesSales").append(`<div id = "${imageSales[i]}" class=" col-4 testPadding" style="background-color:black;"><img class="imageStyle"src= "${imagePath}${imageSales[i]}" alt="${imageSales[i]}"></div>`);
        var imageNumber = i;

    }

}

function addImageConcert() {
    for (i = 0; i < imageConcert.length; i++) {
        $(".insertImagesConcert").append(`<div id = "${imageConcert[i]}" class=" imageContainer"><img class="imageStyle"src= "${imagePath}${imageConcert[i]}" alt="${imageConcert[i]}"></div>`);
        var imageNumber = i;

    }

}

const newLocal = ".imageStyle";

$(newLocal).on("click", function () {
    $(".insertImagesModal").empty();
    $("#myModalLabel").empty();

    var imageModal = $(this).attr('src');
    var imageModalName = imageModal.substr(13).slice(0, -4);
    $(".insertImagesModal").append(`<img class="modalImageStyle"src= "${imageModal}" alt="${imageModal}">`);
    $("#myModalLabel").append(`<h4 id="myModalLabel" class="modal-title" >${imageModalName}</h4><button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>`);
});


//special events start



addFirstSpecialEventImage();
addSpecialEventImage();

function addFirstSpecialEventImage() {

    $(".specialEli").append(`<li data-target="#carousel-slider2" data-slide-to="0" class="active"></li>`);

    $(".specialE").append(`<div class="carousel-item active imageButton">
    <a href="specialEvents.html" class="image1"</a>
                            </div>`);

    $(".image1").append(`<img class="slider2 imageModal" src="${imagePath}${image[0]}" alt="${image[0]} title="EDM Lasers">`);

}


    function addSpecialEventImage() {

    for (i = 1; i < image.length; i++) {

    $(".specialEli").append(`<li data-target="#carousel-slider2" data-slide-to="0" class="active"></li>`);

    $(".specialE").append(`<div class="carousel-item imageButton">
    <a href="specialEvents.html"><img class="slider2 imageModal" src="${imagePath}${image[i]}" alt="${image[i]} title="EDM Lasers"></a>
     
                      </div>`);

        $(".specialEli").append(`<li data-target="#carousel-slider2" data-slide-to="${[i]}" class="active"></li>`);

    }

}

const modalOne = ".imageModal";

$(modalOne).on("click", function () {
    $(".insertImagesModal").empty();
    $("#myModalLabel").empty();

    var imageModal = $(this).attr('src');
    console.log(imageModal);
    var imageModalName = imageModal.substr(11).slice(0, -4);
    $(".insertImagesModal").append(`<img class="modalImageStyle"src= "${imageModal}" alt="${imageModal}">`);
    $("#myModalLabel").append(`<h4 id="myModalLabel" class="modal-title" >Image Gallery</h4><button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>`);
});



// special events end


//Fairs and Festivals start
addFirstFairFestivalImage();
addFairFestivalImage();

function addFirstFairFestivalImage() {

    $(".insertLi").append(`<li data-target="#carousel-slider3" data-slide-to="0" class="active"></li>`);

    $(".specialFF").append(`<div class="carousel-item active imageButton">
    <a href="fairsAndFestivals.html" class="imageFF"></a>
     
                      </div>`);

    $(".imageFF").append(`<img class="slider3 imageModal" src="${imagePath}${image2[0]}" alt="${image2[0]}" title="EDM Lasers">`);

}


function addFairFestivalImage() {

    for (i = 1; i < image2.length; i++) {

        $(".specialFF").append(`<div class="carousel-item imageButton">
    <a href="fairsAndFestivals.html" class="imageFF"><img class="slider3 imageModal" src="${imagePath}${image2[i]}" alt="${image2[i]}" title="EDM Lasers"></a>
     
                      </div>`);

        $(".insertLi").append(`<li data-target="#carousel-slider3" data-slide-to="${[i]}" class="active"></li>`);


        //var imageNumber = i;

    }

}

// Fairs and Festivals end


$(".cellOne").on("click", function () {
    window.open("specialEvents.html");


});

$(".cellTwo").on("click", function () {
    window.open("fairsAndFestivals.html");


});

$(".cellThree").on("click", function () {
    window.open("fairsAndFestivals.html");


});


//add this form modal
//<a href="#" class="" data-toggle="modal" data-target="#largeModal">



