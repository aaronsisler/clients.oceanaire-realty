import styles from "../styles/things.module.scss";

export default function Things() {
  return (
    <section className={styles.section_things}>
      <h2 className={styles.section_things__header}>
        A few things we&#8217;re great at
      </h2>
      <p>
        Lorem ipsum dolor sit amet, at mei dolore tritani repudiandae. In his
        nemore temporibus consequuntur, vim ad prima vivendum consetetur.
      </p>
      <div className={styles.section_things__widgets}></div>
    </section>
  );
}
