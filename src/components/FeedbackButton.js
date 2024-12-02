import { useState } from "react";
import FeedbackModal from "./FeedbackModal";
import { FEEDBACK_OPTIONS } from "./FeedbackConstants";
import NavOption from "./sidebar/MainNav/NavOption";
import FeedbackRoundedIcon from "@mui/icons-material/FeedbackRounded";

export default function FeedbackButton({ isCollapsed, isOnStudentSide }) {
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  return (
    <>
      <FeedbackModal
        prefixMsg={"Sidebar"}
        open={showFeedbackModal}
        setOpen={() => {
          setShowFeedbackModal(!showFeedbackModal);
        }}
        feedbackOptions={FEEDBACK_OPTIONS.ALL}
      ></FeedbackModal>
      <NavOption
        icon={<FeedbackRoundedIcon />}
        isCollapsed={isCollapsed}
        isOnStudentSide={isOnStudentSide}
        text={"Give Feedback"}
        isButton={true}
        onClick={(e) => {
          e.stopPropagation();
          setShowFeedbackModal(!showFeedbackModal);
        }}
      />
    </>
  );
}
