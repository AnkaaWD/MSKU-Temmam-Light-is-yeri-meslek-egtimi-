<template>
  <header>
    <img src="@/assets/Logo_dark.png" alt="logo" class="logo" />
    <nav>
      <ul class="navLinks">
        <li><a href="#">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Success Stories</a></li>
        <li><a href="#">Success Partners</a></li>
        <li><a href="#">Our Team</a></li>
        <li><a href="#">Reports</a></li>
        <li><a href="#">Contact Us</a></li>
        <li>
          <a class="btn-1" href="#"><button>Donate</button></a>
        </li>
        <li><a class="btn-2" href="#">AR</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "appHeader",
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

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 2%;
  /* background-color: antiquewhite; */
}

.logo {
  cursor: pointer;
}

.navLinks {
  list-style: none;
}

.navLinks li {
  display: inline-block;
  padding: 0px 20px;
}

.navLinks li a {
  transition: all 0.3s ease 0s;
  color: #787878;
}

.navLinks li a:hover {
  text-decoration: underline;
  color: #222b5c;
}

.btn-1 button {
  padding: 9px 25px;
  background-color: #222b5c;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  color: white;
}

.btn-1 button:hover {
  background-color: #787878;
  color: #222b5c;
}

.navLinks li .btn-2 {
  transition: all 0.3s ease 0s;
  color: #222b5c;
}

.navLinks li .btn-2:hover {
  text-decoration: none;
  color: #787878;
}
</style>
