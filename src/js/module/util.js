function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randFunc(min, max) {
  return rand.bind(null, min, max);
}

module.exports = {
  rand,
  randFunc
};
