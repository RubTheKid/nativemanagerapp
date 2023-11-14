import AsyncStorage from "@react-native-async-storage/async-storage";

import { SellerControlDTO } from "../DTOs/SellerControlDTO";
import { SUPPLIERCONTROL_COLLECTION } from "../DTOs/StorageConfig";
import { getAllSellers } from "./getAllSellers";

export async function spendingCreate(newSpending: SellerControlDTO) {
  try {
    const supplierControl = await getAllSellers();

    const storage = [...supplierControl, newSpending];

    const data = await AsyncStorage.setItem(
        SUPPLIERCONTROL_COLLECTION,
      JSON.stringify(storage)
    );
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
