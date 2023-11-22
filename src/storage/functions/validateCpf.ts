export const validCpfs = ["00000000000", "11111111111", "22222222222"];

export function ValidateCpf(cpf: string) {
    if (validCpfs.includes(cpf)) {
      return true;
    } else {
      return false;
    }
}
