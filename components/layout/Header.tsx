import Image from "next/image";

import styles from "@/styles/layout.module.css";
import Button from "@/components/elements/Button";

export default (): JSX.Element => {
  return (
    <nav>
      <div className={styles.nav_div}>
        <div className={styles.nav_image}>
          <Image src="/name.png" alt="company name" fill={true} sizes="any" />
        </div>
        <div className={styles.nav_items} style={{ fontWeight: 700 }}>
          <Button theme="light" disabled={true}>
            <span className="text-grad-dark">Coming Soon</span>
          </Button>
        </div>
      </div>
    </nav>
  );
};
