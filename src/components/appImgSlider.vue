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

    <a class="prev" @click="plusSlides(-1)">&#10094;</a>
    <a class="next" @click="plusSlides(1)">&#10095;</a>
    <div class="dotsbox">
      <span class="dot" @click="currentSlide(1)"></span>
      <span class="dot" @click="currentSlide(2)"></span>
      <span class="dot" @click="currentSlide(3)"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "appImgSlider",
  data() {
    return {
      slideIndex: 1,
    };
  },
  mounted() {
    this.showSlides(this.slideIndex);
  },
  methods: {
    plusSlides(n) {
      this.showSlides((this.slideIndex += n));
    },
    currentSlide(n) {
      this.showSlides((this.slideIndex = n));
    },
    showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("myslider");
      var dots = document.getElementsByClassName("dot");
      if (n > slides.length) {
        this.slideIndex = 1;
      }
      if (n < 1) {
        this.slideIndex = slides.length;
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[this.slideIndex - 1].style.display = "block";
      dots[this.slideIndex - 1].className += " active";
    },
  },
};
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

@media screen and (max-width: 1200px) {
  .txt h1 {
    font-size: 48px;
    font-family: "Segoe UI";
  }
  .txt p {
    font-size: 24px;
    font-weight: 600;
    font-family: "Segoe UI";
  }
  .dot {
    width: 10px;
    height: 10px;
    margin: 0 5px;
  }
  .prev,
  .next {
    font-size: 30px;
  }
}

@media screen and (max-width: 800px) {
  .txt h1 {
    font-size: 24px;
    font-family: "Segoe UI";
  }
  .txt p {
    font-size: 12px;
    font-weight: 600;
    font-family: "Segoe UI";
  }
}
</style>
