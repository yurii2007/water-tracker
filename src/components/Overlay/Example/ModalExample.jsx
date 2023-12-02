const ModalExample = ({ closeModal, exampleProp }) => {
  return (
    <div>
      <button onClick={closeModal} type="button">
        Close modal
      </button>
      <p>{exampleProp}</p>
    </div>
  );
};

export default ModalExample;
