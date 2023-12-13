import AsyncStorage from "@react-native-async-storage/async-storage";

import { VehicleDTO } from "./VehicleDTO";
import { SUPLLIERCONTROLL_COLLECTION } from "../StorageConfig";
import { supllierGetAll } from "./supplierGetAll";

export async function spendingCreate(newVehicle: VehicleDTO) {
  try {
    const supplierControl = await supllierGetAll();

    const storage = [...supplierControl, newVehicle];

    const data = await AsyncStorage.setItem(
      SUPLLIERCONTROLL_COLLECTION,
      JSON.stringify(storage)
    );
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
