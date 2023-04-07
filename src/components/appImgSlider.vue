<template>
  <div class="sec-1">
    <img src="@/assets/image_2.png" alt="img-1" class="photo-1" />
    <p class="par-1">Distribution of shelter materials</p>
    <p class="par-2">
      Distribution Of Shelter materials to children in Al-Mudhaffar and
      Al-Suwaidi hospitals
    </p>
  </div>
</template>

<script>
export default {
  name: "appImgSlider",
};
</script>

<style scoped>
* {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.sec-1 {
  width: 100%;
  height: 100%;
  position: relative;
}

.photo-1 {
  position: relative;
  z-index: -1;
  width: 100%;
  height: 100%;
}

.par-1 {
  text-align: center;
  position: absolute;
  top: 40%;
  left: 25%;
  color: white;
  font-size: 64px;
  font-family: "Segoe UI";
}

.par-2 {
  text-align: center;
  position: absolute;
  color: white;
  top: 56%;
  left: 319px;
  font-size: 32px;
  font-weight: 600;
  font-family: "Segoe UI";
}
</style>
