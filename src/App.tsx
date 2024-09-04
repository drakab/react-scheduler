import Scheduler, { SchedulerTypes } from "devextreme-react/scheduler";

import { locale, loadMessages } from "devextreme/localization";
import plMessages from "devextreme/localization/messages/pl.json";
locale("pl");
loadMessages(plMessages);

import useData from "./hooks/useData.tsx";
import { addAppointment } from "./services/addAppointment.tsx";
import { deleteAppointment } from "./services/deleteAppointment.tsx";
import updateAppointment from "./services/updateAppointment.tsx";

const currentDate = new Date();
const views: SchedulerTypes.ViewType[] = ["day", "week", "workWeek", "month"];

const App = () => {
  const { error, dbData } = useData();
  return (
    <>
      {error && <p>{error}</p>}
      <Scheduler
        timeZone="Europe/Warsaw"
        dataSource={dbData}
        views={views}
        defaultCurrentView="week"
        defaultCurrentDate={currentDate}
        height={600}
        cellDuration={60}
        firstDayOfWeek={1}
        startDayHour={8}
        endDayHour={20}
        onAppointmentDeleting={(e) => deleteAppointment(e.appointmentData.id)}
        onAppointmentAdding={(e) => addAppointment(e.appointmentData)}
        onAppointmentUpdated={(e) =>
          updateAppointment(e.appointmentData, e.appointmentData.id)
        }
      ></Scheduler>
    </>
  );
};

export default App;
