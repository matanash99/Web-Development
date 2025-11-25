document.addEventListener("DOMContentLoaded",()=>{
    pageLoaded();
});

let txt1;
let txt2;
let btn;
let lblRes;

function pageLoaded() {
    txt1 = document.getElementById('txt1')
    txt2 = document.getElementById('txt2')
    btn = document.getElementById('btnCalc')
    btn.addEventListener('click',()=>{
        calculate();
    });
    lblRes = document.getElementById('lblRes') 
}


function calculate() {
    const num1 = parseFloat(txt1.value);
    const num2 = parseFloat(txt2.value);
    const op = operator.value;

    //Validate 1
    if (!isNaN(num1)) {
        txt1.classList.add("is-valid");
        txt1.classList.remove("is-invalid");
    } else {
        txt1.classList.add("is-invalid");
        txt1.classList.remove("is-valid");
    }

    //Validate 2
    if (!isNaN(num2)) {
        txt2.classList.add("is-valid");
        txt2.classList.remove("is-invalid");
    } else {
        txt2.classList.add("is-invalid");
        txt2.classList.remove("is-valid");
    }

    //Zero division check
    if (op === "/" && num2 === 0) {
        txt2.classList.add("is-invalid");
        txt2.classList.remove("is-valid");
        lblRes.innerText = "Error: Division by zero!";
        return; // Stop calculation
    }


    if (isNaN(num1) || isNaN(num2)) {
        lblRes.innerText = "Error: Invalid number!";
        return;
    }

    // Perform calculation
    let res;
    switch(op) {
        case "+": res = num1 + num2; break;
        case "-": res = num1 - num2; break;
        case "*": res = num1 * num2; break;
        case "/": res = num1 / num2; break;
    }

    lblRes.innerText = res;

    // Log the action
    print(`${num1} ${op} ${num2} = ${res}`, true);
}



const btn2 = document.getElementById("btn2")
btn2.addEventListener("click",()=>{
    print("btn2 clicked: "+ btn2.id + " | " + btn2.innerHTML)
})


function print(msg, append = false) {
    // Get text area element reference
    const ta = document.getElementById("output");

    if (ta) {
        if (append) {
            // Add msg to textArea text
            ta.value += (ta.value ? "\n" : "") + msg;
        } else {
            // Replace msg in text area
            ta.value = msg;
        }
        ta.scrollTop = ta.scrollHeight;

    } else {
        console.log(msg);
    }

}


function demoNative() {
    let out = "=== STEP 1: NATIVE TYPES ===\n";

    // String
    const s = "Hello World";
    out += "\n[String] s = " + s;
    out += "\nLength: " + s.length;
    out += "\nUpper: " + s.toUpperCase();

    // Number
    const n = 42;
    out += "\n\n[Number] n = " + n;

    // Boolean
    const b = true;
    out += "\n\n[Boolean] b = " + b;

    // Date
    const d = new Date();
    out += "\n\n[Date] now = " + d.toISOString();

    // Array
    const arr = [1, 2, 3, 4];
    out += "\n\n[Array] arr = [" + arr.join(", ") + "]";
    out += "\nPush 5 → " + (arr.push(5), arr.join(", "));
    out += "\nMap x2 → " + arr.map(x=>x*2).join(", ");

    // Functions as variables
    const add = function(a,b){ return a+b; };
    out += "\n\n[Function as variable] add(3,4) = " + add(3,4);

    // Callback
    function calc(a,b,fn) {
        return fn(a,b); 
    }
    const result = calc(10,20,(x,y)=>x+y);
    out += "\n[Callback] calc(10,20, x+y ) = " + result;

    print(out);
}