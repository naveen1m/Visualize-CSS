import React, { Fragment, useState } from "react";
import { marginShorthandData } from "../../data/boxmodel/marginShorthandData";
import { marginAbsoluteData } from "../../data/boxmodel/marginAbsoluteData";
import Syntaxhighlighter from "../Syntaxhighlighter";

function Margin(){
    const [activeLabel, setActiveLabel] = useState(0);
    const handleComponentClick = (index) => {
        
        setActiveLabel(index);
    };
    const [mgstate, setMgstate] = useState(true);
    const [mgcontent, setMgcontent] = useState("8px");
    const marginClick = async ()=>{
        setMgstate(!mgstate);
        if(!mgstate){
            setMgcontent("8px");
        }
        else{
            setMgcontent("8px 8px 8px 8px");
        }
    }
    const [brstate, setBrstate] = useState(true);
    const [brcontent, setBrcontent] = useState("2px");
    const borderClick = ()=>{
        setBrstate(!brstate);
        if(!brstate){
            setBrcontent("2px");
        }
        else{
            setBrcontent("2px 2px 2px 2px");
        }
    }
    const [pdstate, setPdstate] = useState(true);
    const [pdcontent, setPdcontent] = useState("0px");
    const paddingClick = ()=>{
        setPdstate(!pdstate);
        if(!pdstate){
            setPdcontent("0px");
        }
        else{
            setPdcontent("0px 0px 0px 0px");
        }
    }
    const sampleCode =
`<div style="margin: 100px">
    content
</div>`

    
    return (
        <Fragment>
        <div className="text-2xl text-center font-medium font-sans">Margin</div>
        {/*section1: Menu Section code : */}
        <section className="flex">
            <section className="content h-102 bg-slate-800 w-1/3 m-5 rounded-lg text-center font-medium font-sans text-slate-50 py-2 px-3">
                <div className="text-xl h-11 py-3 font-semibold tracking-wide">Shorthand</div>
                <div className='cont max-h-[50vh] overflow-y-scroll scroll-smooth scrollbar-track-current  scrollbar-thumb-rounded'>
                        {marginShorthandData.map((e, index) => (
                            <div key={index}
                                className={activeLabel === index ? 'text-md py-2 rounded-lg m-2 bg-sky-900 ' : 'text-md py-2 rounded-lg m-2 hover:bg-sky-950 '}
                                onClick={() => handleComponentClick(index)}
                            >{e.data}</div>
                        ))}
                </div>
                <div className="text-xl h-11 py-3 font-semibold tracking-wide">Absolute</div>
                <div className='cont max-h-[50vh] overflow-y-scroll scroll-smooth scrollbar-track-current  scrollbar-thumb-rounded'>
                        {marginAbsoluteData.map((e, index) => (
                            <div key={index}
                                className={activeLabel === index+marginShorthandData.length ? 'text-md py-2 rounded-lg m-2 bg-sky-900 ' : 'text-md py-2 rounded-lg m-2 hover:bg-sky-950 '}
                                onClick={() => handleComponentClick(index+marginShorthandData.length)}
                            >{e.data}</div>
                        ))}
                </div>
            </section>
            {/*Section2: Box display code : */}
            <section className="flex flex-col w-2/3">
                <div className='min-h-1/2 bg-indigo-950 p-3 py-5 rounded-md w-11/12 ml-auto mr-auto text-white font-medium'>
                    <div style={{ display: "flex"}}>
                        <div className="w-28 m-2 h-28 bg-sky-600 rounded-md text-white font-medium text-center" >
                            Box
                        </div>
                        <div id="content"className="w-28 m-2 h-28 bg-red-800 rounded-md text-white font-medium text-sm text-center " style={{margin:`${activeLabel<marginShorthandData.length? marginShorthandData[activeLabel].value : marginAbsoluteData[activeLabel-marginShorthandData.length].value}` , padding: pdcontent, borderStyle: "solid", borderWidth: brcontent}}>
                            Content
                        </div>
                        <div className="w-28 m-2 h-28 bg-sky-600 rounded-md text-white font-medium text-center" >
                            Box
                        </div>
                            
                    </div>
                    <div style={{ display: "flex" }}>
                        <div className="w-28 m-2 h-28 bg-sky-600 rounded-md text-white font-medium text-center" >
                            Box
                        </div>
                        <div className="w-28 m-2 h-28 bg-sky-600 rounded-md text-white font-medium text-center">
                            Box
                        </div>
                        <div className="w-28 m-2 h-28 bg-sky-600 rounded-md text-white font-medium text-center" >
                            Box
                        </div>
                            
                    </div>
                </div>
                {/*Section3: Example code section :  */}
                <Syntaxhighlighter codeString={`<div style="${activeLabel<marginShorthandData.length? marginShorthandData[activeLabel].attribute : marginAbsoluteData[activeLabel-marginShorthandData.length].attribute} : "${activeLabel<marginShorthandData.length? marginShorthandData[activeLabel].value : marginAbsoluteData[activeLabel-marginShorthandData.length].value}">
    content
</div>`} />
                
            </section>
        </section>
        </Fragment>
    )
}

export default Margin;