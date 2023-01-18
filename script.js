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
  };
  const custDiv2 = document.getElementById("navLink2");
  if (custDiv2.style.display === "none") {
    custDiv2.style.display = "block";
  } else {
    custDiv2.style.display = "none";
  }
  const custDiv3 = document.getElementById("navLink3");
  if (custDiv3.style.display === "none") {
    custDiv3.style.display = "block";
  } else {
    custDiv3.style.display = "none";
  }  
};
