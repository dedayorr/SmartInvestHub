// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import "../../../src/App.css";

export default function Portfolio() {
  const ranges = [
    {
      value: 0,
      stock: 18,
      foreign: 4,
      tech: 2,
      EmergingStock: 7,
      nigerianbond: 35,
      foreignbond: 15,
      commodities: 7,
      realestate: 12,
      tbills: 0,
      alternative: 0,
    },
    {
      value: 1,
      stock: 20,
      foreign: 5,
      tech: 3,
      EmergingStock: 7,
      nigerianbond: 35,
      foreignbond: 6,
      commodities: 12,
      realestate: 12,
      tbills: 0,
      alternative: 0,
    },
    {
      value: 2,
      stock: 23,
      foreign: 5,
      tech: 4,
      EmergingStock: 7,
      nigerianbond: 35,
      foreignbond: 14,
      commodities: 12,
      realestate: 0,
      tbills: 0,
      alternative: 0,
    },
    {
      value: 3,
      stock: 26,
      foreign: 6,
      tech: 4,
      EmergingStock: 7,
      nigerianbond: 35,
      foreignbond: 10,
      commodities: 12,
      realestate: 0,
      tbills: 0,
      alternative: 0,
    },
    {
      value: 4,
      stock: 29,
      foreign: 7,
      tech: 5,
      EmergingStock: 6,
      nigerianbond: 35,
      foreignbond: 6,
      commodities: 12,
      realestate: 0,
      tbills: 0,
      alternative: 0,
    },
    {
      value: 5,
      stock: 31,
      foreign: 8,
      tech: 6,
      EmergingStock: 5,
      nigerianbond: 35,
      foreignbond: 3,
      commodities: 12,
      realestate: 0,
      tbills: 0,
      alternative: 0,
    },
    {
      value: 6,
      stock: 35,
      foreign: 8,
      tech: 7,
      EmergingStock: 3,
      nigerianbond: 35,
      foreignbond: 12,
      commodities: 0,
      realestate: 0,
      tbills: 0,
      alternative: 0,
    },
    {
      value: 7,
      stock: 45,
      foreign: 13,
      tech: 12,
      EmergingStock: 7,
      nigerianbond: 23,
      foreignbond: 0,
      commodities: 0,
      realestate: 0,
      tbills: 0,
      alternative: 0,
    },
    {
      value: 8,
      stock: 45,
      foreign: 15,
      tech: 15,
      EmergingStock: 89,
      nigerianbond: 16,
      foreignbond: 0,
      commodities: 0,
      realestate: 0,
      tbills: 0,
      alternative: 0,
    },
    {
      value: 9,
      stock: 45,
      foreign: 18,
      tech: 17,
      EmergingStock: 11,
      nigerianbond: 9,
      foreignbond: 0,
      commodities: 0,
      realestate: 0,
      tbills: 0,
      alternative: 0,
    },
    {
      value: 10,
      stock: 45,
      foreign: 20,
      tech: 19,
      EmergingStock: 14,
      nigerianbond: 2,
      foreignbond: 0,
      commodities: 0,
      realestate: 0,
      tbills: 0,
      alternative: 0,
    },
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

    // ===percentageValues===
    setPercentageValues({
      stock: selectedRangeData.stock + "%",
      foreign: selectedRangeData.foreign + "%",
      tech: selectedRangeData.tech + "%",
      EmergingStock: selectedRangeData.EmergingStock + "%",
      nigerianbond: selectedRangeData.nigerianbond + "%",
      foreignbond: selectedRangeData.foreignbond + "%",
      commodities: selectedRangeData.commodities + "%",
      realestate: selectedRangeData.realestate + "%",
      tbills: selectedRangeData.tbills + "%",
      alternative: selectedRangeData.alternative + "%",
    });
  };

  // =====Api call for Date and Time=====
  const [datetime, setDate] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://worldtimeapi.org/api/ip");
        const data = await response.json();

        // Format the date using JavaScript's Date object
        const apiDate = new Date(data.datetime);
        const formattedDate = apiDate.toDateString();

        setDate(formattedDate);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Error fetching date ");
      }
    };

    fetchData();
  }, []);

  return (
    <div
      id="portfolio"
      className="py-[10%] lg:py-[5%] lg:flex lg:items-center lg:mx-[8%]"
    >
      <div className="hidden lg:block w-[50%]">
        {" "}
        <div className="text-[20px] text-primaryColor font-bold">
          {datetime && <p>{datetime}</p>}
          {error && <p>{error}</p>}
        </div>
        <img className=" h-[600px]" src="/images/woman.png" alt="" />
      </div>
      <div className=" text-white">
        <p className="text-[40px] font-bold text-center text-primaryColor lg:text-[50px]">
          Sample Portfolio
        </p>
        <div className=" font-extrabold mt-[5%] lg:mt-[8%] lg:text-[20px]">
          Risk score/Tolerance :
        </div>
        <div className="portfolio flex gap-[20px] justify-center my-[5%] font-bold lg:my-[6%] lg:px-2 lg:gap-[35px] ">
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
                  Nigerian Stocks:
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

              {/* ====for tech stocks=== */}
              <div className="flex gap-[30px]">
                <p className="font-extrabold lg:font-bold lg:text-[25px]">
                  Tech Stocks:
                </p>{" "}
                <div
                  className="bar bg-yellow-500 text-black font-bold"
                  style={{ width: `${percentageValues.tech}%` }}
                >
                  {percentageValues.tech}
                </div>
              </div>

              {/* =======for emerging stock====== */}
              <div className="flex gap-[30px]">
                <p className="font-extrabold lg:font-bold lg:text-[25px]">
                  Emerging Stocks:{" "}
                </p>
                <div
                  className="bar bg-yellow-500 text-black font-bold"
                  style={{ width: `${percentageValues.EmergingStock}%` }}
                >
                  {percentageValues.EmergingStock}
                </div>
              </div>

              {/* ========for nigerian bond========= */}
              <div className="flex gap-[30px]">
                <p className="font-extrabold lg:font-bold lg:text-[25px]">
                  Nigerian Bonds:{" "}
                </p>
                <div
                  className={`bar bg-yellow-500 text-black font-bold`}
                  style={{ width: `${percentageValues.nigerianbond}%` }}
                >
                  {percentageValues.nigerianbond}
                </div>
              </div>

              {/* =======for foreign bond========= */}
              <div className="flex gap-[30px] ">
                <p className="font-extrabold lg:font-bold lg:text-[25px]">
                  Foreign Bonds:{" "}
                </p>
                <div
                  className={`bar bg-yellow-500 text-black font-bold`}
                  style={{ width: `${percentageValues.foreignbond}%` }}
                >
                  {percentageValues.foreignbond}
                </div>
              </div>

              {/* ======for commodities======== */}
              <div className="flex gap-[30px] ">
                <p className="font-extrabold lg:font-bold lg:text-[25px]">
                  Commodities:{" "}
                </p>
                <div
                  className={`bar bg-yellow-500 text-black font-bold`}
                  style={{ width: `${percentageValues.commodities}%` }}
                >
                  {percentageValues.commodities}
                </div>
              </div>

              {/* ========Real Estate========= */}
              <div className="flex gap-[30px] ">
                <p className="font-extrabold lg:font-bold lg:text-[25px]">
                  Real Estate:{" "}
                </p>
                <div
                  className={`bar bg-yellow-500 text-black font-bold`}
                  style={{ width: `${percentageValues.realestate}%` }}
                >
                  {percentageValues.realestate}
                </div>
              </div>

              {/* ============T-bills======== */}
              <div className="flex gap-[30px] ">
                <p className="font-extrabold lg:font-bold lg:text-[25px]">
                  T-Bills:{" "}
                </p>
                <div
                  className={`bar bg-yellow-500 text-black font-bold`}
                  style={{ width: `${percentageValues.tbills}%` }}
                >
                  {percentageValues.tbills}
                </div>
              </div>

              {/* ==========Alternative======== */}
              <div className="flex gap-[30px] ">
                <p className="font-extrabold lg:font-bold lg:text-[25px]">
                  Alternative:{" "}
                </p>
                <div
                  className={`bar bg-yellow-500 text-black font-bold`}
                  style={{ width: `${percentageValues.alternative}%` }}
                >
                  {percentageValues.alternative}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
