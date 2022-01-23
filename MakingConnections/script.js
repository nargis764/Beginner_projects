// change user name
const changeProfile = () => {
  document.getElementById("user-name").innerText = "Lorem Ipsum";
};

//remove user request & hence decrease the number of connection requests
const removeUser = (element) => {
  let acceptRequest = document.querySelector(".accept-request");
  if (acceptRequest) {
    numberOfConnections();
  }
  element.parentElement.remove();
  document.querySelector(".number-of-requests").innerText--;
};

//Increase the number of connections when accept button is clicked
const numberOfConnections = () => {
  return document.querySelector(".number-of-connections").innerText++;
};
