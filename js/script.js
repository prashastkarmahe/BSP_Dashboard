const menu = document.querySelector('.nav-menu');
const menuFlat = document.querySelector('.nav-menu-flat');
const menuSidebar = document.querySelector('.nav-menu-sidebar');
const hamburger = document.querySelector('.hamburger');

const alterNavMenu = () => {
  if (window.innerWidth > 768){
    menu.classList.remove('nav-menu-sidebar');
    menu.classList.add('nav-menu-flat');
    hamburger.classList.add('hide')
  } else {
    menu.classList.remove('nav-menu-flat');
    menu.classList.add('nav-menu-sidebar');
    menu.classList.add('hide');
    hamburger.classList.remove('hide')
  }
}

alterNavMenu();

window.addEventListener("resize", (event) => {
  alterNavMenu();
})

hamburger.addEventListener('click', () => {
  menu.classList.toggle('hide');
});


for(let i=1; i <= 6; i++) {
  const expand = document.querySelector(`#expand${i}`);
  const collapse = document.querySelectorAll(`.collapse${i}`)
  
  expand.addEventListener('click', () => {
    expand.classList.toggle('stress');
    collapse.forEach(e => e.classList.toggle('hide'));
  })
}

function openTab(tabName) {
  var i, x;
  x = document.getElementsByClassName("containerTab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
}

function toggleImage(event) {
  var clickedImage = event.target;
  if (clickedImage.src.endsWith('images/collapse_icon.png')) {
    clickedImage.src = 'images/expand_icon.png';
  } else {
    clickedImage.src = 'images/collapse_icon.png';
  }
}

var images = document.getElementsByClassName('myImage');
for (var i = 0; i < images.length; i++) {
  images[i].addEventListener('click', toggleImage);
}


//PDF
function togglePDF(index) {
  var pdfContainers = document.querySelectorAll('.pdf_container .pdf');
  for (var i = 0; i < pdfContainers.length; i++) {
    if (i === index) {
      pdfContainers[i].style.display = pdfContainers[i].style.display === 'none' ? 'block' : 'none';
    } else {
      pdfContainers[i].style.display = 'none';
    }
  }
}










