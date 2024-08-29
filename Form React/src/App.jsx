import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./Form";
import Update from "./update";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/update" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
