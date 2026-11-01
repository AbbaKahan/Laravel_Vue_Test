export default {
    content: [
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
            },
            colors: {
                ink: '#26364f',
                slateblue: '#344b70',
                mist: '#eaf0f8',
                leaf: '#78c98b',
            },
        },
    },
    plugins: [],
};
