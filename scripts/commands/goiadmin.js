module.exports.config = {
  name: "goiadmin",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    description: "mention",
    prefix: true,
    category: "user",
    usages: "tag",
    cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "61550121814016","61558451764164","61559075841266") {
    var aid = ["61559075841266","61558451764164","61550121814016"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Mantion_দিস না _ফারহান বস এর মন মন ভালো নেই আস্কে-!💔🥀", "- আমার সাথে কেউ সেক্স করে না থুক্কু টেক্স করে নাহ🫂💔", "আমার একটা প্রিয়র খুব দরকার কারন আমার চোখে পানি আসার আগে নাকে সর্দি চলে আসে🤣🤣","এত মেনশন না দিয়ে বক্স আসো হট করে দিবো🤷‍ঝাং 😘🥒"," Mantion_দিলে চুম্মাইয়া ঠুটের কালার change কইরা,লামু 💋😾😾🔨","👉আমার বস♻️ 𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍 এখন বিজি আছে । তার ইনবক্সে এ মেসেজ দিয়ে রাখো ‎‎‎‎‎‎‎‎‎https://www.facebook.com/profile.php?id=61550121814016&mibextid=eBUYbo🔰 ♪√বস ফ্রি হলে আসবে🧡😁😜🐒","ফারহান বস এখন  বিজি জা বলার আমাকে বলতে পারেন_!!😼🥰","এতো মিনশন নাহ দিয়া সিংগেল ফারহান রে একটা জি এফ দে 😒 😏","Mantion_না দিয়ে বস ফারহান এর সাথে সিরিয়াস প্রেম করতে চাইলে ইনবক্স","বস ফারহান কে মেনশন দিসনা পারলে একটা জি এফ দে","Mantion_দিস না বাঁলপাঁক্না ফারহান প্রচুর বিজি 🥵🥀🤐","চুমু খাওয়ার বয়স টা আমার বস ফারহান চকলেট🍫খেয়ে উড়িয়ে দিল 🤗"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
}
