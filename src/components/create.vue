<template>
  <div>
      <h1 class="text-center">Create A Post</h1>
      <form @submit.prevent="addPost">

          <div class="row justify-content-center">
              <div class="col-md-6">
                  <div class="form-group">
                      <label>Post Title:</label>
                      <input type="text" class="form-control" v-model="post.title">
                  </div>
              </div>
          </div>
          <div class="row justify-content-center">
              <div class="col-md-6">
                  <div class="form-group">
                      <label>Post Body</label>
                      <textarea cols="30" rows="10" v-model="post.body" class="form-control"></textarea>
                  </div>
              </div>
          </div>
          <br>
          <div class="form-group text-center">
              <button class="btn btn-primary">
                  Create
              </button>
          </div>

      </form>
  </div>
</template>

<script>
  export default {
      data() {
          return {
              post: {}
          }
      },

      methods: {
          addPost() {
              let url = 'http://localhost:4000/posts/add'
              this.axios.post(url, this.post).then(() => {
                  this.$router.push({name: 'posts'});
              })
          }
      }
  }
</script>