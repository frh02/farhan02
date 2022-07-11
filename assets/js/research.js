/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "Detection and Generation of attacks in CAN BUS using a Generative Adversarial Network and LSTM",
    authors:
      "Farhan Rahman, Mossadek Kamal Tushar Hossain, Deepa Kundur",
    conferences:
      "IEEE Transactions on Industrial Informatics",
    researchYr: 2022,
    citebox: "popup1",
    image: "assets/images/research-page/GAN_Block.PNG",
    citation: {
      vancouver:
        "Qile Zhu, Wei Bi, Xiaojiang Liu, Xiyao Ma, Xiaolin Li and Dapeng Wu. A Batch Normalized Inference Network Keeps the KL Vanishing Away. The 58th Annual Meeting of the Association for Computational Linguistics 2020.",
    },
    abstract:
      "With the advent of Electric vehicles (EV), there has been a rapid transformation in the automobile industry. The growth of the hardware systems synchronized with the increased computational power of EVs has resulted in a complex connected system. The Electronic Control Units (ECUs) acquire the vehicle elements' data to generate and convey control commands. Controller Area Network (CAN) guarantees the communication between the ECU and the different parts of the EV. Although CAN is a widely deployed in-vehicle communication, it is vulnerable to various cybersecurity attacks. The attacker can exploit various entry points of the connected EV to a cyberphysical network consisting of EV Charging Stations (EVCSs) and the power grid. Once the attacker compromises the CAN bus, it gains access to the brakes, lights, speed, engine, and battery. In this research, we suppose that the CAN bus system is compromised during EV charging.",
    absbox: "absPopup1",
  },

  {
    title: "Depth of anesthesia prediction via EEG signals using convolutional neural network and ensemble empirical mode decomposition",
    authors:
      "Ravichandra Madanu, Farhan Rahman, Maysam F. Abbod, Shou-Zen Fan, Jiann-Shing Shieh",
    conferences:
      "Mathematical Biosciences and Engineering",
    researchYr: 2021,
    citebox: "popup2",
    image: "assets/images/research-page/eeg.jpeg",
    citation: {
      vancouver:
        "Ravichandra Madanu, Farhan Rahman, Maysam F. Abbod, Shou-Zen Fan, Jiann-Shing Shieh. Depth of anesthesia prediction via EEG signals using convolutional neural network and ensemble empirical mode decomposition.",
    },
    abstract:
      "According to a recently conducted survey on surgical complication mortality rate, 47% of such cases are due to anesthetics overdose. This indicates that there is an urgent need to moderate the level of anesthesia. Recently deep learning (DL) methods have played a major role in estimating the depth of Anesthesia (DOA) of patients and has played an essential role in control anesthesia overdose. In this paper, Electroencephalography (EEG) signals have been used for the prediction of DOA. EEG signals are very complex signals which may require months of training and advanced signal processing techniques. It is a point of debate whether DL methods are an improvement over the already existing traditional EEG signal processing approaches. One of the DL algorithms is Convolutional neural network (CNN) which is very popular algorithm for object recognition and is widely growing its applications in processing hierarchy in the human visual system. In this paper, various decomposition methods have been used for extracting the features EEG signal. After acquiring the necessary signals values in image format, several CNN models have been deployed for classification of DOA depending upon their Bispectral Index (BIS) and the signal quality index (SQI). ",
    absbox: "absPopup2",
  },

  {
    title:
      "Enhancement of A5/1 Stream Cipher with Non-Linear Function using MOSFET",
    authors: "Farhan Rahman, Siddharth Singh",
    conferences:
      "International Journal of Engineering and Advanced Technology (IJEAT)",
    researchYr: 2019,
    citebox: "popup3",
    image: "assets/images/research-page/wordRepresentation.png",
    citation: {
      vancouver:
        " Farhan Rahman, Siddharth Singh. Enhancement of A5/1 Stream Cipher with Non-Linear Function using MOSFET.",
    },
    abstract:
      "Living in this modern era – the epitome of communication GSM networks is one of the mainly used architectures. But GSM architecture has its own shortcomings; the GSM network is vulnerable to various security threats. For any network to provide security to the user, the algorithms should be planned and designed in such a way that it provides cellular secrecy, data and signaling confidentiality to the concerned user. Such attacks lead to the necessity to modify the A5/1 algorithm; in our paper, we have proposed a better method to enhance the already existing algorithm.",
    absbox: "absPopup3",
  },
];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
