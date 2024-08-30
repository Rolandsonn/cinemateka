import { ColorRing } from "react-loader-spinner";
const Loader = () => {
  return (
    <div className="laoder">
      <ColorRing
        visible={true}
        height="280"
        width="280"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
      />
    </div>
  );
};

export default Loader;
