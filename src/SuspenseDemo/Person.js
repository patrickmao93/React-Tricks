import React from "react";

const Person = props => {
  const { resource } = props;
  const person = resource.person.read();
  return <div>Person name: {person.name.first}</div>;
};

export default Person;
