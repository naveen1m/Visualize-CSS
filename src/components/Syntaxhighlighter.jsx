import React, { Fragment } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import CopyToClipboard from './CopyToClipboard';

function Syntaxhighlighter({ codeString }) {

    return (
        <Fragment>
            <div className='max-w-2xl min-w-[25rem] bg-[#3a404d] rounded-md overflow-hidden'>
                <div className='flex justify-between px-4 text-white text-xs items-center'>
                    <p className=' text-sm'>Example code</p>
                    <CopyToClipboard text={codeString} />

                </div>
                <SyntaxHighlighter
                    language="htmlbars"
                    style={atomOneDark}
                    showLineNumbers={true}
                    wrapLongLines={true}
                    customStyle={{
                        padding: "25px",

                    }}
                >
                    {codeString}
                </SyntaxHighlighter>
            </div>
        </Fragment>
    )
}

export default Syntaxhighlighter
