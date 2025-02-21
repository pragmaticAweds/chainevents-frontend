/* eslint-disable react/prop-types */
export default function Select({ options, onChange, value, ...props }) {
  return (
    <select
      value={value}
      {...props}
      onChange={onChange}
      className="flex w-[115px] bg-[#C3B07A] pl-[33px] text-white text-xs lg:text-sm font-medium cursor-pointer items-center rounded-[4px] px-3 py-2 appearance-none"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
