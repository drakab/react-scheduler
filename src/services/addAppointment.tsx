import { addDoc } from "firebase/firestore";
import colRef from "./firabase";
import { Appointment } from "devextreme/ui/scheduler";

export const addAppointment = (appointment: Appointment) => {
  addDoc(colRef, { ...appointment });
};
