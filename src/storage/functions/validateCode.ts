export const validCodes = ["001394", "007788", "001020", "003040"];

export function ValidateCode(code: string) {
  if (validCodes.includes(code)) {
    return true;
  } else {
    return false;
  }
}
