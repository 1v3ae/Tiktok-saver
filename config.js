//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Topudmh@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Toputech/Topu-ai";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRrcnADTOKzivM0S1r";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRrcnADTOKzivM0S1r";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/13f1bb945857eb9b1eca6.jpg";
global.devs = "255673750170";
global.sudo = process.env.SUDO || "2347047223672";
global.owner = process.env.OWNER_NUMBER || "2347047223672";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "unavailable";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/nl69nj";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUpqVVl0WU9IdzJ6VWdqM1NpVklrNVFUTGJBR3VFK0FQc29Vd05DUkozUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSjZlNWNpaFpkcFRISXpVem5nSlF3Nkt4VHdwOVk4L29xemttbms2R0lRdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5TkdwNXgyM3FoZWpFRTZ5eStwMzRWc0dMOHFqK3d1YmxGZmRFbHZxNkVBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsT0NJL2lVL0tNazFxSTlNY3dhU0RxV3BNOWNZY1BvYWwrdGczUHpkSmo4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitBM1IvMTJQSVJhVEF0WjdLWW1vc2NkZHhNcTlQdmhiaFNicnQyb0lEVkk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9Db05iUXZETTNhYk1PSEpaQWlsNmFldVYzL1lkZkNJWjV0NHY4SHhBeDg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEJOQjN3TnNIeGRyU1lnZnpNblAxOGg2d2txcXBLTFh6VHlPZnBDcEgzZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia3Y2ejJkQXAwdFlzWUVaQUU2Ly9Nc2lUZ1JxMmJLU0piNVJSZWR3M3VrQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVBMlR4Yk1SSmFNazMvMWY4SmlNR1NHbUdiMTZqaXFRVG9ITnBUb0xlMjVTZ3o2cnJ5RnlwWHZoa1Q4M0xlK2U4dmoyNUx1RVIwMktJRzZ5WThla0RRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTMwLCJhZHZTZWNyZXRLZXkiOiJ1N3U3MDBzSnpuQUU4SVdSdTBxUlVlN05RNngwVlBnNmxlbGRaZzI4MWVjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJOZVJBOEtVWFR6LXYwUXJibE9BUDBBIiwicGhvbmVJZCI6ImIwM2ZjMzE5LTQ2ZGItNGY3NS04ODg4LTVhMGRhOTE5NGU1NCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlTXlpRWN2L1ZPajdNQTM3cG5UVG1GcGJ6UTg9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9RSVZqYUZTK1B3UXp3TlNSTFRIU1VySzBkUT0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BmVXJzb0VFT0dRdDdRR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkVHZzFTM2l4Um5KOTdWb2UwZTRiU0xjUHJBYWV4dDRpZGpJck1mQ21QSDg9IiwiYWNjb3VudFNpZ25hdHVyZSI6InBxMjZiazdMaUp3d3FFaWUwNWhsQy9mSzl4bkV5eitFMnpiSVFHTTZFRkVzNlExbHg0YVBSSDZQMjJCUmxFTkh6OU5NcGdHdmxXMk9qck8rWVJpTmlnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJNZ1IxYjZwNTdCeElHS3RIN0Q0NlRhNGxKOFZFWko5bTJsbjZCdlNmaHZWN1VUdWd5T2hFeUZ3OU5LNHNuMHU2b1VZZHlFaldibjZmdno0Q2JHK0tBZz09In0sIm1lIjp7ImlkIjoiMjM0NzA0NzIyMzY3MjoxMkBzLndoYXRzYXBwLm5ldCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ3MDQ3MjIzNjcyOjEyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlJCb05VdDRzVVp5ZmUxYUh0SHVHMGkzRDZ3R25zYmVJbll5S3pId3BqeC8ifX1dLCJwbGF0Zm9ybSI6ImlwaG9uZSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDU2NzkwN30="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝖂𝖔𝖜 𝖙𝖔𝖕𝖚 𝖒𝖉 𝖍𝖆𝖘 𝖏𝖚𝖘𝖙 𝖌𝖊𝖓𝖊𝖗𝖆𝖙𝖊𝖉 𝖆 𝖓𝖊𝖜 𝖋𝖎𝖑𝖊",
  author: process.env.PACK_AUTHER || "TOPU",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "TOP-Md",
  ownername: process.env.OWNER_NAME || "TOPU",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "TOPU").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
