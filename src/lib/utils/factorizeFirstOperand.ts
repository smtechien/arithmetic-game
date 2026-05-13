export function factorizeFirstOperand(value: number):number[] {
  const isEven = value % 2 === 0;
  const max = Math.sqrt(value);
  const increment = isEven ? 1 : 2;
  let factors = [1, value];

  for (let currentFactor = isEven ? 2:3; currentFactor <= max; currentFactor += increment) {
    if (value % currentFactor !== 0) continue;
    // if value % currentFactor === 0
    factors.push(currentFactor);
    let compliment = value / currentFactor;
    if (compliment !== currentFactor) {
      factors.push(compliment);
    }
  }
  return factors;
}
