import { css } from '@emotion/core';
import Clearfix from './Clearfix';
import classNames from 'classnames';

const messageStyle = css`
    margin: 5px;
    float: right;

    > .message__sender {
        text-align: right;
        font-size: 14px;
        font-weight: bold;
        margin-bottom: 4px;
    }

    > .message__body {
        padding: 10px;
        border-radius: 4px 0 0 4px;
        color: #666;
        background: #f0f0f0;
    }

    &.message_own {
        float: left;

        > .message__sender {
            text-align: left;
        }

        > .message__body {
            border-radius: 0 4px 4px 0;
            color: #fff;
            background: #206fff;
        }
    }
`;

interface Props {
    isOwn?: boolean;
    sender: string;
}

const Message: React.FC<Props> = props => (
    <Clearfix>
        <div
            css={messageStyle}
            className={classNames({ message_own: props.isOwn })}
        >
            <div className="message__sender">{props.sender}</div>
            <div className="message__body">{props.children}</div>
        </div>
    </Clearfix>
);

export default Message;
