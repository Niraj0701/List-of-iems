import React from 'react';

const styles = {
    imgeContainer: {
        boxShadow: '0px 1px 3px 0px rgb(193, 148, 10)',
        backgroundColor: '#fbb034',
        backgroundImage: 'linear-gradient(315deg, #fbb034 0%, #ffdd00 74%)',
        position: 'relative',
        zIndex: 14
    },
    companyImage: {
        height: '4vh',
        margin: '2vh'
    }
}

const Header = () => {
    const imageLink = 'https://app.beeldi.com/img/ecriture-beeldi-white__2zuzP.svg';
    return(
        <div style={styles.imgeContainer}>
            <img src={imageLink} style={styles.companyImage} />
        </div>
    );
};

export default Header