import { format, parseISO } from "date-fns";
import { formatToLocalTime } from "utilities/calendar";
import { useModalContext } from "contexts/ModalContext";
import DataService from "../../services/dataService";
import { useAuthContext } from "contexts/AuthContext";
import { AiOutlineClose } from "react-icons/ai";
import { CiGlobe } from "react-icons/ci";
import { FaRegCalendarCheck } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";

function EventModal() {
  const { isAuthenticated } = useAuthContext();
  const {
    activeEvent: { title, description, startAt, endAt, location, user: author },
    handleClose,
  } = useModalContext();

  const month = format(parseISO(startAt), "MMM");
  const date = format(parseISO(startAt), "d");
  const day = format(parseISO(startAt), "eeee");
  const timeRange = `
    ${formatToLocalTime(startAt)} -
    ${formatToLocalTime(endAt)}
   `;
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return (
    <div className="bg-white font-inconsolata rounded-md">
      <header className="flex items-center justify-between p-3 border-b-4">
        <h1 className="font-extrabold uppercase">{title}</h1>
        <button
          onClick={handleClose}
          className="border-2 p-1 border-black rounded-md"
        >
          <AiOutlineClose />
        </button>
      </header>
      <section className="flex items-center gap-4 py-4 px-7">
        <div className="bg-[#E1E1E1] w-[15%] py-2 text-center rounded-md font-semibold">
          <h2 className="text-[#FF8435]">{month}</h2>
          <span>{date}</span>
        </div>
        <div className="flex-grow">
          <h2 className="font-semibold text-lg">{day}</h2>
          <span className="font-semibold">{timeRange}</span>
          <div className="flex items-center gap-1 text-sm">
            <CiGlobe className="text-[#3EA6D7] " />
            <span className="text-[#989898]">{timeZone}</span>
          </div>
        </div>
        <div>
          <button className="border-2 border-[#FF8435] p-3 rounded-md text-2xl text-[#FF8435]">
            <FaRegCalendarCheck />
          </button>
        </div>
      </section>
      <div className="p-4">
        <h2 className="font-semibold mb-3 text-xl">Description</h2>
        <p className="mt-3 border-2 px-1.5 py-3 rounded-md">{description}</p>
      </div>
      <div className="py-4 px-14 flex justify-between">
        <div className="flex flex-col items-center">
          <h2 className="font-semibold text-xl">Location</h2>
          <div className="text-base flex flex-grow items-center justify-center gap-2">
            <IoLocationSharp className="text-[#3EA6D7]" />
            <span>{location}</span>
          </div>
        </div>

        {/* Author only shown if user is logged in */}
        {isAuthenticated() && (
          <div>
            <h1 className="font-semibold text-xl text-center">Author</h1>
            <div className="flex gap-2 items-center">
              <div className="w-14">
                {author.avatar ? (
                  <img
                    className="w-full h-full object-contain rounded-full"
                    // should be able to use avatarURL
                    // need to figure out how to get this virtual field from backend
                    // currently passing "avatar" and "discordId" fields from db
                    // src={author.avatarURL}
                    src={`https://cdn.discordapp.com/avatars/${author.discordId}/${author.avatar}.webp`}
                    alt="Avatar"
                  />
                ) : (
                  <RxAvatar className="w-10 h-10" />
                )}
              </div>
              <div>
                <h2>{author.displayName}</h2>
                <span>100Devs</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {!isAuthenticated() && (
        <div className="flex flex-col items-center justify-center font-semibold p-6">
          <p>
            Click <span className="text-[#FF8435]">Login</span> to join the
            event
          </p>
          <button className="p-2.5 bg-[#E1E1E1] border-2 rounded-3xl m-0 text-[#FF8435] text-xl drop-shadow-[rgdb(0,0,0,0.25)]">
            Login with Discord
          </button>
        </div>
      )}
    </div>
  );
}

export default EventModal;
