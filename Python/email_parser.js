import fs from "fs";
import { MailParser } from "mailparser";

function parseEmail(filePath) {
  let mailparser = new MailParser();

  // setup an event listener to print email data
  mailparser.on("headers", function (headers) {
    console.log("From: ", headers.get("from").text);
    console.log("To: ", headers.get("to").text);
    console.log("Subject: ", headers.get("subject"));
  });

  mailparser.on("data", function (data) {
    if (data.type === "text") {
      // if this is the email body
      console.log(data.text); // print the body
    }
  });

  // read the email file and feed it to the MailParser
  let email = fs.readFileSync(filePath, "utf8");
  mailparser.write(email);
  mailparser.end();
}

parseEmail("email.eml");
