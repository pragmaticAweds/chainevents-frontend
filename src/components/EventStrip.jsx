import Image from "next/image";
import Link from "next/link";

const sampleThumbnail = "/assets/sample-thumbnail.png";
const calendar = "/assets/calender.svg";

function EventStrip({ thumbnail, title, subTitle, date, eventId, location }) {
  return (
    <div className="w-full py-[22px] px-[24px] bg-[#0D0C0C] flex justify-between items-center gap-x-8">
      <img src={thumbnail || sampleThumbnail} alt={title} />

      <div className="flex flex-col text-left capitalize gap-x-[11px]">
        <h3 className="mb-1 text-xl font-medium text-white">{title}</h3>
        <h5 className="text-sm text-[#C4C4C4] pb-[11px] border-b-white border-b-[0.3px]">
          {subTitle}
        </h5>
        <div className="space-y-2 text-xs">
          <span className="gap-x-2 mt-2 flex items-center">
            <img src={calendar} alt="Calendar icon" />
            {date}
          </span>
          <span className="flex items-center gap-x-2">
            <Image src="/assets/location.svg" alt="" width={14} height={14} />
            {location}
          </span>
        </div>
      </div>
      <Link
        href={`/app/event/${eventId}`}
        className="py-4 px-[44px] bg-white rounded-[5px] text-sm font-medium text-[#121212]"
      >
        Go to event
      </Link>
    </div>
  );
}

export default EventStrip;
