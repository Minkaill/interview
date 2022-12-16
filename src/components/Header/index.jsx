import React from "react";

const Header = () => {
  return (
    <div
      className="w-full fixed top-0 bg-white"
      style={{ boxShadow: "rgb(0 0 0 / 10%) 0px 1px 2px" }}
    >
      <div className="h-20 items-center flex w-3/5 m-auto justify-between">
        <div className="flex w-[60%] items-center">
          <img src="../img/light-bulb.png" alt="" className="w-[8%] mr-2" />
          <p className="text-xl">
            Вопросы к <span className="text-orange-400">собеседованиям</span>
          </p>
        </div>

        <div>
          <p className="text-lg">Категория вопросов</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
