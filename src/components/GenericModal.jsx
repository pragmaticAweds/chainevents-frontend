/* eslint-disable react/prop-types */
function GenericModal({ title, children, mainInfo }) {
  return (
    <div className="absolute inset-0 z-[40] flex justify-center items-center bg-white bg-opacity-45 backdrop-blur-sm text-black">
      <div className=" w-[451px] rounded-[10px] bg-white px-[52px] pb-[27px] pt-[21px] flex flex-col items-center">
        <h3 className="text-center pb-[15px] border-b-[1px] border-b-[#A9396C] text-base font-semibold mb-4">
          {title}
        </h3>
        <p className="text-sm text-center">{mainInfo}</p>
        {children}
      </div>
    </div>
  );
}

export default GenericModal;
