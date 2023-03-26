import { format, parseISO } from "date-fns";
import { formatToLocalTime } from "utilities/calendar";
import togetherLogo from "../.././assets/images/togetherLogo.svg";
import { useModalContext } from "contexts/ModalContext";
import DataService from "../../services/dataService";
import { useAuthContext } from "contexts/AuthContext";
import { AiOutlineClose } from "react-icons/ai";
import { CiGlobe } from "react-icons/ci";
import { FaRegCalendarCheck } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { FcExpand } from "react-icons/fc";

function EventModal() {
  const {
    activeEvent: { title, startAt, endAt, location },
    handleClose,
  } = useModalContext();

  const month = format(parseISO(startAt), "MMM");
  const date = format(parseISO(startAt), "d");
  const day = format(parseISO(startAt), "eeee");
  const timeRange = `
    ${formatToLocalTime(startAt)} -
    ${formatToLocalTime(endAt)}
   `;
  const timeZone = "America/Chicago";

  return (
    <div className="bg-white font-inconsolata rounded-md">
      <header className="flex items-center justify-between p-3 border-b-4">
        <h1>{title}</h1>
        <button className="border-2 p-1 border-black rounded-md">
          <AiOutlineClose onClick={handleClose} />
        </button>
      </header>
      <section className="flex items-center gap-4 p-4">
        <div className="bg-[#E1E1E1] w-[15%] p-2 text-center rounded-md font-semibold">
          <h2 className="text-[#FF8435]">{month}</h2>
          <span>{date}</span>
        </div>
        <div>
          <h2 className="font-semibold">{day}</h2>
          <span className="font-semibold">{timeRange}</span>
          <div className="flex items-center gap-1 text-sm">
            <CiGlobe className="text-[#3EA6D7] " />
            <span className="text-[#989898]">{timeZone}</span>
          </div>
        </div>
        <div>
          <button className="flex flex-col items-end justify-end border-2 border-[#FF8435] p-3 rounded-md text-2xl text-[#FF8435]">
            <FaRegCalendarCheck />
          </button>
        </div>
      </section>
      <div className="p-4">
        <h1 className="font-semibold mb-3 text-xl">Description</h1>
        <p className="mt-3 border-2 p-1.5 rounded-md">
          Daily Banki streams hosted on Discord to practice interview questions.
          You do not need to be confident in your responses to participate - all
          are weclome!
        </p>
        <div className="flex flex-col items-center justify-center font-semibold">
          <button>
            <FcExpand />
          </button>
        </div>
      </div>
      <div className="p-4">
        <h1 className="font-semibold text-xl">Location</h1>
        <div className="flex items-center gap-1 text-base">
          <GrLocation className="text-[#3EA6D7] " />
          <span>{location}</span>
        </div>
      </div>
    </div>
  );
}

export default EventModal;
