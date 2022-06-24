import React from "react";

import styles from "./content-list.module.scss";

const ContentList = () => (
  <div class="section__content max-width">
    <div class="content__list site-font">
      <div>
        Commission free personal transaction(s) will not count towards
        incentives/splits.
      </div>
      <div>
        All past clients are treated as SOI (Sphere of Influence) after the
        initial transaction. Zillow Flex leads will not be considered SOI until
        after the second transaction.
      </div>
      <div>
        Outbound referrals that are SOI will be paid 100% to agent. Outbound
        referrals that are team leads will be paid at the current agent split
      </div>
      <div>
        Inbound referrals will be considered referral only and cannot be
        considered SOI if a referral is paid to a referring agent. Inbound
        referrals will be paid at the current agent split.
      </div>
      <div>
        All builder and/or seller offered bonuses above and beyond offered or
        listed commission will be paid fully to the agent.
      </div>
      <div>
        Any commission earned for representing a renter will be paid fully to
        the agent. (Working with renters is discouraged unless the plan is for
        the client to ultimately buy).
      </div>
      <div>
        All buyer and seller transactions are paid at the same rate based on
        tier and # closed. There are no separate commission scales for buyer and
        seller representation.
      </div>
      <div>
        Qualification for the annual team trip will be based on minimum
        production guidelines. Team members must have been on the team full time
        for a minimum of one year before the trip to qualify or significantly
        outpace team production requirements.
      </div>
    </div>
  </div>
);

export { ContentList };
