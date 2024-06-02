/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
export default function divideFunction(numerator, denominator) {
  try {
    return numerator / denominator;
    // division by zero doesn't actually return an error in js so this is useless
  } catch (error) {
    return error;
  }
}
