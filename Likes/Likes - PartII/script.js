const likeCount = (element) => {
  const like1 = document.getElementById("like-1");
  const like2 = document.getElementById("like-2");
  const like3 = document.getElementById("like-3");

  if (element == document.getElementById("button-1")) {
    like1.innerText++;
  } else if (element == document.getElementById("button-2")) {
    like2.innerText++;
  } else if (element == document.getElementById("button-3")) {
    like3.innerText++;
  }
};
