<template>
  <header id="header">
    <div class="logo">
      <router-link
        style="outline: 0; color:black; justify-content:space-between;"
        to="/"
      >
        <img
          src="@/assets/netclipart.com-free-brain-clipart-1399432.png"
          id="logo"
          alt="logo mindmd"
        />MindMD
      </router-link>
    </div>
    <nav>
      <ul>
        <li>
          <router-link style="outline: 0;" to="/findhelp" id="findhelp"
            >Find Help</router-link
          >
        </li>
        <li v-if="!auth">
          <router-link style="outline: 0;" to="/register">Register</router-link>
        </li>
        <li v-if="!auth">
          <router-link style="outline: 0;" to="/signin">Login</router-link>
        </li>
        <li v-if="auth">
          <router-link style="outline: 0;" to="/home">Home</router-link>
        </li>
        <b-button variant="light" @click="onLogout" v-if="auth"
          >Logout</b-button
        >
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  computed: {
    auth() {
      return this.$store.getters.isAuth;
    },
  },
  methods: {
    onLogout() {
      this.$store.dispatch('logout');
    },
  },
};
</script>

<style scoped>
#header {
  height: 56px;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  background-color: #fafafa;
  padding: 0 20px;
}
.sticky {
  position: fixed;
  top: 0;
  width: 100%;
}

.emergency {
  margin: 10%;
}

.logo {
  font-weight: bold;
  color: white;
  align-content: left;
}

.logo a {
  text-decoration: none;
  color: white;
}

.logout {
  position: relative;
}

nav {
  height: 100%;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  flex-flow: row;
  align-items: center;
}

li {
  margin: 0 16px;
}

li a {
  text-decoration: none;
  color: rgb(0, 0, 0);
}

#logo {
  width: 58px;
  align-self: left;
}

li a:hover,
li a:active,
li a.router-link-active {
  color: #000000;
}

#findhelp {
  color: #000000 !important;
  text-transform: uppercase;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  background: #ffffff;
  padding: 10px;
  border: 4px solid #1a270d !important;
  border-radius: 4px;
  display: inline-block;
  transition: all 0.3s ease 0s;
}
</style>
