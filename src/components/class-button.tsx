import type { HeroClassName } from "../domain";

import styles from "./class-button.module.css";

type Props = {
  heroClass: HeroClassName;
  imageUrl: string;
} & React.ComponentProps<"article">;

export function ClassButton({ heroClass, imageUrl, ...props }: Props) {
  return (
    <article key={heroClass} className={styles.heroClass} {...props}>
      <h2>{heroClass}</h2>
      <img src={imageUrl} alt={heroClass} />
    </article>
  );
}
