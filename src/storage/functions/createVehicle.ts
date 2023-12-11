import AsyncStorage from "@react-native-async-storage/async-storage";

import { VehicleDTO } from "../DTOs/VehicleDTO";
import { SUPPLIERCONTROL_COLLECTION } from "../DTOs/StorageConfig";
import { getAllVehicles } from "./getAllVehicles";

export async function CreateVehicle(newVehicle: VehicleDTO) {
  try {
    const supplierControl = await getAllVehicles();

    const storage = [...supplierControl, newVehicle];

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
