module.exports = {
    content: [
      './src/**/*.{html,js,svelte,ts}',
    ],
    theme: {
        colors: {
			white: '#e2e2e2',
			transparentblue: 'rgba(30, 62, 98, 0.65)',
			blue: '#1E3E62',
            altblue: '#FF6500',
			black: '#000000',
			transparentblack1: '#000000BB',
            orange: '#FF6500',
			transparentblack0: '#00000011',
			darkblue: '#091856',
			navyblue: '#0f2898',
			gray: '#e2e2e2',
            kindagrey: '#f2f2f2',
			lightblue: '#0092ff',
			transparent: 'transparent',
            green: '#0092ff',
		},
        screens: {
            'xs': '375px',

            'sm': '640px',
      
            'md': '768px',
      
            'lg': '1024px',
      
            'xl': '1280px',
      
            '2xl': '1536px',
          },
      extend: {
            fontFamily: {
                poppins: ['Poppins', 'sans-serif']
            }
      },
    },
    plugins: [
        require('@tailwindcss/typography'), // Ensure you have the typography plugin installed
      ],
  };