// Items may not be vertically aligned: check to see if it is:
function PlannedFeatures() {
  return (
    <div className={` bg-slate-600 grid grid-cols-4 py-20`}>
      <div className="col-span-1">
        <p className={`text-center text-white text-6xl  font-bold`}>
          Planned Features
        </p>
      </div>
      <div className="col-span-3">
        <div className="grid grid-cols-2 gap-8 justify-items-stretch mx-14">
          <div className="rounded-xl bg-slate-300 text-black text-center py-12">
            Automate Code Debugging
          </div>
          <div className="rounded-xl bg-slate-300 text-black text-center py-12">
            Web search and results summerization
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlannedFeatures;
