import React from 'react';
import { CopyButton, ActionIcon, Tooltip, rem } from '@mantine/core';
import { IconCopy, IconCheck } from '@tabler/icons-react';

function CopyToClipboard({ text }) {

    return (
        <>
            <CopyButton value={text} timeout={1000}>
                {({ copied, copy }) => (
                    <Tooltip label={copied ? 'Copied' : 'Copy'} withArrow position="right">
                        <ActionIcon color={copied ? 'teal' : 'gray'} variant="subtle" onClick={copy}>
                            {copied ? (
                                <IconCheck style={{ width: rem(16) }} />
                            ) : (
                                <IconCopy style={{ width: rem(16) }} />
                            )}
                        </ActionIcon>
                    </Tooltip>
                )}
            </CopyButton>
        </>
    );
}

export default CopyToClipboard;
