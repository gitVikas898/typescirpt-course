// const year = document.getElementById("js-year");
// const thisYear = new Date().getFullYear();

// year.setAttribute("datetime",thisYear)
// year.textContent = thisYear;

// FIX 1

// let year: HTMLElement | null;
// year = document.getElementById("js-year");
// let thisYear: string;

// thisYear = new Date().getFullYear().toString();
// // using type guards

// if (year) {
//   year.setAttribute("datetime", thisYear);
//   year.textContent = thisYear;
// }


const year = document.getElementById("js-year") as HTMLSpanElement;
const thisYear = new Date().getFullYear().toString();

year.setAttribute("datetime",thisYear)
year.textContent = thisYear;
