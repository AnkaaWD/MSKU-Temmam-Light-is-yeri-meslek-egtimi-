<template>
  <div class="sec-3">
    <h1>
      Our <br />
      Projects
    </h1>
    <div class="side-1">
      <img src="@/assets/image_1.png" alt="" />
      <h2>2022 Projects</h2>
      <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
      <span>14/03/2022</span>
    </div>
    <div class="side-2">
      <img src="@/assets/image_3.png" alt="" />
      <h2>2022 Projects</h2>
      <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
      <span>14/03/2022</span>
    </div>
    <div class="side-3">
      <img src="@/assets/image_4.png" alt="" />
      <h2>2022 Projects</h2>
      <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
      <span>14/03/2022</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "appProjects",
};
</script>

<style scoped>
* {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.sec-3 {
  background-color: #eff0f3;
  display: flex;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
}

.sec-3 h1 {
  color: #222b5c;
  font-size: 64px;
  font-weight: bold;
  margin: 50px 10px auto 80px;
}

.side-1,
.side-2,
.side-3 {
  background-color: white;
  width: min-content;
  padding: 15px;
  border: white solid 5px;
  border-radius: 20px;
  margin: 20px;
}

.sec-3 img {
  margin: -12px;
  padding: 10px;
  width: 345px;
}

.sec-3 h2 {
  font-size: 32px;
  font-weight: bold;
  color: #222b5c;
}

.sec-3 p {
  font-size: 22px;
  font-weight: 500px;
  padding-top: 10px;
  color: #787878;
}

.sec-3 span {
  color: #ffae02;
  font-size: 22px;
}

@media screen and (max-width: 800px) {
  .sec-3 h1 {
    font-size: 40px;
    margin: 10px;
  }
}
</style>
