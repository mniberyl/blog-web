import React from 'react';
import AskDialog from '../common/AskDialog';

const AskRemoveDialog = ({ visible, onConfirm, onCancle }) => {
    return (
        <AskDialog
            // {...rest}
            visible={visible}
            title="포스트 삭제"
            description="이 포스트를 정말 삭제하시겠습니까?"
            confirmText="삭제"
            onConfirm={onConfirm}
            onCancle={onCancle}
        />
    )
}

export default AskRemoveDialog;