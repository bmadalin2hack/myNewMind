<template>
  <div id="app">
    <div class="home">
      <div
        class="articleTopics"
        v-for="article in articles"
        :key="article.name"
      >
        <router-link :to="{ name: 'Articles', params: { slug: article.slug } }">
          <h2>{{ article.name }}</h2>
        </router-link>
        <figure>
          <router-link
            :to="{ name: 'Articles', params: { slug: article.slug } }"
          >
            <img
              :src="require(`@/assets/${article.image}`)"
              alt="article.name"
            />
          </router-link>
        </figure>
      </div>
    </div>
    <div class="api">
      <div class="articleBox" v-for="item of news.articles" :key="item.id">
        <div class="articleTitle">{{ item.title }}</div>
        <div class="articlePhoto">
          <img
            id="photos"
            v-if="item.urlToImage"
            :src="[item.urlToImage]"
            width="500"
            height="600"
            alt="ArticleImage"
          />
        </div>
        <div class="articleDescription">{{ item.description }}</div>
        <a :href="item.url"
          ><div>{{ item.url }}</div></a
        >
      </div>
    </div>
  </div>
</template>

<script>
import storeArticles from "../store/storeArticles";

export default {
  name: "home",
  computed: {
    email() {
      return !this.$store.getters.user ? false : this.$store.getters.user.email;
    },
    news() {
      return this.$store.getters.news;
    }
  },
  created() {
    this.$store.dispatch("setNews");
    this.$store.dispatch("fetchUser");
  },
  data() {
    return { articles: storeArticles.articles };
  }
};
</script>

<style scoped>
.home {
  width: 650px;
  height: 1000px;
  overflow: hidden;
  display: inline-block;
  margin: 0 1% 1% 0;
  padding: 1% 0 0 1%;
}

.articleBox {
  border: 1px solid black;
}

.articleTitle {
  font-size: 30px;
  padding: 5px;
  border-bottom: 1px solid black;
}

.articleDescription {
  padding: 5px;
  align-self: fit-content;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 20px;
  vertical-align: middle;
  display: inline-block;
}

.articles {
  display: flex;
  justify-content: space-between;
}
.links {
  padding-right: 20px;
  list-style: none;
}
.links:hover {
  text-decoration: underline;
}

.articlePhoto {
  width: 30%;
  height: auto;
}

#photos {
  max-width: 100%;
  height: auto;
  width: 50%;
}
</style>
