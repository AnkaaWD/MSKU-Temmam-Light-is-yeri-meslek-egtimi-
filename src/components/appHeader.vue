<template>
  <nav class="navbar">
    <div class="brand-title">
      <img src="@/assets/Logo_dark.png" alt="logo" class="logo" />
    </div>
    <a href="#" class="toggleButton">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </a>
    <div class="navbar-links">
      <!-- <ul>
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
      </ul> -->
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/appAbout">About Us</router-link>
        </li>
        <li>
          <router-link to="/appProjects">Projects</router-link>
        </li>
        <li>
          <router-link to="/appSuccess">Success Stories</router-link>
        </li>
        <li>
          <router-link to="/appPartners">Success Partners</router-link>
        </li>
        <li>
          <router-link to="/appTeam">Our Team</router-link>
        </li>
        <li>
          <router-link to="/reports">Reports</router-link>
        </li>
        <li>
          <router-link to="/appFooter">Contact</router-link>
        </li>
        <li>
          <router-link class="btn-1" to="/donate">
            <button>Donate</button>
          </router-link>
        </li>
        <li>
          <router-link class="btn-2" to="/ar">AR</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "appHeader",
  mounted() {
    const toggleButton = document.querySelector(".toggleButton");
    const navbarLinks = document.querySelector(".navbar-links");

    toggleButton.addEventListener("click", () => {
      navbarLinks.classList.toggle("active");
    });
  },
};
</script>

<style scoped>
* {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: aqua; */
  color: #787878;
  position: sticky;
  top: 0;
  z-index: 3000;
  background-color: #fff;
}

.brand-title img {
  cursor: pointer;
  width: 200px;
}

.navbar-links ul {
  margin: 0;
  padding: 0;
  display: flex;
}

.navbar-links li {
  list-style: none;
  font-size: 20px;
  /* line-height: 80px; */
}

.navbar-links li a {
  text-decoration: none;
  color: #787878;
  padding: 1rem;
  display: block;
  font-size: 20px;
  transition: all 0.3s ease 0s;
}

.navbar-links li a:hover {
  text-decoration: underline;
  color: #222b5c;
}

.navbar-links .btn-1 button {
  padding: 9px 25px;
  background-color: #222b5c;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  color: white;
  font-size: 20px;
  transition: all 0.3s ease 0s;
}

.navbar-links .btn-1 button:hover {
  background-color: #787878;
  color: #222b5c;
}

.navbar-links .btn-2 {
  transition: all 0.3s ease 0s;
  color: #222b5c;
  font-weight: 500;
}

.navbar-links .btn-2:hover {
  text-decoration: none;
  color: #787878;
}

.toggleButton {
  position: absolute;
  top: 1.5rem;
  right: 2rem;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
}

.toggleButton .bar {
  height: 4px;
  width: 100%;
  background-color: #222b5c;
  border-radius: 10px;
}

@media screen and (max-width: 1410px) {
  .toggleButton {
    display: flex;
  }

  .navbar-links {
    display: none;
    width: 100%;
  }

  .navbar {
    flex-direction: column;
    align-items: flex-start;
  }

  .navbar-links ul {
    flex-direction: column;
    width: 100%;
  }

  .navbar-links li {
    text-align: center;
  }

  .navbar-links li a {
    padding: 0.5rem 1rem;
  }

  .navbar-links.active {
    display: flex;
  }

  .navbar-links li a:hover {
    text-decoration: none;
    font-weight: bold;
    background-color: #787878;
    color: #222b5c;
  }

  .navbar-links .btn-1 button {
    width: 90%;
    margin: auto;
  }

  .navbar-links .btn-1 button:hover {
    width: 100%;
    /* padding: 15px 25px; */
    background-color: #222b5c;
    color: #fff;
  }

  .navbar-links .btn-2:hover {
    color: #222b5c;
    font-weight: bolder;
  }

  .brand-title img {
    width: 170px;
  }
}
</style>
