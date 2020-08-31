const list = document.querySelectorAll("li");
listArr = Array.prototype.slice.call(list);
listArr.forEach((el) => {
  el.addEventListener("click", function (e) {
    for (let i = 0; i < list.length; i++) {
      list[i].classList.remove("active");
    }
    this.classList.add("active");
    const liAttr = this.getAttribute("data-type");
    const cardList = document.querySelectorAll(".filter__card");
    for (let j = 0; j < cardList.length; j++) {
      const cardAttr = cardList[j].getAttribute("data-type");
      cardList[j].style.display = "none";
      if (liAttr === cardAttr) {
        cardList[j].style.display = "block";
      } else if (liAttr === null || liAttr === "") {
        cardList[j].style.display = "block";
      }
    }
  });
});
