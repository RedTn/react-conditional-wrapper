import React from 'react';
import { render } from '@testing-library/react';
import ConditionalWrapper from './ConditionalWrapper';

describe('ConditionalWrap', () => {
    it('should wrap when true', () => {
        const { queryByTestId } = render(
            <ConditionalWrapper
                condition
                wrapper={(children): JSX.Element => <div data-test="wrapper">{children}</div>}
            >
                <div data-test="child" />
            </ConditionalWrapper>
        );

        expect(queryByTestId('wrapper')).toBeInTheDocument();
        expect(queryByTestId('child')).toBeInTheDocument();
    });

    it('should not wrap when false', () => {
        const { queryByTestId } = render(
            <ConditionalWrapper
                condition={false}
                wrapper={(children): JSX.Element => <div data-test="wrapper">{children}</div>}
            >
                <div data-test="child" />
            </ConditionalWrapper>
        );

        expect(queryByTestId('wrapper')).not.toBeInTheDocument();
        expect(queryByTestId('child')).toBeInTheDocument();
    });

    it('should not wrap when undefined', () => {
        const { queryByTestId } = render(
            <ConditionalWrapper
                wrapper={(children): JSX.Element => <div data-test="wrapper">{children}</div>}
            >
                <div data-test="child" />
            </ConditionalWrapper>
        );

        expect(queryByTestId('wrapper')).not.toBeInTheDocument();
        expect(queryByTestId('child')).toBeInTheDocument();
    });
});
