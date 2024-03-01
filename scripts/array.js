// ми передаємо об’єкт до функції
let options = {
  title: "My menu",
  items: ["Item1", "Item2"],
};

// ...і вона негайно розгортає його до змінних
function showMenu({
  title = "Untitled",
  width = 200,
  height = 100,
  items = [],
}) {
  // title, items – взяті з options,
  // width, height – використовуються типові значення
  alert(`${title} ${width} ${height}`); // My Menu 200 100
  alert(items); // Item1, Item2
}

showMenu(options);
