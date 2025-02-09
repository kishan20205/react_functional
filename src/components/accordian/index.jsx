import React, { useState } from "react";
import data from "./data";

function index() {
  const [selected, setselected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    setselected(selected === getCurrentId ? null : getCurrentId);
    setMultiple([]);
  }

  function handleMultiSelection(getCurrentId) {
    let cpyMultiple = [...multiple];
    const findIndexCurrentId = cpyMultiple.indexOf(getCurrentId);
    if (findIndexCurrentId === -1) cpyMultiple.push(getCurrentId);
    else cpyMultiple.splice(findIndexCurrentId, 1);

    setMultiple(cpyMultiple);

    console.log(findIndexCurrentId, cpyMultiple);
    setselected(null);
  }

  return (
    <div className="wrapper h-screen flex items-center justify-center">
      <div className="accordian w-full h-full text-center flex flex-col items-center justify-center">
        <div
          onClick={() => setEnableMultiSelection(!enableMultiSelection)}
          className="anstype"
        >
          <button onClick={() => setEnableMultianswer} className="mb-5">
            Single answer
          </button>
        </div>

        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item w-[65vw] h-auto mb-2 bg-green-950 text-white p-1">
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title text-sm font-semibold"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {enableMultiSelection
                ? multiple.indexOf(dataItem.id) !== -1 && (
                    <div className="content">{dataItem.answer}</div>
                  )
                : selected === dataItem.id && (
                    <div className="content">{dataItem.answer}</div>
                  )}
            </div>
          ))
        ) : (
          <div>No data found !!</div>
        )}
      </div>
    </div>
  );
}

export default index;
