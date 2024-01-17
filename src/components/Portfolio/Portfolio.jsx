// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

export default function Portfolio() {
  const ranges = [
    { value: 1, stock: 30, foreign: 60, markets: 35, dividend: 67, bond: 22 },
    { value: 2, stock: 20, foreign: 44, markets: 20, dividend: 30, bond: 98 },
    { value: 3, stock: 42, foreign: 75, markets: 22, dividend: 27, bond: 87 },
    { value: 4, stock: 38, foreign: 40, markets: 34, dividend: 17, bond: 92 },
    { value: 5, stock: 10, foreign: 70, markets: 5, dividend: 40, bond: 95 },
    { value: 6, stock: 5, foreign: 12, markets: 77, dividend: 98, bond: 72 },
    { value: 7, stock: 59, foreign: 67, markets: 27, dividend: 44, bond: 2 },
    { value: 8, stock: 23, foreign: 98, markets: 34, dividend: 88, bond: 43 },
    { value: 9, stock: 11, foreign: 19, markets: 56, dividend: 35, bond: 88 },
    { value: 10, stock: 80, foreign: 66, markets: 99, dividend: 19, bond: 9 },
  ];
  const [selectedRange, setSelectedRange] = useState(true);
  const [percentageValues, setPercentageValues] = useState({
    stock: null,
    foreign: null,
    markets: null,
    dividend: null,
    bond: null,
  });

  const handleRangeClick = (range) => {
    const selectedRangeData = ranges.find((r) => r.value === range);

    setSelectedRange(range);
    setPercentageValues({
      stock: selectedRangeData.stock + "%",
      foreign: selectedRangeData.foreign + "%",
      markets: selectedRangeData.markets + "%",
      dividend: selectedRangeData.dividend + "%",
      bond: selectedRangeData.bond + "%",
    });
  };
  return (
    <div
      id="portfolio"
      className="py-[10%] lg:py-[5%] lg:flex lg:items-center "
    >
      <img
        className="hidden lg:block w-[50%] h-[600px]"
        src="/images/woman.png"
        alt=""
      />
      <div className=" text-white">
        <p className="text-[40px] font-bold text-center text-primaryColor lg:text-[50px]">
          Sample Portfolio
        </p>

        <div className="flex gap-[20px] justify-center my-[5%] lg:my-[10%] lg:gap-[35px]">
          {ranges.map((rangeData, index) => (
            <div
              className="hover:text-primaryColor lg:text-[24px] cursor-pointer"
              key={index}
              onClick={() => handleRangeClick(rangeData.value)}
            >
              {rangeData.value}
            </div>
          ))}
        </div>
        <div>
          {selectedRange !== null && (
            <div className="flex flex-col gap-[25px] mx-[5%] lg:mx-0 lg:gap-[35px]">
              {/* ======for us stocks===== */}
              <div className="flex gap-[30px] ">
                {" "}
                <p className="font-extrabold lg:font-bold lg:text-[25px]">
                  US Stocks:
                </p>
                <div
                  className="bar bg-yellow-500 text-black font-bold"
                  style={{ width: `${percentageValues.stock}%` }}
                >
                  {percentageValues.stock}
                </div>
              </div>

              {/* ======for foreign stocks====== */}
              <div className="flex gap-[30px]">
                <p className="font-extrabold lg:font-bold lg:text-[25px]">
                  Foreign Stocks:
                </p>{" "}
                <div
                  className="bar bg-yellow-500 text-black font-bold"
                  style={{ width: `${percentageValues.foreign}%` }}
                >
                  {percentageValues.foreign}
                </div>
              </div>

              {/* =======for markets====== */}
              <div className="flex gap-[30px]">
                <p className="font-extrabold lg:font-bold lg:text-[25px]">
                  Markets:{" "}
                </p>
                <div
                  className="bar bg-yellow-500 text-black font-bold"
                  style={{ width: `${percentageValues.markets}%` }}
                >
                  {percentageValues.markets}
                </div>
              </div>

              {/* ========for dividend========= */}
              <div className="flex gap-[30px]">
                <p className="font-extrabold lg:font-bold lg:text-[25px]">
                  Dividend Stocks:{" "}
                </p>
                <div
                  className={`bar bg-yellow-500 text-black font-bold`}
                  style={{ width: `${percentageValues.dividend}%` }}
                >
                  {percentageValues.dividend}
                </div>
              </div>

              {/* =======for municipal========= */}
              <div className="flex gap-[30px] ">
                <p className="font-extrabold lg:font-bold lg:text-[25px]">
                  Municipal Bonds:{" "}
                </p>
                <div
                  className={`bar bg-yellow-500 text-black font-bold`}
                  style={{ width: `${percentageValues.bond}%` }}
                >
                  {percentageValues.bond}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
