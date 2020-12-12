export function shuffle(array) {
  return array
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);
}

export function fillArrayWithRange(start, end) {
  return Array.from({ length: end - start + 1 }, (v, i) => start + i);
}
