import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Job from "./Job";
// when enter this page please reload the page to see the jobs
const Applied = () => {
  const savedCart = useLoaderData();
  return (
    <div>
      <div className="py-10 bg-emerald-50">
        <h1 className="text-4xl font-bold text-center">Applied Jobs</h1>
      </div>
      <div className="text-center pt-8">
        <div className="dropdown">
          <label tabIndex={0} className="btn bg-slate-100 hover:bg-slate-600 text-black m-1">
            Filter By
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow rounded-box w-52"
          >
            <li>
              <a>Remote</a>
            </li>
            <li>
              <a>Onsite</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 px-20 py-10">
        {savedCart.map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
    </div>
  );
};

export default Applied;
