import React from 'react';
import PropTypes from 'prop-types';
import AppHeader from './AppHeader';

const AppFrame = ({ header, body, footer }) => {
    return (
        <div className="app-frame">
            <AppHeader title={header} />
            <div>{body}</div>
            <div>App Example Footer</div>
        </div>
    );
};

AppFrame.propTypes = {
    header: PropTypes.string.isRequired,
    body: PropTypes.element.isRequired,
};

export default AppFrame;