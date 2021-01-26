import Vue from "vue";
import Vuex from "vuex";
import globalAxios from "axios";
import router from "../router/router";
import axios from "../auth/axios-auth";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null,
    user: null,
    news: null
  },
  mutations: {
    authUser(state, userData) {
      state.idToken = userData.token;
      state.userId = userData.userId;
    },
    storeUser(state, user) {
      state.user = user;
    },
    clearAuthData(state) {
      state.idToken = null;
      state.userId = null;
      state.news = null;
    },
    storeNews(state, news) {
      state.news = news;
    }
  },
  actions: {
    setLogoutTimer({ dispatch }, expirationTime) {
      setTimeout(() => {
        dispatch("logout");
      }, expirationTime * 1000);
    },
    setNews({ commit }) {
      const params = {
        apiKey: "38c7ed00f01c44a0965820ece8a4014d",
        q: "health"
      };
      axios
        .get("https://newsapi.org/v2/everything", { params })
        .then(response => {
          const apiResponse = response.data;
          commit("storeNews", apiResponse);
        })
        .catch(error => {
          console.log(error);
        });
    },
    // eslint-disable-next-line no-unused-vars
    register({ commit, dispatch }, authData) {
      axios
        .post("/accounts:signUp?key=AIzaSyAJY6GFDEyWdZpdvdTBIi9RPHHdft5GnZw", {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        })
        .then(res => {
          commit("authUser", {
            token: res.data.idToken,
            userId: res.data.localId
          });
          const now = new Date();
          const expirationDate = new Date(
            now.getTime() + res.data.expiresIn * 1000
          );
          localStorage.setItem("token", res.data.idToken);
          localStorage.setItem("userId", res.data.localId);
          localStorage.setItem("expirationDate", expirationDate);
          dispatch("storeUser", authData);
          dispatch("setLogoutTimer", res.data.expiresIn);
          router.push("home");
        })
        .catch(error => console.log(error));
    },
    // eslint-disable-next-line no-unused-vars
    signin({ commit, dispatch }, authData) {
      axios
        .post(
          "/accounts:signInWithPassword?key=AIzaSyAJY6GFDEyWdZpdvdTBIi9RPHHdft5GnZw",
          {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true
          }
        )
        .then(res => {
          const now = new Date();
          const expirationDate = new Date(
            now.getTime() + res.data.expiresIn * 1000
          );
          localStorage.setItem("token", res.data.idToken);
          localStorage.setItem("userId", res.data.localId);
          localStorage.setItem("expirationDate", expirationDate);
          commit("authUser", {
            token: res.data.idToken,
            userId: res.data.userId
          });
          dispatch("setLogoutTimer", res.data.expiresIn);
          router.push("home");
        })
        .catch(error => console.log(error));
    },
    // eslint-disable-next-line no-unused-vars
    tryAutoLogin({ commit }) {
      const token = localStorage.getItem("token");
      if (!token) {
        return;
      }
      const expirationDate = localStorage.getItem("expirationDate");
      const now = new Date();
      if (now >= expirationDate) {
        return;
      }
      const userId = localStorage.getItem("userId");
      commit("authUser", {
        token,
        userId
      });
    },
    logout({ commit }) {
      commit("clearAuthData");
      localStorage.removeItem("expirationDate");
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      router.replace("/");
    },
    // eslint-disable-next-line no-unused-vars
    storeUser({ commit, state }, userData) {
      if (!state.idToken) {
        return;
      }
      globalAxios
        .post(`${"/users.json?auth="}${state.idToken}`, userData)
        .then(res => console.log(res))
        .catch(error => console.log(error));
    },
    // eslint-disable-next-line no-unused-vars
    fetchUser({ commit, state }) {
      if (!state.idToken) {
        return;
      }
      globalAxios
        .get(`${"/users.json?auth="}${state.idToken}`)
        .then(res => {
          const now = new Date();
          const expirationDate = new Date(
            now.getTime() + res.data.expiresIn * 1000
          );
          localStorage.setItem("token", res.data.idToken);
          localStorage.setItem("expirationDate", expirationDate);
          const users = [];
          const { data } = res;
          for (const key in data) {
            const user = data[key];
            user.id = key;
            users.push(user);
          }
          commit("storeUser", users[0]);
        })
        .catch(error => console.log(error));
    }
  },
  getters: {
    user(state) {
      return state.user;
    },
    isAuth(state) {
      return state.idToken !== null;
    },
    news(state) {
      return state.news;
    }
  }
});
