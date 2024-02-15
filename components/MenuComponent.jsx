import MarkdownComponent from "./MarkdownComponent";
import pageContent from "../site/home.yml";

export const MenuComponent = ({ isMenuOpen }) => {
  const { menu_philosophy } = pageContent;

  return (
    <div>
      {isMenuOpen ?
        <div className="w-full h-full bg-gray-500 fixed left-0 top-0 z-[3] lg:w-1/2">
          <div>
            <MarkdownComponent content={menu_philosophy}/>
          </div>
        </div>
        :
        ''
      }
    </div>
  );
};
