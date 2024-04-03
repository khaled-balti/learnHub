/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
// module.exports = {
//   darkMode: "class", // Set darkMode to "class" to enable class-based dark mode
//   content: [
//     './src/**/*.{js,jsx}',
//   ],
//   prefix: "",
//   theme: {
//     darkSelector: ".dark", // Specify the selector for dark mode
//     extend: {
//       colors: {
//         border: "hsl(210, 10%, 15%)", // Update border color for dark theme
//         input: "hsl(210, 10%, 15%)", // Update input color for dark theme
//         ring: "hsl(210, 10%, 15%)", // Update ring color for dark theme
//         background: "hsl(210, 10%, 10%)", // Update background color for dark theme
//         foreground: "hsl(210, 10%, 90%)", // Update foreground color for dark theme
//         primary: {
//           DEFAULT: "hsl(210, 50%, 50%)", // Update primary color for dark theme
//           foreground: "hsl(210, 90%, 90%)", // Update primary foreground color for dark theme
//         },
//         secondary: {
//           DEFAULT: "hsl(240, 50%, 50%)", // Update secondary color for dark theme
//           foreground: "hsl(240, 90%, 90%)", // Update secondary foreground color for dark theme
//         },
//         destructive: {
//           DEFAULT: "hsl(0, 50%, 50%)", // Update destructive color for dark theme
//           foreground: "hsl(0, 90%, 90%)", // Update destructive foreground color for dark theme
//         },
//         muted: {
//           DEFAULT: "hsl(210, 10%, 20%)", // Update muted color for dark theme
//           foreground: "hsl(210, 10%, 70%)", // Update muted foreground color for dark theme
//         },
//         accent: {
//           DEFAULT: "hsl(180, 50%, 50%)", // Update accent color for dark theme
//           foreground: "hsl(180, 90%, 90%)", // Update accent foreground color for dark theme
//         },
//         popover: {
//           DEFAULT: "hsl(210, 10%, 15%)", // Update popover color for dark theme
//           foreground: "hsl(210, 10%, 90%)", // Update popover foreground color for dark theme
//         },
//         card: {
//           DEFAULT: "hsl(210, 10%, 20%)", // Update card color for dark theme
//           foreground: "hsl(210, 10%, 70%)", // Update card foreground color for dark theme
//         },
//       },
//       borderRadius: {
//         lg: "var(--radius)",
//         md: "calc(var(--radius) - 2px)",
//         sm: "calc(var(--radius) - 4px)",
//       },
//       keyframes: {
//         "accordion-down": {
//           from: { height: "0" },
//           to: { height: "var(--radix-accordion-content-height)" },
//         },
//         "accordion-up": {
//           from: { height: "var(--radix-accordion-content-height)" },
//           to: { height: "0" },
//         },
//       },
//       animation: {
//         "accordion-down": "accordion-down 0.2s ease-out",
//         "accordion-up": "accordion-up 0.2s ease-out",
//       },
//     },
//   },
//   plugins: [require("tailwindcss-animate")],
// };