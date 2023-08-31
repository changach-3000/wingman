const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const accountNumber = "+254 727 900 800";

app.post("/", (req, res) => {
  const { sessionId, serviceCode, phoneNumber, text } = req.body;
  let response = "";

  if (text === "") {
    response =
      "CON What would you like help with? \n1. Poultry farming \n2. Vaccinations \n3.Diseases, pests and solutions \n4.Breeding and reproduction \n5.Economic and Business Aspects \n6.Buy Chicks";
  } else if (text === "1") {
    response =
    `END For more information on Poultry Farming visit this  <u><a className="text-blue-500" href="https://www.britannica.com/topic/poultry-farming/Types-of-poultry">Site</a></u>`
  } else if (text === "2") {
    response =
    `END For more information on Vaccination visit this  <u><a className="text-blue-500 " href="https://www.kuku.co.ke/post/kienyeji-indigenous-chicken-vaccination-guide">Site</a></u>`;
  } else if (text === "3") {
    response =
    `END For more information on Diseases, pests and solutions visit this  <u><a className="text-blue-500 " href="https://www.standardmedia.co.ke/farmkenya/article/2001341797/how-to-control-common-diseases-and-pests-that-affect-poultry">Site</a></u>`;
  }
  else if (text === "4") {
    response =
    `END For more information on Breeding and Reproduction visit this  <u><a className="text-blue-500 " href="https://www.infonet-biovision.org/AnimalHealth/Chicken">Site</a></u>`;
  }
  else if (text === "5") {
    response =
    `END For more information on Economic and Business ASpects visit this  <u><a className="text-blue-500 " href="https://www.nationalchickencouncil.org/">Site</a></u>`;
  }
  else if (text === "6") {
    response =
    `END If you would like to buy chicks, kindly contact this number: ${accountNumber}`;
  }
  else if (text === "1*1") {
    const accountNumber = "+254 727 900 800";
    response = `Kindly contact this numberis ${accountNumber}`;
  }
  else if (text === "1*2") {
    const accountNumber = "+254 727 900 800";
    response = `END Kindly contact this number ${accountNumber}`;
  }
  else if (text === "1*3") {
    const accountNumber = "+254 727 900 800";
    response = `END Kindly contact this number ${accountNumber}`;
  }
  else if (text === "2*1") {
    const accountNumber = "+254 727 900 800";
    response = `END Kindly contact this number ${accountNumber}`;
  }
  else if (text === "2*2") {
    const accountNumber = "+254 727 900 800";
    response = `END Kindly contact this number ${accountNumber}`;
  }
  else if (text === "2*3") {
    const accountNumber = "+254 727 900 800";
    response = `END Kindly contact this number ${accountNumber}`;
  }
     else {
    response = "END Invalid input";
  }

  res.set("Content-Type", "text/plain");
  res.send(response);
});

const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});