import React from "react";

class Position extends React.Component {
  render() {
    const {start, end, position, company, companyUrl, description, location} = this.props.experience;
    const isCurrent = !end;
    const startDate = isCurrent ? `${start.month} ${start.year}`
      : start.year;
    let descriptionHtml = '';
    if (this.props.experience.description) {
      const listItems = description.map((descriptionItem, index) =>
        <li key={index}>{descriptionItem}</li>);
      descriptionHtml = <ul>{listItems}</ul>;
    }
    const positionHtml = isCurrent ?
      <b>{position}</b> : position;

    const positionTitle =
      <div>
        {positionHtml}
        <br/>
        @ <a href={companyUrl} target="_blank">
        {company}</a>{location ? (<span>, {location}</span>) : null}
      </div>;

    return (
      <li className={`position-container ${isCurrent ? 'current' : ''}`} data-date={startDate}>
        {positionTitle}
        {descriptionHtml}
      </li>

    );
  }
}

export default Position;
