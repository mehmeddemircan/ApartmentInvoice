import React from "react";
import { Tabs } from "antd";
import ActivityCommentTabSegment from "./tabSegment/ActivityCommentTabSegment";

const { TabPane } = Tabs;
const CommentTabs = () => {
  return (
    <Tabs defaultActiveKey="1" centered>
      <TabPane key="1" tab="Aktivite Yorumlarım">
       <ActivityCommentTabSegment />
      </TabPane>
    </Tabs>
  );
};

export default CommentTabs;
