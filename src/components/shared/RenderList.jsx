import React, { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { selectData, updateData } from "../../store/cssProperties-slice";

const EditableList = ({ data, title, color1, color2 }) => {
  const [items, setItems] = useState(data);
  const [activeLabel, setActiveLabel] = useState({label: "default", index: 0});
  const [renderFirst, setRenderFirst] = useState(true);
  const dispatch = useDispatch();
  const datamap = useSelector((state) => state.cssProperties.data);


const handleComponentClick = (index) => {
  
  setActiveLabel({label: title, index: index});
  // console.log("active label function", activeLabel)
};
  const handleButtonClick = () => {
    setItems(data);
  };
  const handleItemChange = (index, newValue) => {
    const newItems = [...items];
    newItems[index] = newValue;
    setItems(newItems);
  };
  const handleUpdateData = () => {
    dispatch(updateData({title: title, data: items}));
  };
  const handleUpdateActiveValue = () => {
    dispatch(selectData(activeLabel));
  };
  useEffect(() => {
    handleUpdateActiveValue();
  }, [activeLabel]);
if(renderFirst){
  // console.log("rendered for the first time only to save values in redux store")
  handleUpdateData();
  setRenderFirst(false)
}
  useEffect(() => {
    console.log("redux store items update");
    handleUpdateData();
  }, [items]);


  color1 = color1 == null ? "#6faaff" : color1;
  color2 = color2 == null ? "#ecc473" : color2;
  return (
    <div className=" list bg-slate-800 m-5 rounded-lg text-center font-medium font-sans text-slate-50 pt-12 pb-2 px-3 relative">
      <style>
        {`
        .list {
          width: 420px;
        }
        .editable-list  {
          height: 450px;
          width : 400px;
        }
          .editable-list::-webkit-scrollbar {
            width: 16px;
          }

          /* Handle */
          .editable-list::-webkit-scrollbar-thumb {
            background: #293e5f;
            border-radius: 10px;
          }
        `}
      </style>
      <ul className="editable-list overflow-y-scroll">
        {items?.map((item, index) => {
          let [beforeColon, afterColon] = item.split(":");
          {/* console.log("beforeColor:", beforeColon) */}
          afterColon = afterColon == null ? "" : afterColon;
          return (
            <li
              key={index}
              className={`text-md py-2 rounded-lg m-2 font-semibold ${
                activeLabel === activeLabel ? " bg-sky-900 " : " hover:bg-sky-950 "
              }`}
              onClick={() => handleComponentClick(index)}
            >
              <span style={{ color: color1 }}>{beforeColon}</span>:{" "}
              <span style={{ color: color2 }}>
                <input
                  type="text"
                  value={afterColon}
                  onChange={(e) =>
                    handleItemChange(index, `${beforeColon}:${e.target.value}`)
                  }
                  style={{
                    border: "none",
                    outline: "none",
                    background: "transparent",
                  }}
                  className="focus:outline-none focus:ring-0 focus:border-transparent"
                />
              </span>
            </li>
          );
        })}
      </ul>
      <button
        onClick={handleButtonClick}
        className="absolute top-2 right-2 bg-sky-900 hover:bg-sky-950 text-white font-semibold py-1 px-2 rounded"
      >
        reset
      </button>
    </div>
  );
};

// EditableList.propTypes = {
//   data: PropTypes.elementType.isRequired,
//   color1: PropTypes.any,
//   color2: PropTypes.any,
// }

export default EditableList;
