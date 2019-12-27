export function isAM(given: Date | number): boolean {
  return checkAm(given instanceof Date ? given.getHours() : given);
}

export function isPM(given: Date | number): boolean {
  return !isAM(given);
}

function checkAm(hour: number) {
  return hour < 12 ? true : false;
}
