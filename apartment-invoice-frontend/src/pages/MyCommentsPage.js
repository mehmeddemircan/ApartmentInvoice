import React from "react";
import MainLayout from "../layouts/MainLayout";
import CommentTabs from "../components/tabs/CommentTabs";

const MyCommentsPage = () => {
  return (
    <MainLayout>
      <CommentTabs />
    </MainLayout>
  );
};

export default MyCommentsPage;
