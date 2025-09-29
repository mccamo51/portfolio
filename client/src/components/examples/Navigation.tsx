import { useState } from "react";
import Navigation from '../Navigation';

export default function NavigationExample() {
  const [activeTab, setActiveTab] = useState("about");
  
  return <Navigation activeTab={activeTab} onTabChange={setActiveTab} />;
}