import { doc, updateDoc } from "firebase/firestore";
import colRef from "./firabase";
import { Appointment } from "devextreme/ui/scheduler";

const updateAppointment = (appointment: Appointment, docId: string) => {
  const docRef = doc(colRef, docId);
  updateDoc(docRef, { ...appointment });
};

export default updateAppointment;
