import React, { useState } from "react";
import TimelineItem from "../../components/TimelineItem";
import SkillItem from "../../components/SkillItem";
import SectionTitle from "../../components/SectionTitle";
import logo from "../../assets/images/client-logo.png";
import PageTittle from "../../components/PageTittle";
import Certificate from "../../components/Certificate";
import Modal from "../../components/Modal";
const Resume = () => {
  const [certificates, setCertificates] = useState([
    {
      title: "Completion Of Web Development Course",
      date: "August 12, 2022",
      stId: "WEB5-1698",
      logo: logo,
      img: "https://i.ibb.co/x5MP7Vw/p-Hero-certificate.png",
    },
    {
      title: "Black Belt Of Web Development Course",
      date: "August 8, 2022",
      stId: "WEB5-1698",
      logo: logo,
      img: "https://i.ibb.co/dJt8gJS/certificate-black.png",
    },
  ]);
  const [modalItem, setModalItem] = useState({});
  const diplomaDegree = {
    yearStart: 2018,
    yearEnd: 2022,
    institute: "Cumilla Polytechnic Institute",
    major: "Computer Science & Technology",
    description:
      "I completed 4 years Diploma Engineering Degree in Computer Science & Technology.",
  };
  const industrialAttach = {
    yearStart: 2022,
    yearEnd: "2023",
    institute: "Artificial Intelligence & Technology Institute",
    major: "Web Development",
    description:
      "Here's I completed 4 month Industrial Attachment for Industry Level Experience and which was a part of 8th semester of my CSE Degree.",
  };
  const date = new Date();
  const experience = date.getFullYear() - 2021;
  return (
    <div>
      <PageTittle title="Resume" subtitle={`${experience} Years Experience`}></PageTittle>
      {/* education and experiences  */}
      <div className="row">
        <div className="col-xs-12 col-sm-6 mb-lg-0 mb-4">
          <SectionTitle>Educations</SectionTitle>
          <div>
            <TimelineItem
              data={diplomaDegree}
              className="clearfix"
            ></TimelineItem>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6">
          <SectionTitle>Experiences</SectionTitle>
          <div>
            <TimelineItem
              data={industrialAttach}
              className="clearfix"
            ></TimelineItem>
          </div>
        </div>
      </div>
      {/* certification  */}
      <div className=" my-4">
        <div>
          <SectionTitle>Certificates</SectionTitle>
          <div className="row g-4">
            {certificates?.map((certificate, idx) => (
              <Certificate
                setModalItem={setModalItem}
                key={idx}
                data={certificate}
              ></Certificate>
            ))}
          </div>
        </div>
      </div>
      {/* skills  */}
      <div className="mt-5 row g-4">
        <div className="col-xs12 col-sm-6">
          <div className="mb-4">
            <h4 className="position-relative d-inline-block pb-2 block-title">
              Design Skills
            </h4>
          </div>
          <SkillItem name="UX/UI Design" value="70"></SkillItem>
          <SkillItem name="Graphic Design" value="60"></SkillItem>
          <SkillItem name="Responsive Web Design" value="85"></SkillItem>
        </div>
        <div className="col-xs12 col-sm-6">
          <div className="mb-4">
            <h4 className="position-relative d-inline-block pb-2 block-title">
              Coding Skills
            </h4>
          </div>
          <SkillItem name="HTML / CSS" value="90"></SkillItem>
          <SkillItem name="JavaScript" value="80"></SkillItem>
          <SkillItem name="Python" value="60"></SkillItem>
        </div>
      </div>
      {/* <!-- Modal --> */}
      <Modal img={modalItem?.img}></Modal>
    </div>
  );
};

export default Resume;
