<template>
  <div class="slider">
    <div class="myslider fade" style="display: block">
      <div class="txt">
        <h1>Distribution of shelter materials</h1>
        <p>
          Distribution Of Shelter materials to children in Al-Mudhaffar and
          Al-Suwaidi hospitals
        </p>
      </div>
      <img
        src="@/assets/image_2.png"
        alt="image"
        style="width: 100%; height: 100%"
      />
    </div>
    <div class="myslider fade">
      <div class="txt">
        <h1>Image 2</h1>
        <p>web developer</p>
      </div>
      <img
        src="@/assets/image_2.png"
        alt="image"
        style="width: 100%; height: 100%"
      />
    </div>
    <div class="myslider fade">
      <div class="txt">
        <h1>Image 3</h1>
        <p>web developer</p>
      </div>
      <img
        src="@/assets/image_2.png"
        alt="image"
        style="width: 100%; height: 100%"
      />
    </div>
    <a class="prev" onclick="">&#10094;</a>
    <a class="next" onclick="">&#10095;</a>
    <div class="dotsbox">
      <span class="dot" onclick=""></span>
      <span class="dot" onclick=""></span>
      <span class="dot" onclick=""></span>
    </div>

    <!-- <a class="prev" @click="()=>plusSlides(-1)">&#10094;</a>
    <a class="next" @click="()=>plusSlides(1)">&#10095;</a>
    <div class="dotsbox">
      <span class="dot" @click="()=>currentSlide(1)"></span>
      <span class="dot" @click="()=>currentSlide(2)"></span>
      <span class="dot" @click="()=>currentSlide(3)"></span>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "appImgSlider",
};

// const myslide = document.querySelectorAll(".myslider"),
//   dot = document.querySelectorAll(".dot");
// let counter = 1;
// slidefun(counter);
// let timer = setInterval(autoslide, 8000);
// function autoslide() {
//   counter += 1;
//   slidefun(counter);
// }
// function plusSlides(n) {
//   counter += n;
//   slidefun(counter);
//   resetTimer();
// }
// function currentSlide(n) {
//   counter = n;
//   slidefun(counter);
//   resetTimer();
// }
// function resetTimer() {
//   clearInterval(timer);
//   timer = setInterval(autoslide, 8000);
// }
// function slidefun(n) {
//   let i;
//   for (i = 0; i < myslide.length; i++) {
//     myslide[i].style.display = "none";
//   }
//   for (i = 0; i < dot.length; i++) {
//     dot[i].classList.remove("active");
//   }
//   if (n > myslide.length) {
//     counter = 1;
//   }
//   if (n < 1) {
//     counter = myslide.length;
//   }
//   myslide[counter - 1].style.display = "block";
//   dot[counter - 1].classList.add = "active";
// }
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  box-sizing: border-box;
}

.slider {
  position: relative;
  width: 100%;
  z-index: 1000;
}
.myslider {
  /* height: 655px; */
  overflow: hidden;
  display: none;
}
.prev,
.next {
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  font-size: 50px;
  padding: 15px;
  cursor: pointer;
  color: #fff;
  transition: 0.1s;
  user-select: none;
}

.next {
  right: 0;
}

.dotsbox {
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  bottom: 20px;
  cursor: pointer;
}

.dot {
  display: inline-block;
  width: 15px;
  height: 15px;
  border: 3px solid #fff;
  background-color: #fff;
  border-radius: 50%;
  margin: 0 10px;
  cursor: pointer;
}

.active,
.dot:hover {
  border-color: yellow;
  background-color: yellow;
}

.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}

@keyframes fade {
  from {
    opacity: 0.8;
  }
  to {
    opacity: 1;
  }
}

@-webkit-keyframes fade {
  from {
    opacity: 0.8;
  }
  to {
    opacity: 1;
  }
}

.txt {
  position: absolute;
  color: #fff;
  letter-spacing: 2px;
  /* line-height: 35px; */
  top: 40%;
  left: 15%;
  z-index: 1;
}

.txt h1 {
  font-size: 64px;
  font-family: "Segoe UI";
}

.txt p {
  font-size: 32px;
  font-weight: 600;
  font-family: "Segoe UI";
}
</style>
