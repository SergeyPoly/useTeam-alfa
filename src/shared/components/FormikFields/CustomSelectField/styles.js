export const selectStyles = {
    control: (styles) => ({
        ...styles,
        boxSizing: 'border-box',
        width: '100%',
        backgroundColor: '#252A48',
        borderRadius: '5px',
        border: 'none',
        fontSize: '15px',
        fontWeight: 'normal',
    }),
    singleValue: (styles) => ({
        ...styles,
        fontFamily: 'Roboto, sans-serif',
        letterSpacing: '0.2px',
        fontSize: '15px',
        color: 'white',
        fontWeight: 'normal',
    }),
    menuList: (styles) => ({
        ...styles,
        fontFamily: 'Roboto, sans-serif',
        letterSpacing: '0.2px',
        fontSize: '15px',
        color: 'black',
        fontWeight: 'normal',
    }),
};
