import Image from "next/image";
import Button from "@/components/elements/Button";
import styles from "@/styles/page.module.css";
import { Arrow } from "@/assets";

export default (): JSX.Element => {
  return (
    <section id="home">
      <div className={styles.section_div_row}>
        <div className={styles.home_text}>
          <h1 className="text-grad-light">
            Ensuring <br /> quality audits
          </h1>
          <p className="text-grad-light">
            On-chain solution for establishing terms and carrying out smart contract audits
          </p>
          <a
            href="https://app.gitbook.com/o/WNN54NUM2ExxQYCIchF2/s/apqwSQScAhZQFKwiJzwx"
            referrerPolicy="no-referrer"
            target="_blank"
          >
            <Button theme="light">
              <div className={styles.home_btn}>
                <span className="text-grad-dark">Learn More</span>
                <Arrow height="0.8rem" width="0.8rem" />
              </div>
            </Button>
          </a>
        </div>
        <div className={styles.home_logo}>
          <Image src="/logo.png" alt="logo" fill={true} sizes="any" />
        </div>
      </div>
    </section>
  );
};
