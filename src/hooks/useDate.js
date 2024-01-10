import { useEffect, useState } from "react";

const MONTHS = [
  "JAN",
  "FEV",
  "MAR",
  "AVR",
  "MAI",
  "JUN",
  "JUL",
  "AOU",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

const DAYS = [
  "DIMANCHE",
  "LUNDI",
  "MARDI",
  "MERCREDI",
  "JEUDI",
  "VENDREDI",
  "SAMEDI",
];

const useDate = () => {
  const [date, setDate] = useState({
    day: "",
    dayNum: null,
    month: "",
    year: null,
    hours: null,
    minutes: null,
    seconds: null,
  });

  const getDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = MONTHS[date.getMonth()];
    const dayNum = date.getDate();
    const day = DAYS[date.getDay()];

    // format time
    const hours =
      date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    const minutes =
      date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();

    let seconds =
      date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();

    setDate({ day, dayNum, month, year, hours, minutes, seconds });
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      getDate();
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return date;
};

export default useDate;
