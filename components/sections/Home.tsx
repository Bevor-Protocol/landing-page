import Image from "next/image";
import Button from "@/components/elements/Button";
import styles from "@/styles/page.module.css";

export default (): JSX.Element => {
  return (
    <section id="home">
      <div className={styles.section_div_row}>
        <div className={styles.home_text}>
          <h1>
            Ensuring <br /> quality audits
          </h1>
          <p>On-chain solution for establishing terms and carrying out smart contract audits</p>
          <Button theme="light">Contact</Button>
        </div>
        <div className={styles.home_logo}>
          <Image src="/logo.png" alt="logo" fill={true} sizes="any" />
        </div>
      </div>
    </section>
  );
};
