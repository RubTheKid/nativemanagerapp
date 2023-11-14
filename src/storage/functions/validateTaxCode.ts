export const validIds = ["1708", "3770", "3746"];

export function ValidateTaxCode(taxId: string) {
  if (validIds.includes(taxId)) {
    return true;
  } else {
    return false;
  }
}
