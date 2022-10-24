let mainColors = localStorage.getItem("color_option");
if (mainColors !== null) {
  document.documentElement.style.setProperty("--color-main", mainColors);
  document.querySelectorAll(".colors-list li").forEach(function (element) {
    element.classList.remove("active");
    if (element.dataset.color === mainColors) {
      element.classList.add("active");
    }
  });
}

// start settings box 1111
document.querySelector(".toggle-settings .settings-icon").onclick =
  function () {
    this.classList.toggle("fa-spin");
    document.querySelector(".settings-box").classList.toggle("open");
  };
// start settings-container
let colorsli = document.querySelectorAll(".colors-list li");
colorsli.forEach(function (li) {
  li.addEventListener("click", function (e) {
    //  documentElement => html && setProperty() => :root element value
    document.documentElement.style.setProperty(
      "--color-main",
      // target && currentTarget => this.element && dataset => data-* any attrbut name in element
      e.target.dataset.color
    );
    localStorage.setItem("color_option", e.target.dataset.color);
    e.target.parentElement.querySelectorAll(".active").forEach((element) => {
      element.classList.remove("active");
    });
    this.classList.add("active");
  });
});

let randombackel = document.querySelectorAll(".random-backgroundes span");

randombackel.forEach(function (span) {
  span.addEventListener("click", function (e) {
    e.target.parentElement.querySelectorAll(".active").forEach((element) => {
      element.classList.remove("active");
    });
    this.classList.add("active");
  });
});
// end settings-container

// end settings box

// start chang background 2222
let landingPage = document.querySelector(".landing-page");

let imgsarray = [
  "Tulips.jpg",
  "Lighthouse.jpg",
  "Jellyfish.jpg",
  "Hydrangeas.jpg",
  "Desert.jpg",
  "Desert.jpg",
  "Chrysanthemum.jpg",
];

let backgroundoption = true;
let backgroundintarvel;

function normalizeimgs() {
  if (backgroundoption === true) {
    backgroundintarvel = setInterval(() => {
      let randomNumber = Math.floor(Math.random() * imgsarray.length);
      landingPage.style.backgroundImage = `url("./images/${imgsarray[randomNumber]}")`;
    }, 4000);
  }
}
let blackGroundItem = localStorage.getItem("backGround_option")
if (blackGroundItem !== null) {
// 
  if (blackGroundItem === "true") {
    backgroundoption = true
  }
  else{
    backgroundoption = false
  }
// 
  document.querySelectorAll(".random-backgroundes span").forEach(function(el) {
    el.classList.remove("active")
  })
  // 
  if (backgroundoption === true) {
    document.querySelector(".random-backgroundes .yes").classList.add("active")
  }else {
    document.querySelector(".random-backgroundes .no").classList.add("active")

  }
}

document.querySelector(".yes").onclick = function () {
  backgroundoption = true;
  normalizeimgs();
  localStorage.setItem("backGround_option", true)
};
document.querySelector(".no").onclick = function () {
  backgroundoption = false;
  clearInterval(backgroundintarvel);
  localStorage.setItem("backGround_option", false)

};
normalizeimgs();
// end chang background
// start select skill selector
let ourSkills = document.querySelector(".skills")
window.onscroll = function () {
  // offsetParent تُرجع مسافة العنصر الحالي بالنسبة إلى الجزء العلوي من عنصر الخاص به في offsetTop
  let skillsOffSetTop = ourSkills.offsetTop
  // offsetTop (height)ارجاع ارتفاع العنصر
  let skillsOffSetheight = ourSkills.offsetHeight;
  // offsetTop (height)ارجاع ارتفاع النافذة الشاشة
  let windowheight = this.innerHeight
  // offsetTop (height)ارجاع ارتفاع النافذة الشاشة
  let windowScrollTop = this.pageYOffset


  if (windowScrollTop >= (skillsOffSetTop + skillsOffSetheight - windowheight)) {
    let allskills = document.querySelectorAll(".skill-box .skill-progress span")
    allskills.forEach(function (elee) {
      elee.style.width = elee.dataset.progress
    })
  }
}
// end select skill selector
// start galary
let ourGalary = document.querySelectorAll(".galary img")

ourGalary.forEach(function(img) {
  img.addEventListener("click", function (e) {
    let overlay = document.createElement('div')
    overlay.className = 'popup-overlay'
    document.body.appendChild(overlay)
    let popupBox = document.createElement('div')
    popupBox.className = 'popup-box'
    let imgheading = document.createElement('h3')
    imgheading.className = 'imgheading'
    let textImg = document.createTextNode(img.alt)
    imgheading.appendChild(textImg)
    popupBox.append(imgheading)
    let popupImage = document.createElement('img')
    let valueImage = img.src
    popupImage.src = valueImage
    popupBox.appendChild(popupImage)
    document.body.appendChild(popupBox)
    let colseBotton = document.createElement('span')
    colseBotton.className = 'close-botton'
    let textclosebotton = document.createTextNode('x')
    colseBotton.appendChild(textclosebotton)
    popupBox.appendChild(colseBotton)
  })
})
document.addEventListener('click', e => {
  if(e.target.className === 'close-botton') {
    //  ارجاع الاب للعنصر الحالي parentElement
    // او طريقة لازالة العنصر
    console.log(e.target.parentElement.remove());

    document.querySelector('.popup-overlay').remove()
  }
})









// end galary