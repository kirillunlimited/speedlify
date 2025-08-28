module.exports = {
  name: "kirillunlimited.com", // optional, falls back to object key
  description: "Kirill's Personal web site",
  skip: false,
  options: {
    runs: 1,
    frequency: 60 * 24, // 24 hours
    freshChrome: "site",
  },
  urls: ["https://kirillunlimited.com/"],
};
