import Image from "next/image";
import { ComponentProps } from "react";

interface ButtonProps {
  type: HTMLButtonElement["type"];
  title: string;
  icon?: string;
  variant?: ComponentProps<"button">["className"];
  full?: boolean;
}
const Button = ({
  type = "button",
  title,
  icon,
  variant = "",
  full = false,
}: ButtonProps) => {
  return (
    <button
      className={`flexCenter gap-3 rounded-full border ${variant} ${
        full && `w-full`
      }`}
      type={type}
    >
      {icon && <Image alt={title} width={24} height={24} src={icon} />}
      <label className="bold-16 whitespace-nowrap cursor-pointer">
        {title}
      </label>
    </button>
  );
};

export default Button;
