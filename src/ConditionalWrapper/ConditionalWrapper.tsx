import React from 'react';

interface Props {
    children: React.ReactNode;
    condition?: boolean;
    wrapper: (children: React.ReactNode) => JSX.Element;
}

const ConditionalWrapper: React.FC<Props> = ({
    condition = false,
    wrapper,
    children,
}): JSX.Element => (condition ? wrapper(children) : <>{children}</>);

export default ConditionalWrapper;
