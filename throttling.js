let count = 0;

function throttling(fun, limit) {
  let flag = true;
  return function(...args) {
    if (flag) {
      fun(...args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
}

const print = () => {
  console.log("Resizing", count++);
}

const betterExperience = throttling(print, 2000);

window.addEventListener("resize", betterExperience)
