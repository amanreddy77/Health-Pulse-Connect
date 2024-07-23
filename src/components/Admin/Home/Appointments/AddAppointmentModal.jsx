import React, { useEffect, useState } from "react";
import { getAllDoctors, createAppointment } from "../../../../services/api";
import { useForm } from "react-hook-form";

function AddAppointmentModal({ closeModal }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "onSubmit", reValidateMode: "onSubmit" });

  const [allDoctors, setAllDoctors] = useState([]);

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
  const [timeOptions, setTimeOptions] = useState([]);

  useEffect(() => {
    generateTimeOptions();
  }, [selectedDate]);

  const handleDateChange = (date) => {
    console.log("Date changed");
    setSelectedDate(date);
    setSelectedTime(null); // Reset time when date changes
  };

  const generateTimeOptions = () => {
    const options = [];
    const currentDate = new Date();
    const selectedDateObj = new Date(selectedDate);

    const isToday =
      selectedDateObj.toDateString() === currentDate.toDateString();
    let startHour = 9;
    const endHour = 17; // 5 PM

    if (isToday) {
      const currentHour = currentDate.getHours();
      startHour = currentHour < endHour ? currentHour + 1 : endHour;
    }

    for (let hour = startHour; hour <= endHour; hour++) {
      const period = hour >= 12 ? "PM" : "AM";
      const displayHour = hour % 12 === 0 ? 12 : hour % 12;
      const timeString = `${displayHour}:00 ${period}`;
      options.push(timeString);
    }

    setTimeOptions(options);
  };

  const getDoctors = async () => {
    const response = await getAllDoctors();
    if (response.status == 200) {
      setAllDoctors(response.data);
    } else {
      console.log("An error occurred");
    }
  };
  useEffect(() => {
    getDoctors();
  }, []);

  const handleFormSubmit = async (data) => {
    console.log("Clicked");
    //converting date to iso format
    const res = await createAppointment(data);
    if (res.status == 200) {
      console.log("Appointment created successfully");
    } else {
      console.log("An error occurred", res);
    }
  };

  return (
    <>
      <div
        className="z-10 modal_wrapper fixed left-[0] right-[0] top-[0] bottom-[0] bg-[rgba(189,_189,_189,_0.6)]"
        onClick={closeModal}
      ></div>
      <div className="z-10 modal_container justify-center fixed top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 w-1/2 min-w-[350px] max-w-screen-sm p-[28px] rounded-[18px] bg-[#5a89b9fb]">
        <div className="modal_heading text-white mb-[16px] text-center text-[26px]">
          <p>Add appointment</p>
        </div>
        <form
          method="post"
          className="Modal_Fields justify-center w-full flex items-center flex-col gap-[12px]"
          onSubmit={handleSubmit(handleFormSubmit)}
        >
          <label className="text-[18px] text-[white]" htmlFor="amount">
            Doctor
          </label>
          <select
            defaultValue={""}
            className="bg-[white] border-[none] h-[36px] px-[8px] py-[2px] text-[16px] rounded-[16px]  text-[gray] w-[34.8%] cursor-pointer outline-none"
            style={{ width: "90%" }}
            {...register("doctorId", {
              required: {
                value: true,
                message: "Doctor is required",
              },
            })}
          >
            <option value="" disabled>
              Select a doctor
            </option>
            {allDoctors.map((doctor, index) => {
              return (
                <option value={doctor._id} key={index}>
                  {doctor.name} ({doctor.specialization})
                </option>
              );
            })}
          </select>
          {errors.doctorId?.message && (
            <div>
              <p
                role="alert"
                style={{ color: "red", fontSize: "16px" }}
                className="login_error_message"
              >
                {errors.doctorId?.message}
              </p>
            </div>
          )}
          <label className="text-[18px] text-[white]" htmlFor="amount">
            Date
          </label>
          <input
            type="date"
            className="box-border text-[gray] w-[90%] bg-[white] border-[none] h-[36px] px-[8px] py-[2px] text-[16px] rounded-[16px] outline-none"
            value={selectedDate.toISOString().split("T")[0]}
            onChange={(e) => handleDateChange(new Date(e.target.value))}
            min={new Date().toISOString().split("T")[0]} // Minimum date is today
            {...register("date", {
              onChange: (e) => {
                handleDateChange(new Date(e.target.value));
              },
              required: {
                value: true,
                message: "Date is required",
              },
            })}
          />
          {errors.date?.message && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "6px",
                margin: "4px 0px",
              }}
            >
              <img
                style={{ height: "18px", color: "red" }}
                src="/error_icons/caution.svg"
                alt=""
              />
              <p
                role="alert"
                style={{ color: "red", fontSize: "16px" }}
                className="login_error_message"
              >
                {errors.date?.message}
              </p>
            </div>
          )}
          <label className="text-[18px] text-[white]" htmlFor="amount">
            Time
          </label>
          <select
            defaultValue={""}
            className="bg-[white] border-[none] h-[36px] px-[8px] py-[2px] text-[16px] rounded-[16px]  text-[gray] w-[34.8%] cursor-pointer outline-none"
            style={{ width: "90%" }}
            {...register("time", {
              required: {
                value: true,
                message: "Time is required",
              },
            })}
          >
            <option value="" disabled>
              Select a time
            </option>
            {timeOptions.map((time, index) => {
              return (
                <option value={time} key={index}>
                  {time}
                </option>
              );
            })}
          </select>
          {errors.time?.message && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "6px",
                margin: "4px 0px",
              }}
            >
              <p
                role="alert"
                style={{ color: "red", fontSize: "16px" }}
                className="login_error_message"
              >
                {errors.time?.message}
              </p>
            </div>
          )}

          <div className="modal_buttons mt-[24px] w-full flex justify-between">
            <button
              className="bg-[#2d6195] w-[fit-content] px-[12px] py-[8px] border-[none] rounded-[4px] text-center text-[white] text-[16px] font-medium cursor-pointer hover:bg-[#244b72] hover:[transition:all_0.3s]"
              onClick={closeModal}
            >
              Cancel
            </button>
            <button
              className="bg-[#2d6195] w-[fit-content] px-[12px] py-[8px] border-[none] rounded-[4px] text-center text-[white] text-[16px] font-medium cursor-pointer hover:bg-[#244b72] hover:[transition:all_0.3s]"
              type="submit"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddAppointmentModal;
