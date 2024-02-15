import MarkdownComponent from "./MarkdownComponent";
import pageContent from "../site/home.yml";



export const AboutComponent = ({ isAboutOpen }) => {
  const {about } = pageContent;

  return (
    <div>
      {isAboutOpen ?
        <div className="w-full h-full bg-gray-500 fixed left-0 top-0 z-[3] lg:w-1/2">
          <div>
          <MarkdownComponent content={about}/>
          </div>
        </div>
      :
        ''
      }
    </div>
  );
};
