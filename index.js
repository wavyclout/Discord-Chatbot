const { Client } = require("discord.js")
const client = new Client;
const fetch = require('node-fetch')
const gender = 'Boy';



const chanelId = '';//put your chatbot channel id hear.

client.on("ready", () => {
  console.log("Ready for chatting!");


const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('copy ☝ link and use  this link in uptimrrobot to make your bot 24/7 ')
})

app.listen(port, () => {
  console.log(`Your app listening at port ${port}`)
})

  
})

client.on("message", async msg => {
  if(msg.channel.id === chanelId){
  if(msg.author.bot) return;
 msg.channel.startTyping();
  const { message } = await fetch(`https://api.udit.gq/api/chatbot?message=${msg.content}[&name=${client.user.username}&user=${msg.author.id}&gender=${gender}]`).then(response => response.json());
msg.channel.send(message)
msg.channel.stopTyping();
  }})
  
client.login(process.env.TOKEN); //login using the token
