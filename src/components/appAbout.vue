<template>
  <div class="sec-2">
    <h1>About Us</h1>
    <div class="about">
      <ul>
        <li>
          <img src="Icon.png" alt="" class="icon-1" />
          <h2>Our Values</h2>
          <p>
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            harum aliquam ipsam maiores quisquam, ..."
          </p>
        </li>
        <li>
          <img src="Icon.png" alt="" class="icon-2" />
          <h4>Our Vision</h4>
          <p>
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            harum aliquam ipsam maiores quisquam, ..."
          </p>
        </li>
        <li>
          <img src="Icon.png" alt="" class="icon-3" />
          <h4>Our Values</h4>
          <p>
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            harum aliquam ipsam maiores quisquam, ...
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "appAbout",
};
</script>

<style scoped>
* {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.sec-2 {
  width: 100%;
  height: 100%;
  position: relative;
}

.sec-2 h1 {
  text-align: center;
  margin: 80px;
  font-weight: bold;
  font-size: 64px;
  color: #222b5c;
}

.about {
  display: flex;
  align-items: center;
  width: 80%;
  margin: 0px auto 60px auto;
  position: relative;
  background-color: #f8f6f3;
  border-radius: 10px;
  padding: 20px;
}

.sec-2 ul {
  display: flex;
  flex-wrap: nowrap;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  list-style: none;
  text-align: center;
  padding: 40px;
}

.sec-2 ul h2 {
  text-align: center;
  font-size: 24px;
  color: black;
}

.sec-2 ul p {
  padding: 20px 0px 20px 30px;
  text-align: left;
  font-size: 20px;
  color: #787878;
}

.icon-1 {
  background-color: #ffd480;
  border: solid #ffd480 30px;
  border-radius: 360px;
}

.icon-2 {
  background-color: #85e8ff;
  border: solid #85e8ff 30px;
  border-radius: 360px;
}

.icon-3 {
  background-color: #bec5ff;
  border: solid #bec5ff 30px;
  border-radius: 360px;
}

@media screen and (max-width: 1200px) {
  .about {
    width: 95%;
  }
}

@media screen and (max-width: 800px) {
  .about {
    width: 95%;
  }
  .sec-2 h1 {
    font-size: 40px;
  }
  .sec-2 ul h2 {
    font-size: 18px;
  }

  .sec-2 ul p {
    font-size: 14px;
  }
}
</style>
