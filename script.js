const scrollBtn = document.getElementById("scrollBtn");

function handleScrollClick() {
  const sections = document.querySelectorAll("section");
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;

  // هل المستخدم في آخر الصفحة تقريبًا؟
  const nearBottom = scrollY + windowHeight >= document.body.scrollHeight - 10;

  if (nearBottom) {
    // ارجع للأعلى
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  } else {
    // روح للسكشن التالي
    for (let i = 0; i < sections.length; i++) {
      const sectionTop = sections[i].offsetTop;
      if (sectionTop > scrollY + 10) {
        window.scrollTo({
          top: sectionTop,
          behavior: "smooth"
        });
        break;
      }
    }
  }
}

// غير شكل السهم أثناء التمرير
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;
  const nearBottom = scrollY + windowHeight >= document.body.scrollHeight - 10;

  if (nearBottom) {
    scrollBtn.innerText = "↑";
  } else {
    scrollBtn.innerText = "↓";
  }
});

//3333333333333333333333333333333333333333333333333333333
  //33333333333333333333333333333333333333333333333333333333333333333333333333333*/
  const images = [
      "photo/login.png",
      "photo/home1.png",
      "photo/home2.png"
    ];

    let currentImageIndex = 0;
    const sliderImage = document.getElementById("slider-image");

    function showImage(index) {
      sliderImage.src = images[index];
    }

    function nextImage() {
      currentImageIndex = (currentImageIndex + 1) % images.length;
      showImage(currentImageIndex);
    }

    function prevImage() {
      currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
      showImage(currentImageIndex);
    }

    showImage(currentImageIndex);
    //33333333333333333333333333333333333333333333333333333333 التنقلات 
    ScrollReveal().reveal('section *', {
        distance: '50px',
        duration: 1000,
        origin: 'bottom',
        interval: 150
      });
