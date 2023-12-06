interface Props {
  handleClick: Function;
}

function RightItalized(props: Props) {
  return (
    <div
      className={` bg-cat-wild-sand py-3 flex flex-row overflow-y-visible overflow-x-clip items-center`}
    >
      <div className="basis-1/3">
        <img
          className=" overflow-x-hidden overflow-y-visible object-scale-down h-80 ml-7 px-6 py-2 transform transition-transform duration-300 scale-75 hover:scale-125"
          src={`../static/sci_stuff.png`}
          alt="Screenshot"
          onClick={() => {
            props.handleClick("sci_stuff.png");
          }}
        />
      </div>
      <div className="basis-[63.8888888888%] flex">
        <p className={`text-right xl:text-4xl font-light ml-16`}>
          A second brain that lets you focus on{" "}
          <span className="italic font-bold">your</span> science instead of
          computer science
        </p>
      </div>
      <div className="shrink basis-[2.7777777777%]"></div>
    </div>
  );
}

export default RightItalized;
