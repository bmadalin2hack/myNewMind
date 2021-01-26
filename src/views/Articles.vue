<template>
  <div>
    <section class="articles">
      <h1>
        {{ article.name }}
      </h1>
      <div class="articles-details">
        <img :src="require(`@/assets/${article.image}`)" :alt="article.name" />
        <p>{{ article.description }}</p>
      </div>
    </section>
    <section class="topics">
      <h2>Get to {{ article.name }}</h2>
      <div class="cards" id="topics">
        <div v-for="topic in article.topics" :key="topic.slug" class="card">
          <router-link
            :to="{
              name: 'Topics',
              params: { topicsSlug: topic.slug },
              hash: '#topic'
            }"
          >
            <img :src="require(`@/assets/${topic.image}`)" :alt="topic.name" />
            <span class="card__text">
              {{ topic.name }}
            </span>
          </router-link>
        </div>
      </div>
      <router-view :key="$route.path" />
    </section>
  </div>
</template>
<script>
import storeArticles from "../store/storeArticles";

export default {
  data() {
    return {};
  },
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  computed: {
    article() {
      return storeArticles.articles.find(article => article.slug === this.slug);
    }
  }
};
</script>

<style>
img {
  max-width: 600px;
  height: fit-content;
  width: 100%;
  max-height: 400px;
}
.topics {
  padding: 40px 0;
}
.articles-details {
  display: flex;
  justify-content: space-between;
}
p {
  margin: 0 40px;
  font-size: 20px;
  text-align: left;
}
.cards {
  display: flex;
  justify-content: space-between;
}
.cards img {
  max-height: 200px;
}
.card {
  padding: 0 20px;
  position: relative;
}
.card__text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 25px;
  font-weight: bold;
  text-decoration: none;
}
</style>
