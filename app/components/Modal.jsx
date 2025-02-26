import { Modal } from "flowbite-react";

const PopupModal = ({ image, openModal, setOpenModal }) => {
  return (
    <Modal
      size="md"
      show={openModal}
      onClose={() => setOpenModal(false)}
      dismissible
    >
      <Modal.Header>
        <p className="text-2xl font-bold">RULES</p>
      </Modal.Header>

      <Modal.Body className="flex items-center justify-center p-4">
        <img className="h-auto w-full" src={`/${image}.svg`} alt="rules image" />
      </Modal.Body>
    </Modal>
  );
};

export default PopupModal;
