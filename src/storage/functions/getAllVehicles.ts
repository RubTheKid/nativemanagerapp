import AsyncStorage from "@react-native-async-storage/async-storage";

import { SUPPLIERCONTROL_COLLECTION } from "../DTOs/StorageConfig";

import { VehicleDTO } from "../DTOs/VehicleDTO";

export async function getAllVehicles() {
  try {
    const storage = await AsyncStorage.getItem(SUPPLIERCONTROL_COLLECTION);

    const spending: VehicleDTO[] = storage ? JSON.parse(storage) : [];
    return spending;
  } catch (error) {
    throw error;
  }
}
