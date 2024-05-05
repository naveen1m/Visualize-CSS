import React, { useState } from "react";
import PropTypes from 'prop-types'

const EditableList = ({ data, color1, color2 }) => {
  const [items, setItems] = useState(data);
  const [activeLabel, setActiveLabel] = useState(0);
  const handleComponentClick = (index) => {
    setActiveLabel(index);
  };

  const handleButtonClick = () => {
    setItems(data);
  };
  const handleItemChange = (index, newValue) => {
    const newItems = [...items];
    newItems[index] = newValue;
    setItems(newItems);
  };
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
          afterColon = afterColon == null ? "" : afterColon;
          return (
            <li
              key={index}
              className={`text-md py-2 rounded-lg m-2 font-semibold ${
                activeLabel === index ? " bg-sky-900 " : " hover:bg-sky-950 "
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

EditableList.propTypes = {
  data: PropTypes.elementType.isRequired,
  color1: PropTypes.any,
  color2: PropTypes.any,
}

export default EditableList;