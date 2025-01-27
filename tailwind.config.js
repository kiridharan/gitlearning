module.exports = {
  // ... other config
  theme: {
    extend: {
      // ... other extensions
      animation: {
        "git-load": "gitLoad 1.5s ease-in-out infinite",
      },
      keyframes: {
        gitLoad: {
          "0%": { transform: "translateY(92px)" },
          "100%": { transform: "translateY(0)" },
        },
      },
    },
  },
};
