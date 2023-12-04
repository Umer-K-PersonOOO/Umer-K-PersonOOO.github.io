// Items may not be vertically aligned: check to see if it is:
function AEPlannedFeatures() {
  return (
    <div className={` bg-slate-600 grid xl:grid-cols-4 sm:grid-rows-4 py-20`}>
      <div className="xl:col-span-1 flex justify-center items-center mx-2">
        <p className={`text-center text-white text-6xl font-bold`}>
          Planned Features
        </p>
      </div>
      <div className="xl:col-span-3 sm:row-span-3">
        <div className="grid xl:grid-cols-3 sm:grid-rows-3 gap-8 justify-items-stretch mx-12">
          <div className="rounded-xl bg-slate-300 text-black text-center py-12">
            Question - Answering about your codebase
          </div>
          <div className="rounded-xl bg-slate-300 text-black text-center py-12">
            Inline code generation by natural language resources
          </div>
          <div className="rounded-xl bg-slate-300 text-black text-center py-12">
            Wrtie psuedocode and compile them in any language
          </div>
        </div>
      </div>
    </div>
  );
}

export default AEPlannedFeatures;
