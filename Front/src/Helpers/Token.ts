export const getToken = () => ({
  headers: {
    authorization: localStorage.getItem("token"),
  },
});