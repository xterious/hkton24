import React from "react";
import Countdown from "react-countdown";

const CountdownToSeptember = () => {
  const date = new Date("2024-09-03T10:00:00");

  const renderer = ({ days, hours, minutes, seconds }) => {
    const time = [
      {
        label: "Days",
        value: days,
      },
      {
        label: "Hours",
        value: hours,
      },
      {
        label: "Minutes",
        value: minutes,
      },
      {
        label: "Seconds",
        value: seconds,
      },
    ];

    return (
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center space-x-4 mb-8">
          {time.map((item, index) => (
            <div
              key={index}
              className="bg-black border-2 font-outfit border-white rounded-lg p-4 text-center w-15"
            >
              <span className="text-1xl text-white">{item.label}</span>
              <span className="text-3xl text-white block">{item.value}</span>
            </div>
          ))}
        </div>
        <div
          className="bg-black hover:bg-[#DC5F00] transition duration-500 text-white font-bold font-outfit text-3xl py-4 px-12 rounded-lg mt-8 shadow-lg hover:-translate-y-3 border-2 border-white active:scale-95 hover:scale-105"
          style={{
            "--tw-drop-shadow": "0 4px 0 rgba(255, 255, 255, 0.5)",
          }}
          onClick={() =>
            window.open(
              "https://docs.google.com/forms/d/e/1FAIpQLSfUAQ9gtDeoLE2uI3C23dHJ5mUW7uRXNfBA1vgUibjOi1Xaag/viewform",
              "_blank"
            )
          }
        >
          Code Now!
        </div>
      </div>
    );
  };
  <div
    className="bg-black hover:bg-gray-700 transition duration-500 ease-in-out text-white font-bold text-3xl py-4 px-12 rounded-lg mt-8 shadow-lg hover:shadow-none hover:-translate-y-1 hover:drop-shadow border-2 border-white"
    style={{
      "--tw-drop-shadow": "0 4px 0 rgba(255, 255, 255, 0.5)",
    }}
  >
    Code Now!
  </div>;

  return <Countdown date={date} renderer={renderer} />;
};

export default CountdownToSeptember;
