import MarkdownComponent from "./MarkdownComponent";
import pageContent from "../site/home.yml";

export const MenuComponent = ({ isMenuOpen }) => {
  const { menu_philosophy, menu } = pageContent;

  return (
    <div>
      {isMenuOpen !== undefined &&
        <div className={`w-full h-full lv-bg-black fixed left-0 top-0 z-[5] lg:w-1/2 transition-opacity duration-700 ease-in-out ${isMenuOpen ? 'opacity-100' : 'opacity-0'} pointer-events-none`}>
          <div className="flex items-center justify-center h-full">
            <div className="text-center child-p-mb10 max-w-[85%] lg:max-w-[70%]">
              <MarkdownComponent content={menu_philosophy}/>
              <a href={menu} className="text-lg text-blue-500 underline">View Menu</a>
            </div>
          </div>
        </div>
      }
    </div>
  );
};
