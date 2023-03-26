import { format, parseISO } from "date-fns";
import { formatToLocalTime } from "utilities/calendar";
import togetherLogo from "../.././assets/images/togetherLogo.svg";
import { useModalContext } from "contexts/ModalContext";
import DataService from "../../services/dataService";
import { useAuthContext } from "contexts/AuthContext";
import { AiOutlineClose } from "react-icons/ai";
import { CiGlobe } from "react-icons/ci";
import { FaRegCalendarCheck } from "react-icons/fa";
import { CiGlobeIoLocationSharp } from "react-icons/ci";

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
          <span>2</span>
        </div>
        <div>
          <h2 className="font-semibold">Thursday</h2>
          <span className="font-semibold">3:30 PM - 4:30 PM</span>
          <div className="flex items-center gap-1 text-sm">
            <CiGlobe className="text-[#3EA6D7] " />
            <span className="text-[#989898]">America/Chicago</span>
          </div>
        </div>
        <div>
          <button className=" border-2 p-3 rounded-md text-2xl ">
            <FaRegCalendarCheck />
          </button>
        </div>
      </section>
      <div>
        <h1>Description</h1>
        <span>
          Daily Banki streams hosted on Discord to practice interview questions.
          You do not need to be confident in your responses to participate - all
          are weclome!
        </span>
      </div>
      <div>
        <h2 className="font-semibold">Location</h2>
        <div className="flex items-center gap-1 text-sm">
          <CiGlobeIoLocationSharp className="text-[#3EA6D7] " />
          <span>Voice-01</span>
        </div>
      </div>
      <div>
        <h3>Click Login to join the event</h3>
        <button>
          <h1>Login withDiscord</h1>
        </button>
      </div>
    </div>
  );
}

export default EventModal;
