document.addEventListener("DOMContentLoaded", () => {
    const chatBody = document.querySelector(".chat-body");
    const inputField = document.querySelector(".chat-footer input");
    const sendButton = document.querySelector(".chat-footer button");
  
    sendButton.addEventListener("click", handleUserInput);
  
    inputField.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        handleUserInput();
      }
    });
  
    function handleUserInput() {
      const userInput = inputField.value.trim();
      if (!userInput) return;
  
      addMessage(userInput, "user");
      inputField.value = "";
  
      setTimeout(() => {
        const botResponse = generateBotResponse(userInput);
        addMessage(botResponse, "bot");
      }, 500);
    }
  
    function addMessage(text, sender) {
      const messageElement = document.createElement("div");
      messageElement.className = `message ${sender}`;
      const bubbleElement = document.createElement("div");
      bubbleElement.className = "bubble";
      bubbleElement.textContent = text;
      messageElement.appendChild(bubbleElement);
      chatBody.appendChild(messageElement);
  
      chatBody.scrollTop = chatBody.scrollHeight; // Scroll to the bottom
    }
  
    function generateBotResponse(input) {
      const responses = {
        hi: "Hello! How can I assist you today?",
        hello: "Hi there! 😊",
        bye: "Goodbye! Have a great day! 👋",
        help: "Sure, what do you need help with?",
      };
  
      const normalizedInput = input.toLowerCase();
      return responses[normalizedInput] || "I'm sorry, I didn't understand that. Can you rephrase?";
    }
  });
  
