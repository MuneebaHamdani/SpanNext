// Deterministic, royalty-free placeholder imagery.
// Using picsum.photos with a fixed seed keeps the same image for the same
// service across reloads, while still looking like real photography.
export const img = (seed, w = 900, h = 700) => {
  if (typeof seed === "string" && /^https?:\/\//i.test(seed)) return seed;
  return `https://picsum.photos/seed/${seed}/${w}/${h}`;
};

// Turns any string into a stable positive number, so the same service
// always gets the same photo (instead of a new random one every reload).
const hashSeed = (str) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 31 + str.charCodeAt(i)) % 1000000;
  }
  return Math.abs(hash) || 1;
};

// Topic-relevant photo for a service.
// If `imageUrl` is set on the service, that exact image is always used.
// Otherwise falls back to `imageKeywords` or the title to auto-fetch a
// matching real photo, with `lock` keeping it stable across reloads.
export const serviceImg = (service, w = 900, h = 700) => {
  if (service.imageUrl) return service.imageUrl;

  const raw = service.imageKeywords || service.title || "technology";
  const keywords = raw
    .toLowerCase()
    .replace(/[^a-z0-9\s,]/g, "")
    .trim()
    .split(/\s+/)
    .slice(0, 3)
    .join(",");
  const lock = hashSeed(service.slug || service.image || raw);
  return `https://loremflickr.com/${w}/${h}/${encodeURIComponent(keywords)}/all?lock=${lock}`;
};
