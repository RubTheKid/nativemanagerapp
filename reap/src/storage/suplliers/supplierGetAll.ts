import AsyncStorage from "@react-native-async-storage/async-storage";

import { SUPLLIERCONTROLL_COLLECTION } from "../StorageConfig";

import { VehicleDTO } from "./VehicleDTO";

export async function supllierGetAll() {
  try {
    const storage = await AsyncStorage.getItem(SUPLLIERCONTROLL_COLLECTION);

    const spending: VehicleDTO[] = storage ? JSON.parse(storage) : [];
    return spending;
  } catch (error) {
    throw error;
  }
}
