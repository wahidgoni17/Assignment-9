import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faDollarSign } from "@fortawesome/free-solid-svg-icons";

const Job = ({ job }) => {
  console.log(job);
  const {
    id,
    company_logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    fulltime_or_parttime,
    salary,
  } = job;
  return (
    <div className="shadow-xl py-12 px-auto">
      <img className="w-40 h-32 mx-auto my-4" src={company_logo} alt="" />
      <div className="text-center">
        <p className="text-xl font-medium">{company_name}</p>
        <p className="text-3xl font-semibold">{job_title}</p>
        <div className="flex justify-center items-center py-3 gap-5">
          <p className="border border-indigo-300 rounded-md text-indigo-600  p-2">
            {remote_or_onsite}
          </p>
          <p className="border border-indigo-300  rounded-md text-indigo-600 p-2">
            {fulltime_or_parttime}
          </p>
        </div>
        <div className="flex justify-center gap-5">
          <p>
            <FontAwesomeIcon className="mr-2" icon={faLocationDot} />
            {location}
          </p>
          <p>
            <FontAwesomeIcon className="mr-2" icon={faDollarSign} />
            Salary: {salary}
          </p>
        </div>
        <button className="btn btn-primary mt-4">View Details</button>
      </div>
    </div>
  );
};

export default Job;
