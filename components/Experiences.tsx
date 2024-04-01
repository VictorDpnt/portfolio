import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { PiCopyDuotone } from "react-icons/pi";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { BsCheckAll } from "react-icons/bs";

const Experiences = () => {
  const [valueRange, setValueRange] = useState("15");
  const [btnMin, setBtnMin] = useState(true);
  const [btnMaj, setBtnMaj] = useState(false);
  const [btnNum, setBtnNum] = useState(false);
  const [btnSym, setBtnSym] = useState(false);
  const [copy, setCopy] = useState(false);

  const [password, setPassword] = useState("");

  const generatePassword = () => {
    const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
    const dataUppercase = dataLowercase.toUpperCase();
    const dataNumbers = "0123456789";
    const dataSymbols = "@#&§!?/+=$€*£¨^;.,ùéèà";
    const data = [];

    if (btnMin) {
      data.push(...dataLowercase);
    }
    if (btnMaj) {
      data.push(...dataUppercase);
    }
    if (btnNum) {
      data.push(...dataNumbers);
    }
    if (btnSym) {
      data.push(...dataSymbols);
    }

    if (data.length === 0) {
      alert("Veuillez saisir au moins un critère");
      data.push("");
    }

    let newPassword = "";

    for (let i = 0; i < valueRange; i++) {
      newPassword += data[Math.floor(Math.random() * data.length)];
    }

    setPassword(newPassword);
    console.log(password);
  };

  return (
    <div className="experiences-container">
      <div className="card-contain">
        <div className="card-password">
          <h1>Password Generator</h1>
          <div className="range-container">
            <input
              type="range"
              className="input-range"
              min="4"
              max="24"
              onChange={(e) => setValueRange(e.target.value)}
            />
            <p className="value-range">{valueRange}</p>
          </div>
          <div className="choice-btn">
            <Button
              variant={btnMin ? "outline" : "default"}
              onClick={() => setBtnMin(!btnMin)}
            >
              a-z
            </Button>
            <Button
              variant={btnMaj ? "outline" : "default"}
              onClick={() => setBtnMaj(!btnMaj)}
            >
              A-Z
            </Button>
            <Button
              variant={btnNum ? "outline" : "default"}
              onClick={() => setBtnNum(!btnNum)}
            >
              0-9
            </Button>
            <Button
              variant={btnSym ? "outline" : "default"}
              onClick={() => setBtnSym(!btnSym)}
            >
              !-?
            </Button>
          </div>
          <button className="btn-generate" onClick={() => generatePassword()}>
            Generate
          </button>
          {password && (
            <div className="container-result">
              <h3 className="the-password"> {password}</h3>
              <CopyToClipboard
                text={password}
                onCopy={() =>
                  setTimeout(() => {
                    setCopy(false);
                  }, 2000)
                }
              >
                <div className="copy-logo" onClick={() => setCopy(true)}>
                  {copy ? <BsCheckAll /> : <PiCopyDuotone />}
                </div>
              </CopyToClipboard>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Experiences;
