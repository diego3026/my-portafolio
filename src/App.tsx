import { BrowserRouter } from "react-router-dom";
import RouterProvider from "./routes/routes";

function App() {
  return (
    <>
        <BrowserRouter>
          <RouterProvider />
        </BrowserRouter>
    </>
  )
}

export default App