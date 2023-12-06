interface Props {
  text: string;
  name: string;
  alt?: string;
  handleClick: Function;
  bgColor?: string;
  textColor?: string;
  passIn?: string;
}

const defaultProps = {
  alt: "Image",
  bgColor: "bg-amber-50 ",
  textColor: "black",
  passIn: "",
};

function RightText(propsIn: Props) {
  const props = { ...defaultProps, ...propsIn };
  // console.log(`bg-${props.bgColor}`);
  return (
    <div
      className={` ${props.bgColor} py-3 flex flex-row overflow-y-visible overflow-x-clip items-center`}
    >
      <img
        className={`basis-1/3 overflow-x-hidden overflow-y-visible object-scale-down px-6 py-2 transform transition-transform duration-300 scale-75 hover:scale-100 ${props.passIn}`}
        src={`../static/${props.name}`}
        alt={props.alt}
        onClick={() => {
          props.handleClick(props.name);
        }}
      />
      <div className="basis-[63.8888888888%]">
        <p
          className={`text-right xl:text-4xl font-light ml-10 ${props.textColor}`}
        >
          {props.text}
        </p>
      </div>
      <div className="shrink basis-[2.7777777777%]"></div>
    </div>
  );
}

export default RightText;
