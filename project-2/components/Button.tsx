import Image from "next/image";
import { ComponentProps } from "react";

interface ButtonProps {
  type: HTMLButtonElement["type"];
  title: string;
  icon?: string;
  variant?: ComponentProps<"button">["className"];
}
const Button = ({
  type = "button",
  title,
  icon,
  variant = "",
}: ButtonProps) => {
  return (
    <button
      className={`flexCenter gap-3 rounded-full border ${variant}`}
      type={type}
    >
      {icon && <Image alt={title} width={24} height={24} src={icon} />}
      <label className="bold-16 whitespace-nowrap">{title}</label>
    </button>
  );
};

export default Button;
