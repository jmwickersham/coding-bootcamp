/* Contains Riot Points conversion logic */

const riotPointsToUsdRatio = 130;

exports.rpToUsd = function(riotPoints) {
  let usd = riotPoints / riotPointsToUsdRatio;
  let roundedUsd = usd.toFixed(2);

  return roundedUsd;
};

exports.usdToRp = function(usd) {
  let riotPoints = usd * riotPointsToUsdRatio;

  if (usd > 100)
    riotPoints += 2000;
  else if (usd > 50)
    riotPoints += 700;
  else if (usd > 35)
    riotPoints += 450;
  else if (usd > 20)
    riotPoints += 200;
  else if (usd > 10)
    riotPoints += 80;

  return riotPoints;
};

// Unit tests

let actualValue = exports.rpToUsd(260);
let expectedValue = '2.00';

console.log('rpToUsd Test Passing?', actualValue === expectedValue);

actualValue = exports.usdToRp(2);
expectedValue = 260;

console.log('usdToRp Test Passing?', actualValue === expectedValue);

// add bonus to conversions above these thresholds: $10 - 80, $20 - 200, $35 - 450, $50 - 700, $100 - 2000
actualValue = exports.usdToRp(25);
expectedValue = 3450;

console.log('usdToRp Bonus Test Passing?', actualValue === expectedValue);
