import Spinner from '../../assets/icons/spinner.png';

const LoadingSpinner = () => {
  return (
    <>
      <div className="flex justify-center items-center  inset-0 fixed bg-white">
        <div className="animate-spin h-32 w-32">
          <img
            className="
             cursor-pointer w-44"
            src={Spinner}
            alt="spinner logo"
          />
        </div>
      </div>
    </>
  );
};

export default LoadingSpinner;
