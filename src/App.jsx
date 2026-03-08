import { useState } from "react";
import { AppHeader } from "./components/blocks/AppHeader";
import { AppPages } from "./assets/definitions/constants";
import { HomePage } from "./components/pages/HomePage";

function App() {
  const [page, setPage] = useState(AppPages.Home);

  return (
    <>
      <AppHeader currentPage={page} setPage={setPage} />
      <main>
        <h2>~ Under Construction ~</h2>
        {page === AppPages.Home ? (
          <HomePage />
        ) : page === AppPages.Missing ? (
          <div>missing</div>
        ) : page === AppPages.ContactUs ? (
          <div>contact us</div>
        ) : page === AppPages.AboutUs ? (
          <div>about us</div>
        ) : (
          <div>Don't know what page this is</div>
        )}
      </main>
    </>
  );
}

export default App;
