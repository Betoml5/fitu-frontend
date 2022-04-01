import React from "react";
import { useForm } from "react-hook-form";

const MeetingForm = ({ id }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  return (
    <div>
      <div>
        <form>
          <label htmlFor=""></label>
        </form>
      </div>
    </div>
  );
};

export default MeetingForm;
