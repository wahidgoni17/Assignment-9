import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import info from "../../../public/data.json";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";
const Details = () => {
  const { id } = useParams();
  const details = info.find((inf) => inf.id === id);
  const {
    company_logo,
    job_title,
    company_name,
    location,
    salary,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    contact_information,
  } = details;
  const [cart, setCart] = useState([])
  useEffect(() => {
    const storedCart = getShoppingCart()
    const savedCart = []
    for(const id in storedCart){
      const addedJobs = info.find((job => job.id === id))
      if(addedJobs){
        const quantity = storedCart[id]
        addedJobs.quantity = quantity
        savedCart.push(addedJobs)
      }
    }
    setCart(savedCart)
  }, [details])

  const handleAddtocart = (job) => {
    let newCart = []
    let exists = cart.find(job => job.id === job.id)
    if(!exists){
      job.quantity = 1
      newCart = [...cart, job]
    }
    else{
      exists = exists.quantity + 1
      const remaining = cart.filter(job =>job.id !== job.id)
      newCart = [...remaining, exists]
    }
    setCart(newCart);
    addToDb(job.id);
  };


  return (
    <div>
      <div className="py-10 bg-emerald-50">
        <h1 className="text-5xl text-center font-bold">Job Details</h1>
      </div>
      <div className="my-5">
        <h1 className="text-4xl text-center font-bold">{company_name}</h1>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-start gap-9 py-10 px-20">
        <div>
          <div>
              <p className="text-3xl font-semibold my-2">Job Description</p>
            <p className="text-xl text-slate-600">
            {job_description}
            </p>
          </div>
          <div>
              <p className="text-3xl font-semibold my-2">Job Responsibility</p>
              <p className="text-xl text-slate-600">{job_responsibility}</p>
          </div>
          <div>
            <p className="text-3xl font-semibold my-2">Educational Qualification</p>
            <p className="text-xl text-slate-600">{educational_requirements}</p>
          </div>
          <div>
            <p className="text-3xl font-semibold my-2">Experiences</p>
            <p className="text-xl text-slate-600">{experiences}</p>
          </div>
        </div>
        <div>
            <div className="bg-slate-100 rounded-xl w-96 h-96">
                <div className="mx-4 py-4">
                    <h4 className="text-2xl font-semibold py-4">Job Details</h4>
                    <hr />
                </div>
                <div className="mx-4">
                    <p className="pb-2"><span className="font-semibold text-slate-700">Salary:</span> {salary}</p>
                    <p className="pb-2"><span className="font-semibold text-slate-700">Job Title:</span> {job_title}</p>
                </div>
                <div className="mx-4 py-2">
                    <h4 className="text-2xl font-semibold py-4">Contact Information</h4>
                    <hr />
                </div>
                <div className="mx-4">
                    <p className="pb-2"><span  className="font-semibold text-slate-700">Phone:</span> {contact_information.phone}</p>
                    <p className="pb-2"><span  className="font-semibold text-slate-700">Email:</span> {contact_information.email}</p>
                    <p className="pb-2"><span  className="font-semibold text-slate-700">Address:</span> {location}</p>
                </div>
            </div>
            <div>
                <button onClick={()=> handleAddtocart(details)} className="btn btn-primary w-96 my-4">Apply Now</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
