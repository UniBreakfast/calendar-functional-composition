export { getFrom }

function getFrom(arr, i, n) {
  return arr[(i + n + arr.length) % arr.length]
}
