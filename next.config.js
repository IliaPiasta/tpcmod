const withPWA = require("next-pwa")({
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
  });
  
  const nextConfig = {
    images: {
      domains: ["cdn.discordapp.com"],
      unoptimized: true, // Required for next export
    },
    trailingSlash: true, // Ensures proper GitHub Pages routing
    output: "standalone", // Updated for static deployment like GitHub Pages
    basePath: "/tpcmod", // Указываем путь к репозиторию
    assetPrefix: "/tpcmod", // Для корректной загрузки статики
    
  };
  
  module.exports = withPWA(nextConfig);
  
