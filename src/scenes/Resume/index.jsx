import React from "react";
import TimelineItem from "../../components/TimelineItem";
import SkillItem from "../../components/SkillItem";
import SectionTitle from "../../components/SectionTitle";
import logo from "../../assets/images/client-logo.png";
import PageTittle from "../../components/PageTittle";
const Resume = () => {
  return (
    <div>
      <PageTittle title="Resume" subtitle="8 Years Experience"></PageTittle>
      <div className="row">
        <div className="col-xs-12 col-sm-6 mb-lg-0 mb-4">
          <SectionTitle>Educations</SectionTitle>
          <div>
            <TimelineItem></TimelineItem>
            <TimelineItem className="clearfix"></TimelineItem>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6">
          <SectionTitle>Experiences</SectionTitle>
          <div>
            <TimelineItem></TimelineItem>
            <TimelineItem className="clearfix"></TimelineItem>
          </div>
        </div>
      </div>
      <div className=" my-4">
        <div>
          <SectionTitle>Certificates</SectionTitle>
          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <div
                style={{
                  position: "relative",
                  display: "table",
                  tableLayout: "fixed",
                  width: "100%",
                  border: "2px solid #e5e5e5",
                  borderRadius: "8px",
                }}
              >
                <div
                  className="certi-logo"
                  style={{
                    display: "table-cell",
                    width: "120px",
                    height: "100%",
                    backgroundColor: "#f5f5f5",
                    padding: "25px",
                    verticalAlign: "middle",
                    borderTopLeftRadius: "8px",
                    borderBottomLeftRadius: "8px",
                  }}
                >
                  <img src={logo} className="d-block w-100" alt="" />
                </div>
                <div
                  className="certi-content"
                  style={{
                    width: "100%",
                    display: "table-cell",
                    padding: "20px 25px",
                    verticalAlign: "middle",
                  }}
                >
                  <h4 className="fs-6 mb-1">Programming Hero</h4>
                  <p className="mb-0">Membership ID: XXXX</p>
                  <h5 className="fs-6 mb-0">19 April 2022</h5>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6">
              <div
                style={{
                  position: "relative",
                  display: "table",
                  tableLayout: "fixed",
                  width: "100%",
                  border: "2px solid #e5e5e5",
                  borderRadius: "8px",
                }}
              >
                <div
                  className="certi-logo"
                  style={{
                    display: "table-cell",
                    width: "120px",
                    height: "100%",
                    backgroundColor: "#f5f5f5",
                    padding: "25px",
                    verticalAlign: "middle",
                    borderTopLeftRadius: "8px",
                    borderBottomLeftRadius: "8px",
                  }}
                >
                  <img src={logo} className="d-block w-100" alt="" />
                </div>
                <div
                  className="certi-content"
                  style={{
                    width: "100%",
                    display: "table-cell",
                    padding: "20px 25px",
                    verticalAlign: "middle",
                  }}
                >
                  <h4 className="fs-6 mb-1">Programming Hero</h4>
                  <p className="mb-0">Membership ID: XXXX</p>
                  <h5 className="fs-6 mb-0">19 April 2022</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* skills  */}
      <div className="mt-5 row">
        <div className="col-xs12 col-sm-6">
          <div className="mb-4">
            <h4 className="position-relative d-inline-block pb-2 block-title">
              Design Skills
            </h4>
          </div>
          <SkillItem name="UX/UI Design" value="70"></SkillItem>
          <SkillItem name="Graphic Design" value="75"></SkillItem>
        </div>
        <div className="col-xs12 col-sm-6 px-4">
          <div className="mb-4">
            <h4 className="position-relative d-inline-block pb-2 block-title">
              Coding Skills
            </h4>
          </div>
          <SkillItem name="HTML / CSS" value="90"></SkillItem>
          <SkillItem name="JavaScript" value="80"></SkillItem>
        </div>
      </div>
    </div>
  );
};

export default Resume;
