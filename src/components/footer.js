import React from 'react';

const styles = {
    imgeContainer: {
        boxShadow: ' 0 0 5px 0 rgb(193, 148, 10)',
        backgroundImage:'url("http://beeldi.com/svg/banner.svg")',
        position: 'relative',
        zIndex: 1,
        height: '12vh',
        display: 'flex',
        alignItems: 'center'
    },
    footer: {
        fontSize: '30px',
        fontWeight: '600'
    }
}

const Footer = () => {
    return(
        <div style={styles.imgeContainer}>
            <span style={styles.footer}>Footer</span>
        </div>
    );
};

export default Footer;