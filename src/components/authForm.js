import Input from "./input";

import { useState } from "react";

import ReactFlagsSelect from "react-flags-select";

const AutForm = ({ language, title, buttonText }) => {
  const [formData, setFormData] = useState({ phone: "" });
  const [isPhoneFocus, setIsPhoneFocus] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("TR");
  const [titleByLanguage, setTitleByLanguage] = useState(title);
  const [buttonByLanguage, setButtonByLanguage] = useState(buttonText);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="section">
      <div className="auth-form">
        <h5 className="auth-form__h5">{titleByLanguage}</h5>
        <form className="auth-form__form">
          <div className="input-area">
            <div className="phone-country">
              <ReactFlagsSelect
                selected={selectedCountry}
                onSelect={(code) => setSelectedCountry(code)}
                showSelectedLabel={true}
                countries={["TR", "EN", "US", "FR", "DE"]}
                customLabels={{
                  TR: { primary: "+90" },
                  EN: { primary: "+44" },
                  US: { primary: "+1" },
                  FR: { primary: "+33" },
                  DE: { primary: "+49" },
                }}
                selectedSize={14}
                optionsSize={14}
                className="country__select"
              />
            </div>
            <div className="phone-input">
              <Input
                name={"Phone"}
                placeHolder={
                  language === "tr-TR" ? "Telefon Numarası" : "Mobile Phone"
                }
                type={"text"}
                focus={isPhoneFocus}
                handle={handleChange}
                setFocus={setIsPhoneFocus}
                data={formData?.phone}
              />
            </div>
          </div>
          <div className="submit-area">
            <div className="submit-area__block">
              <button className="submit-area__button font--bold">
                {buttonByLanguage}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
export default AutForm;
