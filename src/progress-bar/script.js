const allBarElements = document.querySelectorAll('.bar');

// A simple promise function to wait for
const waitFor = ms => new Promise(resolve => setTimeout(resolve, ms));

// For loop using async and this ensures we will the progress bar after we wait for 3sec.
(async function() {
  for (let bar of allBarElements) {
    fillProgressBar(bar, 0);
    await waitFor(3000);
  }
})();

// Function which fills the progress bar
function fillProgressBar(bar, barPercent) {
  const progressBarInterval = setInterval(() => {
    barPercent = barPercent + 1;
    bar.style.width = `${barPercent}%`;
    if (barPercent >= 100) {
      clearInterval(progressBarInterval);
    }
  }, 30);
}
