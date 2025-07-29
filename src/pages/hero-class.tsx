import { Link, useParams } from "react-router-dom";

import type { HeroClassName } from "../domain";

export function HeroClass() {
  const { className } = useParams<{ className: HeroClassName }>();

  return (
    <div>
      <h1>Hero Class: {className}</h1>
      <Link to="/">Back to Home</Link>
    </div>
  );
}
