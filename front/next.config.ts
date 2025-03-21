import type { NextConfig } from "next";

const nextConfig = {
  rewrites: () => {
      return[
        {
          source : '/',
          destination : '/chat'
        }, 
        {
          source : '/login',
          destination : '/login'
        },
        {
          source : '/register',
          destination : '/register'
        }
      ]
  },
};

export default nextConfig;
