import { modalNames } from "../../../constants/modals";
import { useModal } from "../../ModalContext/ModalContextProvider";

const ModalRenderExample = () => {
  const { openModal } = useModal();

  return (
    <div>
      <button onClick={() => openModal(modalNames.todayList)} type="button">
        Open Modal
      </button>
    </div>
  );
};

export default ModalRenderExample;

/* 
HOW TO USE MODAL

Як використовувати модальне вікно:

const YourComponent = () => {
    const {openModal} = useModal();
    ...your code

    return (
        <YourComponent>
        <button onClick={() => openModal(modalNames.yourModal)}>Button to open modal</button>
        </YourComponent>
        )
}
*/
