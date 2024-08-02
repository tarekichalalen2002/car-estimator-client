import React, { Suspense, lazy, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { RingLoader } from "react-spinners";

const Home = lazy(() => import("./scenes/Home"));
const Result = lazy(() => import("./scenes/Result"));

function App() {
  return (
    <Router>
      <section className="relative p-0 m-0 ">
        <section className="pt-[5vh]">
          <Suspense
            fallback={
              <div className="h-[100vh] w-[100vw] flex items-center justify-center">
                <RingLoader color="#000" size={50} />
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/result" element={<Result />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Suspense>
        </section>
      </section>
    </Router>
  );
}

export default App;
