import React, { Fragment, useEffect, useState } from "react";
import { RiLoopLeftLine } from 'react-icons/ri'
import Margin from "../../components/boxmodel/margin";
function Boxmodel(){
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
    const [mgtop, setmgtop] = useState(document?.getElementById("content")?.style?.marginTop);
    const [mgbot, setmgbot] = useState(document?.getElementById("content")?.style?.marginBottom);
    const [mglef, setmglef] = useState(document?.getElementById("content")?.style?.marginLeft);
    const [mgrig, setmgrig] = useState(document?.getElementById("content")?.style?.marginRight);
    const [brtop, setbrtop] = useState(document?.getElementById("content")?.style?.borderTopWidth);
    const [brbot, setbrbot] = useState(document?.getElementById("content")?.style?.borderBottomWidth);
    const [brlef, setbrlef] = useState(document?.getElementById("content")?.style?.borderLeftWidth);
    const [brrig, setbrrig] = useState(document?.getElementById("content")?.style?.borderRightWidth);
    const [pdtop, setpdtop] = useState(document?.getElementById("content")?.style?.paddingTop);
    const [pdbot, setpdbot] = useState(document?.getElementById("content")?.style?.paddingBottom);
    const [pdlef, setpdlef] = useState(document?.getElementById("content")?.style?.paddingLeft);
    const [pdrig, setpdrig] = useState(document?.getElementById("content")?.style?.paddingRight);
    useEffect(
        ()=>{
            setmgtop(document?.getElementById("content")?.style?.marginTop);
            setmgbot(document?.getElementById("content")?.style?.marginBottom);
            setmglef(document?.getElementById("content")?.style?.marginLeft);
            setmgrig(document?.getElementById("content")?.style?.marginRight);
            setbrtop(document?.getElementById("content")?.style?.borderTopWidth);
            setbrbot(document?.getElementById("content")?.style?.borderBottomWidth);
            setbrlef(document?.getElementById("content")?.style?.borderLeftWidth);
            setbrrig(document?.getElementById("content")?.style?.borderRightWidth);
            setpdtop(document?.getElementById("content")?.style?.paddingTop);
            setpdbot(document?.getElementById("content")?.style?.paddingBottom);
            setpdlef(document?.getElementById("content")?.style?.paddingLeft);
            setpdrig(document?.getElementById("content")?.style?.paddingRight);
        },[mgcontent, brcontent, pdcontent]
    )
    return(
        <Fragment>
            <div className="text-2xl text-center font-medium font-sans">Box Model</div>
                <section className='min-h-1/2 bg-indigo-950 p-3 py-5 rounded-md w-11/12 ml-auto mr-auto text-white font-medium'>
                    <div style={{ display: "flex"}}>
                        <div className="w-28 m-2 h-28 bg-sky-600 rounded-md text-white font-medium text-center" >
                            Box
                        </div>
                        <div id="content"className="w-28 m-2 h-28 bg-red-800 rounded-md text-white font-medium text-sm text-center " style={{margin:mgcontent, padding: pdcontent, borderStyle: "solid", borderWidth: brcontent}} >
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
                </section>
                <section className="flex flex-col md:flex-row w-11/12 ml-auto mr-auto justify-around">
                    <div>
                        <div className="text-xl font-medium text-center">Properties</div>
                        <div className="flex">
                            <div className="mt-auto mb-auto">margin : <input type="text" value={mgcontent} onChange={(e)=> setMgcontent(e.target.value)} className="border rounded-lg h-6"/> </div>
                            <div className="flex">
                                <div className="mt-auto mb-auto cursor-pointer" onClick={marginClick}><RiLoopLeftLine size={20} /></div>
                                <div className="flex flex-col">
                                    <div className="text-center ">Shorthand</div>
                                    <div className="text-center ">Absoulte</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="mt-auto mb-auto">border : <input type="text" value={brcontent} onChange={(e)=> setBrcontent(e.target.value)} className="border rounded-lg h-6"/> </div>
                            <div className="flex">
                                <div className="mt-auto mb-auto cursor-pointer" onClick={borderClick}><RiLoopLeftLine size={20} /></div>
                                <div className="flex flex-col">
                                    <div className="text-center ">Shorthand</div>
                                    <div className="text-center ">Absoulte</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="mt-auto mb-auto">padding : <input type="text" value={pdcontent} onChange={(e)=> setPdcontent(e.target.value)} className="border rounded-lg h-6"/> </div>
                            <div className="flex">
                                <div className="mt-auto mb-auto cursor-pointer" onClick={paddingClick}><RiLoopLeftLine size={20} /></div>
                                <div className="flex flex-col">
                                    <div className="text-center" >Shorthand</div>
                                    <div className="text-center ">Absoulte</div>
                                </div>
                            </div>
                        </div>
                        
                        <div>
                            <div>Content</div>
                            <div className="mt-auto mb-auto">size : <input type="text" className="border rounded-lg h-6"/> </div>
                        </div>
                    </div>
                    <div className="flex flex-col ml-auto mr-auto m-2 border-dashed border-05 border-black" style={{width:"350px", height:"350px", background:"#b08354"}}>
                        <div className="pl-2 text-sm">Margin</div>
                        <div className="text-center ">{ mgtop}</div>
                        <div className="flex">
                            <div className="mt-auto mb-auto mr-auto ml-auto text-center">{mglef}</div>
                            <div className="flex flex-col ml-auto mr-auto border-05 border-black" style={{width:"250px", height:"250px", background:"#e4c482"}}>
                                <div className="pl-2 text-sm">Border</div>
                                <div className="text-center">{brtop}</div>
                                <div className="flex">
                                    <div className="mt-auto mb-auto mr-auto ml-auto text-center">{brlef}</div>
                                    <div className="flex flex-col mr-auto ml-auto border-dashed border-05 border-black" style={{width:"150px", height:"150px", background:"#b8c480"}}>
                                        <div className="pl-2 text-sm">Padding</div>
                                        <div className="text-center">{pdtop}</div>
                                        <div className="flex">
                                            <div className="mt-auto mb-auto mr-auto ml-auto text-center">{pdlef}</div>
                                            <div className="mr-auto ml-auto border-05 border-black" style={{width:"80px", height:"50px", background:"#88b2bd"}}>
                                                <div className="text-center p-3">Content</div>
                                            </div>
                                            <div className="mt-auto mb-auto mr-auto ml-auto text-center">{pdrig}</div>
                                        </div>
                                        <div className="text-center">{pdbot}</div>
                                    </div>
                                    <div className="mt-auto mb-auto mr-auto ml-auto text-center">{ brrig}</div>
                                </div>
                                <div className="text-center " >{ brbot}</div>
                            </div>
                            <div className="mt-auto mb-auto mr-auto ml-auto text-center">{ mgrig}</div>
                        </div>
                        <div className="text-center " >{ mgbot}</div>
                    </div>
                    
                </section>
                <Margin/>
        </Fragment>
    )
}
export default Boxmodel;