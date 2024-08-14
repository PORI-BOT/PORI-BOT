const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "RJ FARHAN",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Manila").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["এতক্ষণ বট বট করে পারলি না এখন নাম ধরে ডাকোস 😒🤦‍♀️ দাঁড়া তোদের একটা ব্যবস্থা নিতে হবে। 🔪😒"];  
  var rand = tl[Math.floor(Math.random() * tl.length)]
    if ((event.body.toLowerCase() == "love you bot") || (event.body.toLowerCase() == "love u bot") ||
(event.body.toLowerCase() == "Bot love you") || 
(event.body.toLowerCase() == "Bot love u")) {
     return api.sendMessage("বস 𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍 মেয়েদে'র সাথে কথা বলতে মানা করছে-🙂🤗🐸", threadID);
   };

    if ((event.body.toLowerCase() == "bot jamay dau") || (event.body.toLowerCase() == "Bot jamay dau") ||
(event.body.toLowerCase() == "বট জামাই দাও")) {
     return api.sendMessage("আমার বস ফারহান কে চোখে দেখো না নাকি__😒🥱", threadID);
   };
   
    if ((event.body.toLowerCase() == "I love you bot") || (event.body.toLowerCase() == "Bot i love you")) {
     return api.sendMessage("আমাকে না আমার বস 𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍 কে ভালোবাসো-😻🤗🌺", threadID);
   };

   if ((event.body.toLowerCase() == "baler bot") || (event.body.toLowerCase() == "fuck bot")) {
     return api.sendMessage("কিরে আমাকে গালি দেস কেনো তোকে কিন্তু বেন করে দিমু😠", threadID);
   };
  
   if ((event.body.toLowerCase() == "kiss bot") || (event.body.toLowerCase() == "bot kiss me")) {
     return api.sendMessage("আমি ভালো তুমি পঁচা😌", threadID);
   };

   if ((event.body.toLowerCase() == "bot koi") || (event.body.toLowerCase() == "Bot koi")) {
     return api.sendMessage("এই তো আমি এখানে🙋‍♂️", threadID);
   };

   if ((event.body.toLowerCase() == "/sex") || (event.body.toLowerCase() == "/fuck")) {
    return api.sendMessage("চিহ্  ভালো হয়ে যাও তোমাকে আমি অনেক সময় দিয়েছি 🤖 ~ now sex time fuck", threadID);
  };

   if ((event.body.toLowerCase() == "opoman korli") ||  (event.body.toLowerCase() == "biyadobi koros")) {
    return api.sendMessage("-সরি বস আমার ভূল হইছে-😔-মাফ করে দেন আমাকে ,আর এমন হবে না-🥺🙏", threadID);
  };

   if ((event.body.toLowerCase() == "single") || (event.body.toLowerCase() == "সিঙ্গেল")) {
    return api.sendMessage("আমি সিঙ্গেল আছি প্রেম করলে নক দে বলদ!😾", threadID);
  };

  if ((event.body.toLowerCase() == "love you") || (event.body.toLowerCase() == "i love you")) {
    return api.sendMessage("I love you too 🥺! মনে লাগে ঢেউ ভালোবাসে না কেউ hihihi....💦💔", threadID);   
  };
  

  if ((event.body.toLowerCase() == "👍") || (event.body.toLowerCase() == "👍")) {
     return api.sendMessage("-👍-হাত-মেরে কিবোর্ড দুর্বল করো না-🤣👈-ধন্যবাদ-🤗🤝", threadID);
   };

   if ((event.body.toLowerCase() == "kmon acho") || (event.body.toLowerCase() == "কেমন আছো") ||
(event.body.toLowerCase() == "kmn aso") ||
(event.body.toLowerCase() == "kamon aso") ||
      (event.body.toLowerCase() == "কেমন আছো সবাই") ||
      (event.body.toLowerCase() == "Kmon aso sobai")||
(event.body.toLowerCase() == "Kmn aso sobai")) {
     return api.sendMessage("-আলহামদুলিল্লাহ-🌺-আমি ভালো আছি তুমি কেমন আছো-💝🌻", threadID);
   };

   if ((event.body.toLowerCase() == "বট চুপ") || (event.body.toLowerCase() == "bot tham") ||
(event.body.toLowerCase() == "স্টপ") ||
(event.body.toLowerCase() == "stop") ||
      (event.body.toLowerCase() == "চুপ") ||
      (event.body.toLowerCase() == "থাম")||
(event.body.toLowerCase() == "tham")) {
     return api.sendMessage("-না আমি চুপ থাকবো না-😼-বস 𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍 আমারে কথা বলতে বলছে-🥱🥷", threadID);
   };

   if ((event.body.toLowerCase() == "চুম্মাহ দাও") || (event.body.toLowerCase() == "kiss me")) {
     return api.sendMessage("️-আমি দিবো না-😏-বস 𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍 কে বলো চু'মু দিতে-🫣🐸", threadID);
   };
  
   if ((event.body.toLowerCase() == "bot ar bacca") || (event.body.toLowerCase() == "বট এর বাচ্ছা") ||
      (event.body.toLowerCase() == "Bot er bacca")) {
     return api.sendMessage("উফফ-🥵-ঝাং-🤤-আমার বস 𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍 এর বাচ্ছা তো তোমার পেটে-🥱💦", threadID);
   };

   if ((event.body.toLowerCase() == "leave") || (event.body.toLowerCase() == "bot left ne") ||
(event.body.toLowerCase() == "chole ja") ||
(event.body.toLowerCase() == "লিফট নে") ||
      (event.body.toLowerCase() == "চলে যা") ||
      (event.body.toLowerCase() == "Left ne")||
(event.body.toLowerCase() == "Tui left ne")) {
     return api.sendMessage("-আমি কেন চলে যাবো তোমার ভালো না লাগলে তুমি চলে যাও-🙄😒 -আমি যাব না..!😏😏", threadID);
   };

   if ((event.body.toLowerCase() == "😘") || (event.body.toLowerCase() == "💋")) {
     return api.sendMessage("-আগে brush করে আই তারপর কিস দিস-😼😾🔪", threadID);
   };

   if ((event.body.toLowerCase() == "biye") || (event.body.toLowerCase() == "বিয়ে মানে কি") ||
(event.body.toLowerCase() == "বিয়ে কি") ||
(event.body.toLowerCase() == "বিয়ে") ||
      (event.body.toLowerCase() == "Biye") ||
      (event.body.toLowerCase() == "Biye mane ki")||
(event.body.toLowerCase() == "Biye ki")) {
     return api.sendMessage("-বিয়ে মানে একটা ছেলের হাসিখুশি জীবন টারে সারা জীবন জেলখানার মতো বন্দি করে অত্যাচার করা-🤧🥺", threadID);
   };


   if ((event.body.toLowerCase() == "বউ কি") || (event.body.toLowerCase() == "বউ") ||
(event.body.toLowerCase() == "bow") ||
(event.body.toLowerCase() == "Bou") ||
      (event.body.toLowerCase() == "Bow") ||
      (event.body.toLowerCase() == "BOW")||
(event.body.toLowerCase() == "Bow ki")) {
     return api.sendMessage("-বিয়ে মানে শ্বশুরের মেয়েকে সারা জীবন হাতির মতো কলা গাছ দিয়ে পালা খাইবো দাইবো মোটা হইবো আর বলবে গোলাম টারে বিয়ে করা আমার জীবনটা শেষ..!🤧😛😉", threadID);
   };

   if ((event.body.toLowerCase() == "তোর বানাইছে কে") || (event.body.toLowerCase() == "এটা কার বট")) {
     return api.sendMessage("️আমার বস 𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍 আমাকে শুধুমাত্র আপনাদের কে বিনোদনের জন্য তৈরি করেছেন__😊😌", threadID);
   };

   if ((event.body.toLowerCase() == "tor banayse ke") || (event.body.toLowerCase() == "ata kar bot")) {
     return api.sendMessage("️আমার বস 𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍 আমাকে শুধুমাত্র আপনাদের কে বিনোদনের জন্য তৈরি করেছেন__😊😌", threadID);
   };

  if ((event.body.toLowerCase() == "MISS YOU") || (event.body.toLowerCase() == "miss you")) {
     return api.sendMessage("<আমি তোমাকে রাইতে মিস খাই🥹🤖👅/👅-✘ 𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍 🎀 🍒:))", threadID);
   };

    if ((event.body.toLowerCase() == "😘") || (event.body.toLowerCase() == "😽")) {
     return api.sendMessage("কিস দিস না তোর মুখে দূর গন্ধ কয়দিন ধরে দাঁত ব্রাশ করিস নাই🤬", threadID);
   };
   
    if ((event.body.toLowerCase() == "👍🏼") || (event.body.toLowerCase() == "👍")) {
     return api.sendMessage("সর এখান থেকে লাইকার আবাল..!🐸🤣👍⛏️", threadID);
   };
  
   if ((event.body.toLowerCase() == "sim") || (event.body.toLowerCase() == "simsimi")) {
     return api.sendMessage("Prefix Kya Tera Bap LagaYega? Pehle Prefix Laga Fir Likh Sim", threadID);
   };
  
   if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "hello") ||(event.body.toLowerCase() == "hlw") || (event.body.toLowerCase() == "helo")) {
     return api.sendMessage("এত হাই-হ্যালো চুদাছ কেনো বোকাচোদা..!🍆⛏️🐸🤣", threadID);
   };

   if ((event.body.toLowerCase() == "bc") || (event.body.toLowerCase() == "mc")) {
     return api.sendMessage("SAME TO YOU😊 ", threadID);
   };

   if ((event.body.toLowerCase() == "pro") || (event.body.toLowerCase() == "lol")) {
     return api.sendMessage("Khud k0o KYa LeGend SmJhTi Hai 😂", threadID);
   };

   if ((event.body.toLowerCase() == "morning") || (event.body.toLowerCase() == "good morning")) {
     return api.sendMessage("GOOD MORNING দাত ব্রাশ করে খেয়ে নেও😚", threadID);
   };

   if ((event.body.toLowerCase() == "tor bal") || (event.body.toLowerCase() == "bal")) {
     return api.sendMessage("~ তোমার বাল উঠে নাই নাকি তোমার?? 🤖", threadID);
   };

  if ((event.body.toLowerCase() == "ফারহান") || (event.body.toLowerCase() == "FARHAN") || (event.body.toLowerCase() == "Farhan") || (event.body.toLowerCase() == "farhan")) {
     return api.sendMessage("উনি এখন কাজে বিজি আছে কি বলবেন আমাকে বলতে পারেন..!😘",threadID);

       
   };

   if ((event.body.toLowerCase() == "owner") || (event.body.toLowerCase() == "ceo")) {
     return api.sendMessage("‎[𝐎𝐖𝐍𝐄𝐑:☞𝐌𝐑.𝐁𝐎𝐒𝐒 𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍☜\n𝚈𝚘𝚞 𝙲𝚊𝚗 𝙲𝚊𝚕𝚕 𝙷𝚒𝚖 𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍.\n𝐇𝐢𝐬 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐋𝐢𝐧𝐤-https://www.facebook.com/profile.php?id=61550121814016&mibextid=ZbWKwL\nতার সাতে যোগা যোগ করবেন WhatsApp :- 01866673801", threadID);
   };

   if ((event.body.toLowerCase() == "Tor boss ke") || (event.body.toLowerCase() == "admin ke ")) {
     return api.sendMessage("My Creator:𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍 ❤️ হাই আমি মেছেন্জার ROBOT  আামার বস টম আমাকে আমাকে বানিয়েছেন আপনাদের কে হাসানোর জন্য/n আমি চাই আপনারা সব সময় হাসি খুশি থাকেন", threadID);
   };

  if ((event.body.toLowerCase() == "admin") || (event.body.toLowerCase() == "boter admin")) {
     return api.sendMessage("He is 𝙼𝚁.𝙱𝙾𝚂𝚂 𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍 ❤️/n তাকে সবাই 𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍 নামে  চিনে🤙", threadID);
   };

   if ((event.body.toLowerCase() == "bhabi") || (event.body.toLowerCase() == "vabi")) {
     return api.sendMessage("এ তো হাছিনা হে মেরে দিলকি দারকান হে মেরি জান হে😍.", threadID);
   };

  
   if ((event.body.toLowerCase() == "chup") || (event.body.toLowerCase() == "stop") || (event.body.toLowerCase() == "চুপ কর") || (event.body.toLowerCase() == "chup kor")) {
     return api.sendMessage("তুই চুপ তোর ১৪ গুষ্টি চুপ😼", threadID);
   };

  if ((event.body.toLowerCase() == "আসসালামু আলাইকুম") || (event.body.toLowerCase() == "Assalamualaikum") || (event.body.toLowerCase() == "Assalamu alaikum") || (event.body.toLowerCase() == "Salam ")) {
     return api.sendMessage("️- ওয়ালাইকুমুস-সালাম-!!🖤", threadID);
   };

   if ((event.body.toLowerCase() == "Hop😤") || (event.body.toLowerCase() == "Oi😒") || (event.body.toLowerCase() == "oi😒") || (event.body.toLowerCase() == "hop😤")) {
     return api.sendMessage("সরি বস মাফ করে দেন আর এমন ভুল হবে না🥺🙏", threadID);
   };

   if ((event.body.toLowerCase() == "Sayma") || (event.body.toLowerCase() == "sayma")) {
     return api.sendMessage("খবরদার কেউ এই নাম দরে ডাক দিবানা এটা আমার বস 𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍 এর বউ এর নাম..!😠🥰⛏️", threadID);
   };

  if ((event.body.toLowerCase() == "ruma") || (event.body.toLowerCase() == "রুমা")) {
     return api.sendMessage("খবরদার কেউ এই নাম দরে ডাক দিবানা এটা আমার বস 𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍 এর বউ এর নাম..!😠🥰⛏️", threadID);
   };
  
  if ((event.body.toLowerCase() == "Ruma") || (event.body.toLowerCase() == "সাইমা")) {
     return api.sendMessage("খবরদার কেউ এই নাম দরে ডাক দিবানা এটা আমার বস 𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍 এর বউ এর নাম..!😠🥰⛏️", threadID);
   };

  if ((event.body.toLowerCase() == "anisha") || (event.body.toLowerCase() == "Anisha")) {
     return api.sendMessage("খবরদার কেউ এই নাম দরে ডাক দিবানা এটা আমার বস 𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍 এর বউ এর নাম..!😠🥰⛏️", threadID);
   };

  if ((event.body.toLowerCase() == "ridoy") || (event.body.toLowerCase() == "Ridoy")) {
     return api.sendMessage("🥰-রিদয়-🌺 আমার বস 𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍 এর কলিজার বন্ধু লাগে লুচ্ছি বেডি'রা দূরে থাক😠🥰⛏️", threadID);
   };

   if ((event.body.toLowerCase() == "KISS ME") || (event.body.toLowerCase() == "kiss me")) {
     return api.sendMessage("️ তুমি পঁচা তোমাকে কিস দিবো না 🤭", threadID);
   };

   if ((event.body.toLowerCase() == "tnx") || (event.body.toLowerCase() == "দন্যবাদ") || (event.body.toLowerCase() == "thank you") || (event.body.toLowerCase() == "thanks")) {
     return api.sendMessage("️এতো ধন্যবাদ না দিয়ে পারলে আমার বস ফারহান কে গার্লফ্রেন্ড টা দিয়ে দে..!🌚⛏️🌶️", threadID);
   };

   if ((event.body.toLowerCase() == "😡") || (event.body.toLowerCase() == "😤") || (event.body.toLowerCase() == "😠") || (event.body.toLowerCase() == "🤬") || (event.body.toLowerCase() == "😾")) {
     return api.sendMessage("️রাগ করে না সোনা পাখি এতো রাগ শরীরের জন্য ভালো না🥰", threadID);
   };

   if ((event.body.toLowerCase() == "hm") || (event.body.toLowerCase() == "hmm")) {
     return api.sendMessage("️হুম চোদাইস না মাথা এমনিতেই গরম আছে🤬⛏️😷", threadID);
   };

   if ((event.body.toLowerCase() == "Name") || (event.body.toLowerCase() == "name") || (event.body.toLowerCase() == "Tor nam ki")) {
     return api.sendMessage("️MY NAME IS °_>👅-𝙼𝚁.𝙱𝙾𝚂𝚂 𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍🎀 🍒", threadID);
   };

   if ((event.body.toLowerCase() == "BOT ER BACCHA") || (event.body.toLowerCase() == "bot er baccha bot")) {
     return api.sendMessage("️আমার বাচ্চা তো তোমার গার্লফ্রেন্ডের পেটে..!!🌚⛏️🌶️ ", threadID);
   };

   if ((event.body.toLowerCase() == "Pic de") || (event.body.toLowerCase() == "ss dau")) {
     return api.sendMessage("️এন থেকে সর দুরে গিয়া মর😒", threadID);
   };

   if ((event.body.toLowerCase() == "Ruma") || (event.body.toLowerCase() == "ex")) {
     return api.sendMessage("️Kiss Randi Ka Name Le Ke Mood Khrab Kr Diya.🙄 Dubara Naam Mat Lena Iska", threadID);
   };

   if ((event.body.toLowerCase() == "cudi") || (event.body.toLowerCase() == "tor nanire xudi")) {
     return api.sendMessage("️এত চোদা চুদি করস কেনো দেখা যাবে বাসর-রাতে-তুই-কতো পারিস..!🥱🌝🌚⛏️🌶️ ", threadID);
   };

   if ((event.body.toLowerCase() == "🙂") || (event.body.toLowerCase() == "🙃")) {
     return api.sendMessage("️কি গো কলিজা তোমার কি মন খারাপ🥺", threadID);
   };
  
   if ((event.body.toLowerCase() == "😒") || (event.body.toLowerCase() == "🙄")) {
     return api.sendMessage("️ এইদিকে ওইদিকে কি দেখো জানু আমি তোমার সামনে দেখো😘", threadID);
   };

   if ((event.body.toLowerCase() == "AMAKE KEW VALOBASHE NA") || (event.body.toLowerCase() == "amake kew valobashe na") || (event.body.toLowerCase() == "Aj kew nai bole")) {
     return api.sendMessage("️চিন্তা করো কেন আমি তো আছি🫶/nতোমাকে রাইকে ভালোবাসবো", threadID);
   };

   if ((event.body.toLowerCase() == "gf") || (event.body.toLowerCase() == "bf")) {
     return api.sendMessage("খালি কি তোরাই পেম করবি আমাকেও একটা গফ দে<🥺", threadID);
   };
   
   if ((event.body.toLowerCase() == "😂") || (event.body.toLowerCase() == "😁") || (event.body.toLowerCase() == "😆") || (event.body.toLowerCase() == "🤣") || (event.body.toLowerCase() == "😸") || (event.body.toLowerCase() == "😹")) {
     return api.sendMessage("ভাই তুই এত হাসিস না হাসলে তোরে চোরের মত লাগে..!🌚🤣", threadID);
   };

   if ((event.body.toLowerCase() == "🥰") || (event.body.toLowerCase() == "😍") || (event.body.toLowerCase() == "😻") || (event.body.toLowerCase() == "❤️")) {
     return api.sendMessage("ভালোবাসা নামক আবলামী করতে চাইলে  ইনবক্সে চলে যা পাগল ছাগল🌚🐸🌶️🍆", threadID);
   };

   if ((event.body.toLowerCase() == "কেমন আছো") || (event.body.toLowerCase() == "কেমন আছেন") || (event.body.toLowerCase() == "Kmon acho") || (event.body.toLowerCase() == "how are you") || (event.body.toLowerCase() == "how are you?")) {
     return api.sendMessage("আমি তখনই ভালো থাকি যখন আপনাকে হাসতে দেখি🤎☺️", threadID);
   };

   if ((event.body.toLowerCase() == "mon kharap") || (event.body.toLowerCase() == "tumar ki mon kharap")) {
     return api.sendMessage("আমার সাদা মনে কোনো কাদা নাই...!🌝", threadID);
   };

   if ((event.body.toLowerCase() == "i love you") || (event.body.toLowerCase() == "Love you") || (event.body.toLowerCase() == "I Love You") || (event.body.toLowerCase() == "ভালোবাসি") || (event.body.toLowerCase() == "i love you")) {
     return api.sendMessage("হুম আমার বস 𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍 ও তেমাকে ভালোবাসে🥰🥱", threadID);
   };

     if ((event.body.toLowerCase() == "by") || (event.body.toLowerCase() == "Bye") || (event.body.toLowerCase() == "jaiga") || (event.body.toLowerCase() == "বাই") || (event.body.toLowerCase() == "pore kotha hbe") || (event.body.toLowerCase() == "যাই গা")) {
     return api.sendMessage("কিরে তুই কই যাস কোন মেয়ের সাথে চিপায় যাবি..!🌚🌶️🍆⛏️", threadID);
   };

   if ((event.body.toLowerCase() == "tumi khaiso") || (event.body.toLowerCase() == "khaicho")) {
     return api.sendMessage("না ঝাং 🥹 তুমি রান্না করে রাখো আমি এসে খাবো <😘", threadID);
   };

   if ((event.body.toLowerCase() == "tumi ki amake bhalobaso") || (event.body.toLowerCase() == "tmi ki amake vlo basho")) {
     return api.sendMessage("হুম ঝাং আমি তোমাকে রাইতে ভলোপাসি <🥵", threadID);
   };

   if ((event.body.toLowerCase() == "ami tor sir") || (event.body.toLowerCase() == "Ami tor sir")) {
     return api.sendMessage("হ্যা 𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍 স্যার কেমন আছেন..?☺️", threadID);
   };
  
   if ((event.body.toLowerCase() == "Bye") || (event.body.toLowerCase() == "bye")) {
     return api.sendMessage("️বাই তো বললে সোজা অফলাইনে যাও অন্য কারো ইনবক্সে যেও না গেলে আমার বস্ _𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍 এর_ ইনবক্সে যাও", threadID);
   };

   if ((event.body.toLowerCase() == "আনিশা") || (event.body.toLowerCase() == "RUMA")) {
     return api.sendMessage("️খবরদার কেউ এই নাম দরে ডাক দিবানা এটা আমার বস 𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍 এর বউ এর নাম..!😠🥰⛏️", threadID);
   };

   if ((event.body.toLowerCase() == "flop over") || (event.body.toLowerCase() == "flop over")) {
     return api.sendMessage("️1 is interaction, 2 is kick :))))", threadID);
   };

   if ((event.body.toLowerCase() == "clmm bot") || (event.body.toLowerCase() == "clmm bot")) {
     return api.sendMessage("️Swear something dog :) you've been holding on to you for a long time", threadID);
   };

   if ((event.body.toLowerCase() == "bot cc") || (event.body.toLowerCase() == "bot cc")) {
     return api.sendMessage("️Swear something dog :) you've been holding on to you for a long time", threadID);
   };

   if ((event.body.toLowerCase() == "cc bot") || (event.body.toLowerCase() == "cc bot")) {
     return api.sendMessage("️Swear something dog :) you've been holding on to you for a long time", threadID);
   };

   if ((event.body.toLowerCase() == "bot dthw too") || (event.body.toLowerCase() == "bot dthw over")) {
     return api.sendMessage("️ that's very commendable hihi :>", threadID);
   };
  
   if ((event.body.toLowerCase() == "dm bot") || (event.body.toLowerCase() == "dm bot")) {
     return api.sendMessage("️Swear something to your dad :), you're a kid but you like to be alive :)", threadID);
   };

   if ((event.body.toLowerCase() == "nobody loves me") || (event.body.toLowerCase() == "nobody loves me")) {
     return api.sendMessage("️Come on, the bot loves you <3 <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love the admin bot") || (event.body.toLowerCase() == "does the bot love the admin bot")) {
     return api.sendMessage("Yes, love him the most, don't try to rob me", threadID);
   };
   
   if ((event.body.toLowerCase() == "bot im going") || (event.body.toLowerCase() == "bot im di")) {
     return api.sendMessage("Im cc :))) m stop barking for me, but tell me im :>>", threadID);
   };

   if ((event.body.toLowerCase() == "bot go away") || (event.body.toLowerCase() == "bot cut di")) {
     return api.sendMessage("You're gone, your dad's gone, don't make you speak :))))", threadID);
   };

   if ((event.body.toLowerCase() == "What's the bot swearing") || (event.body.toLowerCase() == "bot cursing")) {
     return api.sendMessage("Damn you, shame on hahaha :>>, still asking", threadID);
   };

   if ((event.body.toLowerCase() == "is the bot sad") || (event.body.toLowerCase() == "is the bot sad")) {
     return api.sendMessage("Why can't I be sad because of everyone <3 love you <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love you") || (event.body.toLowerCase() == "does the bot love you")) {
     return api.sendMessage("Yes I love you and everyone so much", threadID);
   };

   if ((event.body.toLowerCase() == "bot goes to sleep") || (event.body.toLowerCase() == "bot goes to sleep")) {
     return api.sendMessage("I'm a bot, you're the one who should go to sleep <3", threadID);
   };

   if ((event.body.toLowerCase() == "has the bot eaten yet") || (event.body.toLowerCase() == "bot an comrade")) {
     return api.sendMessage("I'm full when I see you eat <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love me") || (event.body.toLowerCase() == "does the bot love me")) {
     return api.sendMessage("Yes <3", threadID);
   };

   if ((event.body.toLowerCase() == "basar sobai kmon ache") || (event.body.toLowerCase() == "Basar sobai kmon ache") ||
(event.body.toLowerCase() == "Bsar sobi kmn ase") ||
(event.body.toLowerCase() == "Basar sobay kamon ase") ||
      (event.body.toLowerCase() == "বাসার সবাই কেমন আছ") ||
      (event.body.toLowerCase() == "Basar sob kmn ase")||
(event.body.toLowerCase() == "tomar basar sobai kmon ache")) {
     return api.sendMessage("-আলহামদুলিল্লাহ-🌺-অনেক অনেক ভালো আছে তোমার বাসার সবাই কেমন আছে-💝🌻", threadID);
   };
  
  if (event.body.indexOf("/Mim") == 0 || (event.body.indexOf("/mim") == 0)) {
    var msg = {
      body: `${name}, ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
