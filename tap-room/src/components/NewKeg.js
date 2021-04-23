import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
import { v4 } from "uuid";

function NewKeg(props) {
  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onSubmit({
      name: event.target.name.value,
      brand: event.target.brand.value,
      pricePerPint: event.target.pricePerPint.value,
      proof: event.target.proof.value,
      quantityLeft: 124,
      id: v4(),
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewKegFormSubmission}
        buttonText="Submit"
      />
    </React.Fragment>
  );
}

NewKeg.propTypes = {
  onSubmit: PropTypes.func,
};

export default NewKeg;