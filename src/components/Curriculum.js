import React from "react";
import {
  MdPerson,
  MdEmail,
  MdPhone,
  MdLanguage,
  MdKeyboardArrowRight,
} from "react-icons/md";

class Curriculum extends React.Component {
  render() {
    const info = this.props.generalInfo;
    const schools = this.props.schoolsInfo;
    const works = this.props.worksInfo;
    const skills = this.props.skillsInfo;

    const renderWorks = works.map((e) => {
      return (
        <div key={e.id}>
          <h4> Company name:{e.companyname} </h4>
          <h4> Position:{e.position} </h4>
          <h4>
            {" "}
            {e.startyear} - {e.endyear}{" "}
          </h4>
        </div>
      );
    });

    const renderSchools = schools.map((e) => {
      return (
        <div key={e.id}>
          <h4> School name:{e.schoolname} </h4>
          <h4> Degree:{e.degree} </h4>
          <h4>
            {" "}
            {e.startyear} - {e.endyear}{" "}
          </h4>
        </div>
      );
    });

    const renderSkills = skills.map((e) => {
      return (
        <div key={e.id}>
          <h4>
            <MdKeyboardArrowRight /> {e.text}{" "}
          </h4>
        </div>
      );
    });

    return (
      <div className="curriculum-g">
        <h3>
          {" "}
          <MdPerson /> Name: {info.name}{" "}
        </h3>
        <h3>
          {" "}
          <MdPhone /> Phone number: {info.phonenumber}{" "}
        </h3>
        <h3>
          {" "}
          <MdEmail /> Email: {info.email}{" "}
        </h3>
        <h3>
          {" "}
          <MdLanguage /> Website: {info.website}{" "}
        </h3>
        <div>{renderSchools}</div>
        <div>{renderWorks}</div>
        <div>{renderSkills} </div>
      </div>
    );
  }
}

export default Curriculum;
