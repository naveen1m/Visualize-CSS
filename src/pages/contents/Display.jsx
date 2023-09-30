import React, { Fragment, useState } from 'react'
import { displayData } from './data/displayData'
import "./css/displayStyle.css"
function Display() {
    const [activeLabel, setActiveLabel] = useState(0);
    const handleComponentClick = (index) => {
        setActiveLabel(index);
    };
    return (
        <Fragment>
            <h3 className='text-center text-3xl my-3 font-sans'>Display</h3>
            <div className="flex flex-col-reverse justify-around md:flex-row">
                <section className="content bg-slate-800 w-1/3 m-5 rounded-lg text-center font-medium font-sans text-slate-50 py-2 px-3">
                    <div className="text-xl py-3 font-semibold tracking-wide">Display Properties</div>
                    
                    <div className='cont max-h-[60vh] overflow-y-scroll scroll-smooth scrollbar-track-current  scrollbar-thumb-rounded'>
                    {displayData.map((e, index) => (
                        <div key={index}
                            className= {activeLabel===index?'text-md py-2 rounded-lg m-2 bg-sky-900 ':'text-md py-2 rounded-lg m-2 hover:bg-sky-950 '}    
                            onClick={() => handleComponentClick(index)}
                        >{e.data}</div>
                    ))}
                    </div>
                </section>
                <section className="content w-2/3 m-5 rounded-lg font-sans">
                    <section className=' minHeight-72 bg-indigo-950 p-3 py-5 rounded-md w-full  text-white font-medium'>
                        
                            {displayData[activeLabel].property==="flex"?<div className='text-center'>Flex Container</div>:''}
                            <div  className={displayData[activeLabel].property==="flex"?'flex':''}>
                                <div className="w-28 m-2 h-28 bg-sky-600 rounded-md text-white font-medium" style={{display: displayData[activeLabel].property==="flex"?"":displayData[activeLabel].property}}>
                                    <div className={displayData[activeLabel].property==="inline"?'inline':'flex items-center justify-center w-28 m-1 h-28 '}><div className={displayData[activeLabel].property==="inline"?'inline':''}>{displayData[activeLabel].property==="flex"?'Flex Item':'Box'}</div></div>
                                </div>
                                <div className="w-28 m-2 h-28 bg-sky-600 rounded-md text-white font-medium" style={{display: displayData[activeLabel].property==="flex"?"":displayData[activeLabel].property}}>
                                    <div className={displayData[activeLabel].property==="inline"?'inline':'flex items-center justify-center w-28 m-1 h-28 '}><div className={displayData[activeLabel].property==="inline"?'inline':''}>{displayData[activeLabel].property==="flex"?'Flex Item':'Box'}</div></div>
                                </div>
                            </div>
                            
                            
                            
                    </section>
                    <section  className='flex flex-col justify-around  p-3 py-5 rounded-md w-full'>
                        <div className='text-center text-xl'>Code and Insights</div>
                        
                        <code className='inline-block w-4/5   '>
                            &lt;div&gt;
                                Hello, this is visualize css. 
                                Today, lets learn about display attribute of css.
                                &lt;div style=&#123;display: "{displayData[activeLabel].property}"&#125;
                                &gt;Test element.&lt;/div&gt; 
                                This is an amazing attribute isn't it?
                                &lt;/div&gt;
                        </code>
                        <div>
                            {displayData[activeLabel].insight}
                        </div>
                    </section>
                </section>
            </div>

        </Fragment>
    )
}

export default Display
