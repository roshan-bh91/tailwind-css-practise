import { ImgHTMLAttributes } from "react";

interface Props {
  label: string;
  IconSrc?: ImgHTMLAttributes<HTMLImageElement>;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
}
const Button = ({
  label,
  IconSrc,
  backgroundColor,
  textColor,
  borderColor,
}: Props) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 font-montserrat border ${
        backgroundColor
          ? `${backgroundColor} ${borderColor} ${textColor}`
          : `border-coral-red bg-coral-red text-white`
      }  text-lg  leading-none rounded-full`}
    >
      {label}
      {IconSrc && <img {...IconSrc} className="ml-2 rounded-full w-5 h-5" />}
    </button>
  );
};

export default Button;
