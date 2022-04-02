class Modal {
  constructor() {
    this._option;
    this.$modalContainer = document.createElement("div");
    this.$modalContainer.setAttribute(
      "class",
      "fixed w-full h-full bg-[rgba(0,0,0,0.25)] z-50 flex justify-center items-center transition ease-in duration-200"
    );

    this.$modalContent = document.createElement("div");
    this.$modalContent.setAttribute("class", "w-[600px] relative bg-white");

    this.$modalHeaderContainer = document.createElement("div");
    this.$modalHeaderContainer.setAttribute(
      "class",
      "bg-[#4b8063] p-8 w-full flex justify-between items-center"
    );

    this.$modalHeader = document.createElement("h1");
    this.$modalHeader.setAttribute("class", "text-[30px] font-bold text-white");
    this.$modalHeader.innerText = "URL Shortener";

    this.$modalIconExit = document.createElement("ion-icon");
    this.$modalIconExit.setAttribute("name", "close-outline");
    this.$modalIconExit.setAttribute(
      "class",
      "text-[40px] cursor-pointer hover:text-[white] transition linear duration-200"
    );

    this.$modalIconExit.addEventListener("click", this.hideModal);

    this.$modalInfroWrap = document.createElement("div");
    this.$modalInfroWrap.setAttribute("class", "p-8");

    // Content
    this.$contentTitle = document.createElement("h1");
    this.$contentTitle.setAttribute("class", "text-[30px] font-bold");
    this.$contentTitle.innerText = "Link Shortenter";

    this.$inputWrap = document.createElement("div");
    this.$inputWrap.setAttribute("class", "flex items-center mt-[18px]");
    this.$inputLabel = document.createElement("p");
    this.$inputLabel.setAttribute("class", "text-[18px] font-normal");
    this.$inputLabel.innerText = "Enter a Link:";

    this.$input = document.createElement("input");
    this.$input.placeholder = "example.com";
    this.$input.setAttribute(
      "class",
      "outline-none border-none text-[16px] font-bold bg-gray-200 p-[8px] block ml-[18px]"
    );
    this.$buttonClick = document.createElement("button");
    this.$buttonClick.innerText = "Click";
    this.$buttonClick.setAttribute(
      "class",
      "ml-[18px] font-semibold bg-[#1f2038] text-white p-[8px] rounded-sm"
    );
    this.$buttonClick.addEventListener("click", this.getUrl);

    this.$optionWrap = document.createElement("div");
    this.$optionWrap.setAttribute("class", "mt-[18px] flex items-center");

    this.$optionLabel = document.createElement("p");
    this.$optionLabel.setAttribute("class", "text-[18px] font-normal");
    this.$optionLabel.innerText = "Short domain:";

    this.$optionDe = document.createElement("button");
    this.$optionDe.setAttribute(
      "class",
      "px-[8px] py-[4px] font-semibold bg-[#dddbdf] ml-[18px] text-black"
    );
    this.$optionDe.addEventListener("click", this.changeDeTrue);
    this.$optionDe.innerText = "shrtco.de";

    this.$option9qr = document.createElement("button");
    this.$option9qr.setAttribute(
      "class",
      "px-[8px] py-[4px] font-semibold bg-[#dddbdf] ml-[18px] text-black"
    );
    this.$option9qr.addEventListener("click", this.change9qrTrue);

    this.$option9qr.innerText = "9qr.de";
    this.$optionShiny = document.createElement("button");
    this.$optionShiny.setAttribute(
      "class",
      "px-[8px] py-[4px] font-semibold bg-[#dddbdf] ml-[18px] text-black"
    );
    this.$optionShiny.innerText = "shiny.link";
    this.$optionShiny.addEventListener("click", this.changeShinyTrue);

    this.$resultLabel = document.createElement("p");
    this.$resultLabel.innerText = "Link generated!";
    this.$resultLabel.setAttribute(
      "class",
      "mt-[18px] text-[18px] font-semibold"
    );

    this.$result = document.createElement("p");
    this.$result.innerText = "";
    this.$result.setAttribute("class", "text-[20px] font-bold text-green-500");
  }

  //#1f2038
  changeDeTrue = (e) => {
    this._option = 1;
    this.$optionDe.setAttribute(
      "class",
      "px-[8px] py-[4px] font-semibold bg-[#1f2038] ml-[18px] text-white"
    );
    this.$option9qr.setAttribute(
      "class",
      "px-[8px] py-[4px] font-semibold bg-[#dddbdf] ml-[18px] text-black"
    );
    this.$optionShiny.setAttribute(
      "class",
      "px-[8px] py-[4px] font-semibold bg-[#dddbdf] ml-[18px] text-black"
    );
  };

  change9qrTrue = () => {
    this._option = 2;
    this.$option9qr.setAttribute(
      "class",
      "px-[8px] py-[4px] font-semibold bg-[#1f2038] ml-[18px] text-white"
    );
    this.$optionDe.setAttribute(
      "class",
      "px-[8px] py-[4px] font-semibold bg-[#dddbdf] ml-[18px] text-black"
    );
    this.$optionShiny.setAttribute(
      "class",
      "px-[8px] py-[4px] font-semibold bg-[#dddbdf] ml-[18px] text-black"
    );
  };

  changeShinyTrue = () => {
    this._option = 3;
    this.$optionShiny.setAttribute(
      "class",
      "px-[8px] py-[4px] font-semibold bg-[#1f2038] ml-[18px] text-white"
    );
    this.$option9qr.setAttribute(
      "class",
      "px-[8px] py-[4px] font-semibold bg-[#dddbdf] ml-[18px] text-black"
    );
    this.$optionDe.setAttribute(
      "class",
      "px-[8px] py-[4px] font-semibold bg-[#dddbdf] ml-[18px] text-black"
    );
  };

  getUrl = async () => {
    console.log(this._option);
    const base_url = "https://api.shrtco.de/v2/";
    const shorten_url = "/shorten?url=";
    const urlInput = this.$input.value;
    const yoururl = new URL(urlInput);
    const domain = yoururl.host;
    const url = base_url + shorten_url + domain;
    try {
      const response = await fetch(url);
      const resJSON = await response.json();
      console.log(resJSON.result.short_link);
      if (this._option === 1) {
        this.$result.innerText = resJSON.result.short_link;
      } else if (this._option === 2) {
        this.$result.innerText = resJSON.result.short_link2;
      } else if (this._option === 3) {
        this.$result.innerText = resJSON.result.short_link3;
      } else {
        this.$result.innerText = "Please choose one option";
      }
    } catch (err) {
      alert(err.message);
    }
  };

  render() {
    this.$modalContainer.appendChild(this.$modalContent);
    this.$modalContent.appendChild(this.$modalHeaderContainer);
    this.$modalHeaderContainer.appendChild(this.$modalHeader);
    this.$modalHeaderContainer.appendChild(this.$modalIconExit);
    this.$modalContent.appendChild(this.$modalInfroWrap);
    this.$modalInfroWrap.appendChild(this.$contentTitle);
    this.$modalInfroWrap.appendChild(this.$inputWrap);
    this.$inputWrap.appendChild(this.$inputLabel);
    this.$inputWrap.appendChild(this.$input);
    this.$inputWrap.appendChild(this.$buttonClick);
    this.$modalInfroWrap.appendChild(this.$optionWrap);
    this.$optionWrap.appendChild(this.$optionLabel);
    this.$optionWrap.appendChild(this.$optionDe);
    this.$optionWrap.appendChild(this.$option9qr);
    this.$optionWrap.appendChild(this.$optionShiny);

    this.$modalInfroWrap.appendChild(this.$resultLabel);
    this.$modalInfroWrap.appendChild(this.$result);
    return this.$modalContainer;
  }
}

const app = document.getElementById("app");

const modal = new Modal();

app.appendChild(modal.render());
