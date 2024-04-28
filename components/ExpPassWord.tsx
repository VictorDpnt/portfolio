import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { PiCopyDuotone } from "react-icons/pi";
// import { CopyToClipboard } from "react-copy-to-clipboard";
import { BsCheckAll } from "react-icons/bs";

const ExpPassWord: React.FC = () => {
  const [valueRange, setValueRange] = useState<string>("15");
  const [btnMin, setBtnMin] = useState<boolean>(true);
  const [btnMaj, setBtnMaj] = useState<boolean>(false);
  const [btnNum, setBtnNum] = useState<boolean>(false);
  const [btnSym, setBtnSym] = useState<boolean>(false);
  const [copy, setCopy] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");

  const generatePassword = () => {
    const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
    const dataUppercase = dataLowercase.toUpperCase();
    const dataNumbers = "0123456789";
    const dataSymbols = "@#&§!?/+=$€*£¨^;.,ùéèà";
    const data: string[] = [];

    if (btnMin) {
      data.push(...dataLowercase.split(""));
    }
    if (btnMaj) {
      data.push(...dataUppercase.split(""));
    }
    if (btnNum) {
      data.push(...dataNumbers.split(""));
    }
    if (btnSym) {
      data.push(...dataSymbols.split(""));
    }

    if (data.length === 0) {
      alert("Veuillez saisir au moins un critère");
      data.push("");
    }

    let newPassword = "";

    for (let i = 0; i < parseInt(valueRange); i++) {
      newPassword += data[Math.floor(Math.random() * data.length)];
    }

    setPassword(newPassword);
  };

  return (
    <div className="experiences-container">
      <div className="card-contain">
        <div className="card-password">
          <div className=" shadow absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.70] bg-red-500  blur-3xl " />
          <h1>Password Generator</h1>
          <div className="range-container">
            <input
              type="range"
              className="input-range"
              min="4"
              max="24"
              value={valueRange}
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
              <h3 className="the-password">{password}</h3>
              {/* <CopyToClipboard
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
              </CopyToClipboard> */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExpPassWord;
