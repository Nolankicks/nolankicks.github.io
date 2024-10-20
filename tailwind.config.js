module.exports = {
    content: [
      './src/**/*.{html,js,svelte,ts}',
    ],
    theme: {
        colors: {
			white: '#FFFFFF',
			transparentblue: 'rgba(30, 62, 98, 0.5)',
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