import MarkdownComponent from "./MarkdownComponent";
import pageContent from "../site/home.yml";

export const ContactComponent = ({ isContactOpen }) => {
  const { address, hours, contact } = pageContent;

  return (
    <div>
      {isContactOpen !== undefined &&
        <div className={`w-full h-full lv-bg-black fixed right-0 top-0 z-[5] lg:w-1/2 transition-opacity duration-700 ease-in-out ${isContactOpen ? 'opacity-100' : 'opacity-0'} pointer-events-none`}>
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <div className="mb-10">
                <MarkdownComponent content={address}/>
              </div>
              <div className="mb-10">
                <MarkdownComponent content={hours}/>
              </div>
              <div className="mb-10">
                <MarkdownComponent content={contact}/>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
};
