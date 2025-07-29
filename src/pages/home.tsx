import { Link } from "react-router-dom";
import { ClassButton } from "../components/class-button";
import { useHeroClasses } from "../hooks/use-hero-classes";

import type { HeroClassName } from "../domain";

import styles from "./home.module.css";

export function Home() {
  const { error, loading, heroClasses } = useHeroClasses();

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  const availableHeroClasses = Object.keys(heroClasses);
  return (
    <main className={styles.app}>
      <h1>Hero Classes</h1>

      {loading && <div className={styles.loading}>Loading...</div>}

      {!loading && availableHeroClasses.length === 0 && (
        <div className={styles.noClasses}>No hero classes available</div>
      )}

      {!loading && availableHeroClasses.length > 0 && (
        <section className={styles.heroClasses} role='grid' aria-label='Hero Classes'>
          {Object.entries(heroClasses).map(([heroClass, imageUrl]) => (
            <Link to={`/${heroClass}`} key={heroClass}>
              <ClassButton
                heroClass={heroClass as HeroClassName}
                imageUrl={imageUrl}
              />
            </Link>
          ))}
        </section>
      )}
    </main>
  );
}
