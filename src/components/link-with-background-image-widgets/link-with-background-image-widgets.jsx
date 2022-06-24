import React from "react";

import styles from "./link-with-background-image-widgets.module.scss";

const LinkWithBackgroundImageWidgets = () => (
  <section class="section__buttons">
    <div class="buttons__widget">
      <div class="button__wrapper">
        <a
          class="buttons__button site-font"
          href="https://www.theoceanairerealty.com/join-our-team/where-do-you-want-to-be/"
        >
          What Are Your Goals?
        </a>
      </div>
    </div>
    <div class="buttons__widget">
      <div class="button__wrapper">
        <a
          class="buttons__button site-font"
          href="https://www.theoceanairerealty.com/join-our-team/the-tools-and-resources-you-need-to-unleash-your-greatness/"
        >
          Our Tools &amp; Resources
        </a>
      </div>
    </div>
    <div class="buttons__widget">
      <div class="button__wrapper">
        <a
          class="buttons__button"
          href="https://www.theoceanairerealty.com/join-our-team/a-one-of-a-kind-and-best-of-both-worlds-commission-structure/"
        >
          One-Of-A-Kind Commission
        </a>
      </div>
    </div>
    <div class="buttons__widget">
      <div class="button__wrapper">
        <a
          class="buttons__button"
          href="https://www.theoceanairerealty.com/join-our-team/celebrating-our-success/"
        >
          Celebrating Our Success!
        </a>
      </div>
    </div>
  </section>
);

export { LinkWithBackgroundImageWidgets };
