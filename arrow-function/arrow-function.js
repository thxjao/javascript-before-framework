const upperName = function (name) {
  return name.toUpperCase();
};

upperName("João"); // JOÃO

const lowerName = (name) => {
  return name.toLowerCase();
};

lowerName("João"); // joão

const countLetters = (word) => word.length;
countLetters("João"); // 4

// this

class Menu {
  constructor(menu) {
    this.menuElement = document.querySelector(menu);
    this.activeClass = "active";
  }
  addActiveEvent() {
    // sem o arrow function ele não iria funcionar
    this.menuElement.addEventListener("click", (event) =>
      event.target.classList.add(this.activeClass)
    );
  }
}

const menu = new Menu(".principal");
menu.addActiveEvent();
