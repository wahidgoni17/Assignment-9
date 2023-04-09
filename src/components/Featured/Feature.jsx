import React from "react";

const Feature = ({ feature }) => {
  const {
    company_logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    fulltime_or_parttime,
    salary,
  } = feature;
  console.log(feature);
  return (
    <div className="p-6 shadow-xl px-auto">
      <img className="w-40 h-32 mx-auto my-4" src={company_logo} alt="" />
      <div className="text-center">
        <p>{job_title}</p>
        <p>{company_name}</p>
        <div className="flex justify-center gap-5">
          <p>{remote_or_onsite}</p>
          <p>{fulltime_or_parttime}</p>
        </div>
        <div className="flex justify-center gap-5">
          <p>{location}</p>
          <p>{salary}</p>
        </div>
        <button className="btn btn-primary my-5">View Details</button>
      </div>
    </div>
  );
};

export default Feature;
