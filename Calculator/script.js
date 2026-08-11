
const display = document.getElementById("display");


/* =========================
   INSERT VALUE
========================= */

function insert(value) {

  // Remove Error before typing
  if (display.value === "Error") {
    display.value = "";
  }

  display.value += value;
}


/* =========================
   CLEAR DISPLAY
========================= */

function clearDisplay() {
  display.value = "";
}


/* =========================
   DELETE LAST CHARACTER
========================= */

function deleteLast() {

  if (display.value === "Error") {
    display.value = "";
    return;
  }

  display.value = display.value.slice(0, -1);
}


/* =========================
   CALCULATE RESULT
========================= */

function calculate() {

  try {

    if (display.value.trim() === "") {
      return;
    }

    const result = eval(display.value);

    if (!Number.isFinite(result)) {
      display.value = "Error";
      return;
    }

    display.value = result;

  } catch (error) {

    display.value = "Error";

  }

}


/* =========================
   KEYBOARD SUPPORT
========================= */

document.addEventListener("keydown", (event) => {

  const key = event.key;

  // Numbers
  if (
    (key >= "0" && key <= "9") ||
    key === "." ||
    key === "(" ||
    key === ")"
  ) {

    insert(key);

  }

  // Operators
  else if (
    key === "+" ||
    key === "-" ||
    key === "*" ||
    key === "/"
  ) {

    insert(key);

  }

  // Enter = Calculate
  else if (key === "Enter" || key === "=") {

    event.preventDefault();

    calculate();

  }

  // Backspace = Delete
  else if (key === "Backspace") {

    deleteLast();

  }

  // Escape = Clear
  else if (key === "Escape") {

    clearDisplay();

  }

});

