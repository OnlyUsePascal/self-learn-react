import { useState } from "react";

const ComplexState = () => {
  const [stat, setStat] = useState({ left: 0, right: 0 });

  // method 1
  const onClick1 = (attr) => {
    const newStat = {
      left: stat.left,
      right: stat.right,
    };
    if (attr === "left") newStat.left += 1;
    else newStat.right += 1;

    setStat(newStat)
  };
  
  const onClick2 = (attr) => {
    // not safe if attr is not existant
    const newStat = {
      ...stat,
      [attr]: stat[attr] + 1
    }
    
    setStat(newStat)
  }
  
  // DO NOT DO THIS
  // const onClick3 = (attr) => {
  //   stat[attr] += 1;
  //   setStat({});
  // }
  
  const attrList = ["left", "right"];
  return (
    <>
      <h2>Complex State</h2>
      {attrList.map((attr, index) => {
        return (
          <button
            key={index}
            onClick={() => {
              onClick2(attr);
            }}
          >
            {stat[attr]}
          </button>
        );
      })}
    </>
  );
};

export default ComplexState;