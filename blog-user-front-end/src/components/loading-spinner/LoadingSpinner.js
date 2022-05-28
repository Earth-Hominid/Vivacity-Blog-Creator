import Spinner from '../../assets/icons/spinner.png';

const LoadingSpinner = () => {
  return (
    <>
      <div
        className="
        flex
        align-center
        justify-center
        z-[5000]
        inset-0
      fixed"
      >
        <div
          className="
          h-16
          w-16
          animate-spin"
        >
          {Spinner}
        </div>
      </div>
    </>
  );
};

export default LoadingSpinner;
