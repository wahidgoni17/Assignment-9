import React, { useEffect, useState } from "react";
import Feature from "./Feature";

const Featured = () => {
  const [featured, setFeatured] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        if (showAll) {
          setFeatured(data);
        } else {
          setFeatured(data.slice(0, 4));
        }
      });
  }, [showAll]);

  const handleShowAll = () => {
    setShowAll(true);
  };

  return (
    <div className="py-10">
      <div className="text-center">
        <h3 className="text-4xl font-bold py-2">Featured Jobs</h3>
        <p className="text-slate-600">
          Elevate Your Job Search Advanced Search Features and Tools
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 px-20 py-10">
        {featured.map((feature) => (
          <Feature key={feature.id} feature={feature}></Feature>
        ))}
      </div>
      <div className="text-center mt-5 py-10">
        {!showAll && (
          <button onClick={handleShowAll} className="btn btn-primary">
            See All Jobs
          </button>
        )}
      </div>
    </div>
  );
};

export default Featured;
