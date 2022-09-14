import React from "react";
import Axios from "axios";
import CoursePage from "./CoursePage";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import NotFoundPage from "./NotFoundPage";

const SearchField = (props) => {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  const [search, setSearch] = React.useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    const url = "http://192.168.0.111:5001/api/info/" + search;
    console.log(url);
    Axios.get(url)
      .then((response) => {
        props.setData(response.data);
      })
      .catch((err) => props.setData("error"));
  };
  const buttonClass =
    "text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800";
  const inputClass =
    "block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="flex flex-col gap-[10rem] text-center my-[10rem]">
        <div className="xl:text-2xl sm:text-xl capitalize">
          Enter the course id
        </div>

        <form className="text-center m-auto" onSubmit={submitHandler}>
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
          >
            Search
          </label>
          <div class="relative xl:w-[50rem] sm:w-[25rem]">
            <div class="flex absolute inset-y-[50%] items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              class={inputClass}
              placeholder="Course id"
              required
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <button type="submit" class={buttonClass}>
              Search
            </button>
          </div>
        </form>
        {props.data.instructors ? <CoursePage data={props.data} /> : ""}
      </div>
      {props.data === "error" ? <NotFoundPage /> : ""}
    </ThemeProvider>
  );
};

export default SearchField;
