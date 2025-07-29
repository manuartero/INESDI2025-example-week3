import type { HeroClassName } from "../domain";

const BASE_URL = "https://inesdi2025-resources-p2.fly.dev/v1";

const HERO_CLASS_URL = `${BASE_URL}/classes`;
const heroImageUrl = (className: HeroClassName) =>
  `${BASE_URL}/assets/classes/${className}`;


export async function fetchHeroClasses() {
  const response = await fetch(HERO_CLASS_URL);
  const heroClasses: HeroClassName[] = await response.json();
  if (!response.ok) {
    throw new Error(`Failed to fetch hero classes: ${response.statusText}`);
  }
  if (!Array.isArray(heroClasses)) {
    throw new Error(
      "Unexpected response format: expected an array of hero classes"
    );
  }
  if (heroClasses.length === 0) {
    return {} as Record<HeroClassName, string>;
  }

  const fetchImagePromises = heroClasses.map(fetchHeroClassImage);
  const images = await Promise.all(fetchImagePromises);

  return heroClasses.reduce((acc, className, index) => {
    acc[className] = images[index];
    return acc;
  }, {} as Record<HeroClassName, string>);
}

/**
 * fetches /v1/assets/classes/{className} to get the class image
 */
export async function fetchHeroClassImage(className: HeroClassName) {
  const response = await fetch(heroImageUrl(className));
  const blob = await response.blob();
  const image = URL.createObjectURL(blob);
  return image;
}
