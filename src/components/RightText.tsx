interface Props {
  text: string;
  name: string;
  alt?: string;
}

const defaultProps = {
  alt: "Image",
};

function RightText(propsIn: Props) {
  const props = { ...defaultProps, ...propsIn };
  return (
    <div className="bg-amber-50 py-3 flex flex-row overflow-y-visible overflow-x-clip items-center">
      <div className="basis-1/3">
        <img
          className=" overflow-x-hidden overflow-y-visible object-scale-down px-6 py-2 transform transition-transform duration-300 scale-75 hover:scale-125"
          src={`../static/${props.name}`}
          alt={props.alt}
        />
      </div>
      <div className="basis-[63.8888888888%]">
        <p className="text-right">{props.text}</p>
      </div>
      <div className="shrink basis-[2.7777777777%]"></div>
    </div>
  );
}

export default RightText;
