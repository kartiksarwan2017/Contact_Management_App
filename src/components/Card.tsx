import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Button from "./Button";
import { removeContact } from "./middleware/store";

const Card = ({ details }: any) => {
  const dispatch = useDispatch();

  return (
    <div className="lg:w-[300px] w-[250px] border border-grayLight p-5 rounded shadow-md">
      
      <img className="w-[200px]  pl-14 rounded-full " src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png" alt="" />

      <p className="text-base text-primary mt-[10px] font-medium">
        First Name: <span>{details.firstName}</span>
      </p>
      <p className="text-base text-primary font-medium">
        Last Name: <span>{details.lastName}</span>
      </p>
      <div className="flex items-center justify-between gap-5 mt-5">
        <Link to="/contacts/edit" state={details} className="w-full">
          <Button text="edit" variant="edit" />
        </Link>
        <Button
          onClick={() => {
            dispatch(removeContact(details?.id));
          }}
          text="delete"
          variant="delete"
        />
      </div>
    </div>
  );
};

export default Card;
