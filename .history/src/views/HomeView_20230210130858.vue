<template>
  <div>
    <input type="text" v-model="userInput" />
    <button @click="sendMessage()">发送消息</button>
    <ul>
      <li v-for="message of messages" :key="message.id">
        {{ message.user === "user" ? "我" : "机器人" }}: {{ message.text }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

// userInput: '',
// messages: [],
// chatgptToken: 'YOUR_CHATGPT_TOKEN'
const userInput = ref("");
const messages = ref([]);
const chatgptToken = ref("YOUR_CHATGPT_TOKEN");
// methods: {
//   /*
//     使用 ChatGPT API 发送消息
//   */
//   async sendMessage() {
//     const message = {
//       user: 'user',
//       text: this.userInput
//     };
//     this.messages.push(message);
//     this.userInput = '';
//     try {
//       const response = await axios.post('https://api.chatgpt.com/v1/request', {
//         token: this.chatgptToken,
//         context_id: '123',
//         text: message.text
//       });
//       const robotMessage = {
//         user: 'robot',
//         text: response.data.response
//       };
//       this.messages.push(robotMessage);
//     } catch (err) {
//       console.error(err);
//     }
//   }
// }
const sendMessage = async () => {
  const message = {
    user: "user",
    text: userInput.value,
  };
  messages.value.push(message);
  userInput.value = "";
  try {
    const response = await axios.post("/api", {
      token: chatgptToken.value,
      context_id: "123",
      text: message.text,
    });
    const robotMessage = {
      user: "robot",
      text: response.data.response,
    };
    messages.value.push(robotMessage);
  } catch (err) {
    console.error(err);
  }
};
</script>

<style>
input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
}
button {
  background-color: #0079ff;
  padding: 10px;
  color: #fff;
  border-radius: 5px;
  width: 100%;
  margin-top: 10px;
  box-sizing: border-box;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  padding: 10px;
  margin-bottom: 10px;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: #fafafa;
}
</style>
