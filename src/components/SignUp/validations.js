const validateEmail = (emailAddress) => {
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailAddress.match(regexEmail)) {
    return true;
  } else {
    return false;
  }
};
const validatePassword = (password) => {
  var strongPassword = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );
  if (password.match(strongPassword)) {
    return true;
  } else {
    return false;
  }
};
export { validateEmail, validatePassword };
