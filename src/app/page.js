import Image from "next/image";
import styles from "./home.module.css";
export default function HomePage() {
  // throw new Error('Error on purpose')
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thoughts Agency.</h1>
        <p className={styles.description}>
          Esse consequat enim Lorem occaecat id minim enim. Sint sit ad ad
          laborum officia ipsum Lorem do enim. Eu voluptate reprehenderit ut
          laborum nostrud irure irure incididunt ullamco duis et amet laboris.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
            <Image src='/brands.png' alt="" fill className={styles.brandImg} />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/hero.gif" alt="" fill className={styles.heroImg} />
      </div>
    </div>
  );
}
