export const checkIsLoggedIn = () => {
  const user = localStorage.getItem("chatUser");

  return user ? true : false;
};
