module.exports = {
  apps: [
    {
      name: 'easyrentpe',
      script: 'node_modules/next/dist/bin/next',
      args: 'start -p 3010',
      cwd: __dirname,
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        PORT: 3010,
      },
    },
  ],
};
