/*
 !  api = trpc 
*/
import { useState } from "react"
import { api } from "../utils/api"

type TMessage = {
  message: string;
  id: string;
  sender: string;
};
export const HelpWidget = () => {
  const createHelpRequestMutation =
    api.helpRequest.createHelpRequest.useMutation();


  const [isChatPanelDisplayed, setIsChatPanelDisplayed] = useState(false);
  const [senderID, setSenderID] = useState('0');
  const [messages, setMessage] = useState<TMessage[]>([

    {
      message: "Hello, how can we help you today?",
      id: "24rewftwg",
      sender: "1",
    },

    {
      message: "I need help fixing my computer",
      id: "kjsdfhkdh48",
      sender: "0",
    },


    {
      message: "Hello, how can we helo you today?",
      id: "24rewfwtg",
      sender: "1",
    },

  ]);
  const handleOpenSupportWidget = () => {
    setIsChatPanelDisplayed(true);
    createHelpRequestMutation.mutate();

  }


  return isChatPanelDisplayed ? (
    // adding classnames to buttons "absolute .." enables easy placement of x "close button in top right corner"
    //
    <div className=
      "flex flex-col fixed bottom-10 justify-between right-10 h-96 w-76 bg-purple-200 p-9">

      <button className="absolute top-2 right-3 hover:text-purple-900" onClick={() => setIsChatPanelDisplayed(false)}>
        X
      </button>
      <ul>
        {messages.map(({ message, id, sender }) => (
          <li
            className={`mb-2 rounded p-1 ${sender === senderID ? 'bg-gray-150' : 'bg-blue-200'
              }`}

            key={id}>{message}</li>
        ))}
      </ul>
      <form className="flex">
        <input className="rounded-md relative bottom w-full border border-black p-1 px-2"></input>

        <button className="rounded-md bottom-40 right-12 cursor-pointer bg-blue-400 p-1 px-3 text-white hover:bg-blue-500">
          Send
        </button>

      </form>
    </div>
  ) : (
    <button
      onClick={handleOpenSupportWidget}
      className="rounded fixed bottom-12 right-10 cursor-pointer bg-blue-400 p-2 px-4 text-white hover:bg-blue-500">

      Chat with Chat Ninja
    </button>
  )
}
console.log("Are we there yet ?")
