import { Github, Discord, Gitbook, Twitter } from "@/assets";
import styles from "@/styles/layout.module.css";

export default (): JSX.Element => {
  return (
    <footer>
      <div className={styles.footer_div}>
        <div>
          <p>de-risk. incentivize. audit. decentralize.</p>
        </div>
        <div className={styles.footer_items}>
          <a href="https://twitter.com/BevorProtocol" referrerPolicy="no-referrer" target="_blank">
            <Twitter height="1.5rem" width="1.5rem" fill="white" />
          </a>
          <a
            href="https://app.gitbook.com/o/WNN54NUM2ExxQYCIchF2/s/apqwSQScAhZQFKwiJzwx"
            referrerPolicy="no-referrer"
            target="_blank"
          >
            <Gitbook height="1.5rem" width="1.5rem" fill="white" />
          </a>
          <a href="https://github.com/Bevor-Protocol" referrerPolicy="no-referrer" target="_blank">
            <Github height="1.5rem" width="1.5rem" fill="white" />
          </a>
          <a href="#" referrerPolicy="no-referrer" target="_blank">
            <Discord height="1.5rem" width="1.5rem" fill="white" />
          </a>
        </div>
      </div>
    </footer>
  );
};
