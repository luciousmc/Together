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

function EventModal(props) {
  return (
    <div className="bg-white">
      <header className="flex items-center justify-between p-3 border-b-4">
        <h1>Banki Session</h1>
        <button className="border-2 p-1 border-black rounded-md">
          <AiOutlineClose />
        </button>
      </header>
    </div>
  );
}

export default EventModal;
