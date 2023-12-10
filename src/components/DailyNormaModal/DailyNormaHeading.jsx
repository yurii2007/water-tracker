import { GenderFormulas, VolumeNorm } from "./DailyNormaModal.styled";

const DailyNormaHeading = () => {
  return (
    <>
      <GenderFormulas>
        <p>
          For girl:
          <span> V=(M*0.03) + (T*0.4)</span>
        </p>
        <p>
          For man:
          <span> V=(M*0.04) + (T*0.6)</span>
        </p>
      </GenderFormulas>
      <VolumeNorm>
        <span>*</span>&nbsp;V is the volume of the water norm in liters per day, M is your
        body weight, T is the time of active sports, or another type of activity
        commensurate in terms of loads (in the absence of these, you must set 0)
      </VolumeNorm>
    </>
  );
};

export default DailyNormaHeading;
