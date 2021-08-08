<template>
  <div class="form__container">
    <form class="form" @submit="onSubmit">
      <div class="form__control">
        <label>User email</label>
        <input
          type="email"
          v-model="email"
          name="email"
          placeholder="Email"
          required
        />
      </div>
      <div class="form__control">
        <label>Title</label>
        <input
          type="text"
          v-model="name"
          name="name"
          placeholder="Title"
          required
        />
      </div>
      <div class="form__control">
        <label>Text</label>
        <textarea v-model="body" name="body" placeholder="Text" required />
      </div>

      <input type="submit" value="Add Post" class="form__btn" />
    </form>
  </div>
</template>

<script>
export default {
  name: "CreatePost",
  data() {
    return {
      email: "",
      name: "",
      body: "",
    };
  },
  methods: {
    onSubmit() {
      const newPost = {
        email: this.email,
        name: this.name,
        body: this.body,
      };

      fetch(`https://jsonplaceholder.typicode.com/comments/`, {
        method: "POST",
        body: JSON.stringify(newPost),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => console.log(data));

      (this.email = ""), (this.name = ""), (this.body = "");
    },
  },
};
</script>

<style lang="scss" scoped>
.form__container {
  width: 100vw;
  height: calc(100vh - 90px);
  @include flex-center;
}

.form {
  width: 400px;

  &__btn {
    width: 50%;
    height: 40px;
    font-size: 18px;
    background: $color-brand-primary;
    color: $color-text-contrast;
    border: none;
    cursor: pointer;
    margin: 0 auto;
    display: block;
  }
}

.form__control {
  margin: 20px 0;

  label {
    display: block;
  }

  input,
  textarea {
    width: 100%;
    height: 40px;
    margin-top: 5px;
    padding: 3px 7px;
    font-size: 18px;
  }

  textarea {
    height: 150px;
  }
}
</style>
