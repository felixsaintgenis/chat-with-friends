<template>
  <div class="welcome container">
    <div class="card">
      <div class="card-content center-align">
        <h2 class="teal-text">Welcome to chat-with-friends</h2>
        <form @submit.prevent="enterChat">
          <label for="Enter your name:"></label>
          <input placeholder="Your name" type="text" name="name" v-model="name" />
          <p class="error">{{ feedback }}</p>
          <button class="btn teal">enter the chat</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  data() {
    return {
      name: null,
      feedback: null
    };
  },
  methods: {
    enterChat() {
      if (this.name) {
        this.$router.push({ name: "Chat", params: { name: this.name } });
      } else {
        this.feedback = "You must enter a name to enter the chat";
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.welcome {
  max-width: 600px;
}
.welcome h2 {
  font-size: 1.4em;
}
.welcome .error {
  color: red;
  padding: 10px;
}
</style>
