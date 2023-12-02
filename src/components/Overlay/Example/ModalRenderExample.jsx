import { useModal } from "../../ModalContext/ModalContextProvider";

import Overlay from "../Overlay";
import ModalExample from "./ModalExample";

const ModalRenderExample = () => {
  const { openModal } = useModal();

  return (
    <div>
      <button onClick={openModal} type="button">
        Open Modal
      </button>
      <Overlay
        modal={ModalExample}
        modalProps={{ exampleProp: "Example how to use modal window" }}
      />
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
        <button onClick={openModal}>Button to open modal</button>
        <Overlay modal={yourModal} modalProps={{someProp: value}} />
        </YourComponent>
        )
}

modal(Required): модальне вікно, передане як функція
НЕПРАВИЛЬНО modal={<YourModal />}
ПРАВИЛЬНО modal={YourModal}

modalProps(optional): обєкт з пропсами, якщо їх потрібно передати безпосередньо з компонента,
 який відкриває модальне вікно в саме модальне вікно

*/
