const Step1 = ({
  children,
  gameOptions,
  width,
  height,
  setPlayerSelection,
}) => {
  return (
    <div
      className={`relative max-lg:my-20 max-lg:scale-[0.8] lg:mt-36`}
      style={{ width: width, height: height }}
    >
      {children}

      {gameOptions.map(({ title, style }) => (
        <button
          key={title}
          style={style}
          className={`${title} absolute w-max cursor-pointer rounded-full p-3`}
          onClick={() => setPlayerSelection(title)}
        >
          <div className="optionContainer rounded-full bg-white p-7">
            <img
              className="max-size-20 size-16 object-contain"
              src={`/icon-${title}.svg`}
              alt={title}
            />
          </div>
        </button>
      ))}
    </div>
  );
};

export default Step1;
