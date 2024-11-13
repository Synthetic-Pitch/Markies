/* eslint-disable react/prop-types */
import { useContext, useEffect, useRef, useState } from "react"
import { MyContext } from "../../../Context/GlobalContext"
import "./Message.css"
import sendIcon from '../../../assets/web-icon/send-button.png'

const MessageModal = () => {
  const { UserInfo, servicesBtn, setServicesBtn, chatBox, setChatBox } = useContext(MyContext);

  const ModalRef = useRef(null);

  useEffect(() => {
    if (servicesBtn.messagesBtn) {
      ModalRef.current.showModal();
    } else {
      ModalRef.current.close();
    }
  }, [servicesBtn.messagesBtn])
  
  return (
    <dialog className="message-modal" ref={ModalRef}>
      <div className="message-modal-container">
        <Header setServicesBtn={setServicesBtn} />
        <Main chatBox={chatBox} />
        <Footer UserInfo={UserInfo} chatBox={chatBox} setChatBox={setChatBox} />
      </div>
    </dialog>
  )
}

const Header = ({ setServicesBtn }) => {

  const handleClick = () => {
    setServicesBtn(prev => ({ ...prev, messagesBtn: false }));
  };
  
  return (
    <header>
      
      <div className="h-[40px] w-[4rem] ml-5 flex justify-between">
        <span className="h-4 w-4 bg-green-600 rounded-full"></span>
        <span className="h-4 w-4 bg-teal-300 rounded-full"></span>
        <span className="h-4 w-4 bg-gray-600 rounded-full"></span>
      </div>

      <div className="bg-gray-200 min-h-[20px] w-[30px] flex justify-center items-center rounded-full mr-[10px]">
        <button onClick={handleClick}>X
        </button>
      </div>

    </header>
  );
};

const Main = ({ chatBox }) => {
  const [clickedIndex, setClickedIndex] = useState(null); // Track the index of the clicked item

  const handleTimeDisplay = (index) => {
    setClickedIndex(clickedIndex === index ? null : index); // Toggle display for clicked index
  };

  return (
    <main>
      <div className="">
        <div className="p-[10px] rounded-[20px] max-w-[70%] bg-gray-400 inline-block ml-[5px] mb-[10px]">Good day! This is Marked please clarify your order so we can set it up everything.</div>
      </div>
      { 
        chatBox
          .filter((item) => item.text.trim() !== '')
          .map((item, index) => (
            <div key={index} className="w-[100%] flex flex-col items-end">
              <div
                onClick={() => handleTimeDisplay(index)} // Pass the index of the clicked item
                className="max-w-[80%] p-[10px] bg-gray-300 rounded-[20px] mb-[5px] mr-[10px]"
              >
                <p>
                  {item.text}
                </p>
              </div>
              {clickedIndex === index && <div className="h-[18px] flex items-center"><span className="text-[12px] mr-[15px]">{item.time}</span></div>} {/* Show time only if index matches */}
            </div>
          ))
      }
    </main>
  );
};


const Footer = ({ chatBox, setChatBox, UserInfo }) => {
  const [content, setContent] = useState("");
  const EditableRef = useRef(null);


  useEffect(() => {
    console.log(chatBox)
  }, [chatBox])

  const handleTrimInput = () => {  // This makes content trim
    const text = EditableRef.current.textContent.trim();
    setContent(text)
  };

  const handleSend = () => {
    let Chat = {
      text: content,
      sender: UserInfo.name,
      id: chatBox.length + 1,
      time: new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })
    }

    setChatBox(prev => [...prev, Chat])
    EditableRef.current.textContent = '';
    setContent("")
  }
  
  return (
    
    <footer>
      <div className="message-modal-footer-container flex items-center">
        <div className="w-[80%] h-[90%] flex items-center">
          <div className="message-modal-footer-input"
            contentEditable="true"
            suppressContentEditableWarning
            data-placeholder={content.length === 0}
            onInput={handleTrimInput}
            ref={EditableRef}
          >
            
          </div>
        </div>

        <div className="w-[20%] h-[100%] flex items-center justify-center ">
          <button onClick={handleSend} className="h-[40px] w-[40px]">
            <img src={sendIcon} alt="png" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default MessageModal
