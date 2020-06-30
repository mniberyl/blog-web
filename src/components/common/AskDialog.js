import React from 'react';
import './AskDialog.scss';

const AskDialog = ({ visible, title, description, onCancle, cancelText = '취소', onConfirm, confirmText = '확인' }) => {
    if (!visible) return null;
    return (
        <div className="full_screen">
            <div className="ask_remove">
                <h2>{title}</h2>
                <p>{description}</p>
                <div className="ask_remove__btn">
                    <button className="ask_remove__btn ask_remove__btn--edit" onClick={onCancle}>{cancelText}</button>
                    <button className="ask_remove__btn ask_remove__btn--remove" onClick={onConfirm}>{confirmText}</button>
                </div>
            </div>
        </div>
    )
}

export default AskDialog;