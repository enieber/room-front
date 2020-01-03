const reportErrro = error => {
  console.error(error);
};

const showMessage = message => {
  alert(message);
};

const success = message => {
  showMessage(message);
};

const error = (message, error) => {
  showMessage(message);
  reportErrro(error);
};

const alert = {
  success,
  error
};

export default alert;
