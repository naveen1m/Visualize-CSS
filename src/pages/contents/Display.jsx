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
                    <section className='flex justify-center bg-amber-200 p-3 py-5 rounded-md w-full'>
                        <div className='inline-block bg-orange-400 rounded-sm md:w-4/5'>
                            Hello, this is visualize css. 
                            Today, lets learn about display attribute of css.
                            <div className='bg-orange-300'style={{display: displayData[activeLabel].property}}>Test element.</div> 
                            This is an amazing attribute isn't it?
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

            {/* <section className='flex flex-row justify-start items-start '>
 
                <section className='flex-col'>

                    <p className='bg-green-300 text-center text-3xl'>Learn how to display a objects using css </p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, omnis suscipit aliquid deserunt tenetur debitis voluptatem sint, voluptatibus, deleniti repudiandae vel eveniet neque nihil sunt? Ipsa animi hic asperiores. Saepe.</p>
                </section>
            </section> */}
        </Fragment>
    )
}

export default Display
