// const burger = document.querySelector("#burger2");
// const menuu = document.querySelector("#menuu");

// burger.addEventListener("click", () => {
//   if (menuu.classList.contains("hidden")) {
//     menuu.classList.remove("hidden");
//   } else {
//     menuu.classList.add("hidden");
//   }
// });

function myFun() {
  const custDiv = document.getElementById("navLink1");
  if (custDiv.style.display === "none") {
    custDiv.style.display = "block";
  } else {
    custDiv.style.display = "none";
  }
};
