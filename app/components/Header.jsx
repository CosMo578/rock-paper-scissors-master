const Header = ({ logo, playerScore }) => {
  return (
    <header className="border-headerOutline z-10 flex items-center justify-between rounded-lg border-2 p-4 max-lg:w-full lg:min-w-[50%]">
      <img src={`/${logo}.svg`} alt="logo" />

      <div className="rounded-lg bg-white px-10 py-3 text-center">
        <p className="text-scoreText font-semibold">SCORE</p>
        <h2 className="text-darkText text-6xl font-semibold">{playerScore}</h2>
      </div>
    </header>
  );
};

export default Header;
