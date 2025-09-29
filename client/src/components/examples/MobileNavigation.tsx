import { useState } from "react";
import MobileNavigation from '../MobileNavigation';

export default function MobileNavigationExample() {
  const [activeTab, setActiveTab] = useState("resume");
  
  return <MobileNavigation activeTab={activeTab} onTabChange={setActiveTab} />;
}