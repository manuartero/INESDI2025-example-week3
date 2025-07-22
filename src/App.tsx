import { useHeroClasses } from "./hooks/use-hero-classes";
import styles from "./app.module.css";

export function App() {
  const { error, loading, heroClasses } = useHeroClasses();

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  return (
    <main className={styles.app}>
      <h1>Hero Classes</h1>

      {loading && <div className={styles.loading}>Loading...</div>}

      {!loading && heroClasses.length === 0 && (
        <div className={styles.noClasses}>No hero classes available</div>
      )}

      {!loading && heroClasses.length > 0 && (
        <section className={styles.heroClasses}>
          {heroClasses.map((heroClass) => (
            <article key={heroClass} className={styles.heroClass}>
              {heroClass}
            </article>
          ))}
        </section>
      )}
    </main>
  );
}
