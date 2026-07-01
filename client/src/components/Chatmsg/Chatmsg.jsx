import "./Chatmsg.css";

import botImg from "../../assets/bot.png";
import userImg from "../../assets/user.png";

export default function ChatMessages({ messages }) {
  if (!messages || messages.length === 0) return null;

  return (
    <div className="chat-container">
      {messages.map((msg, index) => {
        const isUser = msg.role === "user";
        const isAI =
          msg.role === "ai" ||
          msg.role === "assistant" ||
          msg.role === "bot";

        return (
          <div
            key={index}
            className={`message ${isUser ? "user" : "ai"}`}
          >
            {isAI ? (
              <>
                <div className="avatar">
                  <img src={botImg} alt="Bot" />
                </div>

                <div className="bubble ai-bubble">
                  {msg.text}
                </div>
              </>
            ) : (
              <>
                <div className="bubble user-bubble">
                  {msg.text}
                </div>

                <div className="avatar">
                  <img src={userImg} alt="User" />
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}