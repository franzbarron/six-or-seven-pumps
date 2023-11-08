const date = new Date();
const dayOfYear =
  (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) -
    Date.UTC(date.getFullYear(), 0, 0)) /
  24 /
  60 /
  60 /
  1000;
const h1 = document.querySelector("#days");
h1.textContent = ((dayOfYear % 3) % 2) + 6;
