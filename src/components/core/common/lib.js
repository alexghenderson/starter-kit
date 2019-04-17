export const getUnitPixels = (units) => {
  if(units === 0) return '0px';
  
  const val = `${Math.pow(2, Math.abs(units) + 1)}px`;
  if(units < 0) {
    return `-${val}`;
  }
  return val;
};