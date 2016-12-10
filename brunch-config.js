module.exports = {
  files: {
    javascripts: {
      joinTo: {
        'vendor.js': /^(?!app)/,
        'app.js': /^app/
      }
    },
    stylesheets: {joinTo: 'app.css'}
  },

  plugins: {
    postcss: {
      processors: [
        require('autoprefixer')(['last 8 versions'])
      ]
    }
  },

  server: {
    hostname: '0.0.0.0'
  }
};
