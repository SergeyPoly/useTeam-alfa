import React from 'react';

export const types = {
    page: {
        Component: ({children, fullClassName}) => <h1 className={fullClassName}>{children}</h1>,
        className: "heading-page"
    },
    section: {
        Component: ({children, fullClassName}) => <h2 className={fullClassName}>{children}</h2>,
        className: "heading-section"
    },
    block: {
        Component: ({children, fullClassName}) => <h3 className={fullClassName}>{children}</h3>,
        className: "heading-block"
    },
};
