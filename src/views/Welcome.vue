<template>
  <div class="fullpage">
    <h1>Welcome to you first steps to healthier mind body and spirit</h1>
    <section class="firstpage">
      <p>
        Get news and latest research about mental health, living a healthier
        life
      </p>
      <img
        src="@/assets/undraw_medical_research_qg4d.svg"
        alt="responsive image"
        id="design"
      />
      <b-button
        variant="outline-dark"
        id="learnmore"
        v-if="!auth"
        to="/register"
        >Learn more</b-button
      >
    </section>
    <section class="secondpage">
      <div>
        <h1>Find therapits near me</h1>
        <p>Proffesionals in your area that want to help</p>
        <img
          src="@/assets/undraw_location_search_bqps.svg"
          alt="responsive image"
          id="design"
          to="/findhelp"
        />
        <b-button variant="outline-dark" id="find" v-if="!auth" to="/findhelp"
          >Find</b-button
        >
      </div>
    </section>
    <section class="thirdpage">
      <div>
        <h1>Find advice</h1>
        <img
          src="@/assets/undraw_Meditating_re_aiqa.svg"
          alt="responsive image"
          id="design"
        />
        <b-button variant="outline-dark" id="advice" v-if="!auth" to="/mindfind"
          >Advice</b-button
        >
      </div>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    auth() {
      return this.$store.getters.isAuth;
    }
  }
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto+Condensed");

h1 {
  font-family: Georgia, "Times New Roman", Times, serif;
  align-self: center;
}
p {
  position: relative;
  margin: 2px auto;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
@mixin transition(
  $property: all,
  $duration: 0.45s,
  $ease: cubic-bezier(0.65, 0, 0.076, 1)
) {
  transition: $property $duration $ease;
}

* {
  margin: 10px;
  padding: 10px;
  box-sizing: border-box;
  &::before,
  &::after {
    box-sizing: border-box;
  }
}

body {
  font-family: "Mukta", sans-serif;
  font-size: 1rem;
  display: flex;
}

#firstpage {
  position: relative;
}

#design {
  position: relative;
  width: 60%;
  height: 10%;
  z-index: start;
}

#learnmore {
  position: absolute;
}
</style>
