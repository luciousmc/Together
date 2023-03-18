import React from "react";
import { GrCalendar, GrLanguage } from "react-icons/gr";
import { FaRegClock } from "react-icons/fa";
// import { IoIosRepeat } from "react-icons/io";
import { IoLocationOutline, IoPersonOutline } from "react-icons/io5";
import { format, parseISO } from "date-fns";
import { formatToLocalTime } from "utilities/calendar";
import togetherLogo from "../.././assets/images/togetherLogo.svg";
import { useModalContext } from "contexts/ModalContext";
import dataService from "../../services/dataService";
import { useAuthContext } from "contexts/AuthContext";
import { AiOutlineClose } from "react-icons/ai";
import { CiGlobe } from "react-icons/ci";

function EventModal(props) {
  return (
    <div className="bg-white">
      <header className="flex items-center justify-between p-3 border-b-4">
        <h1>Banki Session</h1>
        <button className="border-2 p-1 border-black rounded-md">
          <AiOutlineClose />
        </button>
      </header>
      <section className="flex items-center gap-4 p-3">
        <div className="bg-[#E1E1E1] w-[15%] p-2 text-center rounded-md font-semibold">
          <h2 className="text-[#FF8435]">Feb</h2>
          <h2>2</h2>
        </div>
        <div>
          <h2 className="font-semibold">Thursday</h2>
          <h2 className="font-semibold">3:30 PM - 4:30 PM</h2>
          <div className="flex items-center gap-1 text-sm">
            <CiGlobe className="text-[#3EA6D7] " />
            <span className="text-[#989898]">America/Chicago</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EventModal;
