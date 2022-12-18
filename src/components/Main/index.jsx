import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../../features/categorySlice";
import { getQuestion } from "../../features/questionSlice";
import Questions from "./Questions";
import Skeleton from "./Skeleton";
import SkeletonCategory from "./SkeletonCategory";

const Main = () => {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questions.questions);
  const categorys = useSelector((state) => state.category.category);
  const loadingQuestion = useSelector(
    (state) => state.questions.loadingQuestion
  );
  console.log(loadingQuestion);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectCategory, setSelectCategory] = useState("React");

  useEffect(() => {
    dispatch(getQuestion());
    dispatch(getCategory());
  }, [dispatch]);

  const handleSelectCategory = (value) => {
    setSelectCategory(value);
  };
  console.log(selectCategory);

  return (
    <div className="bg-white w-full mt-36 rounded-xl px-10 py-5">
      <div className="flex justify-between items-center">
        {loadingQuestion
          ? [...new Array(7)].map((_, i) => <SkeletonCategory key={i} />)
          : categorys.map((items, i) => {
              return (
                <h1
                  key={i}
                  onClick={() => {
                    handleSelectCategory(items.name);
                    setActiveIndex(i);
                  }}
                  className={
                    activeIndex === i
                      ? "text-amber-500 cursor-pointer rounded-3xl"
                      : "cursor-pointer"
                  }
                >
                  {items.name}
                </h1>
              );
            })}
      </div>

      <div className="content mt-6">
        {loadingQuestion
          ? [...new Array(15)].map((_, i) => (
              <span className="">
                <Skeleton />
              </span>
            ))
          : questions.map((item) => (
              <Questions
                {...item}
                key={item.id}
                selectCategory={selectCategory}
              />
            ))}
      </div>
    </div>
  );
};

export default Main;
