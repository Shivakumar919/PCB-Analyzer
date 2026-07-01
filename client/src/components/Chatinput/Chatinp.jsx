import { useState } from "react";
import "./Chatinp.css";

export default function ChatInput({ onSend }) {
  const [question, setQuestion] = useState("");

  function sendMessage() {
    if (!question.trim()) return;

    onSend(question);

    setQuestion("");
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <div className="chat-input-container">

      <div className="chat-input">

        <input
          type="text"
          placeholder="Ask anything about this PCB..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <button onClick={sendMessage}>
          ➤
        </button>

      </div>

    </div>
  );
}