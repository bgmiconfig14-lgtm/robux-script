const robuxCount = document.getElementById("robuxCount");
let count = 0;
const target = 10000;
const duration = 10000;
const steps = 100;
const increment = Math.ceil(target / steps);
const intervalTime = duration / steps;

const interval = setInterval(() => {
  count += increment;
  if (count >= target) {
    count = target;
    clearInterval(interval);
  }
  robuxCount.textContent = count.toLocaleString();
}, intervalTime);
