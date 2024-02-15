import MarkdownComponent from "./MarkdownComponent";
import pageContent from "../site/home.yml";


export const ContactComponent = ({ isContactOpen }) => {

  const {address, hours, contact } = pageContent;

  return (
    <div>
      {isContactOpen ?
        <div className="w-full h-full bg-gray-500 fixed right-0 top-0 z-[3] lg:w-1/2">
          <div>
            <MarkdownComponent content={address}/>
          </div>
          <div>
            <MarkdownComponent content={hours}/>
          </div>
          <div>
            <MarkdownComponent content={contact}/>
          </div>
        </div>
        :
        ''
      }
    </div>
  );
};
