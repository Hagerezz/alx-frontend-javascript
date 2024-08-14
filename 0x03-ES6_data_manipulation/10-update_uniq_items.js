export default function updateUniqueItems(oldmap) {
  if (!(oldmap instanceof Map)) throw Error('Cannot process');
  oldmap.forEach((x, y) => {
    if (x === 1) oldmap.set(y, 100);
  });
  return oldmap;
}
