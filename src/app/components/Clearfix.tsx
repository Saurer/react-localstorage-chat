import { css } from '@emotion/core';

const clearfixStyle = css`
    &::after {
        display: block;
        content: '';
        clear: both;
    }
`;

const Clearfix: React.FC = props => (
    <div css={clearfixStyle}>{props.children}</div>
);

export default Clearfix;
