const config = {
  mode: 'jit',
  purge: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#ff5f42'
      },
      fontFamily: {
        sans: ['Tamoha', 'Helvetica', 'Arial', 'sans-serif'],
        caveat: 'Caveat'
      }
    }
  },
  plugins: []
};

module.exports = config;
