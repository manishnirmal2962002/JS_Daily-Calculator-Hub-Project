
// DARK MODE
let nav = document.querySelector('nav')
let hub = document.querySelector('.hub a')
let homeA = document.querySelector('.home a')
function toggleDark() {
    document.body.classList.toggle("dark");
    if (nav.style.background=='#0034ad') {
        nav.style.background='#0034ad'
    }else{
        nav.style.background='#052d8bce'
        
    }
}

// SALARY
function calcSalary() {
    let s = salary.value;
    if (s <= 0) { salaryResult.innerText = "Enter valid salary"; return; }
    let yearly = s * 12;
    salaryResult.innerText = "Yearly Salary: ₹" + yearly;
    localStorage.setItem("salary", yearly);
    salaryHistory.innerText = "Last: ₹" + yearly;
}
function clearSalary() {
    salary.value = ""; salaryResult.innerText = "";
}

// EMI
function calcEMI() {
    let P = loan.value, R = rate.value / 12 / 100, N = years.value * 12;
    if (P <= 0 || R <= 0 || N <= 0) { emiResult.innerText = "Invalid input"; return; }
    let emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    emiResult.innerText = "Monthly EMI: ₹" + emi.toFixed(2);
    localStorage.setItem("emi", emi.toFixed(2));
    emiHistory.innerText = "Last: ₹" + emi.toFixed(2);
}
function clearEMI() { loan.value = ""; rate.value = ""; years.value = ""; emiResult.innerText = ""; }

// BMI
function calcBMI() {
    let w = weight.value, h = height.value / 100;
    if (w <= 0 || h <= 0) { bmiResult.innerText = "Invalid input"; return; }
    let bmi = w / (h * h);
    let status = "";
    if (bmi < 18.5) status = "Underweight";
    else if (bmi < 25) status = "Normal";
    else if (bmi < 30) status = "Overweight";
    else status = "Obese";
    bmiResult.innerText = "BMI: " + bmi.toFixed(2) + " (" + status + ")";
    localStorage.setItem("bmi", bmi.toFixed(2));
    bmiHistory.innerText = "Last: " + bmi.toFixed(2);
}
function clearBMI() { weight.value = ""; height.value = ""; bmiResult.innerText = ""; }

// AGE
function calcAge() {
    let dob = new Date(document.getElementById("dob").value);
    if (!dob) { ageResult.innerText = "Select DOB"; return; }
    let today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    ageResult.innerText = "Age: " + age + " years";
    localStorage.setItem("age", age);
    ageHistory.innerText = "Last: " + age + " yrs";
}
function clearAge() { dob.value = ""; ageResult.innerText = ""; }

// LOAD HISTORY
salaryHistory.innerText = "Last: ₹" + (localStorage.getItem("salary") || "-");
emiHistory.innerText = "Last: ₹" + (localStorage.getItem("emi") || "-");
bmiHistory.innerText = "Last: " + (localStorage.getItem("bmi") || "-");
ageHistory.innerText = "Last: " + (localStorage.getItem("age") || "-") + " yrs";

