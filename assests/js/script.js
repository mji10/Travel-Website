const navbar = document.querySelector('.header');
window.onscroll = () => {
  if (window.scrollY > 100) {
    navbar.classList.add('nav-active');
  } else {
    navbar.classList.remove('nav-active');
  }
};

const btn = document.querySelector('.burger_menu');
const navbarCollapse = document.querySelector('.main-nav');
const burger = document.querySelector('.burger_menu');
btn.addEventListener('click', () => {
  document.getElementsByTagName("BODY").classList.toggle('no_scroll');
  burger.classList.toggle('open');
  navbarCollapse.classList.toggle('show__nav');

});


        // Adding functinality to video play and pause button
        const video = document.getElementsByClassName("custom-video__video");
        const outerScreen = document.querySelector('custom-video');
        const myVideo = document.getElementById("myVideo");
        // let i;
        for (i = 0; i < video.length; i++) {
            video[i].addEventListener("click", function () {
                const controls = this.nextElementSibling;
                if (controls.innerHTML === "▶" && myVideo.controls == true) {
                    controls.innerHTML = "| |";
                    controls.classList.add("opacity");
                } else {
                    controls.innerHTML = "▶";
                    controls.classList.remove("opacity");
                }
            });
            video[i].addEventListener("mouseout", function () {
                const controls = this.nextElementSibling;
                if (!this.paused) {
                    controls.classList.add("opacity");
                    controls.classList.add("opaque");
                } else {
                    controls.classList.remove("opaque");
                }
            });
            video[i].addEventListener("mouseover", function () {
                const controls = this.nextElementSibling;
                controls.classList.remove("opacity");
            });
            video[i].addEventListener(
                "ended",
                function () {
                    const controls = this.nextElementSibling;
                    controls.innerHTML = "▶";
                    controls.classList.remove("opaque");
                    controls.classList.remove("opacity");
                },
                false
            );

            console.log(outerScreen);
        }
