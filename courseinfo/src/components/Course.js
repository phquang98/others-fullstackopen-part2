import React, { Fragment } from "react";

const Header = ({ course }) => {
  return (
    <Fragment>
      <h2>{course}</h2>
    </Fragment>
  );
};

const Part = ({ part, exercise }) => {
  return (
    <Fragment>
      <p>
        {part} {exercise}
      </p>
    </Fragment>
  );
};

const Content = ({ data }) => {
  return (
    <Fragment>
      {data.map((dataUnit) => (
        <Part key={dataUnit.id} part={dataUnit.name} exercise={dataUnit.exercises}></Part>
      ))}
    </Fragment>
  );
};

const Total = ({ courseParts }) => {
  // Dont wanna reduce on arr of objs, check here
  // https://stackoverflow.com/questions/5732043/javascript-reduce-on-array-of-objects

  const exClt = courseParts.map((part) => part.exercises);
  const totalExes = exClt.reduce((firstExEle, curExEle) => firstExEle + curExEle);

  return (
    <Fragment>
      <b>Total of {totalExes} exercises</b>
    </Fragment>
  );
};

const Course = ({ courseData }) => {
  return (
    <Fragment>
      <Header course={courseData.name} />
      <Content data={courseData.parts} />
      <Total courseParts={courseData.parts} />
    </Fragment>
  );
};

export default Course;
