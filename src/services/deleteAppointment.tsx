import { doc, deleteDoc } from "firebase/firestore";
import colRef from "./firabase";

export const deleteAppointment = (idToDelete: string) => {
  const docRef = doc(colRef, idToDelete);
  deleteDoc(docRef);
};
