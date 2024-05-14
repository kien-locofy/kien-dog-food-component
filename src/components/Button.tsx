import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type ButtonType = {
  text?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propFlexDirection?: CSSProperties["flexDirection"];
  propColor?: CSSProperties["color"];
  propMinWidth?: CSSProperties["minWidth"];
  propTextDecoration?: CSSProperties["textDecoration"];
  propColor1?: CSSProperties["color"];
};

const Button: FunctionComponent<ButtonType> = ({
  text,
  propBackgroundColor,
  propFlexDirection,
  propColor,
  propMinWidth,
  propTextDecoration,
  propColor1,
}) => {
  const buttonStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      flexDirection: propFlexDirection,
    };
  }, [propBackgroundColor, propFlexDirection]);

  const textStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
      minWidth: propMinWidth,
      textDecoration: propTextDecoration,
    };
  }, [propColor, propMinWidth, propTextDecoration]);

  const numberStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  return (
    <button
      className="cursor-pointer [border:none] py-2 px-0 bg-control-primary-info rounded-md flex flex-row items-start justify-start z-[1]"
      style={buttonStyle}
    >
      <div className="flex flex-row items-start justify-start py-0 px-3 gap-[8px]">
        <div
          className="relative text-base leading-[24px] font-medium font-paragraph-1624medium-fs-300-lh-300 text-white text-left inline-block min-w-[89px] whitespace-nowrap"
          style={textStyle}
        >
          {text}
        </div>
        <div
          className="self-stretch w-[22px] relative text-base leading-[24px] font-medium font-paragraph-1624medium-fs-300-lh-300 text-text-invert-secondary-white-075 text-left hidden items-center"
          style={numberStyle}
        >
          24
        </div>
      </div>
    </button>
  );
};

export default Button;
