import { ImgHTMLAttributes } from "react";

interface Props {
  label: string;
  IconSrc?: ImgHTMLAttributes<HTMLImageElement>;
}
const Button = ({ label, IconSrc }: Props) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 font-montserrat border border-coral-red bg-coral-red text-lg text-white leading-none rounded-full">
      {label}
      {IconSrc && <img {...IconSrc} className="ml-2 rounded-full w-5 h-5" />}
    </button>
  );
};

export default Button;
