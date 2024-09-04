import { getDocs } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import colRef from "../services/firabase";
import { Appointment } from "devextreme/ui/scheduler";

interface DataAppointment extends Appointment {
  id: string;
}

const useData = () => {
  const [dbData, setData] = useState<{ Appointment: DataAppointment }[] | []>(
    []
  );
  const [error, setError] = useState([]);
  const renderAfterCalled = useRef(false); // strictMode

  useEffect(() => {
    if (!renderAfterCalled.current) {
      getDocs(colRef)
        .then((snapschot) => {
          snapschot.docs.forEach((doc: DataAppointment) => {
            setData((prev) => [
              ...prev,
              {
                ...doc.data(),
                endDate: new Date(
                  doc.data().endDate.seconds * 1000 +
                    doc.data().endDate.nanoseconds
                ),
                startDate: new Date(
                  doc.data().startDate.seconds * 1000 +
                    doc.data().startDate.nanoseconds
                ),
                id: doc.id,
              },
            ]);
          });
        })
        .catch((err) => {
          setError(err);
        });
    }
    renderAfterCalled.current = true;
  }, []);
  return { dbData, error };
};

export default useData;
