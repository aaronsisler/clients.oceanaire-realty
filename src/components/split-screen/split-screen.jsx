import React from "react";

import styles from "./split-screen.module.scss";

const SplitScreen = () => (
  <section class="section__split-screen">
    <div class="split-screen__image">
      <img
        alt="default-alt-text"
        src="https://www.theoceanairerealty.com/files/2019/08/Screen-Shot-2019-08-29-at-10.09.18-AM.png"
      />
    </div>
    <div class="split-screen__content">
      <div class="site-font">
        There are thousands of real estate offices and hundreds of ways agents
        are compensated. Which will work best for you? Some firms offer more
        resources and the split is 50/50. Some firms charge you (for business
        cards, printer fees, affiliation fees, etc) but offer no leads or even
        permanent workspace, but their split is 80%, 90%, even “100%”. Here’s
        another question to ask yourself – would you rather have 80% of 8 deals
        or 50% or 20 – without having to source or pay for your own leads?
      </div>
      <br />
      <br />
      <div class="site-font">
        At The Oceanaire Realty we believe we have cracked the code that gives
        you the best of both worlds – the opportunity to keep more of the
        commission you earn, with the tools, resources and leads to work and
        convert to grow your business! All with no fees – EVER! See below for
        our commission scale breakdowns.
      </div>
    </div>
  </section>
);

export { SplitScreen };
