const config = {
  mode: 'jit',
  purge: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#ff5f42'
      },
      fontFamily: {
        sans: ['Tahoma', 'Helvetica', 'Arial', 'sans-serif'],
        caveat: 'Caveat'
      }
    }
  },
  plugins: []
};

module.exports = config;
