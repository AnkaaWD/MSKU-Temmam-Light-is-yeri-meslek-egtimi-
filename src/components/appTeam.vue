<template>
  <div class="sec-6">
    <h1>Our Team</h1>
    <div class="sidesFlex">
      <div class="side1">
        <img src="@/assets/Designer.png" alt="" />
        <h3>Ahmedshahethi</h3>
        <span>UI/UX Desinger</span>

        <p>
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima eius,
          sint assumenda rerum perspiciatis sapiente qui fugit error animi,
          voluptatum facilis ea expedita ipsum blanditiis non rem distinctio!
          Officia, ea.
        </p>
      </div>

      <div class="side2">
        <img src="@/assets/Designer.png" alt="" />
        <h3>Ahmedshahethi</h3>
        <span>UI/UX Desinger</span>
        <p>
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima eius,
          sint assumenda rerum perspiciatis sapiente qui fugit error animi,
          voluptatum facilis ea expedita ipsum blanditiis non rem distinctio!
          Officia, ea.
        </p>
      </div>

      <div class="side3">
        <img src="@/assets/Designer.png" alt="" />
        <h3>Ahmedshahethi</h3>
        <span>UI/UX Desinger</span>
        <p>
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima eius,
          sint assumenda rerum perspiciatis sapiente qui fugit error animi,
          voluptatum facilis ea expedita ipsum blanditiis non rem distinctio!
          Officia, ea.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "appTeam",
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

.sec-6 {
  position: relative;
  background-color: #eff0f3;
  padding-top: 20px;
}

.sec-6 h1 {
  text-align: center;
  color: #222b5c;
  font-size: 64px;
  font-weight: bold;
  margin: 60px;
}

.sec-6 .sidesFlex {
  display: flex;
  overflow: hidden;
  position: relative;
  padding: 40px;
  width: 80%;
  margin: auto;
}

.side1,
.side2,
.side3 {
  background-color: white;
  border-radius: 20px;
  width: 30%;
  margin: auto;
  align-items: center;
  padding: 20px;
}

.sec-6 img {
  width: 100%;
}

.sidesFlex h3 {
  color: #222b5c;
  font-size: 38px;
  font-weight: bold;
}

.sidesFlex span {
  color: #787878;
  font-size: 26px;
  font-weight: 500px;
}

.sidesFlex p {
  margin-top: 40px;
  color: #787878;
  font-size: 26px;
  font-weight: 500px;
}
</style>
