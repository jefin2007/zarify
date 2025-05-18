body {
  background-color: #f5f5f5;
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.chat-container {
  background-color: white;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  max-width: 400px;
  width: 90%;
  text-align: center;
}

#chat-box {
  height: 200px;
  overflow-y: auto;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 10px;
  background-color: #fafafa;
}

input[type="text"] {
  width: 70%;
  padding: 10px;
  margin-right: 5px;
  border-radius: 10px;
  border: 1px solid #ccc;
}

button {
  padding: 10px 15px;
  border: none;
  background-color: #0077ff;
  color: white;
  border-radius: 10px;
  cursor: pointer;
}
