import axios from "axios";

export const instance = axios.create({
  baseURL: "https://water-tracker-f07j.onrender.com/api/user",
});

export const tokenUser = (token) => {
  instance.defaults.headers.common["Authorization"] = token ? `Bearer ${token}` : "";
};

// User data

export const getProfile = async (token) => {
  const { data } = await instance.get("/current", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const updateUser = async (newUserData) => {
  const dataToUpdate = Object.entries(newUserData).reduce(
    (acc, [key, value]) => {
      return value ? { ...acc, [key]: value } : acc;
    },
    {}
  );

  if (!dataToUpdate.newPassword) {
    delete dataToUpdate.oldPassword;
  }

  const { data } = await instance.patch("/updateUser", dataToUpdate);
  return data;
};

export const updateAvatar = async (newImg) => {
  const response = await instance.patch(
    "/updateAvatar",
    { file: newImg },
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  const avatarURL = response?.data?.avatar;
  if (avatarURL) return avatarURL;
};

export const updateWaterRate = async (newDailyNorma) => {
  const { data } = await instance.patch("/updateWaterRate", {
    dailyNorma: newDailyNorma,
  });
  return data;
};
