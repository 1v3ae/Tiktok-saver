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
global.sudo = process.env.SUDO || "2348121286782";
global.owner = process.env.OWNER_NUMBER || "2348121286782";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0F2OXk1VCtPcVBvT3FoSkxDUHRKckQzcnVOTFN6OE11TnB2OFFXbFNrZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUnBoZE9aN0ovcklhcFI0cGVyUzFXNEtKYXhVUnJ1di93UndpNTlUZW55cz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1T2UycW1UWi9aWFNpdmYxZG12UllMbFdaaEtVNFVhYk1DYnZna0lGVjB3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJTVY3c0lwdWo5T1BIV05BRVk0Z3RaUERaN0hVQkJDeFVUSXNlcDRKZ2dnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1PcytWb3laNExqbFpEQ3ZiV2I3ZmxVenFkS29QQVA0UWQrY2Vtajl0Vk09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRuQ1dFQnp4Vm0zNlNSYXV4U1NHa3lyZEg3UnMrYXNEQ2Y3NW1UbnNmMnc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZU5LRzRER1MzRHJVS0VPcHlLUDhsR1hSd0ZxS1p1MFl1RklKR2psWkFWZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZDE0OFJaYXUzbjJhN1Z4cXhFMFUycHZMRmtmMzgyVmM0andqOWhlbnVFdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImY3SDlWT2tzUlBZZEhuak5YcEFoQmloa3hQNmVYeU9VMnkyaTFicUVCYm85V05YbVY0NzdRbmVwaVFHdElvWnBXdWJpREl4eUcrc0NONTNaUURXMkRRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTgyLCJhZHZTZWNyZXRLZXkiOiJKaEU4aHAxVk5jYloyaWxnQ3FsSVM3cEY1ZkVUaXVISWh2d0dZbS9FaGYwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDgxMjEyODY3ODJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiM0EyQTFCQkFCMjlBQjc4MzQ5N0YifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMzkxMTk2Nn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiTlc3R0ZxTWlTNGVQWGltbV9QSjdvUSIsInBob25lSWQiOiJhYzFlMTg4NS05YjFiLTQyZWEtOGY3Ny0yY2VhNTU0NzUzY2QiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVEtJRnI5eGdiZUg1eGFCTHlnVHVSc2V1SEU4PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImEydEJlMEkyQi96NFZMWk90NHhmKzJsN21BVT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI2MUhKOUo4WiIsIm1lIjp7ImlkIjoiMjM0ODEyMTI4Njc4Mjo0QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkJpZyBEYXZlIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQYjgrY2tPRUkyZWc3WUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJha2xyN2luTDdBVTNsUVFmWm5mY1YwSVRrVU1vaTBnWmdnNUV0WTRtT3prPSIsImFjY291bnRTaWduYXR1cmUiOiJ5R2VaQklzUE0wb1puU1F0dTlLUkNVSXFhcFZ5YWFqUk02ekhNL09ydGhMSEIvWTZpSVJkK3QvRERkS1Vlc2IxQldrdDVJSFZqdW1saG5hSUNRMVloQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZnAvcmdZSXRwVG1Ua2Z1d3B1OTI4aUljOUdXQ0lkRGF6ZUxpUzMvMDdjMnlXMy8zemQ4YkZUVjlnSkRvRGdnTTQrVTlSZDJpZGNEN25WaG9EQ3JNRHc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MTIxMjg2NzgyOjRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCV3BKYSs0cHkrd0ZONVVFSDJaMzNGZENFNUZES0l0SUdZSU9STFdPSmpzNSJ9fV0sInBsYXRmb3JtIjoic21iaSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMzkxMTk2MSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFCM0oifQ=="
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
