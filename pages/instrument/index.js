const videos = document.querySelectorAll("video");
const images = document.querySelectorAll(".image");
const row = document.querySelector(".row");
const show = document.querySelectorAll(".show-up");
const objects = document.querySelectorAll(".object");

function startPreview(video, image, playButton, shows) {
  video.muted = true;
  video.currentTime = 1;
  video.playbackRate = 0.5;
  
  for (let element of row.children) {
    if (element !== playButton && element !== image && element !== video ) {
      element.style.opacity = "0.1";
      shows.style.opacity = "1";
      shows.style.transform = "translateY(0px)";
    }
  }
  
  image.style.opacity = "0";
  video.style.opacity = "1";
  video.play();
}

function stopPreview(video, image , shows) {
  for (let element of row.children) {
    element.style.opacity = "1";
    shows.style.opacity = "0"
    shows.style.transform = "translateY(50px)";
  }
  
  image.style.opacity = "1";
  video.currentTime = 0;
  video.playbackRate = 1;
  video.style.opacity = "0";
}

for (let i = 0; i < objects.length; i++) {
  const video = videos[i];
  const image = images[i];
  const playButton = objects[i];
  const shows = show[i];
  
  playButton.addEventListener("mouseenter", () => {
    startPreview(video, image, playButton, shows);
  });
  
  playButton.addEventListener("mouseleave", () => {
    stopPreview(video, image, shows);
  });
  
  video.addEventListener("ended", () => {
    video.currentTime = 0;
    video.play();
  });
}
