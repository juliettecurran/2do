/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	mode: "jit",
	purge: ["./public/**/*.js", "./src/**/*.{js,jsx,ts,tsx,vue}"],
	theme: {
		extend: {
			backgroundImage: (theme) => ({
				"bg-pattern": "url('../src/assets/bg-pattern.svg')",

				fontFamily: {
					monarcha: ["monarcha", "sans-serif"]
				}
			})
		}
	},
	plugins: [require("@tailwindcss/forms")]
};
