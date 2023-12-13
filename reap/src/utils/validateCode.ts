export const validCodes = ["001394", "007788", "001020", "003040"];

export function ValidateCode(cpf: string) {
  if (validCodes.includes(cpf)) {
    return true;
  } else {
    return false;
  }
}
