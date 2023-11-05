(function () {
    'use strict'
    const videoList = document.getElementById("video-list");
    const videoPlayer = document.getElementById("video-player");

    function createVideoListItem(video) {
        const listItem = document.createElement("li");
        const videoTitle = document.createElement("a");
        videoTitle.textContent = video.title;
        videoTitle.href = video.url;

        if (video.image) {
            const videoImage = document.createElement("img");
            videoImage.src = video.image;
            listItem.appendChild(videoImage);
        } else {
            const defaultImage = document.createElement("img");
            defaultImage.src = "media/default.jpg";
            listItem.appendChild(defaultImage);
        }

        listItem.appendChild(videoTitle);

        listItem.addEventListener("click", function () {
            videoPlayer.src = video.url;
            videoPlayer.play();
        });

        return listItem;
    }

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "vids.json", true);
    xhr.onreadystatechange = function () {
        try {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    const data = JSON.parse(xhr.responseText);
                    data.videos.forEach(function (video) {
                        const listItem = createVideoListItem(video);
                        videoList.appendChild(listItem);
                    });
                } else {
                    throw new Error("Failed to load data.");
                }
            }
        } catch (error) {
            console.error(error);
        }
    };

    xhr.onerror = function () {
        console.error("Network error occurred while fetching data.");
    };

    xhr.send();
}());
