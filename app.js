let Total = document.getElementById("total");
let Present = document.getElementById("present");
let btn = document.querySelector("button");
let Main = document.querySelector(".main");
let calculate = document.querySelector(".calculation");
const Result = document.querySelector(".result");
const Back = document.querySelector(".back");

btn.addEventListener("click", function() {
    const TotalV = Number(Total.value);
    const PresentV = Number(Present.value);

    const Percentage = (PresentV/TotalV)*100;
    const rounds = round(Percentage,2);
    const needed = Math.ceil((0.75 * TotalV - PresentV) / 0.25);


    if(Total.value === "" || Present.value === "") {
        Result.innerText = `Enter the Values`;
        Result.classList.add("hero");
        Result.classList.remove("result");
        calculate.classList.add("shake");
    } else if(Percentage < 75) {
         Result.innerHTML = `<h4>Your Attendance Percentage is : ${rounds}%</h4><br><br><p style = "font-Weight : bolder; color : red";> You need to Attend ${needed} more Classes`;
         Main.classList.add("hide");
         Back.classList.remove("hide");
    } else {
        calculate.classList.add("hide");
         Result.innerText = `Your Attendance Percentage is ${rounds}%`;
         Main.classList.add("hide");
         Back.classList.remove("hide");
    }
});


Back.addEventListener("click",function() {
    Main.classList.remove("hide");
    Result.classList.add("hide");
    Back.classList.add("hide");
    Result.innerHTML = "";
    Total.value = "";
    Present.value = "";
});