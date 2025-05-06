import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Base colors
        "dark-blue": "var(--dark-blue)",
        "darker-blue": "var(--darker-blue)",
        "neon-pink": "var(--neon-pink)",
        "neon-blue": "var(--neon-blue)",
        "neon-orange": "var(--neon-orange)",

        // Opacity variants for neon-pink
        "neon-pink-10": "var(--neon-pink-10)",
        "neon-pink-20": "var(--neon-pink-20)",
        "neon-pink-30": "var(--neon-pink-30)",
        "neon-pink-50": "var(--neon-pink-50)",
        "neon-pink-70": "var(--neon-pink-70)",
        "neon-pink-90": "var(--neon-pink-90)",

        // Opacity variants for neon-blue
        "neon-blue-10": "var(--neon-blue-10)",
        "neon-blue-20": "var(--neon-blue-20)",
        "neon-blue-30": "var(--neon-blue-30)",
        "neon-blue-50": "var(--neon-blue-50)",
        "neon-blue-70": "var(--neon-blue-70)",
        "neon-blue-90": "var(--neon-blue-90)",

        // Opacity variants for neon-orange
        "neon-orange-10": "var(--neon-orange-10)",
        "neon-orange-20": "var(--neon-orange-20)",
        "neon-orange-30": "var(--neon-orange-30)",
        "neon-orange-50": "var(--neon-orange-50)",
        "neon-orange-70": "var(--neon-orange-70)",
        "neon-orange-90": "var(--neon-orange-90)",

        // Dark blue opacity variants
        "dark-blue-50": "var(--dark-blue-50)",
        "dark-blue-80": "var(--dark-blue-80)",
        "dark-blue-95": "var(--dark-blue-95)",

        // Text opacity variants
        "text-white-40": "var(--text-white-40)",
        "text-white-60": "var(--text-white-60)",
        "text-white-70": "var(--text-white-70)",
        "text-white-80": "var(--text-white-80)",
        "text-white-90": "var(--text-white-90)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        vt323: ["var(--font-vt323)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
}
export default config
