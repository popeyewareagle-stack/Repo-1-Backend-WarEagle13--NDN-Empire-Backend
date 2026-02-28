module.exports = {
  apps: [
    {
      name: "ndn-backend",
      script: "server.js",
      instances: "max",
      exec_mode: "cluster",
      autorestart: true,
      max_memory_restart: "600M",
      env: {
        NODE_ENV: "production"
      }
    }
  ]
};
