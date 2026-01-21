import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ButtonPage from "./pages/ButtonPage";
import AccordionPage from "./pages/AccordionPage";
import AlertPage from "./pages/AlertPage";
import CheckboxPage from "./pages/CheckboxPage";
import ChipPage from "./pages/ChipPage";
import DatePickerPage from "./pages/DatePickerPage";
import DropdownPage from "./pages/DropdownPage";
import ImagePage from "./pages/ImagePage";
import LinkPage from "./pages/LinkPage";
import ListPage from "./pages/ListPage";
import RadioButtonPage from "./pages/RadioButtonsPage";
import SliderPage from "./pages/SliderPage";
import SpanPage from "./pages/SpanPage";
import SpinnerPage from "./pages/SpinnerPage";
import TabPage from "./pages/TabPage";
import TablePage from "./pages/TablePage";
import TextboxPage from "./pages/TextboxPage";



function App() {

  return (
      <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ButtonPage" element={<ButtonPage />} />
        <Route path="/AccordionPage" element={<AccordionPage />} />
        <Route path="/AlertPage" element={<AlertPage />} />
        <Route path="/CheckboxPage" element={<CheckboxPage />} />
        <Route path="/ChipPage" element={<ChipPage />} />
        <Route path="/DatePickerPage" element={<DatePickerPage />} />
        <Route path="/DropdownPage" element={<DropdownPage />} />
        <Route path="/ImagePage" element={<ImagePage />} />
        <Route path="/LinkPage" element={<LinkPage />} />
        <Route path="/ListPage" element={<ListPage />} />
        <Route path="/RadioButtonPage" element={<RadioButtonPage />} />
        <Route path="/SliderPage" element={<SliderPage />} />
        <Route path="/SpanPage" element={<SpanPage />} />
        <Route path="/SpinnerPage" element={<SpinnerPage />} />
        <Route path="/TabPage" element={<TabPage />} />
        <Route path="/TablePage" element={<TablePage />} />
        <Route path="/TextboxPage" element={<TextboxPage />} />


      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
