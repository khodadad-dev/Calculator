let num1 = null;
let operator = null;
let NumReset = false; // این متغیر مشخص می‌کند که آیا عدد بعدی باید جایگزین شود یا به ادامه عدد قبلی اضافه شود
const display = document.getElementById("Display");

function showNumber(num) {
    // اگر کاربر عملگر زده بود یا صفحه صفر بود، عدد جدید جایگزین شود
    if (NumReset || display.innerText === "0") {
        display.innerText = num.toString();
        NumReset = false;
         // حالا که عدد شروع شد، دیگر نباید جایگزین شود
    } else {
        display.innerText += num;
    }
}

function setOperator(op) {
    if (display.innerText === "" || display.innerText === "Error") return;
     // جلوگیری از خطا
    num1 = Number(display.innerText);
    operator = op;
    NumReset = true; 
    // علامت گذاری برای اینکه عدد بعدی جایگزین شود
}

function BEqual() {
    if (operator === null || NumReset) return; 
    // اگر عملگری انتخاب نشده بود، کاری نکن

    let num2 = Number(display.innerText);
    let result;

    switch (operator) {
        case "+": result = num1 + num2; break;
        case "-": result = num1 - num2; break;
        case "x": result = num1 * num2; break;
        case "/": 
            result = num2 === 0 ? "Error" : num1 / num2; 
            break;
        default: result = "Error";
    }

    display.innerText = result;
    num1 = null;
    operator = null;
    NumReset = true;
     // بعد از مساوی، عدد بعدی باید جایگزین شود
}

function clearAll() {
    display.innerText = "0";
    num1 = null;
    operator = null;
    NumReset = false;
}

function AddDot() {
    // اگر کاربر تازه عملگر زده بود، نمایشگر را 0 می‌کنیم تا نقطه روی 0 قرار بگیرد (0.)
    if (NumReset) {
        display.innerText = "0";
        NumReset = false;
    }

    // جلوگیری از اضافه شدن چند نقطه به یک عدد
    if (!display.innerText.includes(".")) {
        display.innerText += ".";
    }
}
