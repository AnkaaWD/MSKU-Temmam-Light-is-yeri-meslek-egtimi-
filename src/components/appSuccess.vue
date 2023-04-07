<template>
  <div class="sec-4">
    <h1>Success Stories</h1>
    <aside>
      <div>
        <img src="@/assets/image_3.png" alt="" />
      </div>
      <div>
        <h2>2022 Projects</h2>
      </div>
      <div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam non
          corporis modi officia ea. Et magnam, provident eum vel eveniet
          deleniti mollitia obcaecati perferendis? Maxime voluptatem deleniti
          numquam ut ad!,Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Tempore velit repellat repellendus laudantium quisquam
          architecto magni nulla, adipisci libero itaque et soluta eaque ratione
          obcaecati in eveniet ex vero cupiditate?,Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Vero quia labore rerum ullam natus,
          inventore accusamus praesentium reprehenderit culpa expedita, soluta
          voluptas reiciendis a veritatis earum? Earum, totam assumenda. Facere.
        </p>
      </div>
    </aside>
  </div>
</template>

<script>
export default {
  name: "appSuccess",
};
</script>

<style scoped>
* {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.sec-4 h1 {
  text-align: center;
  color: #222b5c;
  font-size: 64px;
  font-weight: bold;
  margin: 80px;
}

.sec-4 aside {
  display: flex;
  flex-wrap: nowrap;
}

.sec-4 div h2 {
  text-align: center;
  width: 200px;
  position: relative;
  left: 10px;
  top: 134px;
  height: 100px;
  color: #222b5c;
  font-size: 25px;
  font-family: "Segoe UI";
  font-weight: bold;
}

.sec-4 div p {
  position: relative;
  top: 200px;
  width: 65%;
  right: 200px;
  color: #787878;
}

.sec-4 div img {
  position: relative;
  top: 12px;
  margin: 20px;
}
</style>
