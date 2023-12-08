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

const TodayListModal = () => {
  const waterList = useSelector(selectorWaterList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodayThunk());
  }, [dispatch]);

  const handleModalOpen = () => {
    console.log(123);
  };
  const handleDelete = (id) => {
    dispatch(deleteWaterThunk(id))
      .unwrap()
      .then((data) => {
        Notiflix.Notify.success(data.message);
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
          return (
            <ListItem key={day._id}>
              <InfoWrapper>
                <SvgGlass />

                <Amount>{day.amount} ml</Amount>
                <Time>{`${hours}:${minutes} ${period}`}</Time>
              </InfoWrapper>
              <BtnWrapper>
                <div>
                  <EditSvg onClick={handleModalOpen} />
                </div>
                <div>
                  <DeleteSvg onClick={() => handleDelete(day._id)} />
                </div>
              </BtnWrapper>
            </ListItem>
          );
        })}
      </StyledList>
      <AddBtnWrapper>
        <button>
          {/* <PlusSvg /> */}
          <span>+</span>
          <span>Add water</span>
        </button>
      </AddBtnWrapper>
    </ListWrapper>
  );
};

export default TodayListModal;
