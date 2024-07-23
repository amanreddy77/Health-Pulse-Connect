import { Calendar, dayjsLocalizer } from "react-big-calendar";
import dayjs from "dayjs";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";
import AddAppointmentModal from "./AddAppointmentModal";
import { getAppointments } from "../../../../services/api";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const AppointmentDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [appointments, setAppointments] = useState();
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const localizer = dayjsLocalizer(dayjs);

  const fetchAppointments = async () => {
    const response = await getAppointments();
    if (response.status === 200) {
      const transformedEvents = response.data.map((appointment) => {
        const startDate = new Date(appointment.date);

        // Parse the time from appointment.time (assuming format is "HH:MM AM/PM")
        const timeParts = appointment.time.match(/(\d+):(\d+)\s*(AM|PM)?/i);
        let hours = parseInt(timeParts[1], 10);
        const minutes = parseInt(timeParts[2], 10);
        const period = timeParts[3];

        // Convert to 24-hour format if necessary
        if (period) {
          if (period.toUpperCase() === "PM" && hours < 12) {
            hours += 12;
          }
          if (period.toUpperCase() === "AM" && hours === 12) {
            hours = 0;
          }
        }

        // Set the start time
        const start = new Date(startDate);
        start.setHours(hours, minutes);

        // Set the end time (assuming each appointment lasts 1 hour)
        const end = new Date(start);
        end.setHours(start.getHours() + 1);

        return {
          title: `Appointment with Dr. ${appointment.doctorId}`, // Customize as needed
          start,
          end,
        };
      });

      console.log("Transformed Events: ", transformedEvents); // Log transformed events

      setAppointments(transformedEvents);
    } else {
      console.log("An error occurred", response);
    }
  };

  useState(() => {
    fetchAppointments();
  }, []);

  return (
    <>
      {isModalOpen && <AddAppointmentModal closeModal={closeModal} />}
      <div className="w-full flex justify-between items-center pt-1 px-4 gap-16">
        <div className="w-full">
          <button
            onClick={() => setIsModalOpen(true)}
            className="text-white p-3 mt-4 rounded-lg hover:scale-[1.03] hover:opacity-90 transition-all duration-150 ease-in-out"
          >
            New appointment
          </button>
          <div className="mt-8">
            {/* <Calendar
              localizer={localizer}
              events={appointments}
              startAccessor="start"
              endAccessor="end"
              style={{ height: 500 }}
            /> */}
            <FullCalendar
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              initialView="dayGridMonth"
              headerToolbar={{
                start: "dayGridMonth,timeGridWeek,timeGridDay",
                center: "title",
                end: "today prev,next",
              }}
              events={appointments}
              height={"70vh"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentDetails;
