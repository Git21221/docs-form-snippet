import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./Routes/HomePage";
import Documentation from "./Routes/Documentation";
import ContentAreaPage from "./Components/ContentAreaPage";
import { useEffect } from "react";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return(
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='/docs' element={<Documentation />}>
          <Route path='/docs/:docTopic' element={<ContentAreaPage/>} />
        </Route>
      </Routes>
  );
}

export default App
