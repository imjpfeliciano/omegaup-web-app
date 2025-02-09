"use client";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import BadgesTab from "./BadgesTab";
import SolvedProblemsTab from "./SolvedProblemsTab";
import UnsolvedProblemsTab from "./UnsolvedProblemsTab";
// import "./ProfileContent.css";

const ProfileContent: React.FC = () => (
  <Tabs
    selectedTabClassName="bg-slate-200 rounded focus:outline-none"
    className="flex flex-col"
    selectedTabPanelClassName="overflow-scroll max-h-[600px]"
  >
    <TabList className="flex flex-row gap-4 items-center mb-4">
      <Tab className="p-2">✅ Solved problems</Tab>
      <Tab className="p-2">⛔️ Attempted but not solved</Tab>
      <Tab className="p-2">🥇 Badges</Tab>
      <Tab className="p-2">📊 Stats</Tab>
    </TabList>
    <TabPanel>
      <SolvedProblemsTab username="imjpfeliciano" />
    </TabPanel>
    <TabPanel>
      <UnsolvedProblemsTab username="imjpfeliciano" />
    </TabPanel>
    <TabPanel>
      <BadgesTab username="imjpfeliciano" />
    </TabPanel>
    <TabPanel>
      <h2>Stats content</h2>
    </TabPanel>
  </Tabs>
);

export default ProfileContent;
