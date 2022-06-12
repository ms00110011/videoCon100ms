import logo from "./logo.svg";
import "./App.css";
import { Home } from "./Components/Home";
import {
  useHMSActions,
  useHMSStore,
  selectIsConnectedToRoom,
} from "@100mslive/react-sdk";
import Room from "./Components/Room";


const endPoint = "https://rbclonebackend.herokuapp.com/searchcity/videojwt";

const getToken = async (user_id) => {
  const response = await fetch(`${endPoint}`, {
    method: "POST",
    body: JSON.stringify({
      user_id,
      role: "host", //host, teacher, guest, student
      type: "app",
      room_id: "62a5d0ba2630221c75a43cd1",
    }),
  }); 
  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhY2Nlc3Nfa2V5IjoiNjJhNWFjZmJiODczNzg3YWEyNzA5NTU2Iiwicm9vbV9pZCI6IjYyYTYxNTRhYjg3Mzc4N2FhMjcwOTk3ZiIsInVzZXJfaWQiOiJneGZsa2FteCIsInJvbGUiOiJuZXctcm9sZS00MzU0IiwianRpIjoiYjI0MGU2ZTgtMzZmYS00YTdhLTliM2QtNjM4NGIyNjUxNTM2IiwidHlwZSI6ImFwcCIsInZlcnNpb24iOjIsImV4cCI6MTY1NTEzODAwNX0.nyCFxfIHdPjiVlACDaAPs2tCP8SQ5R6gRLMbpHv6UDw" ;
  // const token = await response.json();

  return token;
};

const App = () => {
  const hmsActions = useHMSActions();
  const isConnected = useHMSStore(selectIsConnectedToRoom);

  const handleSubmit = async (username) => {
    const token = await getToken(username);
    hmsActions.join({ authToken: token, username });
  };

 return (
    <>{isConnected ? <Room /> : <Home handleSubmit={handleSubmit} />}</>
  );
};

export default App;
