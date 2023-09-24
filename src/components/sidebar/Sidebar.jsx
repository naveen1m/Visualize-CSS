import React, { Fragment, useState } from 'react';
import { NavLink } from '@mantine/core';
import { Link } from 'react-router-dom';
import { navigationData } from './navigationData';

function Sidebar() {
    const [activeLabel, setActiveLabel] = useState(null);

    const handleNavLinkClick = (label) => {
        setActiveLabel(label);

    };
    const renderNavLink = (data) => (
        <NavLink
            label={data.label}
            active={data.label === activeLabel}
            component={data.link ? Link : undefined}
            to={data.link}
            childrenOffset={data.childrenOffset || 8}
            onClick={() => handleNavLinkClick(data.label)}
        >
            {data.children &&
                data.children.map((child, index) =>
                    <Fragment key={index}>
                        {renderNavLink(child)}
                    </Fragment>

                )}
        </NavLink>
    );
    return (
        <Fragment>

            <div className='inset-y-0 left-0 overflow-hidden  appearance-none h-[calc(100vh-4rem)]  bg-stone-100 z-50 w-44 min-w-fit
            overflow-y-auto scroll-smooth scrollbar-track-current  scrollbar-thumb-rounded'>
                {navigationData.map((item, index) => (
                    <div key={index}
                        className='text-2xl'
                    >{renderNavLink(item)}</div>
                ))}
            </div>
        </Fragment>
    )
}

export default Sidebar
