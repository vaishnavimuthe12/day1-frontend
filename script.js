const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const roll = document.getElementById("roll").value;
  const dept = document.getElementById("dept").value;

  alert(
    "Name: " + name + "\n" +
    "Roll: " + roll + "\n" +
    "Department: " + dept
  );
});
