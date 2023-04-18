module.exports = {
	name: "kirillunlimited.com", // optional, falls back to object key
	description: "Kirill's Personal web site",
	skip: false,
	options: {
		runs: 1,
		frequency: 60 * 24, // 24 hours
		freshChrome: "site"
	},
	urls: [
		"https://kirillunlimited.com/",
		"https://kirillunlimited.com/about/",
		"https://kirillunlimited.com/contact/",
		"https://kirillunlimited.com/blog/",
		"https://kirillunlimited.com/blog/hello-world/",
		"https://kirillunlimited.com/blog/enhanced-keyboard-navigation/",
		"https://kirillunlimited.com/blog/dev-env/",
		"https://kirillunlimited.com/blog/join-the-dark-side/",
		"https://kirillunlimited.com/blog/full-stack-designers-will-take-over-the-world/"
	]
};