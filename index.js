const url =
  "https://www.googleapis.com/youtube/v3/search?key=AIzaSyAc9vCITwrc6Z8Fj6S8JV3aLxZmtHkLk6Y&part=snippet&q=SpongeBob";

let videos = [];
if (videos.length < 1) {
  const spin = Array.from({ length: 10 }, (v, i) => i);
  for (var i in spin) {
    document.getElementById("spinner").innerHTML += `<div class="container">
          <div class="circle"></div>
        </div>`;
  }
}
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    videos = data.items;
    console.log(videos);
  })
  .then(() => {
    for (var i in videos) {
      const video = videos[i];
      document.getElementById("video").innerHTML += `<div class="video">
          <div class="video-thumb">
            <img
              src=${video.snippet?.thumbnails?.medium?.url}
              alt="thumb"
            />
            <div class="duration">5:00</div>
            <div class="loader"></div>
          </div>
          <div>
            <h3>${video.snippet?.title}</h3>
            <div class="video-infos">
              <p>
                ${video.snippet?.channelTitle}
                <span><i class="fa fa-circle-check"></i></span>
              </p>

              <p>50M views</p>
              <p class="time-ago">1 year ago</p>
            </div>

            <p class="video-description">
              ${video?.snippet?.description}
            </p>
            
          </div>
        </div>`;
    }
  });
