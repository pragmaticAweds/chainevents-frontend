import TicketsIcon from "../icons/TicketsIcon";
import XIcon from "../icons/XIcon";

export default function PriceModal() {
  return (
    <div className="absolute inset-0 flex justify-center pt-[150px] bg-black bg-opacity-80 backdrop-blur-sm">
      <div className="p-[34px] pb-[111px] border-[0.4px] rounded-[10px] border-[#F5DB95CC] flex flex-col relative h-fit bg-[#0E0E0F] text-[#D9D9D9] w-[492px] max-w-[492px] font-normal">
        <button className="absolute top-4 right-4 rounded-full w-5 h-5 bg-[#D9D9D9] text-black flex justify-center items-center">
          <XIcon />
        </button>
        <h3 className="flex items-center gap-x-1 justify-center pb-5 border-b-[#C3B07A] border-b-[0.5px] w-[80%] mx-auto text-base leading-5">
          <TicketsIcon />
          Ticket price set
        </h3>
        <p className="mt-4 text-sm text-center mb-5">
          Accept payments in STRK, USDT, USDC, or LORDS. Configure your ticket
          options and ensure your event is ready for attendees.
        </p>

        <h2 className="text-[64px] leading-[80px] font-medium mt-[57px] mb-2 text-center">
          $50
        </h2>
        <p className="text-base font- text-[#D9D9D9] text-center">
          General entry ticket price
        </p>
      </div>
    </div>
  );
}
