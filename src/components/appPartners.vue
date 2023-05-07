<template>
  <div class="sec-5">
    <h1>Success Partners</h1>
    <p>Over <span> 17.000 + Users</span> all over the world</p>
    <ul>
      <li><img src="@/assets/Partner_1.png" alt="" /></li>
      <li><img src="@/assets/Partner_2.png" alt="" /></li>
      <li><img src="@/assets/Partner_3.png" alt="" /></li>
      <li><img class="img-4" src="@/assets/Partner_4.png" alt="" /></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "appPartners",
};
</script>

<style scoped>
* {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

li,
a,
button {
  font-weight: bold;
  font-size: 20px;
  text-decoration: none;
}

.sec-5 {
  position: relative;
  /* top: 100px; */
}

.sec-5 h1 {
  text-align: center;
  color: #222b5c;
  font-size: 64px;
  font-weight: bold;
  margin: 80px;
}

.sec-5 p {
  text-align: center;
  color: #787878;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 40px;
}

.sec-5 span {
  color: #222b5c;
  font-size: 38px;
  font-weight: 700;
}

.sec-5 ul {
  display: flex;
  width: 80%;
  margin: auto;
  margin-bottom: 80px;
  flex-wrap: nowrap;
  justify-content: center;
}

.sec-5 ul li {
  background-color: #70707033;
  border: #70707000 solid 5px;
  list-style: none;
  margin: 11px;
  width: 23%;
  height: 175px;
  text-align: center;
}

@media screen and (max-width: 1200px) {
  .sec-5 ul {
    display: block;
  }
  .sec-5 ul li {
    width: 80%;
    margin: 10px auto;
  }
  .sec-5 p {
    font-size: 16px;
  }

  .sec-5 span {
    color: #222b5c;
    font-size: 19px;
    font-weight: 700;
  }
  .sec-5 h1 {
    font-size: 40px;
  }
}

@media screen and (max-width: 800px) {
  .sec-5 ul li .img-4 {
    width: 250px;
  }
}
</style>
