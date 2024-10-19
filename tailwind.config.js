module.exports = {
    content: [
      './src/**/*.{html,js,svelte,ts}',
    ],
    theme: {
        colors: {
			white: '#FFFFFF',
			transparentblue: 'rgba(46, 138, 212, 0.5)',
			blue: 'rgba(46, 138, 212, 1)',
			black: '#000000',
			transparentblack1: '#000000BB',
            
			transparentblack0: '#00000011',
			darkblue: '#091856',
			navyblue: '#0f2898',
			gray: '#e2e2e2',
			lightblue: '#0092ff',
			transparent: 'transparent'
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