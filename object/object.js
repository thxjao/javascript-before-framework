const menu = {
  selector: ".principal",
  active() {
    const menuElement = document.querySelector(this.selector);
    menuElement.classList.add("active");
  },
};

menu.selector; // ".principal"
menu.active(); // adciona o active ao menu
menu.hasOwnProperty; // método herdado

// Tudo é objeto, e possui propriedades herdadas, menos o null e o undefined

["10", "20", "30"].map(Number); // [10, 20, 30];
"JavaScript".toUpperCase(); // JAVASCRIPT

const body = document.querySelector("body");
body.classList.add("js"); // adiciona JS ao Body
