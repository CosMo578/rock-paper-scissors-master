import { Link } from 'react-router';

const Footer = ({ setOpenModal }) => {
  return (
    <div className="flex w-full items-center justify-between gap-6 self-start text-center max-lg:flex-col max-lg:items-stretch lg:mt-20">
      <Link
        to="/"
        className="rounded-lg border border-white px-8 py-2 font-semibold"
      >
        Back to Home
      </Link>

      <button
        className="cursor-pointer rounded-lg border border-white px-8 py-2 font-semibold"
        onClick={() => setOpenModal(true)}
      >
        RULES
      </button>
    </div>
  );
};

export default Footer;
