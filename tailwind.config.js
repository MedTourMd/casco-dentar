/** @type {import('tailwindcss').Config} */
const { join } = require("node:path");

module.exports = {
    presets: [require("flowbite-angular/tailwind.config")],
    content: [
        "./src/**/*.{html,ts}",
        "./node_modules/flowbite/**/*.js",
        join(
            __dirname,
            "../../node_modules/flowbite-angular/**/*.{html,ts,mjs}",
        ),
        join(__dirname, "src/**/!(*.stories|*.spec).{ts,html,md}"),
    ],
    theme: {
        extend: {
            animation: {
                "bounce-slow": "bounce 7s ease-in-out infinite",
            },
        },
    },
    plugins: [require("flowbite/plugin"), require("flowbite-typography")],
};
