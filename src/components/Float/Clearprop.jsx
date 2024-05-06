import React, { useState } from "react";
import floatAndClear from "../../database/FloatAndClear.json";
import CSSPlayground from "../shared/CSSPlayground";
import DescriptionBox from "../shared/DescriptionBox";
import { useSelector } from "react-redux";


function Clearprop() {
  const value = useSelector((state)=> state.cssProperties.activeValue);
  const data = floatAndClear.Clear.keyword.map(
    (keyword) => `clear: ${keyword}`
  );
  // console.log(data)
  const [key, keyvalue] =  data[value].split(":"); 
  let trimmedkeyvalue = keyvalue.trim();
  const keywordDesc = floatAndClear.Clear.keywordDescription[trimmedkeyvalue];
  // console.log("keyword desc is : ",keywordDesc);
  const descrText = <>
  <p className=' text-xl font-serif tracking-wider text-black  pl-4  ml-12 mt-4'>The <span className='text-red-500'>clear</span> property controls the flow next to floated elements.</p>
  <p className=' text-xl font-serif tracking-wider text-black  pl-4  ml-12 mt-4'>The <span className='text-red-500'>clear</span> property specifies what should happen with the element that is next to a floating element.</p>
  </>


  return (
    <>
    
<h1 className='font-serif tracking-wider text-black  pl-4 font-bold  ml-12 mt-12'>Clear</h1>

    <DescriptionBox title={"Info"} descText={descrText} />
      <CSSPlayground
        data={data}
        component={ClearComponent}
        screenDesc="What's happening on the screen, This is showing the clear properties live interation effect"
        bgColor="beige"
      />
      <DescriptionBox title={"Keyword description"} descText={keywordDesc} />
    </>
  );
}

export default Clearprop;

const ClearComponent = () => {
  const value = useSelector((state)=> state.cssProperties.activeValue)
  const data = useSelector((state)=> state.cssProperties.data);
  // console.log("val", value, "data",data)
  const [clear, keyword] =  data[value].split(":");


  return (
    <>

        <div className="w-14 h-12 bg-cyan-500 float-left"></div>
        <div className="w-14 h-28 bg-pink-500 float-right"></div>
        <div style={{clear: keyword}} >
          <p>
            This is the demo text where we wanna show you that how 'clear'
            property works. so choose according toyou that how should you put
            clear property from the options.
          </p>
        </div>
  
    </>
  );
};
