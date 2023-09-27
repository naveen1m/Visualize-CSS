import React, { Fragment, useState } from 'react';
import { NavLink } from '@mantine/core';
import { Link, useNavigate } from 'react-router-dom';
import { navigationData } from './navigationData';
import { useLocation } from 'react-router-dom';

function Sidebar() {
    const [activeLabel, setActiveLabel] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();

    const handleNavLinkClick = (data) => {
        setActiveLabel(data.label);
        navigate(data.link)

    };
    const renderNavLink = (data) => (
        <NavLink
            label={data.label}
            active={data.label === activeLabel || data.link == location.pathname}
            component={data.link ? Link : undefined}
            to={data.link}
            childrenOffset={data.childrenOffset || 8}
            onClick={() => handleNavLinkClick(data)}
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

            <div className='left-0 relative z-50 overflow-hidden  h-[calc(100vh-4rem)]  bg-stone-100 w-44 min-w-fit
            overflow-y-scroll scroll-smooth scrollbar-track-current  scrollbar-thumb-rounded'>
                {navigationData.map((item, index) => (
                    <div key={index}
                        className='text-2xl '
                    >{renderNavLink(item)}</div>
                ))}
            </div>
        </Fragment>
    )
}

export default Sidebar
