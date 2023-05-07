<template>
  <div class="sec-4">
    <div class="title-text">
      <h1>Success Stories</h1>
    </div>
    <div class="story-box">
      <div class="story-img">
        <img src="@/assets/image_3.png" alt="" />
      </div>
      <div class="story-parag">
        <h1>2022 Projects</h1>
        <div class="story-text">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam non
            corporis modi officia ea. Et magnam, provident eum vel eveniet
            deleniti mollitia obcaecati perferendis? Maxime voluptatem deleniti
            numquam ut ad!,Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Tempore velit repellat repellendus laudantium quisquam
            architecto magni nulla, adipisci libero itaque et soluta eaque
            ratione obcaecati in eveniet ex vero cupiditate?,Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Vero quia labore rerum ullam
            natus, inventore accusamus praesentium reprehenderit culpa expedita,
            soluta voluptas reiciendis a veritatis earum? Earum, totam
            assumenda. Facere.
          </p>
        </div>
      </div>
    </div>
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

.sec-4 {
  width: 100%;
  padding: 70px 0;
}

.title-text {
  text-align: center;
  padding-bottom: 70px;
}

.title-text h1 {
  margin: auto;
  color: #222b5c;
  font-size: 64px;
  font-weight: bold;
}

.story-box {
  width: 80%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
}

.story-parag {
  flex-basis: 50%;
}

.story-img {
  flex-basis: 50%;
  margin: auto;
}

.story-img img {
  width: 70%;
}

.story-parag h1 {
  text-align: left;
  margin-bottom: 10px;
  color: #222b5c;
  font-size: 25px;
  font-weight: bold;
}

.story-text p {
  text-align: justify;
}

@media screen and (max-width: 1200px) {
  .story-box {
    flex-direction: column;
  }

  .story-img {
    width: 100%;
  }

  .title-text h1 {
    font-size: 40px;
  }
}
</style>
