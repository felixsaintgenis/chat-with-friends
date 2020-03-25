<template>
  <div class="chat container">
    <h2 class="center teal-text">Chat</h2>
    <div class="card">
      <div class="card-content">
        <ul class="messages" v-chat-scroll>
          <li v-for="message in messages" :key="message.id">
            <span class="teal-text">{{ message.name }}:</span>
            <span class="teal-text grey-text content">{{
              message.content
            }}</span>
            <span class="grey-text time">{{
              message.timeStamp | formatDate
            }}</span>
          </li>
        </ul>
      </div>
      <div class="card-action">
        <NewMessage :name="name" />
      </div>
    </div>
  </div>
</template>

<script>
import db from "@/firebase/init";
import moment from "moment";
import NewMessage from "@/components/NewMessage";
export default {
  name: "Chat",
  props: ["name"],
  components: {
    NewMessage
  },
  data() {
    return {
      messages: []
    };
  },
  filters: {
    formatDate(val) {
      if (!val) {
        return "-";
      }
      return moment(val).fromNow();
    }
  },
  created() {
    db.collection("messages").onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        if (change.type == "added") {
          let doc = change.doc;
          this.messages.push({
            id: doc.id,
            name: doc.data().name,
            content: doc.data().content,
            timeStamp: doc.data().timeStamp
          });
        }
      });
    });
  }
};
</script>

<style>
.chat {
  max-width: 600px;
}
.chat span {
  font-size: 1.2em;
}
.chat .content {
  font-size: 1em;
}
.chat .time {
  font-size: 0.8em;
  display: block;
}
.messages {
  max-height: 300px;
  overflow: auto;
}
</style>
