import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../../features/categorySlice";

const Main = () => {
  const dispatch = useDispatch();

  const categorys = useSelector((state) => state.category.category);

  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

  console.log(categorys);
  return (
    <div className="bg-white w-full mt-36 rounded-xl px-10 py-5">
      <div className="flex justify-between items-center">
        {categorys.map((items, index) => {
          return (
            <h1 className="text-1xl cursor-pointer font-extrabold leading-snug" key={items._id}>{items.name}</h1>
          );
        })}
      </div>
      <div className="flex justify-between flex-wrap"></div>
    </div>
  );
};

export default Main;
