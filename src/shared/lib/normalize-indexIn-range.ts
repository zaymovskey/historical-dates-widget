export function normalizeIndexInRange(index: number, length: number): number {
  const mod = index % length;
  if (mod < 0) return mod + length;
  return mod;
}
