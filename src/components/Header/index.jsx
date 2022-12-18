import { useDarkMode } from '../../hooks/useDarkMode';

const Header = () => {
  const {theme, toggleTheme} = useDarkMode()
  const body = document.getElementById("bodyRoot")
  body.style.background = theme === "dark" ? "#1e293b" : "#f5f5f5"

  return (
    <div
      className={
        theme === "dark"
          ? "w-full fixed top-0 transition ease-in-out bg-slate-800"
          : "w-full fixed top-0 transition ease-in-out bg-white"
      }
      style={{ boxShadow: "rgb(0 0 0 / 10%) 0px 1px 2px" }}
    >
      <div className="h-20 items-center flex w-3/5 m-auto justify-between">
        <div className="flex w-[60%] items-center">
          <img src="../img/light-bulb.png" alt="" className="w-[8%] mr-2" />
          <p
            className={
              theme === "dark"
                ? "text-xl text-white"
                : "transition ease-in-out text-xl text-black"
            }
          >
            Вопросы к <span className="text-orange-400">собеседованиям</span>
          </p>
        </div>

        <div className="flex items-center">
          <img
            onClick={toggleTheme}
            className={theme === "dark" ? "cursor-pointer transition ease-in-out rotate-180" : "transition ease-in-out rotate-0 cursor-pointer"}
            src="../img/nightmode.png"
            width={60}
            height={60}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
