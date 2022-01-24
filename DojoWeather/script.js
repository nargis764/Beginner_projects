const showAlert = () => {
  alert("Loading weather report...");
};

const removeCookie = (element) => {
  element.parentNode.remove();
};

// temperature conversion

const convertTemp = (element) => {
  const temperatures = document.querySelectorAll(".temp-value");

  temperatures.forEach((temperature) => {
    if (element.value == "°F") {
      temperature.innerText = convertC2F(temperature.innerText);
    } else if (element.value == "°C") {
      temperature.innerText = convertF2C(temperature.innerText);
    }
  });

  function convertC2F(temp) {
    return Math.round(temp * (9 / 5) + 32);
  }

  function convertF2C(temp) {
    return Math.round((temp - 32) * (5 / 9));
  }
};
