import { useState } from "react";

const Industries = () => {
  const industryTypes: string[] = [
    "Aerospace",
    "Automotive",
    "Medical Devices",
    "Consumer Products",
  ];

  const [selectedIndustry, setSelectedIndustry] = useState<string>(
    industryTypes[0]
  );

  const selectIndustry = (type: string) => {
    setSelectedIndustry(type);
  };

  return (
    <div className="industry_section">
      <h1 style={{ color: "white", marginBottom: "40px" }}>Industries</h1>

      <div style={{ display: "flex" }}>
        {industryTypes.map((type) => (
          <div
            className={
              selectedIndustry === type
                ? "industry_button_selected"
                : "industry_button"
            }
            onClick={() => selectIndustry(type)}
          >
            <span className={"industry_button_text"}>{type}</span>
          </div>
        ))}
      </div>

      <div style={{ width: "70%", textAlign: 'center' }}>
        <img src="./industry-car.svg" alt="" className="industry_image" />

        <p className="industry_sub_text">
          {selectedIndustry} - Build high-performing, smaller battery cooling
          systems for electric vehicles. Generate gyroid TPMS cores that
          increase thermal efficiency and minimize hot spots. Improve structural
          performance and further protect the battery cooling sleeve.
        </p>
      </div>
    </div>
  );
};

export { Industries };
