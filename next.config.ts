import type { NextConfig } from "next";

const nextConfig: NextConfig = {
<<<<<<< HEAD
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Allows all subdomains and paths
      },
    ],
  },
  experimental: {
    appDir: true, // Enable the app directory if applicable
  },
  devIndicators: {
    buildActivity: true,
    buildActivityPosition: "bottom-right",
  },
=======
 images:{
  dangerouslyAllowSVG:true,
  remotePatterns:[
    {
      protocol:"https",
      hostname:"*"
    }
  ]
 }
>>>>>>> a461a885a55db84d853d94360b8b2c355672cbd9
};

export default nextConfig;
