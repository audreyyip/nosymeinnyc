window.addEventListener('scroll', () => {
    document.querySelector("wrapper").style.transform = `translateY(${window.scrollY * 0.5}px)`;
});


const observer = new IntersectionObserver((entries)=> {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }

        });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));




// const [red, green, blue] = [69, 111, 225]
// const section1 = document.querySelector('.section1')
// /// let y = 1 + (window.scrollY || window.pageYOffset) / 150
//   y = y < 1 ? 1 : y // ensure y is always >= 1 (due to Safari's elastic scroll)
//   const [r, g, b] = [red/y, green/y, blue/y].map(Math.round)
//   section1.style.backgroundColor = `rgb(${r}, ${g}, ${b})`///
