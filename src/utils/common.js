export const getToken = () => sessionStorage.getItem("token") || null;

// return the user data from the session storage
export const getUser = () => {
  const userStr = sessionStorage.getItem("user");
  return userStr ? JSON.parse(userStr) : null;
};

// remove the token and user from the session storage
export const removeUserSession = () => {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("user");
  document.cookie =
    "authcookie=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  document.location.reload();
};

// set the token and user from the session storage
export const setUserSession = (token, user) => {
  sessionStorage.setItem("token", token);
  sessionStorage.setItem("user", JSON.stringify(user));
};
