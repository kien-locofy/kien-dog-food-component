import { twMerge } from "tailwind-merge";

type ButtonProps = {
  title: string;
  variant: "primary" | "secondary";
  onClick?: () => void;
};

export default function Button({ title, variant, onClick }: ButtonProps) {
  return (
    <button
      className={twMerge(
        "px-[12px] py-[8px] flex items-center justify-center text-[16px]",
        variant == "primary" && "bg-[#008FF8] text-white rounded-[6px]",
        variant == "secondary" && "text-[#006DCA]"
      )}
      onClick={() => {
        if (onClick) onClick();
      }}
    >
      {title}
    </button>
  );
}
