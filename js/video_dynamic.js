

var video = ["https://videos.files.wordpress.com/srpQjl0D/laserencore-demoreel_hd.mp4", "https://videos.files.wordpress.com/1b2gBcry/watertowerlasers_hd.mp4", "https://videos.files.wordpress.com/blSZCFGA/lightthenightlasershow_hd.mp4", "https://videos.files.wordpress.com/Et90H9lu/laserhitz2_hd.mp4"];

const imagePath = "";
//const imagePath = "./videos/";

addVideo();


    
       
       
        

function addVideo() {
    for (i = 0; i < video.length; i++) {
        $(".insertVideoHere").append(`<video width="640" height="480" controls><source src="${imagePath}${video[i]}" type="video/mp4"><source src="movie.ogg" type="video/ogg"> Your browser does not support the video tag.</video>`);
        var imageNumber = i;

    }

}






