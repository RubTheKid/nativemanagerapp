export const validCpfs = ["28733984000", "88388506072", "39828983079"];

export function ValidateCpf(cpf: string) {
    if (validCpfs.includes(cpf)) {
      return true;
    } else {
      return false;
    }
}
