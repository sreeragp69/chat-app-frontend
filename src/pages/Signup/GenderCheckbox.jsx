import React from "react";

const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className="flex mt-2">
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected":""}`}>
          <span className="label-text">Male</span>
          <input
            checked={selectedGender === "male"}
            onChange={() => onCheckboxChange("male")}
            type="checkbox"
            className="checkbox border-gray-40 bg-transparent checked:bg-transparent"
          />
        </label>
      </div>

      <div className="form-control">
        <label className={`label gap-2 cursor-pointer ${selectedGender === "female" ? "selected":""}`}>
          <span className="label-text">Female</span>
          <input
            checked={selectedGender === "female"}
            onChange={() => onCheckboxChange("female")}
            type="checkbox"
            className="checkbox border-gray-400"
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
