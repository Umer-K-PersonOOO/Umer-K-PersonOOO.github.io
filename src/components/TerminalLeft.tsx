interface Props {
  text: string;
  name: string;
  alt?: string;
  handleClick: Function;
  bgColor?: string;
  textColor?: string;
}

const defaultProps = {
  alt: "Image",
  bgColor: "bg-amber-50 ",
  textColor: "black",
};

function TerminalLeft(propsIn: Props) {
  const props = { ...defaultProps, ...propsIn };
  // console.log(`bg-${props.bgColor}`);
  return (
    <div
      className={` ${props.bgColor} py-3 flex flex-row overflow-y-visible overflow-x-clip items-center`}
    >
      <div className="basis-1/3">
        <img
          className=" overflow-x-hidden overflow-y-visible object-scale-down px-6 py-2 transform transition-transform duration-300 scale-[1.2] ml-12 hover:scale-150"
          src={`../static/${props.name}`}
          alt={props.alt}
          onClick={() => {
            props.handleClick(props.name);
          }}
        />
      </div>
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

export default TerminalLeft;
