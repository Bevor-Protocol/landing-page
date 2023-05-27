import styles from "@/styles/page.module.css";

export default (): JSX.Element => {
  return (
    <section id="team">
      <div className={styles.section_div_row}>
        <div className={styles.team_member}>
          <div style={{ height: "200px", width: "150px", background: "white" }}>
            Placeholder team
          </div>
          <div>
            <h3>Anon 1</h3>
            <p>CEO, Founder</p>
          </div>
        </div>
        <div className={styles.team_member}>
          <div style={{ height: "200px", width: "150px", background: "white" }}>
            Placeholder team
          </div>
          <div>
            <h3>Anon 2</h3>
            <p>CTO, Founder</p>
          </div>
        </div>
      </div>
    </section>
  );
};
