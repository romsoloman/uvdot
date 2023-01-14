import { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN } from "./../../env";
import * as functions from "firebase-functions";
const twilio = require("twilio");
const admin = require("firebase-admin");
admin.initializeApp();
const client = new twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

const TWILIO_PHONE = "+12232107605";

export const sendSMS = functions.https.onCall((data, context) => {
  // Use Twilio to send the SMS message
  return client.messages
    .create({
      body: data.message + "ממספר " + data.fromNumber,
      from: TWILIO_PHONE,
      to: data.phoneNumber,
    })
    .then((message: any) => {
      console.log(message.sid);
      return { message: "SMS sent successfully" };
    })
    .catch((err: any) => {
      console.log(err);
      return { message: "Error sending SMS" };
    });
});
