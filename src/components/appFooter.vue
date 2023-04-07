<template>
  <footer>
    <div class="footerContainer">
      <div class="footerInfo">
        <a href="#" class="footerLogo">
          <img src="@/assets/Logo_light.png" alt="Logo" />
        </a>
        <p class="footerTagline">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit...
        </p>
      </div>
      <div class="footerSection">
        <h2 class="footerCategory">QUICK LINK</h2>
        <nav class="footerList1">
          <div class="List">
            <li><a href="#" class="footerLink">Home</a></li>
            <li><a href="#" class="footerLink">About</a></li>
            <li><a href="#" class="footerLink">Projects</a></li>
            <li><a href="#" class="footerLink">Stories</a></li>
          </div>
          <div class="List">
            <li><a href="#" class="footerLink">Partners</a></li>
            <li><a href="#" class="footerLink">Our Team</a></li>
            <li><a href="#" class="footerLink">Reports</a></li>
            <li><a href="#" class="footerLink">Contact</a></li>
          </div>
        </nav>
      </div>
      <div class="footerSection">
        <h2 class="footerCategory">FOLLOW Us</h2>
        <nav class="footerList2">
          <li><a href="#" class="footerLink">FaceBook</a></li>
          <li><a href="#" class="footerLink">FaceBook</a></li>
          <li><a href="#" class="footerLink">FaceBook</a></li>
          <li><a href="#" class="footerLink">FaceBook</a></li>
        </nav>
      </div>
    </div>
    <div class="footerBottom">
      <div class="footerBottomContainer">
        <p class="footerNumber">+967 772 330 340 - 01 575366</p>
        <p class="footerCopyright">
          All rights are resaved to Temmam Light Co.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "appFooter",
};
</script>

<style scoped>
* {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

footer {
  background-color: #222b5c;
  color: white;
  padding-left: 40px;
  padding-right: 40px;
}

.footerContainer {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 2rem;
  padding: 3rem 2rem;
  margin-left: auto;
  margin-right: auto;
}

.footerInfo {
  width: 16rem;
  margin-left: 0;
  margin-right: 0;
  text-align: left;
}

.footerLogo {
  display: flex;
  justify-content: flex-start;
}

.footerLogo img {
  width: 10rem;
}

.footerTagline {
  color: white;
}

/* .footerSectionWrapper {
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
  text-align: center;
} */

.footerSection {
  text-align: center;
}

.footerCategory {
  color: white;
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 0.75rem;
}

.footerList1,
.footerList2 {
  display: flex;
  row-gap: 1rem;
  list-style-type: none;
}

.footerList1 {
  width: 300px;
  flex-direction: row;
  justify-content: space-between;
}

.footerList1 .List {
  display: flex;
  row-gap: 1rem;
  list-style-type: none;
  flex-direction: column;
}

.footerList2 {
  flex-direction: column;
}

.footerLink {
  color: white;
  text-decoration: none;
  transition: all 0.3s ease 0s;
  gap: 1rem;
  line-height: 1rem;
}

.footerLink:hover {
  color: #787878;
}

.footerBottomContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 1rem;
  padding: 1.25rem 0rem;
  margin: 0 auto;
  position: relative;
}

.footerBottomContainer::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 1px;
  top: 0px;
  background-color: #ffffff;
}
</style>
