<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <AppImgSlider />
    <AppAbout />
    <AppProjects />
    <AppSuccess />
    <AppPartners />
    <AppTeam />
    <AppFooter />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

import AppAbout from "@/components/appAbout.vue";
import AppFooter from "@/components/appFooter.vue";
import AppImgSlider from "@/components/appImgSlider.vue";
import AppPartners from "@/components/appPartners.vue";
import AppProjects from "@/components/appProjects.vue";
import AppSuccess from "@/components/appSuccess.vue";
import AppTeam from "@/components/appTeam.vue";

export default {
  name: "HomeView",
  components: {
    AppImgSlider,
    AppAbout,
    AppProjects,
    AppSuccess,
    AppTeam,
    AppPartners,
    AppFooter,
  },
};
</script>
