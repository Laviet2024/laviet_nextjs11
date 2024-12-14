import MarkdownComponent from "./MarkdownComponent";
import pageContent from "../site/home.yml";

export const AboutComponent = ({ isAboutOpen }) => {
  const { about, order_online_link } = pageContent;

  return (
    <div>
      {isAboutOpen !== undefined &&
        <div className={`w-full h-full lv-bg-black fixed left-0 top-0 z-[5] lg:w-1/2 transition-opacity duration-700 ease-in-out ${isAboutOpen ? 'opacity-100' : 'opacity-0'} pointer-events-none`}>
          <div className="flex items-center justify-center h-full">
            <div className="text-center child-p-mb10 max-w-[85%] lg:max-w-[70%]">
              <MarkdownComponent content={about}/>
              <MarkdownComponent content={order_online_link}/>
            </div>
          </div>
        </div>
      }
    </div>
  );
};
