import AsyncStorage from "@react-native-async-storage/async-storage";

import { SUPPLIERCONTROL_COLLECTION } from "../DTOs/StorageConfig";

import { SellerControlDTO } from "../DTOs/SellerControlDTO";


export async function getAllSellers() {
  try {
    const storage = await AsyncStorage.getItem(SUPPLIERCONTROL_COLLECTION);

    const spending: SellerControlDTO[] = storage ? JSON.parse(storage) : [];
    return spending;
  } catch (error) {
    throw error;
  }
}
