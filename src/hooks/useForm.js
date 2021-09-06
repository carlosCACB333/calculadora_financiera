import { useState } from "react";

const useForm = (initial = {}) => {
  const [formValues, setFormValues] = useState(initial);

  const HandleChange = (e) => {
    // console.log(e.target);
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleChecked = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.checked,
    });
  };

  const formReset = (newValues = initial) => {
    setFormValues(newValues);
  };

  return [formValues, HandleChange, setFormValues, handleChecked, formReset];
};

export default useForm;
