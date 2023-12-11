import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Notiflix from "notiflix";

import { deleteWaterThunk, getTodayThunk } from "../../redux/Water/WaterThunk";
import { selectorWaterList } from "../../redux/selectors";

import { ReactComponent as EditSvg } from "../../images/svg/edit_icon.svg";
import { ReactComponent as DeleteSvg } from "../../images/svg/trash_icon.svg";

import {
  AddBtnWrapper,
  Amount,
  BtnWrapper,
  InfoWrapper,
  ListItem,
  ListWrapper,
  StyledList,
  SvgGlass,
  Time,
} from "./TodayListModal.styled";
import { useModal } from "../ModalContext/ModalContextProvider";

import DeletePopUp from "./DeletePopUp";

const TodayListModal = () => {
  const waterList = useSelector(selectorWaterList);
  const toggleModal = useModal();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodayThunk());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteWaterThunk(id))
      .unwrap()
      .then((data) => {
        Notiflix.Notify.success(data.message);
        toggleModal();
      })
      .catch(() => {
        Notiflix.Notify.failure("something went wrong");
      });
  };

  return (
    <ListWrapper>
      <h2>Today</h2>
      <StyledList>
        {waterList.map((day) => {
          const dateObject = new Date(day.time);
          const hours = dateObject.getHours();
          const minutes = dateObject.getMinutes();
          const period = hours < 12 ? "AM" : "PM";
          const formattedMinutes = minutes.toString().padStart(2, "0");
          return (
            <ListItem key={day._id}>
              <InfoWrapper>
                <SvgGlass />

                <Amount>{day.amount} ml</Amount>
                <Time>{`${hours}:${formattedMinutes} ${period}`}</Time>
              </InfoWrapper>
              <BtnWrapper>
                <div>
                  <EditSvg />
                </div>
                <div>
                  <DeleteSvg
                    onClick={() =>
                      toggleModal(
                        <DeletePopUp
                          size={"small"}
                          title={"Delete entry"}
                          deleteEntry={() => handleDelete(day._id)}
                        />
                      )
                    }
                  />
                </div>
              </BtnWrapper>
            </ListItem>
          );
        })}
      </StyledList>
      <AddBtnWrapper>
        <button>
          <span>+</span>
          <span>Add water</span>
        </button>
      </AddBtnWrapper>
    </ListWrapper>
  );
};

export default TodayListModal;
