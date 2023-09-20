import React from 'react';
import './CustomArrows.css';
import 'font-awesome/css/font-awesome.min.css';

const CustomNextArrow = (props) => {
    const { className, onClick } = props;
    return (
        <div
            className={`custom-arrow custom-arrow-next ${className}`}
            onClick={onClick}
        >
            <i className="fa fa-chevron-right"></i> 
        </div>
    );
};

const CustomPrevArrow = (props) => {
    const { className, onClick } = props;
    return (
        <div
            className={`custom-arrow custom-arrow-prev ${className}`}
            onClick={onClick}
        >
            <i className="fa fa-chevron-left"></i> 
        </div>
    );
};


export { CustomNextArrow, CustomPrevArrow };
