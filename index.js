// template_yybfzol
// service_9rcnbdg
// wLsQljjo_DJbRAHvb

let contrastToggle = false;
function toggleContrast(){
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
        document.body.classList += " dark-theme"
    }
    else {
        document.body.classList.remove("dark-theme")
    }
}

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(" .about__overlay--loading");
  const success = document.querySelector(" .about__overlay--success");
  loading.classList += " about__overlay--visible";

  emailjs
    .sendForm(
      "service_9rcnbdg",
      "template_yybfzol",
      event.target,
      "wLsQljjo_DJbRAHvb"
    )
    .then(() => {
      loading.classList.remove("about__overlay--visible");
      success.classList += " about__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("about__overlay--visible");
      alert(
        "The email service is temporarily unavailable, Please contact me directly on ibrahimahmed0@outlook.com"
      );
    });
}

let isAboutOpen = false;
function toggleAbout() {
    if (isAboutOpen) {
        isAboutOpen = false
        return document.body.classList.remove("about--open")
    }
    isAboutOpen = true
    document.body.classList += " about--open";
}
