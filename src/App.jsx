import styles from "./style";
import {
  Nav,
  Billings,
  CardDeals,
  Businesss,
  Clientss,
  CTA,
  Statss,
  Foot,
  Testimonialss,
  Heros,
} from "./components";

//

import React from "react";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Nav />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Heros />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Statss />
        <Businesss />
        <Billings />
        <CardDeals />
        <Testimonialss />
        <Clientss />
        <CTA />
        <Foot />
      </div>
    </div>
  </div>
);

export default App;
