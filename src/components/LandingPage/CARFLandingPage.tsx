import React from "react";
// import { SupportButton } from '@backstage/core-components';
import { CARFLandingPageCard } from "./CARFLandingPageCard";
import TollgateVector from "../../img/TollgateVector.png";
// import StatusVector from "../../img/StatusVector.png";
import ReportVector from "../../img/ReportVector.png";
import UserGuideVector from "../../img/UserGuideVector.png";
import StatusVector from "../../img/StatusVector.svg";
// import {
//   PageWithHeader
// } from '@backstage/core-components';

const cardsData = [
  {
    cardImageRoute: `${TollgateVector}`,
    backgroundColor: "#e3f1e9",
    cardText: "See the pre-requisites for each tollgate.",
    cardTitle: "Tollgate Pre-Requisites",
    cardLink: "#",
  },
  {
    cardImageRoute: `${StatusVector}`,
    backgroundColor: "#fff5e2",
    cardText:
      "Tollgate status for all applications in scope for architecture review.",
    cardTitle: "Tollgate Status",
    cardLink: "#",
  },
  {
    cardImageRoute: `${ReportVector}`,
    backgroundColor: "#dff0fc",
    cardText: "Sprints, Findings, Certified Architecture and other reports.",
    cardTitle: "Self Serve Reports",
    cardLink: "#",
  },
  {
    cardImageRoute: `${UserGuideVector}`,
    backgroundColor: "#f2e1f3",
    cardText: "Guidance on how to complete each tollgate pre-requisites.",
    cardTitle: "User Guide",
    cardLink: "#",
  },
];
export const CARFLandingPage = () => {
  return (
    // <PageWithHeader
    //   title={`CARF`}
    //   subtitle={"Cloud Architecture Review"}
    //   themeId="home"
    // >
    <div
      style={{
        width: "100%",
        padding: "0px",
        margin: 0,
        height: "310px",
        backgroundColor: "#0C2340",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          paddingRight: "25px",

          border: "1px solid lime",
        }}
      >
        <div style={{ backgroundColor: "#ffff", marginTop: "50px" }}>
          {/* <SupportButton /> */}
        </div>
      </div>
      <div
        style={{
          margin: "0px 0px 80px 186px",
          backgroundColor: "#0C2340",
          color: "#ffff",
          border: "1px solid red",
        }}
      >
        <h2 style={{ fontSize: "42px" }}>Architecture Review Framework</h2>

        <h4 style={{ width: "70%", fontSize: "34px" }}>
          Ensures that any solutions being delivered are well designed,
          architected, must be of high quality and meet all applicable Bank
          standards
        </h4>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          margin: "0px auto",
        }}
      >
        {/* {cardsData.map((cardData) => (
          <CARFLandingPageCard
            key={cardData.cardTitle}
            cardImageRoute={cardData.cardImageRoute}
            backgroundColor={cardData.backgroundColor}
            cardText={cardData.cardText}
            cardTitle={cardData.cardTitle}
          />
        ))} */}
        <CARFLandingPageCard
          cardImageRoute={TollgateVector}
          backgroundColor="#e3f1e9"
          key={1}
          cardText="See the pre-requisites for each tollgate."
          cardTitle="Tollgate Pre-Requisites"
        />
        <CARFLandingPageCard
          cardImageRoute={StatusVector}
          backgroundColor="#fff5e2"
          key={2}
          cardText="Tollgate status for all applications in scope for architecture review."
          cardTitle="Tollgate Status"
        />
        <CARFLandingPageCard
          cardImageRoute={`${ReportVector}`}
          backgroundColor="#dff0fc"
          cardText="Sprints, Findings, Certified Architecture and other reports."
          cardTitle="Self Serve Reports"
          key={3}
        />

        <CARFLandingPageCard
          cardImageRoute={UserGuideVector}
          backgroundColor="#f2e1f3"
          key={4}
          cardText="Guidance on how to complete each tollgate pre-requisites."
          cardTitle="User Guide"
        />
      </div>
    </div>
    // </PageWithHeader>
  );
};
