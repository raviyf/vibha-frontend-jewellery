import Privacypolicy from "./Privacypolicy"
import { BrowserRouter, Route, Routes } from "react-router-dom"

export default function routee() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="PrivacyPolicy" element={<privacypolicy />} />
      </Routes>
    </BrowserRouter>
  )
}
