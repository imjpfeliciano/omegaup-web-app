"use client";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "./ProfileContent.css";

const ProfileContent: React.FC = () => (
  <Tabs>
    <TabList>
      <Tab>📄 Problems</Tab>
      <Tab>🥇 Badges</Tab>
      <Tab>📊 Stats</Tab>
    </TabList>
    <TabPanel>
      <h2>Problems content</h2>
    </TabPanel>
    <TabPanel>badges content</TabPanel>
    <TabPanel>
      <h2>Stats content</h2>
    </TabPanel>
  </Tabs>
);

export default ProfileContent;
