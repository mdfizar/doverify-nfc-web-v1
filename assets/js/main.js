// banner section right text typeing effect ========
const texts = ["NFC Smart Card !", "NFC Corporate Card !","Tap, Share & Connect"];
    let textIndex = 0;
    let charIndex = 0;

    function typeEffect() {
        if (charIndex < texts[textIndex].length) {
            document.getElementById("typing-effect").innerHTML += texts[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeEffect, 150);
        } else {
            setTimeout(() => {
                document.getElementById("typing-effect").innerHTML = "";
                charIndex = 0;
                textIndex++;
                if (textIndex < texts.length) {
                    setTimeout(typeEffect, 200); // 1-second pause before typing the next text
                } else {
                    // Optional: Restart from the beginning after a delay
                    textIndex = 0;
                    setTimeout(typeEffect, 200); // 1-second pause before restarting
                }
            }, 200); // 1-second pause before clearing the current text
        }
    }

    document.addEventListener("DOMContentLoaded", () => {
        typeEffect();
    });

// banner section slider 
    var swiper = new Swiper(".banner-slider", {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
//  watch vedio popup =======
var watchPopUp = document.querySelector(".watch-vedio");
function showWatcVedioPopup() {
  if(watchPopUp.style.display ==="none") {
      watchPopUp.style.display ="block";
  }
}
function hideWatchVedioPopup() {
  if(watchPopUp.style.display ==="block") {
    watchPopUp.style.display ="none";
  }
}


// wthats new slider ==========
var swiper = new Swiper(".whatsNew_slider", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    571: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 30,
    },

   
  },

});

// aos ======
AOS.init();
// faq section ======
var showHide = document.querySelectorAll(".faq-item")

showHide.forEach((item) => {
  item.addEventListener("click", () => {
    var icon = item.querySelector(".faq-item span i");
    var description = item.querySelector(".faq-description");
    if (description.style.height === "0px") {
     description.style.height = "140px";  
     icon.style.transform = "rotate(-90deg)"; 
    } else {
      description.style.height = "0px";
      icon.style.transform = "rotate(90deg)";
    }
  });
});
// card desing popup ==========
function cardDesignPopup () {
  var cardPopup = document.querySelector(".design-popup");
  if(cardPopup.style.display ==="none") {
    cardPopup.style.display ="block";
  }  
}
function cardDesignPopupClose () {
  var cardPopup = document.querySelector(".design-popup");
  if(cardPopup.style.display ==="block") {
    cardPopup.style.display ="none";
  }  
}
// handdle card desing popup ================= !!!!!!!!!!!

// store the frontside container
var frontside = document.querySelector(".card-img-container .front-part");
function backPart(){
  frontside.style.transform = "rotateY(90deg)";
}
// store the backside container 
var backside = document.querySelector(".card-img-container .front-part");
function frontPart(){
  backside.style.transform = "rotateY(0deg)";
 }
//  store the card =========
var customCard = document.querySelector(".card-img");

function redCard() {
  frontside.style.backgroundColor = "red";
  customCard.style.backgroundColor = "red";
  error.style.display ="none";

}
function blackCard() {
  frontside.style.backgroundColor = "black";
  customCard.style.backgroundColor = "black";
  error.style.display ="none";
}
function whiteCard() {
  frontside.style.backgroundColor = "#fafafa";
  customCard.style.backgroundColor = "#fafafa";
  error.style.display ="block";
}
function blueCard() {
  frontside.style.backgroundColor = "blue";
  customCard.style.backgroundColor = "blue";
  error.style.display ="none";
}
function pinkCard() {
  frontside.style.backgroundColor = "pink";
  customCard.style.backgroundColor = "pink";
  error.style.display ="none";
}
function goldCard() {
  frontside.style.backgroundColor = "gold";
  customCard.style.backgroundColor = "gold";
  error.style.display ="none";
}
function lightblueCard() {
  frontside.style.backgroundColor = "lightblue";
  customCard.style.backgroundColor = "lightblue";
  error.style.display ="none";
}
var colorPic = document.querySelector(".custom-color");
var customColor = document.querySelector(".custom-color-container-overlay");
colorPic.addEventListener('input', () => {
  const selectedColor = colorPic.value;
  customColor.style.backgroundColor = selectedColor;
  frontside.style.backgroundColor = selectedColor;
  customCard.style.backgroundColor = selectedColor;
})
// store the font
var fontColor = document.querySelectorAll(".font-color");
var fontColorPic = document.querySelector(".custom-font-color");
var fontColorOvarlay = document.querySelector(".custom-font-color-container-overlay");
fontColorPic.addEventListener('input', () => {
  const selectedColor = fontColorPic.value;
  fontColorOvarlay.style.backgroundColor = selectedColor;
  fontColor.forEach((element => {
    element.style.color = selectedColor;
  }));
});

var error = document.querySelector(".error");
document.addEventListener("input", () => {
  if(colorPic.value === fontColorPic.value) {
    error.innerHTML ="font or background color are same"
  }
  else{
    error.style.display ="none";
    
  }
})
// person name
var NameGet = document.querySelector(".peson-name");
var NameShow = document.querySelector(".person-name-element");
 NameGet.addEventListener("input", () => {
  var updateValue = NameGet.value;
  NameShow.innerHTML = updateValue;
  if(updateValue ==="") {
    NameShow.innerHTML ="you name";
  }
  else{
    NameShow.innerHTML = updateValue;
  }
 })
//  compan name 
var companyName = document.querySelector(".companyName");
var compnayShow = document.querySelector(".compnay-name");
companyName.addEventListener("input", () => {
  var updateValue = companyName.value;
  compnayShow.innerHTML = updateValue;
  if(updateValue ==="") {
  compnayShow.innerHTML ="company name";
  }
  else{
  compnayShow.innerHTML = updateValue;
  }
})
//  logo 
 var logo = document.querySelector(".Logo");
 var showImg = document.querySelector(".showimg");

 logo.addEventListener("change", () => {
     if (logo.files.length > 0) {
         var file = logo.files[0];
         var reader = new FileReader();
         reader.onload = (event) => {
             showImg.src = event.target.result;
             showImg.style.display = "block";
         };
         
         reader.readAsDataURL(file);
     } else {
         console.log("No files selected.");
     }
 });

// handle theme selection 
const themeSelector = document.querySelector(".themeSelector");
const nameInput = document.querySelector(".name-input");
const profilePicInput = document.querySelector(".profilepic-input");
const desiginationInput = document.querySelector(".desigination-input");
const compnayNameInput = document.querySelector(".companyname-input");
const aboutInput = document.querySelector(".about-input");

function updateTheme() {
  const selectedTheme = themeSelector.value;

  // hide all theme 
  const themes = document.querySelectorAll(".theme")
  themes.forEach(theme => {
    theme.classList.remove("showtheme");
  });
  
  // show selected theme 
  const activeTheme = document.querySelector("." + selectedTheme);
  if(activeTheme) {
    activeTheme.classList.add("showtheme");
  }
};

function updateContent() {
  const activeTheme = document.querySelector(".theme.showtheme");
  if(activeTheme) {
    // name 
    const name = activeTheme.querySelector(".profile-name");
    if(name) {
      name.textContent = nameInput.value || "your name";
    }
    // profilepic 
    const profilepic = activeTheme.querySelector(".profilePic");
    if(profilepic) {
      if (profilePicInput.files.length > 0) {
        const file = profilePicInput.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
          var selectedImg = event.target.result;
          profilepic.src = selectedImg;
        };
        reader.readAsDataURL(file);
      }   
     };
    // desigination 
    const desigination = activeTheme.querySelector(".desiginatoin");
    if(desigination) {
      desigination.textContent = desiginationInput.value||desigination.dataset.default;
    }
    // company name 
    const company = activeTheme.querySelector(".company-name");
    if(company) {
      company.textContent = compnayNameInput.value || "compnay";
    }
    // about 
    const about = activeTheme.querySelector(".about");
    if(about) {
      about.textContent = aboutInput.value || "about your self";
    }
  }
};

// update text for the new theme 
themeSelector.addEventListener('change',function() {
  updateTheme();
  updateContent();
});

// catch the update content  
nameInput.addEventListener('input', updateContent); 
profilePicInput.addEventListener('change', updateContent)
desiginationInput.addEventListener('input', updateContent);
compnayNameInput.addEventListener('input', updateContent);
aboutInput.addEventListener('input', updateContent);

themeSelector.dispatchEvent(new Event('change'));
