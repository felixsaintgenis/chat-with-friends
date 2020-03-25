<template>
  <div class="new-message">
    <form @submit.prevent="addMessage">
      <label for="new-message">New Message</label>
      <input type="text" name="new-message" v-model="newMessage" />
      <p class="error">{{ feedback }}</p>
    </form>
  </div>
</template>

<script>
import db from "@/firebase/init";
export default {
  name: "NewMessage",
  props: ["name"],
  data() {
    return {
      newMessage: null,
      feedback: null
    };
  },
  methods: {
    addMessage() {
      if (this.newMessage) {
        db.collection("messages")
          .add({
            name: this.name,
            content: this.newMessage,
            timeStamp: Date.now()
          })
          .catch(err => console.log(err));
        this.newMessage = null;
        this.feedback = null;
      } else {
        this.feedback = "You must enter a message before submitting";
      }
    }
  }
};
</script>

<style>
.new-message .error {
  color: red;
  font-size: 0.8em;
}
</style>