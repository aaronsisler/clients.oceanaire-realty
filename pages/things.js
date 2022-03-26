import { ThingWidget } from "../components/thing-widget";
import styles from "../styles/things.module.scss";

const widgets = [
  {
    titleText: "25 Homes Sold Each Year",
    subText: "Compared to 10 homes",
  },
  {
    titleText: "14.5 Days Between Sales",
    subText: "Compared to 36.5 days",
  },
  {
    titleText: "$90k In Earned Commissions",
    subText: "Compared to 43k",
  },
  {
    titleText: "Top 10% Homes Sold In Industry",
    subText: "Compared to significantly less",
  },
];

export default function Things() {
  return (
    <section className={styles.section_things}>
      <div className={styles.section_things__header}>
        <h2 className={styles.section_things__headerText}>
          A few things we&#8217;re great at
        </h2>
        <p className={styles.section_things__headerSubtext}>
          How Oceanaire Rockstar agents compares to the average agent
        </p>
      </div>
      <div className={styles.section_things__widgets}>
        {widgets.map((widget, index) => (
          <ThingWidget {...widget} key={index} />
        ))}
      </div>
    </section>
  );
}
