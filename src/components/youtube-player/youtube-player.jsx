import React from "react";

import styles from "./youtube-player.module.scss";

const YoutubePlayer = () => (
  <section class="section__youtube-player">
    <div class="youtube-player__spacer"></div>
    <div class="youtube-player">
      <iframe
        src="https://www.youtube.com/embed/7uMvwpVTVn4"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen=""
      ></iframe>
    </div>
    <div class="youtube-player__spacer"></div>
  </section>
);

export { YoutubePlayer };
