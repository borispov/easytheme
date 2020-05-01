module.exports = {
  theme: {
    extend: {
      textColor: {
        primary: 'hsl(0 0% 13%)',
        secondary: 'hsl(0 0% 21%)',
        disabled: 'hsl(0 0% 38%)'
      },
    },
    fontFamily: {
      body: ['Muli', 'sans-serif']
    },
    screens: {
      'sm': '330px',
      'md': '660px',
      'lg': '1024px',
      'xl': '1280px',
    },
    variants: {
      opacity: ['responsive', 'hover']
    }
  }
}
