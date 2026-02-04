// Générateur pseudo-aléatoire (seed fixe = rendu stable)
// Arrondi à 2 décimales pour éviter les erreurs d'hydratation serveur/client
function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return Math.round((x - Math.floor(x)) * 100) / 100;
}

// Étoiles dissociées, répartition aléatoire - nombreuses et minuscules
const stars: [number, number, number][] = [];
for (let i = 0; i < 650; i++) {
  const x = Math.round((seededRandom(i * 7.3) * 98 + 1) * 100) / 100;
  const y = Math.round((seededRandom(i * 13.1 + 1) * 26 + 2) * 100) / 100;
  const size = Math.round((0.05 + seededRandom(i * 5.7 + 2) * 0.06) * 100) / 100;
  stars.push([x, y, size]);
}

// Étoile 5 branches
function StarPath({ size }: { size: number }) {
  const r = size;
  const points: [number, number][] = [];
  for (let i = 0; i < 10; i++) {
    const rad = (i * Math.PI) / 5 - Math.PI / 2;
    const rr = i % 2 === 0 ? r : r * 0.45;
    points.push([Math.cos(rad) * rr, Math.sin(rad) * rr]);
  }
  const d = points.map(([x, y], i) => `${i === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`).join(" ") + " Z";
  return <path d={d} fill="currentColor" />;
}

export default function Starfield() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 100 30"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      {stars.map(([x, y, size], i) => (
        <g
          key={i}
          transform={`translate(${x.toFixed(2)}, ${y.toFixed(2)})`}
          style={{
            color: i % 11 === 0 ? "rgba(236,72,153,0.7)" : "rgba(255,255,255,0.6)",
          }}
        >
          <StarPath size={size} />
        </g>
      ))}
    </svg>
  );
}
