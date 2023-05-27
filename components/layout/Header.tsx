import Image from "next/image";
import classNames from "classnames";

import styles from "@/styles/layout.module.css";
import Button from "@/components/elements/Button";

type Props = {
  active: string;
};

export default (props: Props): JSX.Element => {
  const { active } = props;
  return (
    <nav className={styles.nav}>
      <div className={styles.nav_div}>
        <div className={styles.nav_image}>
          <Image src="/name.png" alt="company name" fill={true} sizes="any" />
        </div>
        <div className={styles.nav_items} style={{ fontWeight: 700 }}>
          <div className={classNames(styles.nav_item, { [styles.active]: active === "home" })}>
            Home
          </div>
          <div className={classNames(styles.nav_item, { [styles.active]: active === "about" })}>
            About
          </div>
          <div className={classNames(styles.nav_item, { [styles.active]: active === "team" })}>
            Team
          </div>
          <Button theme="light">Contact</Button>
        </div>
      </div>
    </nav>
  );
};
