<template>
  <section>
    <h2>{{ topic.name }}</h2>
    <div class="topics-details">
      <img :src="require(`@/assets/${topic.image}`)" :alt="topic.name" />
      <p>{{ topic.description }}</p>
    </div>
  </section>
</template>
<script>
import storeArticles from "../store/storeArticles";

export default {
  props: {
    slug: {
      type: String,
      required: true
    },
    topicsSlug: {
      type: String,
      required: true
    }
  },
  computed: {
    article() {
      return storeArticles.articles.find(article => article.slug === this.slug);
    },
    topic() {
      return this.article.topics.find(topic => topic.slug === this.topicsSlug);
    }
  }
};
</script>

<style scoped>
img {
  max-width: 600px;
  height: fit-content;
  width: 100%;
  max-height: 400px;
}
.topics-details {
  display: flex;
  justify-content: space-between;
}
p {
  margin: 0 20px;
  font-size: 20px;
  text-align: left;
}
</style>
