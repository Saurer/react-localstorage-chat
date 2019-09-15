import { css } from '@emotion/core';
import classNames from 'classnames';

const messageStyle = css`
    float: right;

    > .message__sender {
        text-align: right;
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
    <div className="clearfix">
        <div
            css={messageStyle}
            className={classNames('m-2', {
                message_own: props.isOwn
            })}
        >
            <h6 className="message__sender mb-1">{props.sender}</h6>
            <div className="message__body">{props.children}</div>
        </div>
    </div>
);

export default Message;
