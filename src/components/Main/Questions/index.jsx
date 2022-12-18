import { useEffect, useState } from "react";

const Questions = ({
  id,
  title,
  category,
  linkUrl,
  response,
  selectCategory,
}) => {
  const [openResponse, setOpenResponse] = useState(false);

  useEffect(() => {
      setOpenResponse(false)
  }, [selectCategory])

  const handleOpenToResponse = () => {
    setOpenResponse(!openResponse);
  };

  return (
    <>
      <div className="leading-10 cursor-pointer flex w-full items-center">
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

      {openResponse ? <p className="text-sm rounded-md bg-slate-400 p-2">{response}</p> : ""}
    </>
  );
};

export default Questions;
