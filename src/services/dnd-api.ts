const BASE_URL = "https://inesdi2025-resources-p2.fly.dev/v1";

const HERO_CLASS_URL = `${BASE_URL}/classes`;

export async function fetchHeroClasses() {
  // add a fake 1000ms delay to simulate a network request
  await new Promise((resolve) => setTimeout(resolve, 1000));
  
  const response = await fetch(HERO_CLASS_URL);
  const heroClasses: string[] = await response.json();
  return heroClasses;
}
