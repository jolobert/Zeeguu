import React, { useState, Fragment, useEffect } from "react";
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css"; //TODO move to an sc.js...
//import strings from "../i18n/definitions";
import CohortForm from "./CohortForm";
import { CohortItemCard } from "./CohortItemCard";
import LoadingAnimation from "../components/LoadingAnimation";
import { StyledButton, TopButton } from "./TeacherButtons.sc";

export default function CohortList({ api, cohorts, setForceUpdate }) {
  const [isOpen, setIsOpen] = useState(false);
  const [reversedList, setReversedList] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  //Making sure the latest added class is always on top of the list
  const getReversedList = () => {
    return cohorts.map((cohort) => cohort).reverse();
  };

  useEffect(() => {
    setReversedList(getReversedList());
    setIsLoading(false);
    // eslint-disable-next-line
  }, [cohorts]);

  return (
    <Fragment>
      <TopButton>
        <StyledButton primary onClick={() => setIsOpen(true)}>
          Add class (STRINGS)
        </StyledButton>
      </TopButton>
      {!isLoading ? (
        reversedList.map((cohort) => (
          <CohortItemCard
            api={api}
            key={cohort.id}
            cohort={cohort}
            setForceUpdate={setForceUpdate}
          />
        ))
      ) : (
        <LoadingAnimation />
      )}
      {isOpen && (
        <Dialog onDismiss={() => setIsOpen(false)} aria-label="Create class">
          <CohortForm
            api={api}
            setIsOpen={setIsOpen}
            setForceUpdate={setForceUpdate}
          />
        </Dialog>
      )}
    </Fragment>
  );
}
