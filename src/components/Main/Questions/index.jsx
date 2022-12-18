import { useState } from "react";

const Questions = ({
  id,
  title,
  category,
  linkUrl,
  response,
  selectCategory,
}) => {
  const [openResponse, setOpenResponse] = useState(false);

  const handleOpenToResponse = () => {
    setOpenResponse(!openResponse);
  };

  return (
    <>
      <div className="leading-9 cursor-pointer flex w-full items-center">
        {selectCategory === category ? (
          <>
            <p>{title}</p>{" "}
            <img
              onClick={() => handleOpenToResponse()}
              src="../img/arrow.png"
              alt="arrow"
              className="w-[1.5%] h-3 ml-2 "
            />{" "}
          </>
        ) : (
          ""
        )}
      </div>

      {openResponse ? <p>{response}</p> : ""}
    </>
  );
};

export default Questions;
