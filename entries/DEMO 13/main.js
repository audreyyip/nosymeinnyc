
let blobs = document.querySelectorAll(".blob");
let container = document.querySelector(".wrapper");
// place our blobs randomly
blobs.forEach(function (blob) {
  blob.style.right = (100 * Math.random()) + '%';
  blob.style.top = (100 * Math.random()) + '%';
});
container.addEventListener("click", function (event) {
  if (event.target.classList.contains("blob")) {
    event.target.remove();
  }
});

const blob = document.getElementById('floatingBlob');

function moveBlob() {
  const maxX = window.innerWidth - Math.random();
  const maxY = window.innerHeight - Math.random();
  
  const newX = Math.random() * maxX;
  const newY = Math.random() * maxY;
  
  blob.style.transition = 'all 3s cubic-bezier(0.17, 0.67, 0.83, 0.67)';
  blob.style.left = newX + (100 * Math.random()) + '%';
  blob.style.top = newY + (100 * Math.random()) + '%';

}

// Move every 3 seconds
setInterval(moveBlob, 3000);

// Reset position on window resize
window.addEventListener('resize', () => {
  blob.style.left = Math.random() * (window.innerWidth - 240) + 'px';
  blob.style.top = Math.random() * (window.innerHeight - 207) + 'px';
});