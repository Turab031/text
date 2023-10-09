require('dotenv').config()
const acccountSid = process.env.TWILIO_ACCOUNT_SID
console.log(acccountSid)
const autheToken= process.env.TWILIO_AUTH_TOKEN
const client = require('twilio')(accountSid,autheToken)
client.messages.create({
    body:'this is a text ',
    from:'+12182745609',
    to:''

}).then(mesage=>console.log(message))