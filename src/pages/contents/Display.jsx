import React, { Fragment, useState } from 'react'
import { displayData } from '../../data'
import "../../components/display/displayStyle.css"
import { DescAnimate, Syntaxhighlighter } from '../../components';
function Display() {
    const [activeLabel, setActiveLabel] = useState(0);
    const handleComponentClick = (index) => {
        setActiveLabel(index);
    };
    const listItems = displayData[activeLabel].whenNotApplied.map((d) => <li >{d}</li>);
    const sampleCode =
        `<div> 
    Hello, this is visualize css. Today, lets learn about display attribute of css.
    <div style={display: "${displayData[activeLabel].property}" }>
        Test element.
    </div>
    This is an amazing attribute isn't it?
</div>`

    return (
        <Fragment>
            <h3 className='text-center text-3xl my-3 font-sans'>Display</h3>
            <div className="flex flex-col-reverse justify-around md:flex-row">
                <section className="content h-96 bg-slate-800 w-1/3 m-5 rounded-lg text-center font-medium font-sans text-slate-50 py-2 px-3">
                    <div className="text-xl h-11 py-3 font-semibold tracking-wide">Display Properties</div>
                    <div className='cont max-h-[50vh] overflow-y-scroll scroll-smooth scrollbar-track-current  scrollbar-thumb-rounded'>
                        {displayData.map((e, index) => (
                            <div key={index}
                                className={activeLabel === index ? 'text-md py-2 rounded-lg m-2 bg-sky-900 ' : 'text-md py-2 rounded-lg m-2 hover:bg-sky-950 '}
                                onClick={() => handleComponentClick(index)}
                            >{e.data}</div>
                        ))}
                    </div>
                </section>
                <section className="content w-2/3 m-5 rounded-lg font-sans">
                    <section className='min-h-1/2 bg-indigo-950 p-3 py-5 rounded-md w-full  text-white font-medium'>
                        <div style={{ display: displayData[activeLabel].containerProperty, gridTemplateColumns: "auto auto auto" }}>
                            <div className="w-28 m-2 h-28 bg-sky-600 rounded-md text-white font-medium text-center" style={{ display: displayData[activeLabel].boxProperty, padding: "10px" }}>
                                Box
                            </div>
                            <div className=" m-2 p-1 rounded-md text-white font-medium text-center bg-sky-600" style={{ display: displayData[activeLabel].boxProperty, gridTemplateColumns: "auto auto auto" }}>
                                <div className=' m-1 rounded-md p-2 text-center bg-cyan-500'>B1</div>
                                <div className=' m-1 rounded-md p-2 text-center bg-cyan-500'>B2</div>
                                <div className=' m-1 rounded-md p-2 text-center bg-cyan-500'>B3</div>
                                <div className=' m-1 rounded-md p-2 text-center bg-cyan-500'>B4</div>
                            </div>
                        </div>
                    </section>
                    <section className='flex flex-col justify-around  p-3 py-5 rounded-md w-full'>
                        <code className='inline-block w-4/5   '>
                            <Syntaxhighlighter codeString={sampleCode} />
                        </code>
                    </section>
                    <section className='flex flex-col justify-around  p-3 py-5 rounded-md w-full'>
                        <DescAnimate desc={displayData[activeLabel].insight} />
                        <div className=' text-xl'>Where it is not applied?</div>
                        <ul className='list-disc list-inside'>{listItems}</ul>
                    </section>
                </section>
            </div>
        </Fragment>
    )
}
export default Display
