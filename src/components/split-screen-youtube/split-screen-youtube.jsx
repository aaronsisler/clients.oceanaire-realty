import React from "react";

import styles from "./split-screen-youtube.module.scss";

const SplitScreenYoutube = () => (
  <section class="section__youtube-split-screen">
    <div class="youtube-split-screen__image">
      <img
        alt="default-alt-text"
        src="https://www.theoceanairerealty.com/files/2022/05/Oceanaire-Agent-Stats-e759bc8858d0def69cf5af4b545c13948b8a2f6e.jpeg"
      />
    </div>
    <div class="youtube-split-screen__player">
      <iframe
        src="https://www.youtube.com/embed/7uMvwpVTVn4"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </section>
);

export { SplitScreenYoutube };
