// Items may not be vertically aligned: check to see if it is:
import { Link } from "react-router-dom";
function AxonProduct() {
  return (
    <div
      // justify-items-stretch
      className={` bg-slate-600 grid grid-cols-3 py-20 gap-8 justify-stretch`}
    >
      <div className="flex justify-center items-center mx-2">
        <Link
          to={"/axon"}
          onClick={() => window.scrollBy(0, 0)}
          className="rounded-xl bg-slate-300 text-black text-center py-12 grow"
        >
          <p className="mx-2">Axon Terminal</p>
        </Link>
      </div>
      <div className=" flex justify-center items-center">
        <Link
          to={"/axon"}
          onClick={() => window.scrollBy(0, 0)}
          className="rounded-xl bg-slate-300 text-black text-center py-12 grow"
        >
          <p className="mx-2">Axon Edit</p>
        </Link>
      </div>
      <div className=" flex justify-center items-center mx-2">
        <Link
          to={"/axon"}
          onClick={() => window.scrollBy(0, 0)}
          className="rounded-xl bg-slate-300 text-black text-center py-12 grow"
        >
          <p className="mx-2">Axon API</p>
        </Link>
      </div>
    </div>
  );
}

export default AxonProduct;
