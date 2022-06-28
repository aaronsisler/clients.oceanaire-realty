import React from "react";

import styles from "./split-screen-with-box-shadow.module.scss";

const SplitScreenWithBoxShadow = () => (
  <section class="section__split-screen-with-box-shadow">
    <div class="split-screen-with-box-shadow__image">
      <img
        alt="default-alt-text"
        src="https://www.theoceanairerealty.com/files/2019/08/Screen-Shot-2019-08-26-at-4.51.56-PM-768x391.png"
      />
    </div>
    <div class="split-screen-with-box-shadow__content max-width site-font">
      <div>
        At The Oceanaire Realty we have the experience you need to make your
        best move – not only for our clients, but for our career-oriented agents
        as well.
      </div>
      <br />
      <div>
        We are seeking dedicated, dynamic, fun, professional individuals to join
        our successful team. We have built a culture as a destination for those
        who want a long, meaningful and successful career in real estate. We
        aren’t set out to build the biggest team, but rather a team agents can’t
        picture themselves not being a part of. We want you to develop
        relationships with your coworkers to grow and evolve in the business we
        love. We don’t want to be a revolving door agency that turns over most
        of the office every year, or so large that you never get to know your
        colleagues.
      </div>
      <br />
      <div>
        As such we’ve developed a unique blend of higher than average
        commissions in our markets relative to the incredible and unmatched
        amount of resources and support we provide, with no fees. Our team
        helped 375+ families achieve their real estate goals in 2021 and our
        agents’ production are among the best nationally and in North Carolina!
        We have positions available in the Triangle area in our Raleigh office,
        and based out of our Coastal office in Holly Ridge.
      </div>
    </div>
  </section>
);

export { SplitScreenWithBoxShadow };
