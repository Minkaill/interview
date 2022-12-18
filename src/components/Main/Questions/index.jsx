import { useEffect, useState } from "react";
import { RxCaretSort } from "react-icons/rx";
import AOS from "aos";
import "aos/dist/aos.css";

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
    setOpenResponse(false);
  }, [selectCategory]);

  useEffect(() => {
    AOS.init();
  }, [selectCategory]);

  const handleOpenToResponse = () => {
    setOpenResponse(!openResponse);
  };

  return (
    <>
      <div data-aos="fade-up" className="leading-10 cursor-pointer flex w-full items-center">
        {selectCategory === category ? (
          <>
            <p
              onClick={() => handleOpenToResponse()}
              className="transition ease-in-out hover:text-amber-500"
            >
              {title}
            </p>
            <RxCaretSort
              style={{ fontSize: "17px", marginLeft: "5px" }}
              onClick={() => handleOpenToResponse()}
            />
          </>
        ) : (
          ""
        )}
      </div>

      {openResponse ? (
        <p className="text-sm rounded-md bg-slate-400 p-2">{response}</p>
      ) : (
        <></>
      )}
    </>
  );
};

export default Questions;
