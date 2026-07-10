const questions = [
  {
    numb: 1,
    question: "Who is considered the father of the Extremist movement in India?<br><br>भारत में चरमपंथी आंदोलन का जनक किसे माना जाता है?",
    answer: "Bal Gangadhar Tilak / बाल गंगाधर तिलक",
    options: [
      "Dadabhai Naoroji / दादाभाई नौरोजी",
      "Lala Lajpat Rai / लाला लाजपत राय",
      "Gopal Krishna Gokhale / गोपाल कृष्ण गोखले",
      "Bal Gangadhar Tilak / बाल गंगाधर तिलक"
    ]
  },
  {
    numb: 2,
    question: "In which year was the Bombay Presidency Association founded?<br><br>बॉम्बे प्रेसीडेंसी एसोसिएशन की स्थापना किस वर्ष हुई थी?",
    answer: "1885 / 1885",
    options: [
      "1875 / 1875",
      "1880 / 1880",
      "1885 / 1885",
      "1890 / 1890"
    ]
  },
  {
    numb: 3,
    question: "What is the main occupation of people living in rural settlements?<br><br>ग्रामीण बस्तियों में रहने वाले लोगों का मुख्य व्यवसाय क्या है?",
    answer: "Agriculture / कृषि",
    options: [
      "Industry / उद्योग",
      "Agriculture / कृषि",
      "IT Services / आईटी सेवाएँ",
      "Banking / बैंकिंग"
    ]
  },
  {
    numb: 4,
    question: "Which of the following rivers originates in the state of Madhya Pradesh?<br><br>निम्नलिखित में से कौन-सी नदी मध्य प्रदेश राज्य से निकलती है?",
    answer: "Narmada / नर्मदा",
    options: [
      "Yamuna / यमुना",
      "Narmada / नर्मदा",
      "Ganga / गंगा",
      "Godavari / गोदावरी"
    ]
  },
  {
    numb: 5,
    question: "Which of the following is a Constitutional Body in India?<br><br>निम्नलिखित में से कौन-सा, भारत में एक सांविधानिक निकाय है?",
    answer: "Union Public Service Commission / संघ लोक सेवा आयोग",
    options: [
      "National Commission for Women / राष्ट्रीय महिला आयोग",
      "NITI Aayog / नीति (NITI) आयोग",
      "Union Public Service Commission / संघ लोक सेवा आयोग",
      "National Human Rights Commission / राष्ट्रीय मानव अधिकार आयोग"
    ]
  },
  {
    numb: 6,
    question: "The National Human Rights Commission of India is a ________.<br><br>भारत का राष्ट्रीय मानव अधिकार आयोग एक ________ है।",
    answer: "Statutory Body / सांविधिक निकाय",
    options: [
      "Constitutional Body / सांविधानिक निकाय",
      "Statutory Body / सांविधिक निकाय",
      "Non-Governmental Organisation / गैर-सरकारी संगठन",
      "Private Institution / निजी संस्था"
    ]
  },
  {
    numb: 7,
    question: "Under which Article of the Indian Constitution is the Finance Commission constituted?<br><br>भारतीय संविधान के किस अनुच्छेद के तहत वित्त आयोग का गठन किया गया है?",
    answer: "Article 280 / अनुच्छेद 280",
    options: [
      "Article 360 / अनुच्छेद 360",
      "Article 280 / अनुच्छेद 280",
      "Article 324 / अनुच्छेद 324",
      "Article 148 / अनुच्छेद 148"
    ]
  },
  {
    numb: 8,
    question: "Kuchipudi, a classical Indian dance form, has originated from which state?<br><br>कुचिपुड़ी, एक शास्त्रीय भारतीय नृत्य शैली है, यह किस राज्य से उत्पन्न हुई है?",
    answer: "Andhra Pradesh / आंध्र प्रदेश",
    options: [
      "Tamil Nadu / तमिलनाडु",
      "Andhra Pradesh / आंध्र प्रदेश",
      "Gujarat / गुजरात",
      "Kerala / केरल"
    ]
  },
  {
    numb: 9,
    question: "Which Indian classical dance form is known for fast footwork and spins and was developed in North India?<br><br>कौन-सा भारतीय शास्त्रीय नृत्य रूप तेज कदमों और घुमावों के लिए जाना जाता है और इसका विकास उत्तर भारत में हुआ था?",
    answer: "Kathak / कथक",
    options: [
      "Kathak / कथक",
      "Sattriya / सत्निया",
      "Manipuri / मणिपुरी",
      "Kuchipudi / कुचिपुड़ी"
    ]
  },
  {
    numb: 10,
    question: "What is the title of Nobel laureate Kailash Satyarthi's autobiography published in January 2025?<br><br>जनवरी 2025 में प्रकाशित नोबेल पुरस्कार विजेता कैलाश सत्यार्थी की आत्मकथा का शीर्षक क्या है?",
    answer: "Diyasalai / दियासलाई",
    options: [
      "A Life of Courage / ए लाइफ ऑफ क्रेज",
      "The Child's Voice / द चाइल्ड्स वॉइस",
      "Wings of Fire / विंग्स ऑफ फायर",
      "Diyasalai / दियासलाई"
    ]
  },
  {
    numb: 11,
    question: "Which veteran Indian filmmaker, known for directing acclaimed films like 'Masoom' and 'Bandit Queen,' received the Padma Bhushan award in January 2025?<br><br>'मासूम' और 'बैंडिट क्वीन' जैसी प्रशंसित फिल्मों के निर्देशन के लिए जाने जाने वाले किस अनुभवी भारतीय फिल्म निर्माता को जनवरी 2025 में पद्म भूषण पुरस्कार प्रदान किया गया?",
    answer: "Shekhar Kapur / शेखर कपूर",
    options: [
      "Shekhar Kapur / शेखर कपूर",
      "Mira Nair / मीरा नायर",
      "Anurag Kashyap / अनुराग कश्यप",
      "Ramesh Sippy / रमेश सिप्पी"
    ]
  },
  {
    numb: 12,
    question: "Where was the 32nd Annual International Conference of the Indian Association of Palliative Care (IAPCON 2025) held?<br><br>इंडियन एसोसिएशन ऑफ पैलिएटिव केयर (IAPCON 2025) का 32वां वार्षिक अंतर्राष्ट्रीय सम्मेलन कहाँ आयोजित किया गया?",
    answer: "AIIMS Jammu / AIIMS जम्मू",
    options: [
      "AIIMS Delhi / AIIMS दिल्ली",
      "AIIMS Jammu / AIIMS जम्मू",
      "Tata Memorial Hospital, Mumbai / टाटा मेमोरियल अस्पताल, मुंबई",
      "PGIMER, Chandigarh / PGIMER, चंडीगढ़"
    ]
  },
  {
    numb: 13,
    question: "Where is the training command of the Indian Air Force located?<br><br>भारतीय वायु सेना का प्रशिक्षण कमान कहाँ स्थित है?",
    answer: "Bengaluru / बेंगलुरु",
    options: [
      "Thiruvananthapuram / तिरुवनंतपुरम",
      "Bengaluru / बेंगलुरु",
      "Nagpur / नागपुर",
      "Chennai / चेन्नई"
    ]
  },
  {
    numb: 14,
    question: "Which of the following is the only non-operational command in the Indian Army?<br><br>भारतीय सेना की एकमात्र गैर-संचालित कमान (non-operational command) निम्नलिखित में से कौन-सी है?",
    answer: "Training Command / प्रशिक्षण कमान",
    options: [
      "Western Command / पश्चिमी कमान",
      "Southern Command / दक्षिणी कमान",
      "Central Command / मध्य कमान",
      "Training Command / प्रशिक्षण कमान"
    ]
  },
  {
    numb: 15,
    question: "Which of the following is the highest field formation in the Indian Army?<br><br>निम्नलिखित में से कौन-सा, भारतीय सेना का सर्वोच्च क्षेत्रीय गठन है?",
    answer: "Command / कमान",
    options: [
      "Brigade / ब्रिगेड",
      "Division / डिवीजन",
      "Corps / कॉर्म्स",
      "Command / कमान"
    ]
  },
  {
    numb: 16,
    question: "What is the SI unit for displacement?<br><br>विस्थापन का SI मात्रक क्या है?",
    answer: "Metre / मीटर",
    options: [
      "Metre / मीटर",
      "Kilometre / किलोमीटर",
      "Millimetre / मिलीमीटर",
      "Micrometre / माइक्रोमीटर"
    ]
  },
  {
    numb: 17,
    question: "Which of the following is an INCORRECT statement related to electrical circuits?<br><br>विद्युत परिपथ से संबंधित निम्नलिखित में से कौन-सा कथन गलत है?",
    answer: "Current flows in circuit in both OPEN and CLOSED condition / परिपथ में धारा विवृत और संवृत दोनों स्थितियों में प्रवाहित होती है",
    options: [
      "A current flows in an electrical circuit from positive to negative of battery / विद्युत परिपथ में धारा बैटरी के धनात्मक से ऋणात्मक की ओर प्रवाहित होती है",
      "A circuit is OPEN if the switch is not connected / यदि स्विच संयोजित नहीं है तो परिपथ विवृत (OPEN) रहता है",
      "A circuit is CLOSED if the switch is connected / यदि स्विच संयोजित है तो परिपथ संवृत (CLOSED) रहता है",
      "Current flows in circuit in both OPEN and CLOSED condition / परिपथ में धारा विवृत और संवृत दोनों स्थितियों में प्रवाहित होती है"
    ]
  },
  {
    numb: 18,
    question: "What is the force acting on a unit area called?<br><br>किसी इकाई क्षेत्रफल पर लगने वाले बल को क्या कहते हैं?",
    answer: "Pressure / दाब",
    options: [
      "Acceleration / त्वरण",
      "Pressure / दाब",
      "Gravity / गुरुत्वाकर्षण",
      "Weight / भार"
    ]
  },
  {
    numb: 19,
    question: "What do we call a light ray that hits or falls on a surface?<br><br>किसी पृष्ठ पर गिरने वाली प्रकाश किरण को क्या कहते हैं?",
    answer: "Incident ray / आपतित किरण",
    options: [
      "Reflected ray / परावर्तित किरण",
      "Refracted ray / अपवर्तित किरण",
      "Incident ray / आपतित किरण",
      "Normal ray / अभिलंब किरण"
    ]
  },
  {
    numb: 20,
    question: "Given below are two statements. Choose the correct option for these statements.<br>Statement-I: When the water vapour present in the air comes in contact with a cold surface, it forms water droplets.<br>Statement-II: The process of conversion of water vapour into its liquid state is called condensation.<br><br>नीचे दो कथन दिए गए हैं। इन कथनों के लिए सही विकल्प का चयन कीजिए।<br>कथन-I: जब वायु में उपस्थित जल वाष्प किसी ठंडी सतह के संपर्क में आती है, तो वह जल की बूंदें बनाती है।<br>कथन-II: जल वाष्प को उसकी द्रव अवस्था में बदलने का प्रक्रम, संघनन कहलाता है।",
    answer: "Both the statements are true. / दोनों कथन सत्य हैं।",
    options: [
      "Both the statements are true. / दोनों कथन सत्य हैं।",
      "Both the statements are false. / दोनों कथन असत्य हैं।",
      "Statement-I is true, but statement-II is false. / कथन-I सत्य है, लेकिन कथन-II असत्य है।",
      "Statement-I is false, but statement-II is true. / कथन-I असत्य है, लेकिन कथन-II सत्य है।"
    ]
  },
  {
    numb: 21,
    question: "Which of the following substances are acidic?<br>i. Curd, ii. Lemon juice, iii. Orange juice, iv. Vinegar<br><br>निम्नलिखित में से कौन-से पदार्थ अम्लीय होते हैं?<br>i. दही, ii. नींबू का रस, iii. संतरे का रस, iv. सिरका",
    answer: "i, ii, iii and iv / i, ii, iii और iv",
    options: [
      "i and ii only / केवल i और ii",
      "i, iii and iv only / केवल i, iii और iv",
      "i, ii and iii only / केवल i, ii और iii",
      "i, ii, iii and iv / i, ii, iii और iv"
    ]
  },
  {
    numb: 22,
    question: "Which of the following statements is/are true?<br>i. When an acidic solution is mixed with a basic solution, both the solutions neutralise the effect of each other.<br>ii. In neutralisation reaction, heat is always produced or evolved.<br><br>निम्नलिखित में से कौन-सा/से कथन सत्य है/हैं?<br>i. जब एक अम्लीय विलयन को एक क्षारीय विलयन के साथ मिलाया जाता है, तो दोनों विलयन एक दूसरे के प्रभाव को उदासीन कर देते हैं।<br>ii. उदासीनीकरण अभिक्रिया में ऊष्मा सदैव उत्पन्न या उत्सर्जित होती है।",
    answer: "i and ii / i और ii",
    options: [
      "i only / केवल i",
      "ii only / केवल ii",
      "i and ii / i और ii",
      "Neither i nor ii / न तो i और न ही ii"
    ]
  },
  {
    numb: 23,
    question: "Which of the following are examples of physical changes?<br>i. Melting of ice, ii. Crushing a small piece of chalk into dust, iii. Heating the hack-saw blade on the gas stove<br><br>निम्नलिखित में से कौन-से भौतिक परिवर्तन के उदाहरण हैं?<br>i. बर्फ का पिघलना, ii. चाक के एक छोटे टुकड़े को चूर्ण में संदलित करना, iii. लौह आरी की ब्लेड को गैस स्टोव पर गर्म करना",
    answer: "i, ii and iii / i, ii and iii",
    options: [
      "i and ii only / i और ii केवल",
      "ii and iii only / ii और iii केवल",
      "i and iii only / i और iii केवल",
      "i, ii and iii / i, ii and iii"
    ]
  },
  {
    numb: 24,
    question: "Why is water an essential component of our diet?<br><br>जल हमारे आहार का एक अनिवार्य घटक क्यों है?",
    answer: "It helps the body absorb nutrients from food. / यह शरीर को भोजन से पोषक तत्वों को अवशोषित करने में सहायता करता है।",
    options: [
      "It provides direct energy to the body. / यह शरीर को सीधे ऊर्जा प्रदान करता है।",
      "It helps the body absorb nutrients from food. / यह शरीर को भोजन से पोषक तत्वों को अवशोषित करने में सहायता करता है।",
      "It replaces carbohydrates in the body. / यह शरीर में कार्बोहाइड्रेट का स्थान लेता है।",
      "It acts as a protein supplement. / यह प्रोटीन अनुपूरक (supplement) के रूप में कार्य करता है।"
    ]
  },
  {
    numb: 25,
    question: "Which of the following foods is considered a rich source of protein?<br><br>निम्नलिखित में से कौन-सा खाद्य पदार्थ, प्रोटीन का समृद्ध स्रोत माना जाता है?",
    answer: "Chicken / चिकन",
    options: [
      "Apple / सेब",
      "Chicken / चिकन",
      "Butter / मक्खन",
      "Rice / चावल"
    ]
  },
  {
    numb: 26,
    question: "Which of the following is an example of a natural resource?<br><br>निम्नलिखित में से प्राकृतिक संसाधन का उदाहरण कौन-सा है?",
    answer: "Coal / कोयला",
    options: [
      "Plastic / प्लास्टिक",
      "Coal / कोयला",
      "Glass / कांच",
      "Steel / इस्पात"
    ]
  },
  {
    numb: 27,
    question: "Which of the following forms a continuous network of channels that connects roots to the leaves and helps in transport of water?<br><br>निम्नलिखित में से कौन-सा, चैनलों (channels) का एक सतत नेटवर्क बनाता है जो जड़ों को पत्तियों से जोड़ता है और जल के परिवहन में सहायता करता है?",
    answer: "Xylem / जाइलम (Xylem)",
    options: [
      "Xylem / जाइलम (Xylem)",
      "Phloem / फ्लोएम (Phloem)",
      "Kidney / वृक्क (Kidney)",
      "Urethra / मूत्रमार्ग (Urethra)"
    ]
  },
  {
    numb: 28,
    question: "Disease-causing microorganisms are known as ________.<br><br>रोग पैदा करने वाले सूक्ष्मजीवों को ________ कहा जाता है।",
    answer: "pathogens / रोगजनक",
    options: [
      "decomposers / अपघटक",
      "pathogens / रोगजनक",
      "probiotics / प्रजैविक",
      "producers / उत्पादक"
    ]
  },
  {
    numb: 29,
    question: "Foot and mouth disease in cattle is caused by which of the following?<br><br>निम्नलिखित में से किसके कारण मवेशियों (cattle) में खुरपका और मुंहपका रोग (Foot and mouth disease) होता है?",
    answer: "Virus / विषाणु (Virus)",
    options: [
      "Virus / विषाणु (Virus)",
      "Algae / शैवाल (Algae)",
      "Iron deficiency / आयरन की कमी",
      "Bacteria / जीवाणु (Bacteria)"
    ]
  },
  {
    numb: 30,
    question: "What is the number of individuals produced as a result of binary fission?<br><br>द्वि-विभाजन के परिणामस्वरूप निर्मित होने वाले व्यष्टियों (individuals) की संख्या कितनी है?",
    answer: "Two / दो",
    options: [
      "Two / दो",
      "Four / चार",
      "Six / छह",
      "Eight / आठ"
    ]
  },
  {
    numb: 31,
    question: "Find the average of 310, 110, and 90.<br><br>310, 110, और 90 का औसत ज्ञात कीजिए।",
    answer: "170 / 170",
    options: [
      "150 / 150",
      "160 / 160",
      "170 / 170",
      "180 / 180"
    ]
  },
  {
    numb: 32,
    question: "A student scored 10 marks in a test worth 100% of the final grade. What is the student's weighted average score?<br><br>किसी विद्यार्थी ने एक परीक्षा में 10 अंक प्राप्त किए, जो अंतिम ग्रेड के 100% के बराबर है। विद्यार्थी का भारित औसत स्कोर ज्ञात कीजिए।",
    answer: "10 / 10",
    options: [
      "5 / 5",
      "10 / 10",
      "20 / 20",
      "100 / 100"
    ]
  },
  {
    numb: 33,
    question: "The simple interest on ₹5,000 for 12 years at a rate of 34% per annum is:<br><br>₹5,000 पर 34% वार्षिक दर से 12 वर्ष के लिए साधारण ब्याज ज्ञात कीजिए।",
    answer: "₹20,400 / ₹20,400",
    options: [
      "₹20,400 / ₹20,400",
      "₹20,397 / ₹20,397",
      "₹20,399 / ₹20,399",
      "₹20,398 / ₹20,398"
    ]
  },
  {
    numb: 34,
    question: "The smallest two-digit number that is divisible by 71 is:<br><br>71 से विभाज्य दो अंकों की सबसे छोटी कौन-सी है?",
    answer: "71 / 71",
    options: [
      "71 / 71",
      "68 / 68",
      "73 / 73",
      "72 / 72"
    ]
  },
  {
    numb: 35,
    question: "Find the greatest number that divides each of 32 and 22 exactly.<br><br>वह सबसे बड़ी संख्या ज्ञात कीजिए, जो 32 और 22 को पूर्णतः विभाजित करती है।",
    answer: "2 / 2",
    options: [
      "2 / 2",
      "8 / 8",
      "11 / 11",
      "9 / 9"
    ]
  },
  {
    numb: 36,
    question: "If √8 × 18 × x = 24, find the value of x.<br><br>यदि √8 × 18 × x = 24 है, तो x का मान ज्ञात कीजिए।",
    answer: "4 / 4",
    options: [
      "12 / 12",
      "8 / 8",
      "6 / 6",
      "4 / 4"
    ]
  },
  {
    numb: 37,
    question: "The simplified value of (40 ÷ 2) × 19 is:<br><br>(40 ÷ 2) × 19 का सरलीकृत मान ज्ञात कीजिए।",
    answer: "380 / 380",
    options: [
      "380 / 380",
      "379 / 379",
      "377 / 377",
      "378 / 378"
    ]
  },
  {
    numb: 38,
    question: "The cost of an article is decreased by 10%. If the present cost of the article is ₹2,700, find its initial cost.<br><br>एक वस्तु के मूल्य में 10% की कमी की गई। यदि वस्तु का वर्तमान मूल्य ₹2,700 है, तो इसका आरंभिक मूल्य ज्ञात कीजिए।",
    answer: "₹3,000 / ₹3,000",
    options: [
      "₹3,500 / ₹3,500",
      "₹3,200 / ₹3,200",
      "₹3,600 / ₹3,600",
      "₹3,000 / ₹3,000"
    ]
  },
  {
    numb: 39,
    question: "A toy car was priced at ₹20. The price increased by ₹2. What is the percentage increase in the price of the toy car?<br><br>एक खिलौना कार की कीमत ₹20 थी। कीमत में ₹2 की वृद्धि हुई। खिलौना कार की कीमत में कितने प्रतिशत की वृद्धि हुई?",
    answer: "10% / 10%",
    options: [
      "2% / 2%",
      "10% / 10%",
      "12% / 12%",
      "20% / 20%"
    ]
  },
  {
    numb: 40,
    question: "Select the smallest ratio among the following: 1:1, 1:2, 1:4, 3:4<br><br>निम्नलिखित में से सबसे छोटा अनुपात चुनिए: 1:1, 1:2, 1:4, 3:4",
    answer: "1:4 / 1:4",
    options: [
      "1:4 / 1:4",
      "1:2 / 1:2",
      "3:4 / 3:4",
      "1:1 / 1:1"
    ]
  },
  {
    numb: 41,
    question: "If a number x is subtracted from the terms of a ratio 4:5, then the ratio becomes 2:3. Find the value of x.<br><br>यदि 4:5 के अनुपात वाली संख्याओं में से x घटा दिया जाए, तो उनका अनुपात 2:3 हो जाता है। x का मान ज्ञात कीजिए।",
    answer: "2 / 2",
    options: [
      "2 / 2",
      "4 / 4",
      "3 / 3",
      "1 / 1"
    ]
  },
  {
    numb: 42,
    question: "A person covers a distance of 12 km while walking at a speed of 4 km/hr. What distance would he cover in the same time if he walks at a speed of 7 km/hr?<br><br>एक व्यक्ति 4 km/hr की चाल से चलते हुए 12 km की दूरी तय करता है। यदि वह 7 km/hr की चाल से चले, तो समान समय में कितनी दूरी तय करेगा?",
    answer: "21 km / 21 km",
    options: [
      "20 km / 20 km",
      "21 km / 21 km",
      "22 km / 22 km",
      "23 km / 23 km"
    ]
  },
  {
    numb: 43,
    question: "If 20 is added to a number, the result is 84. Find the number.<br><br>यदि किसी संख्या में 20 जोड़ा जाए, तो परिणाम 84 प्राप्त होता है। संख्या ज्ञात कीजिए।",
    answer: "64 / 64",
    options: [
      "64 / 64",
      "66 / 66",
      "62 / 62",
      "61 / 61"
    ]
  },
  {
    numb: 44,
    question: "A rectangular plot is of length 112 m and breadth 78 m. The cost of fencing the boundaries at ₹50 per metre is:<br><br>एक आयताकार भूखंड की लंबाई 112 m और चौड़ाई 78 m है। ₹50 प्रति मीटर की दर से भूखंड की परिसीमाओं पर बाड़ा लगाने की लागत (₹ में) ज्ञात कीजिए।",
    answer: "19,000 / 19,000",
    options: [
      "18,500 / 18,500",
      "19,000 / 19,000",
      "19,250 / 19,250",
      "20,000 / 20,000"
    ]
  },
  {
    numb: 45,
    question: "If the interior angles of a triangle are in the ratio 4:3:2, then find the smallest interior angle of the triangle.<br><br>यदि किसी त्रिभुज के अन्तःकोणों का अनुपात 4:3:2 है, तो त्रिभुज का सबसे छोटा अन्तःकोण ज्ञात कीजिए।",
    answer: "40° / 40°",
    options: [
      "40° / 40°",
      "90° / 90°",
      "80° / 80°",
      "180° / 180°"
    ]
  },
  {
    numb: 46,
    question: "In a certain code language, 'blue lunch box' is coded as 'cp xt uk' and 'come for lunch' is coded as 'uk nv hm'. How is 'lunch' coded in the given language?<br><br>एक निश्चित कूट भाषा में, 'blue lunch box' को 'cp xt uk' के रूप में कूटबद्ध किया जाता है और 'come for lunch' को 'uk nv hm' के रूप में कूटबद्ध किया जाता है। दी गई भाषा में 'lunch' को किस प्रकार कूटबद्ध किया गया है?",
    answer: "uk / uk",
    options: [
      "uk / uk",
      "xt / xt",
      "hm / hm",
      "cp / cp"
    ]
  },
  {
    numb: 47,
    question: "Refer to the following letter series and answer the question that follows. Counting to be done from left to right only.<br>(Left) SBYFKMRHAVPQKWPJCMNTPESBL (Right)<br>Which of the following letters is eighth from the right in the given series?<br><br>निम्नलिखित अक्षर श्रृंखला का संदर्भ लीजिए और उसके नीचे दिए गए प्रश्न का उत्तर दीजिए। गिनती केवल बाएं से दाएं की जानी है।<br>(बाएं) SBYFKMRHAVPQKWPJCMNTPESBL (दाएं)<br>निम्नलिखित में से कौन-सा अक्षर, दी गई श्रृंखला में दाएं से आठवां है?",
    answer: "J / J",
    options: [
      "H / H",
      "M / M",
      "C / C",
      "J / J"
    ]
  },
  {
    numb: 48,
    question: "In a row of 30 people facing north, Rahul is 22nd from the right end. Find his position from the left end.<br><br>उत्तर की ओर अभिमुख होकर बैठे 30 व्यक्तियों की एक पंक्ति में, राहुल दाएं छोर से 22वें स्थान पर बैठा है। बाएं छोर से उसका स्थान ज्ञात कीजिए।",
    answer: "9th / 9वां",
    options: [
      "7th / 7वां",
      "8th / 8वां",
      "9th / 9वां",
      "10th / 10वां"
    ]
  },
  {
    numb: 49,
    question: "Select the option that indicates the correct arrangement of the given words in the order in which they appear in an English dictionary.<br>1. Meet, 2. Sell, 3. Bike, 4. Heat<br><br>उस विकल्प का चयन कीजिए जो दिए गए शब्दों की अंग्रेजी शब्दकोश में उनके क्रम के अनुसार सही व्यवस्था को दर्शाता है।<br>1. Meet, 2. Sell, 3. Bike, 4. Heat",
    answer: "3, 4, 1, 2 / 3, 4, 1, 2",
    options: [
      "3, 4, 1, 2 / 3, 4, 1, 2",
      "4, 3, 1, 2 / 4, 3, 1, 2",
      "1, 3, 2, 4 / 1, 3, 2, 4",
      "2, 4, 3, 1 / 2, 4, 3, 1"
    ]
  },
  {
    numb: 50,
    question: "What will come in the place of the question mark (?) in the following equation, if '+' and '-' are interchanged?<br>17 - 14 + 8 = ?<br><br>यदि '+' और '-' को परस्पर बदल दिया जाए, तो निम्नलिखित समीकरण में प्रश्न-चिह्न (?) के स्थान पर क्या आएगा?<br>17 - 14 + 8 = ?",
    answer: "21 / 21",
    options: [
      "21 / 21",
      "23 / 23",
      "25 / 25",
      "27 / 27"
    ]
  }
];
