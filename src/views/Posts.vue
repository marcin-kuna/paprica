<template>
  <div class="posts">
    <h1>List of Posts</h1>
    <div class="posts__container">
      <div class="post" v-for="post in posts" :key="post.id">
        <p>{{ post.email }}</p>
        <h3>{{ post.name }}</h3>
        <p>{{ post.body }}</p>
        <div class="post__delete" @click="deletePost(post.id)">x</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Posts",
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    getPosts() {
      fetch("https://jsonplaceholder.typicode.com/comments/?_limit=10")
        .then((response) => response.json())
        .then((data) => {
          this.posts = data;
        });
    },
    deletePost(id) {
      this.posts = this.posts.filter((post) => post.id !== id);
    },
  },
  created() {
    this.getPosts();
  },
};
</script>

<style lang="scss" scoped>
.posts {
  width: 80vw;
  padding: 30px;
  margin: 0 auto;

  h1 {
    margin-bottom: 50px;
  }

  &__container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
    row-gap: 20px;
  }

  .post {
    height: 280px;
    border: 1px solid #000;
    padding: 10px;
    position: relative;

    h3 {
      margin: 10px 0;
    }

    &__delete {
      color: red;
      font-weight: bold;
      cursor: pointer;
      width: 20px;
      height: 20px;
      border: 1px solid red;
      @include flex-center;
      position: absolute;
      bottom: 10px;
      left: 10px;
    }
  }
}
</style>
