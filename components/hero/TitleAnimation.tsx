const TitleAnimation = () => {
  return (
    <div className="w-full h-[55vh] relative flex justify-center items-center">
      <h1 className="text-center w-full">
        <span className="text-responsive block leading-none">
          Health insurance that doesn't
        </span>
        <div
          id="animation"
          className="border-2 border-cyan-500 flex flex-row justify-center items-center leading-none"
        >
          <span className="text-responsive">get in</span>
          <div
            id="rectangle"
            className="flex-1 h-[1em] border-2 rounded-2xl border-amber-400 mx-4"
          ></div>
          <span className="text-responsive">the way</span>
        </div>
      </h1>
    </div>
  );
};

export default TitleAnimation;
