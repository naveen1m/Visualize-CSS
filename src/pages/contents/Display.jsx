import React, { Fragment, useState } from 'react'
import { displayData } from '../../components/display/displayData'
import "../../components/display/displayStyle.css"
function Display() {
    const [activeLabel, setActiveLabel] = useState(0);
    const handleComponentClick = (index) => {
        setActiveLabel(index);
    };
    const listItems = displayData[activeLabel].whenNotApplied.map((d) => <li >{d}</li>);
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
                    <section className='min-h-1/2 bg-indigo-950 p-3 py-5 rounded-md w-full  text-white font-medium'>
                        
{/*                             
                            {displayData[activeLabel].property==="inline-flex"||displayData[activeLabel].property==="inline-grid"?
                            <div  style={{display: displayData[activeLabel].containerProperty}}>
                        
                            
                            <div className="w-28 m-2 h-28 bg-sky-600 rounded-md text-white font-medium text-center" style={{display: "inline-block"}}>
                                <div style={{padding: "35%"}}>Box</div>
                            </div>
                            
                            <div className=" m-2 p-1 rounded-md text-white font-medium text-center bg-sky-600" style={{display: displayData[activeLabel].boxProperty, gridTemplateColumns: "auto auto auto"}}>
                                <div className=' m-1 rounded-md p-2 text-center bg-cyan-500'>B1</div>
                                <div className=' m-1 rounded-md p-2 text-center bg-cyan-500'>B2</div>
                                <div className=' m-1 rounded-md p-2 text-center bg-cyan-500'>B2</div>
                                <div className=' m-1 rounded-md p-2 text-center bg-cyan-500'>B2</div>
                            </div>
                            
                            
                        </div> :
                        <div  style={{display: displayData[activeLabel].containerProperty , gridTemplateColumns: "auto auto auto"}}>
                        
                        <div className="w-28 m-2 h-28 bg-sky-600 rounded-md text-white font-medium text-center" style={{display: displayData[activeLabel].boxProperty}}>
                            <div style={{paddingTop: "35%",paddingBottom: "35%", display: displayData[activeLabel].boxProperty}}>Box</div>
                        </div>
                        <div className="w-28 m-2 h-28 bg-sky-600 rounded-md text-white font-medium text-center" style={{display: displayData[activeLabel].boxProperty}}>
                            <div style={{paddingTop: "35%",paddingBottom: "35%", display: displayData[activeLabel].boxProperty}}>Box</div>
                        </div>
                    </div> } */}
                            
                    
                            <div  style={{display: displayData[activeLabel].containerProperty, gridTemplateColumns: "auto auto auto"}}>
                        
                            {/* <div className="w-28 m-2 h-28 bg-sky-600 rounded-md text-white font-medium text-center" style={{display: displayData[activeLabel].boxProperty}}>
                                <div style={{padding: "35%", display: displayData[activeLabel].boxProperty}}>Box</div>
                            </div> */}
                            <div className="w-28 m-2 h-28 bg-sky-600 rounded-md text-white font-medium text-center" style={{display: displayData[activeLabel].boxProperty, padding: "10px"}}>
                                Box
                            </div>
                        
                            {/* <div className="w-28 m-2 h-28 bg-sky-600 rounded-md text-white font-medium text-center" style={{display: "inline-block"}}>
                                <div style={{padding: "35%"}}>Box</div>
                            </div> */}
                            
                            <div className=" m-2 p-1 rounded-md text-white font-medium text-center bg-sky-600" style={{display: displayData[activeLabel].boxProperty, gridTemplateColumns: "auto auto auto"}}>
                                <div className=' m-1 rounded-md p-2 text-center bg-cyan-500'>B1</div>
                                <div className=' m-1 rounded-md p-2 text-center bg-cyan-500'>B2</div>
                                <div className=' m-1 rounded-md p-2 text-center bg-cyan-500'>B3</div>
                                <div className=' m-1 rounded-md p-2 text-center bg-cyan-500'>B4</div>
                            </div>
                            
                            
                        </div> 
                        <div  style={{display: displayData[activeLabel].containerProperty , gridTemplateColumns: "auto auto auto"}}>
                        
                        
                    </div> 
                            
                    </section>
                    <section  className='flex flex-col justify-around  p-3 py-5 rounded-md w-full'>
                        <div className='text-center text-2xl'>Code</div>
                        
                        <code className='inline-block w-4/5   '>
                            &lt;div&gt;
                                Hello, this is visualize css. 
                                Today, lets learn about display attribute of css.
                                &lt;div style=&#123;display: "{displayData[activeLabel].property}"&#125;
                                &gt;Test element.&lt;/div&gt; 
                                This is an amazing attribute isn't it?
                                &lt;/div&gt;
                        </code>
                    </section>
                    <section  className='flex flex-col justify-around  p-3 py-5 rounded-md w-full'>
                        <div className='text-center text-2xl'>Insights</div>
                        <div className='text-md'>{displayData[activeLabel].insight}</div>
                        <div className=' text-xl'>Where it is not applied?</div>
                        <ul className='list-disc list-inside'>{listItems}</ul>
                    </section>
                </section>
            </div>

        </Fragment>
    )
}

export default Display
