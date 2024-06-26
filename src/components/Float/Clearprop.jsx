import React, { useState } from "react";
import floatAndClear from "../../database/FloatAndClear.json";
import CSSPlayground from "../shared/CSSPlayground";
import DescriptionBox from "../shared/DescriptionBox";
import { useSelector } from "react-redux";

function Clearprop() {
  const value = useSelector((state) => state.cssProperties.activeValue.get("clear") || state.cssProperties.activeValue.get("default"));
  // console.log("value in clearprop is = ", value);
  const data = floatAndClear.Clear.keyword.map(
    (keyword) => `clear: ${keyword}`
  );
  const [key, keyvalue] = data[value].split(":");
  let trimmedkeyvalue = keyvalue.trim();
  const keywordDesc = floatAndClear.Clear.keywordDescription[trimmedkeyvalue];
  const descrText = (
    <>
      <p className=" text-xl font-serif tracking-wider text-black  pl-4  ml-12 mt-4">
        The <span className="text-red-500">clear</span> property controls the
        flow next to floated elements.
      </p>
      <p className=" text-xl font-serif tracking-wider text-black  pl-4  ml-12 mt-4">
        The <span className="text-red-500">clear</span> property specifies what
        should happen with the element that is next to a floating element.
      </p>
    </>
  );

  return (
    <>
      <h1 className="font-serif tracking-wider text-black  pl-4 font-bold  ml-12 mt-12">
        Clear
      </h1>

      <DescriptionBox title={"Description"} descText={descrText} />
      <CSSPlayground
        data={data}
        title="clear"
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
  const value = useSelector((state) => state.cssProperties.activeValue.get("clear") || state.cssProperties.activeValue.get("default"));
  const mapData = useSelector((state) => state.cssProperties.data);
  const clearData = useSelector((state) => state.cssProperties.data.get("clear"));
  // console.log("Saved mapData", mapData);
  // console.log("clear map data: ", Array.isArray(clearData));
  console.log("active index in clearData is = ", value);

  const [clear, keyword] = clearData[value].split(":");

  return (
    <>
      <div className="w-14 h-12 bg-cyan-500 float-left"></div>
      <div className="w-14 h-28 bg-pink-500 float-right"></div>
      <div style={{ clear: keyword }}>
        <p>
          This is the demo text where we wanna show you that how 'clear'
          property works. so choose according toyou that how should you put
          clear property from the options.
        </p>
      </div>
    </>
  );
};
