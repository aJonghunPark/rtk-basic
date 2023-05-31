import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Layout } from "./components/Layout";
import CounterPage from "./pages/CounterPage";
import LoginPage from "./pages/LoginPage";
import TaskPage from "./pages/TaskPage";
import UserPage from "./pages/UserPage";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route>
            <Route path="/" element={<LoginPage />} />
            <Route path="/couter" element={<CounterPage />} />
            <Route path="/tasks" element={<TaskPage />} />
            <Route path="/users" element={<UserPage />} />
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
