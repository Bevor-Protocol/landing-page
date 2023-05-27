import styles from "@/styles/page.module.css";

export default (): JSX.Element => {
  return (
    <section id="about">
      <div className={styles.section_div_col}>
        <div style={{ background: "white", width: "80%", height: "400px", color: "black" }}>
          Placeholder Element
        </div>
        <div className={styles.about_info_holder}>
          <div className={styles.about_info}>
            <h3>Auditees</h3>
            <p>
              Auditees are able to de-risk the financial burden of receiving an audit. If a
              vulnerability is uncovered post-audit, remainder of vested funds are returned to them.
            </p>
          </div>
          <div className={styles.about_info}>
            <h3>Auditors</h3>
            <p>
              Auditors receive payments for conducting independent audits, while being able to set
              their market rates, availability, and mutually agree on audit terms.
            </p>
          </div>
          <div className={styles.about_info}>
            <h3>DAO Members</h3>
            <p>
              DAO members are incentivized to submit and vote on proposals in order to help qualify
              the state of audits and exploits. Participants are rewarded for voting successfully.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
