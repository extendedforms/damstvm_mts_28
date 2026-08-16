// Format: { id, image, question, options[], answerIndex, correctAnswerText }

window.questions = [
  {
    id: 1,
    image: "images/IMG_0399.jpeg",
    question: "A pathologist is evaluating an artery biopsy for arteriosclerosis. Which stain is most appropriate to selectively visualize the elastin fibers in the blood vessel wall, and what color will they appear?",
    options: [
      "Verhoeff-Van Gieson (VVG) stain; Black",
      "Masson's Trichrome stain; Blue",
      "Periodic Acid-Schiff (PAS) stain; Magenta",
      "Hematoxylin and Eosin (H&E) stain; Pink"
    ],
    answerIndex: 0,
    correctAnswerText: "Verhoeff-Van Gieson (VVG) stain; Black"
  },
  {
    id: 2,
    image: "images/IMG_0400.jpeg",
    question: "A 45-year-old man with a blood pressure of 220/120 mmHg presents with acute kidney injury. Renal biopsy reveals concentric hyperplasia of smooth muscle cells in the arterioles. Which of the following features is characteristic of this specific vascular pathology?",
    options: [
      "Amorphous pink subendothelial deposition",
      "Onion skin appearance with fibrinoid necrosis",
      "Dystrophic calcification of the tunica media",
      "Absence of luminal narrowing"
    ],
    answerIndex: 1,
    correctAnswerText: "Onion skin appearance with fibrinoid necrosis"
  },
  {
    id: 3,
    image: "images/IMG_0401.jpeg",
    question: "A 58-year-old male with a 15-year history of poorly controlled benign hypertension passes away due to an acute myocardial infarction. During the autopsy, the pathologist examines his kidneys. Which of the following describes the most likely macroscopic appearance of the kidneys in this patient?",
    options: [
      "Markedly enlarged kidneys with a smooth, pale capsular surface",
      "Normal-sized kidneys covered with multiple red hemorrhagic spots",
      "Shrunken kidneys with a leather grain appearance and white granules",
      "Massively enlarged kidneys with multiple fluid-filled cysts"
    ],
    answerIndex: 2,
    correctAnswerText: "Shrunken kidneys with a leather grain appearance and white granules"
  },
  {
    id: 4,
    image: "",
    question: "A 40-year-old male with a strong family history of premature myocardial infarction is found to have significantly elevated levels of Lipoprotein (a). How does this specific lipoprotein primarily increase his risk for atherothrombotic events?",
    options: [
      "Direct activation of platelets",
      "Promoting lipid accumulation in tunica media",
      "Decreased homocysteine clearance",
      "Competitive inhibition of plasminogen"
    ],
    answerIndex: 3,
    correctAnswerText: "Competitive inhibition of plasminogen"
  },
  {
    id: 5,
    image: "",
    question: "A 20-year-old male dies in a road traffic accident. Autopsy shows multiple flat, yellow patches measuring less than 1 mm in the aortic intima. What is the primary cellular component of this earliest atherosclerotic lesion?",
    options: [
      "Macrophages engorged with oxidized LDL",
      "Dense collagen deposited by TGF-beta",
      "Concentric hyperplastic smooth muscle cells",
      "Dystrophic calcium deposits within the media"
    ],
    answerIndex: 0,
    correctAnswerText: "Macrophages engorged with oxidized LDL"
  },
  {
    id: 6,
    image: "",
    question: "In the microscopic evaluation of an atherosclerotic plaque, which specific region is predominantly characterized by a high concentration of active inflammatory cells, including T lymphocytes and macrophages?",
    options: [
      "Fibrous cap",
      "Plaque shoulders",
      "Necrotic core",
      "Tunica adventitia"
    ],
    answerIndex: 1,
    correctAnswerText: "Plaque shoulders"
  },
  {
    id: 7,
    image: "",
    question: "A 65-year-old diabetic male undergoes a comprehensive angiogram to evaluate severe peripheral vascular disease. While widespread atheromatous plaques are noted across multiple vascular beds, one specific set of vessels remains remarkably clear. Which of the following blood vessels is classically spared from atherosclerotic plaque formation?",
    options: [
      "Abdominal aorta",
      "Internal carotid artery",
      "Renal artery",
      "Popliteal artery"
    ],
    answerIndex: 2,
    correctAnswerText: "Renal artery"
  },
  {
    id: 8,
    image: "",
    question: "A 65-year-old male develops a localized, pulsatile mass near the heart a few weeks after suffering a severe transmural myocardial infarction. Imaging confirms a pseudoaneurysm. Which of the following is the defining pathological characteristic of this lesion?",
    options: [
      "Dilated segment is covered by intact intima, media, and adventitia",
      "Pathogenesis involves an underlying fibrillin gene mutation",
      "Represents a true aneurysm primarily caused by fungal elements",
      "Tear in all three vessel layers contained by an extra-vascular hematoma"
    ],
    answerIndex: 3,
    correctAnswerText: "Tear in all three vessel layers contained by an extra-vascular hematoma"
  },
  {
    id: 9,
    image: "images/IMG_0402.jpeg",
    question: "A 60-year-old male with a history of an untreated sexually transmitted infection decades ago presents with marked dilation of the ascending aorta. Gross examination of the vessel intima reveals linear wrinkling. Which of the following is the primary pathogenesis underlying this specific vascular lesion?",
    options: [
      "Obliterative endarteritis of the vasa vasorum",
      "Macrophage secretion of matrix metalloproteinases",
      "Mutation in the fibrillin-1 gene causing medial necrosis",
      "Transmural tear contained by perivascular hematoma"
    ],
    answerIndex: 0,
    correctAnswerText: "Obliterative endarteritis of the vasa vasorum"
  },
  {
    id: 10,
    image: "images/IMG_0403.jpeg",
    question: "A 62-year-old hypertensive male presents to the emergency department with sudden-onset, severe \"tearing\" chest pain radiating to his scapula. Imaging confirms blood tracking within the wall of the ascending aorta. If a biopsy of this vessel wall is stained with Verhoeff-Van Gieson (VVG), which of the following is the classic histological finding?",
    options: [
      "Obliterative endarteritis of the vasa vasorum",
      "Cystic medial degeneration of elastin fibers",
      "Concentric hyperplasia of smooth muscle cells",
      "Amorphous pink subendothelial deposition"
    ],
    answerIndex: 1,
    correctAnswerText: "Cystic medial degeneration of elastin fibers"
  },
  {
    id: 11,
    image: "",
    question: "A patient with recurrent nasal mucosal ulcerations and rapidly progressive glomerulonephritis tests positive for c-ANCA on immunofluorescence. Which of the following is the specific target antigen for this specific autoantibody?",
    options: [
      "Myeloperoxidase",
      "Glomerular basement membrane",
      "Proteinase 3",
      "Rheumatoid factor"
    ],
    answerIndex: 2,
    correctAnswerText: "Proteinase 3"
  },
  {
    id: 12,
    image: "",
    question: "A 65-year-old female presents with a new-onset unilateral headache and severe jaw pain while chewing. On examination, her temporal artery is tender and nodular. A temporal artery biopsy is performed. Which of the following histopathological findings is considered pathognomonic for her condition?",
    options: [
      "Fibrinoid necrosis of the vessel wall",
      "Obliterative endarteritis of vasa vasorum",
      "Concentric hyperplasia of smooth muscle cells",
      "Fragmentation of the internal elastic lamina"
    ],
    answerIndex: 3,
    correctAnswerText: "Fragmentation of the internal elastic lamina"
  },
  {
    id: 13,
    image: "",
    question: "A 45-year-old male with chronic Hepatitis B presents with new-onset severe hypertension and a right wrist drop. A tissue biopsy reveals transmural segmental fibrinoid necrosis of a medium-sized artery. Which of the following is a characteristic feature of this specific vasculitis?",
    options: [
      "Sparing of the pulmonary arteries",
      "Vascular lesions strictly in the same stage of healing",
      "Strong association with c-ANCA positivity",
      "Predominant involvement of small capillaries"
    ],
    answerIndex: 0,
    correctAnswerText: "Sparing of the pulmonary arteries"
  },
  {
    id: 14,
    image: "images/IMG_0406.jpeg",
    question: "A 45-year-old male presents with recurrent severe sinusitis, chronic cough with hemoptysis, and a noticeable collapse of his nasal bridge. Intraoral examination reveals markedly hypertrophic, red, and friable gingiva. A chest radiograph demonstrates multiple bilateral cavitary lesions. If this patient tests positive for c-ANCA, which of the following is considered the classic Drug of Choice (DOC) for his condition?",
    options: [
      "High-dose Corticosteroids",
      "Cyclophosphamide",
      "Methotrexate",
      "Plasmapheresis"
    ],
    answerIndex: 1,
    correctAnswerText: "Cyclophosphamide"
  },
  {
    id: 15,
    image: "",
    question: "A 45-year-old male with a history of adult-onset asthma and marked peripheral eosinophilia rapidly develops fatal heart failure. Which of the following is the most likely pathological finding in his heart, representing the primary cause of death in this syndrome?",
    options: [
      "Transmural fibrinoid necrosis of coronary arteries",
      "Obliterative endarteritis of the vasa vasorum",
      "Eosinophilic infiltration causing Loeffler's endomyocarditis",
      "Non-caseating granulomas of the aortic valve"
    ],
    answerIndex: 2,
    correctAnswerText: "Eosinophilic infiltration causing Loeffler's endomyocarditis"
  },
  {
    id: 16,
    image: "images/IMG_0407.jpeg",
    question: "A 32-year-old male chain smoker presents with blackish discoloration of his toes and severe pain even at rest. A biopsy of the affected tibial artery is performed. Which of the following is the most characteristic histopathological finding expected in this patient's vessel?",
    options: [
      "Transmural segmental fibrinoid necrosis",
      "Fragmentation of the internal elastic lamina",
      "Eosinophilic infiltration of the vessel wall",
      "Intraluminal thrombus containing neutrophilic microabscesses"
    ],
    answerIndex: 3,
    correctAnswerText: "Intraluminal thrombus containing neutrophilic microabscesses"
  },
  {
    id: 17,
    image: "",
    question: "A 28-year-old male presents with recurrent oral aphthous ulcers occurring more than three times a year, painful genital ulcers, and blurred vision due to anterior uveitis. Genetic testing confirms HLA-B51 positivity. The pathogenesis of this specific syndrome primarily involves antibodies directed against which of the following?",
    options: [
      "Alpha-enolase of endothelial cells",
      "Proteinase 3 antigen of neutrophils",
      "Myeloperoxidase of neutrophils",
      "IgA immune complexes"
    ],
    answerIndex: 0,
    correctAnswerText: "Alpha-enolase of endothelial cells"
  },
  {
    id: 18,
    image: "",
    question: "A 55-year-old male suffers a sudden cardiac arrest and dies 2 hours after the onset of severe crushing chest pain. If a cardiac autopsy is performed, which of the following is the earliest finding expected on Light Microscopy (LM) of the affected myocardium?",
    options: [
      "Mitochondrial swelling",
      "Waviness of myocytes",
      "Brisk interstitial neutrophilic infiltrate",
      "Coagulative necrosis"
    ],
    answerIndex: 1,
    correctAnswerText: "Waviness of myocytes"
  },
  {
    id: 19,
    image: "images/IMG_0409.jpeg",
    question: "A 60-year-old male dies from a catastrophic ventricular free wall rupture exactly 5 days after suffering an acute myocardial infarction. Histological examination of the infarcted myocardium at this specific timeline will most likely show a predominance of which of the following?",
    options: [
      "Dense collagen deposition",
      "Brisk neutrophilic infiltrate",
      "Macrophage infiltration",
      "Granulation tissue"
    ],
    answerIndex: 2,
    correctAnswerText: "Macrophage infiltration"
  },
  {
    id: 20,
    image: "images/IMG_0410.jpeg",
    question: "A 55-year-old male presenting with an acute ST-elevation myocardial infarction (STEMI) receives prompt and successful thrombolytic therapy. However, a subsequent histological evaluation of the reperfused myocardium reveals intensely pink, transverse bands across the myocytes. What is the primary pathophysiological mechanism responsible for this specific finding?",
    options: [
      "Rapid influx of neutrophils into the ischemic zone",
      "Profound irreversible depletion of intracellular ATP",
      "Slow apoptotic breakdown of the sarcolemma",
      "ATP-mediated hypercontraction of calcium-loaded myocytes"
    ],
    answerIndex: 3,
    correctAnswerText: "ATP-mediated hypercontraction of calcium-loaded myocytes"
  },
  {
    id: 21,
    image: "images/IMG_0412.jpeg",
    question: "A 65-year-old male with long-standing chronic right heart failure develops profound congestive splenomegaly. Microscopic examination of his spleen reveals characteristic pink fibrotic nodules containing prominent calcium deposits. What are these specific structures called?",
    options: [
      "Gamma Gandy bodies",
      "Aschoff bodies",
      "Asteroid bodies",
      "Schaumann bodies"
    ],
    answerIndex: 0,
    correctAnswerText: "Gamma Gandy bodies"
  },
  {
    id: 22,
    image: "",
    question: "A 10-year-old child develops pancarditis and a new heart murmur three weeks after an untreated episode of severe sore throat. The primary pathogenesis of this specific cardiac condition is mediated by which of the following mechanisms?",
    options: [
      "Direct bacterial invasion of the heart valves",
      "Molecular mimicry involving Type II hypersensitivity",
      "Deposition of circulating immune complexes (Type III)",
      "Granulomatous Type IV hypersensitivity reaction"
    ],
    answerIndex: 1,
    correctAnswerText: "Molecular mimicry involving Type II hypersensitivity"
  },
  {
    id: 23,
    image: "",
    question: "A 45-year-old female with a childhood history of severe, untreated rheumatic fever presents with progressive dyspnea. Echocardiography reveals a severely stenotic mitral valve with a classic \"fish-mouth\" deformity. If a pathological examination of her heart were performed, which of the following specific findings is most likely to be observed in her left atrium?",
    options: [
      "Pathognomonic Aschoff nodules",
      "Central areas of fibrinoid necrosis",
      "Subendocardial thickening known as MacCallum plaques",
      "Activated macrophages with caterpillar chromatin"
    ],
    answerIndex: 2,
    correctAnswerText: "Subendocardial thickening known as MacCallum plaques"
  },
  {
    id: 24,
    image: "",
    question: "A 28-year-old female with Systemic Lupus Erythematosus (SLE) presents with a new heart murmur. Echocardiography reveals medium-sized, firm vegetations on the mitral valve. Which of the following is the most characteristic morphological feature of these specific vegetations?",
    options: [
      "Located exclusively along the line of valve closure",
      "Large, bulky, and highly friable septic masses",
      "Confined strictly to the upper surface of the cusp",
      "Present on both the upper and lower surfaces of the cusp"
    ],
    answerIndex: 3,
    correctAnswerText: "Present on both the upper and lower surfaces of the cusp"
  },
  {
    id: 25,
    image: "images/IMG_0413.jpeg",
    question: "A 19-year-old athlete collapses and dies suddenly during a football match. Autopsy reveals a significantly enlarged heart with prominent asymmetrical septal hypertrophy and a \"banana-shaped\" ventricular cavity. Which of the following is the most characteristic finding expected on light microscopy of this patient's myocardium?",
    options: [
      "Haphazard \"helter-skelter\" myofiber disarray",
      "Bizarre, hyperchromatic \"ninja star\" nuclei",
      "Granulomatous inflammation with giant cells",
      "Calcium-encrusted pink fibrotic nodules"
    ],
    answerIndex: 0,
    correctAnswerText: "Haphazard \"helter-skelter\" myofiber disarray"
  },
  {
    id: 26,
    image: "images/IMG_0414.jpeg",
    question: "A 60-year-old female presents with acute chest pain and dyspnea shortly after receiving news of her husband's sudden death. Echocardiography reveals characteristic apical ballooning of the left ventricle resembling a Japanese octopus pot. Which of the following is the most likely microscopic finding in this patient's myocardium?",
    options: [
      "Haphazard myofiber disarray",
      "Contraction band necrosis",
      "Bizarre hyperchromatic nuclei",
      "Aschoff nodules with central fibrinoid necrosis"
    ],
    answerIndex: 1,
    correctAnswerText: "Contraction band necrosis"
  },
  {
    id: 27,
    image: "images/IMG_0415.jpeg",
    question: "A 25-year-old male dies of sudden cardiac arrest. Autopsy of the right ventricle shows an alternating red and yellow \"Tabby Cat\" appearance due to extensive fibrofatty replacement. This pathology is primarily caused by a mutation in which of the following genes?",
    options: [
      "Titin gene",
      "Beta-myosin heavy chain gene",
      "Plakoglobin gene",
      "Fibrillin-1 gene"
    ],
    answerIndex: 2,
    correctAnswerText: "Plakoglobin gene"
  },
  {
    id: 28,
    image: "images/IMG_0420.jpeg",
    question: "A 22-year-old male with tightly coiled \"wooly\" hair and marked hyperkeratosis of the palms and soles presents with recurrent ventricular arrhythmias. Cardiac imaging reveals extensive fibrofatty replacement of the right ventricle. Which of the following is the most likely diagnosis?",
    options: [
      "Marfan Syndrome",
      "Buerger's Disease",
      "Takotsubo Cardiomyopathy",
      "Naxos Syndrome"
    ],
    answerIndex: 3,
    correctAnswerText: "Naxos Syndrome"
  },
  {
    id: 29,
    image: "",
    question: "A 78-year-old male presents with signs of severe diastolic heart failure. An endomyocardial biopsy is performed, revealing amorphous pink deposits in the interstitium that stain intensely with Congo red. Which of the following is the specific precursor protein responsible for this patient's cardiac condition?",
    options: [
      "Wild-type transthyretin",
      "Mutated transthyretin",
      "Immunoglobulin light chains",
      "Serum amyloid A"
    ],
    answerIndex: 0,
    correctAnswerText: "Wild-type transthyretin"
  },
  {
    id: 30,
    image: "",
    question: "A 2-year-old child is found to have a primary cardiac tumor located in the left ventricle. Histopathological examination of the biopsy reveals characteristic \"spider cells\" with cytoplasmic extensions radiating from the nucleus to the cell periphery. This specific cardiac tumor is most strongly associated with which of the following?",
    options: [
      "PRKAR1A gene mutation",
      "Tuberous Sclerosis Complex",
      "Carney's Triad",
      "LAMB syndrome"
    ],
    answerIndex: 1,
    correctAnswerText: "Tuberous Sclerosis Complex"
  },
  {
    id: 31,
    image: "images/IMG_0422.jpeg",
    question: "A patient with a metastatic gastrointestinal tumor develops severe tricuspid regurgitation. Gross examination of the primary bowel tumor reveals a classic \"collar button\" lesion. Which of the following best explains why this patient's left-sided heart valves are typically spared from damage?",
    options: [
      "Left-sided valves intrinsically lack serotonin receptors",
      "Tumor emboli cannot traverse the pulmonary capillary bed",
      "Serotonin is extensively metabolized by the pulmonary vascular bed",
      "Rapid renal excretion of 5-HIAA prevents left-sided damage"
    ],
    answerIndex: 2,
    correctAnswerText: "Serotonin is extensively metabolized by the pulmonary vascular bed"
  },
  {
    id: 32,
    image: "images/IMG_0424.jpeg",
    question: "An infant presents with a bright red, raised superficial vascular lesion on the face that appeared shortly after birth. Biopsy reveals small, thin capillaries separated by a pink stroma. Which of the following is a characteristic feature of this specific lesion?",
    options: [
      "It is typically found in deep visceral tissues like the liver",
      "It requires mandatory surgical excision for complete resolution",
      "It is composed of large, dilated cystic spaces with scant stroma",
      "It will predictably undergo spontaneous remission over several years"
    ],
    answerIndex: 3,
    correctAnswerText: "It will predictably undergo spontaneous remission over several years"
  },
  {
    id: 33,
    image: "images/IMG_0426.jpeg",
    question: "A 28-year-old pregnant female presents with a rapidly growing, easily bleeding mass on her gingiva. Biopsy reveals a proliferation of small capillaries arranged in distinct lobules. What is the most accurate pathological term for this specific lesion?",
    options: [
      "Lobular capillary hemangioma",
      "True pyogenic infection",
      "Granulomatous inflammation",
      "Cavernous hemangioma"
    ],
    answerIndex: 0,
    correctAnswerText: "Lobular capillary hemangioma"
  },
  {
    id: 34,
    image: "images/IMG_0428.jpeg",
    question: "A 35-year-old female presents with an exquisitely tender, bluish nodule beneath her thumbnail. She reports that the pain is precisely localized and becomes agonizingly severe when she washes her hands in cold water. Histopathological examination of the excised lesion reveals distinct blood vessels surrounded by a collar of uniform, round to oval cells. This tumor most likely originates from which of the following normal anatomical structures?",
    options: [
      "Deep dermal nerve endings",
      "Thermoregulatory bodies",
      "Modified eccrine sweat glands",
      "Subcutaneous adipocytes"
    ],
    answerIndex: 1,
    correctAnswerText: "Thermoregulatory bodies"
  },
  {
    id: 35,
    image: "",
    question: "A 7-year-old child from Sub-Saharan Africa presents with generalized massive lymphadenopathy but minimal skin lesions. A biopsy of the lymph node reveals spindle cells forming slit-like vascular spaces. Which of the following is the most likely variant of this tumor?",
    options: [
      "Classical type",
      "Iatrogenic type",
      "Endemic type",
      "HIV-associated type"
    ],
    answerIndex: 2,
    correctAnswerText: "Endemic type"
  },
  {
    id: 36,
    image: "images/IMG_0430.jpeg",
    question: "A patient with untreated lobar pneumonia reaches the 5th to 7th day of illness. Which of the following is the hallmark histological finding during this specific stage?",
    options: [
      "Engorged capillaries with bacteria-rich fluid",
      "Massive infiltration of intact RBCs and neutrophils",
      "Complete clearance of alveolar exudate by macrophages",
      "Fibrin-rich exudate with disintegrated RBCs"
    ],
    answerIndex: 3,
    correctAnswerText: "Fibrin-rich exudate with disintegrated RBCs"
  },
  {
    id: 37,
    image: "images/IMG_0433.jpeg",
    question: "A patient with chronic respiratory symptoms undergoes a lung biopsy that reveals distinct granulomatous inflammation. To differentiate this from Tuberculosis and Sarcoidosis, a detailed microscopic examination is performed. Which of the following specific histological findings definitively points toward Histoplasmosis?",
    options: [
      "3-5 um dot-shaped yeasts inside macrophages",
      "Broad-based budding yeasts in the interstitium",
      "Large spherules heavily packed with endospores",
      "Narrow-based budding yeasts with a thick capsule"
    ],
    answerIndex: 0,
    correctAnswerText: "3-5 um dot-shaped yeasts inside macrophages"
  },
  {
    id: 38,
    image: "",
    question: "Reid index in Chronic Bronchitis is typically:",
    options: [
      "< 0.4",
      "> 0.5",
      "= 0.4",
      "< 0.3"
    ],
    answerIndex: 1,
    correctAnswerText: "> 0.5"
  },
  {
    id: 39,
    image: "",
    question: "Alpha-1 antitrypsin deficiency is classically associated with which of the following?",
    options: [
      "Centriacinar emphysema",
      "Paraseptal emphysema",
      "Panacinar emphysema",
      "Irregular emphysema"
    ],
    answerIndex: 2,
    correctAnswerText: "Panacinar emphysema"
  },
  {
    id: 40,
    image: "images/IMG_0435.jpeg",
    question: "Charcot-Leyden crystals seen in the sputum of an asthmatic patient are primarily composed of which of the following?",
    options: [
      "Spiral mucous plugs",
      "Major basic protein",
      "Shed epithelial cells",
      "Galectin-10"
    ],
    answerIndex: 3,
    correctAnswerText: "Galectin-10"
  },
  {
    id: 41,
    image: "",
    question: "A 4-year-old child presents with a classic triad of calvarial lytic skull lesions, exophthalmos, and diabetes insipidus. A tissue biopsy shows a proliferation of histiocytes with prominent nuclear grooves in a background of abundant eosinophils. Which of the following is the absolute most specific immunohistochemical marker for this condition, known specifically for staining its pathognomonic electron-microscopic structures?",
    options: [
      "CD207 (Langerin)",
      "CD1a",
      "S-100",
      "CD30"
    ],
    answerIndex: 0,
    correctAnswerText: "CD207 (Langerin)"
  },
  {
    id: 42,
    image: "",
    question: "Carbon-laden macrophages seen on light microscopy in a patient with anthracosis are known as:",
    options: [
      "Dust cells",
      "Heart failure cells",
      "Langhans cells",
      "Foam cells"
    ],
    answerIndex: 0,
    correctAnswerText: "Dust cells"
  },
  {
    id: 43,
    image: "",
    question: "A 45-year-old sandblaster presents with progressive dyspnea. Chest X-ray reveals upper lobe nodules and egg-shell calcification of hilar lymph nodes. Which of the following is the characteristic finding on polarizing microscopy of his lung biopsy?",
    options: [
      "Ferruginous bodies",
      "Positively birefringent particles",
      "Negatively birefringent needles",
      "Asteroid bodies"
    ],
    answerIndex: 1,
    correctAnswerText: "Positively birefringent particles"
  },
  {
    id: 44,
    image: "",
    question: "A 65-year-old retired shipyard worker presents with a solitary lung mass on a routine chest radiograph. He has a history of long-term occupational exposure to asbestos. Which of the following is the most common malignancy associated with this patient's exposure?",
    options: [
      "Squamous cell carcinoma",
      "Malignant mesothelioma",
      "Adenocarcinoma of the lung",
      "Small cell carcinoma"
    ],
    answerIndex: 2,
    correctAnswerText: "Adenocarcinoma of the lung"
  },
  {
    id: 45,
    image: "images/IMG_0436.jpeg",
    question: "A 35-year-old female presents with bilateral hilar lymphadenopathy. Lymph node biopsy shows 'naked' non-caseating granulomas. The pathogenesis of this condition is primarily driven by an exaggerated expansion of which of the following?",
    options: [
      "CD4+ Th2 cells",
      "CD8+ cytotoxic T cells",
      "Monoclonal B cells",
      "CD4+ Th1 cells"
    ],
    answerIndex: 3,
    correctAnswerText: "CD4+ Th1 cells"
  },
  {
    id: 46,
    image: "images/IMG_0437.jpeg",
    question: "A biopsy from a patient reveals granulomatous inflammation. Microscopic examination shows extracellular pink, star-shaped inclusions. Which of the following is the most likely diagnosis?",
    options: [
      "Sporotrichosis",
      "Sarcoidosis",
      "Asbestosis",
      "Tuberculosis"
    ],
    answerIndex: 0,
    correctAnswerText: "Sporotrichosis"
  },
  {
    id: 47,
    image: "",
    question: "A 32-year-old female presents with fever, eye pain, and bilateral swelling of the parotid glands. Neurological examination reveals a left-sided lower motor neuron facial nerve palsy. This clinical presentation is classically known as:",
    options: [
      "Lofgren syndrome",
      "Heerfordt syndrome",
      "Ramsay Hunt syndrome",
      "Sjogren syndrome"
    ],
    answerIndex: 1,
    correctAnswerText: "Heerfordt syndrome"
  },
  {
    id: 48,
    image: "",
    question: "A 45-year-old pigeon breeder presents with chronic cough and progressive dyspnea. Lung biopsy reveals interstitial fibrosis and non-caseating granulomas. Despite the hypersensitivity nature of this disease, which of the following is characteristically absent in the inflammatory infiltrate?",
    options: [
      "CD4+ T cells",
      "Epithelioid macrophages",
      "Eosinophils",
      "Multinucleated giant cells"
    ],
    answerIndex: 2,
    correctAnswerText: "Eosinophils"
  },
  {
    id: 49,
    image: "images/IMG_0438.jpeg",
    question: "A 40-year-old polytrauma patient develops severe hypoxemia unresponsive to oxygen therapy. Lung biopsy demonstrates diffuse alveolar damage with pink hyaline membranes lining the alveolar spaces. Which of the following is a primary cellular component of these membranes?",
    options: [
      "Hyperplastic Type II pneumocytes",
      "Intact Type I pneumocytes",
      "Proliferating fibroblasts",
      "Necrotic epithelial cells"
    ],
    answerIndex: 3,
    correctAnswerText: "Necrotic epithelial cells"
  },
  {
    id: 50,
    image: "images/IMG_0439.jpeg",
    question: "A 40-year-old male presents with progressive dyspnea and expectoration of gelatinous sputum. Lung biopsy reveals alveoli packed with amorphous, PAS-positive pink material. The acquired form of this condition is most commonly caused by autoantibodies directed against which of the following?",
    options: [
      "Granulocyte-macrophage colony-stimulating factor",
      "Alpha-1 antitrypsin",
      "Major basic protein",
      "Transforming growth factor-beta"
    ],
    answerIndex: 0,
    correctAnswerText: "Granulocyte-macrophage colony-stimulating factor"
  },
  {
    id: 51,
    image: "images/IMG_0442.jpeg",
    question: "A 60-year-old chronic smoker presents with a central lung mass and hypercalcemia. Biopsy reveals malignant cells with keratin pearls. Which immunohistochemical marker is most specific for this diagnosis?",
    options: [
      "TTF-1",
      "p40",
      "Chromogranin",
      "Calretinin"
    ],
    answerIndex: 1,
    correctAnswerText: "p40"
  },
  {
    id: 52,
    image: "",
    question: "A 55-year-old male with a 30-pack-year smoking history is diagnosed with a peripheral lung mass. Biopsy confirms adenocarcinoma. Genetic profiling is requested. Which of the following mutations, if present, strongly correlates with his smoking history and predicts a poor prognosis?",
    options: [
      "EGFR",
      "p53",
      "KRAS",
      "ALK-1"
    ],
    answerIndex: 2,
    correctAnswerText: "KRAS"
  },
  {
    id: 53,
    image: "images/IMG_0443.jpeg",
    question: "A 65-year-old heavy smoker presents with proximal muscle weakness and laboratory findings of severe hyponatremia. Lung biopsy reveals small cells with scant cytoplasm and 'salt and pepper' chromatin. Which of the following is a characteristic microscopic finding in this tumor?",
    options: [
      "Intercellular bridges",
      "Mucin-filled glandular spaces",
      "Long and slender microvilli",
      "Perivascular basophilic lysed DNA"
    ],
    answerIndex: 3,
    correctAnswerText: "Perivascular basophilic lysed DNA"
  },
  {
    id: 54,
    image: "images/IMG_0445.jpeg",
    question: "A 72-year-old retired shipyard worker presents with progressive dyspnea and chest pain. Imaging shows a thick, firm, white pleural tumor tissue that completely ensheathes the right lung. Biopsy reveals a pleural malignancy. Which of the following immunohistochemical markers is specifically positive for the malignant nature of this tumor?",
    options: [
      "BAP-1",
      "Calretinin",
      "TTF-1",
      "p40"
    ],
    answerIndex: 0,
    correctAnswerText: "BAP-1"
  },
  {
    id: 55,
    image: "",
    question: "A 10-year-old boy presents with cola-colored urine, oliguria, and a blood pressure of 140/90 mmHg. Urine microscopy reveals RBC casts. The primary site of glomerular injury leading to this specific clinical presentation is:",
    options: [
      "Visceral epithelial cells",
      "Fenestrated endothelial cells",
      "Parietal epithelial cells",
      "Mesangial matrix"
    ],
    answerIndex: 1,
    correctAnswerText: "Fenestrated endothelial cells"
  },
  {
    id: 56,
    image: "",
    question: "A 6-year-old child presents to the clinic with severe periorbital and pedal edema. Laboratory investigations reveal a 24-hour urine protein excretion of 4.5 gm/day and marked hypoalbuminemia. The primary site of cellular injury in the glomerulus responsible for this condition is the:",
    options: [
      "Parietal epithelial cells",
      "Fenestrated endothelial cells",
      "Visceral epithelial cells",
      "Mesangial matrix"
    ],
    answerIndex: 2,
    correctAnswerText: "Visceral epithelial cells"
  },
  {
    id: 57,
    image: "",
    question: "A 40-year-old patient with nephrotic syndrome undergoes a renal biopsy. To optimally visualize the structural details of the glomerular basement membrane (GBM) under light microscopy, which of the following is considered the most specific stain?",
    options: [
      "Congo red",
      "Masson's trichrome",
      "Periodic Acid-Schiff (PAS)",
      "Silver stain"
    ],
    answerIndex: 3,
    correctAnswerText: "Silver stain"
  },
  {
    id: 58,
    image: "",
    question: "A 12-year-old boy presents with painless hematuria and bilateral sensorineural hearing loss. Family history reveals his maternal uncle suffers from end-stage renal disease. Genetic testing is most likely to reveal a mutation in which of the following genes?",
    options: [
      "COL4A3",
      "COL4A4",
      "COL1A1",
      "COL4A5"
    ],
    answerIndex: 3,
    correctAnswerText: "COL4A5"
  },
  {
    id: 59,
    image: "images/IMG_0446.jpeg",
    question: "A 15-year-old boy presents with microscopic hematuria, bilateral anterior lenticonus, and sensorineural hearing loss. What is the characteristic finding on the primary diagnostic modality for his renal condition?",
    options: [
      "Basket weave appearance of the basement membrane",
      "Subepithelial electron-dense humps",
      "Uniform thickening of the basement membrane",
      "Mesangial electron-dense deposits"
    ],
    answerIndex: 0,
    correctAnswerText: "Basket weave appearance of the basement membrane"
  },
  {
    id: 60,
    image: "images/IMG_0447.jpeg",
    question: "A 22-year-old female is evaluated for isolated asymptomatic microscopic hematuria. She has a strong family history of hematuria but no family history of renal failure, deafness, or visual problems. Electron microscopy of a renal biopsy reveals uniform thinning of the glomerular basement membrane measuring 180 nm. A mutation involving which of the following collagen chains is most likely responsible?",
    options: [
      "Alpha-3 chain of Type IV collagen",
      "Alpha-4 chain of Type IV collagen",
      "Alpha-5 chain of Type IV collagen",
      "Alpha-1 chain of Type I collagen"
    ],
    answerIndex: 1,
    correctAnswerText: "Alpha-4 chain of Type IV collagen"
  },
  {
    id: 61,
    image: "",
    question: "A 5-year-old boy develops severe periorbital edema two weeks after a mild viral illness. Urinalysis shows massive proteinuria. Blood tests reveal iron deficiency anemia that has been completely unresponsive to iron supplementation. Which of the following best explains his refractory anemia?",
    options: [
      "Hepcidin-induced block of iron absorption",
      "Occult gastrointestinal bleeding",
      "Urinary loss of transferrin",
      "Autoimmune destruction of red blood cells"
    ],
    answerIndex: 2,
    correctAnswerText: "Urinary loss of transferrin"
  },
  {
    id: 62,
    image: "",
    question: "A 55-year-old male with a history of colon carcinoma presents with severe pedal edema and massive proteinuria. During his hospital stay, he develops a deep vein thrombosis (DVT). Which of the following is the most likely mechanism for his hypercoagulable state?",
    options: [
      "Uncontrolled platelet hyperaggregation",
      "Overproduction of hepatic clotting factors",
      "Massive urinary excretion of transferrin",
      "Urinary loss of Antithrombin III"
    ],
    answerIndex: 3,
    correctAnswerText: "Urinary loss of Antithrombin III"
  },
  {
    id: 63,
    image: "",
    question: "A neonate presents with massive proteinuria and severe edema within the first week of life. Genetic analysis reveals a mutation in the NPHS1 gene on chromosome 19. This condition is primarily caused by a deficiency of which critical slit diaphragm protein?",
    options: [
      "Nephrin",
      "Podocin",
      "Alpha-actinin 4",
      "TRPC6"
    ],
    answerIndex: 0,
    correctAnswerText: "Nephrin"
  },
  {
    id: 64,
    image: "images/IMG_0448.jpeg",
    question: "A renal biopsy of a patient with mixed nephritic-nephrotic presentation shows a \"tram-track\" appearance on silver stain. If the patient is diagnosed with MPGN Type II, what is the characteristic finding on electron microscopy?",
    options: [
      "Subepithelial humps",
      "Intramembranous ribbon-like deposits",
      "Subendothelial deposits",
      "Mesangial deposits"
    ],
    answerIndex: 1,
    correctAnswerText: "Intramembranous ribbon-like deposits"
  },
  {
    id: 65,
    image: "images/IMG_0449.jpeg",
    question: "A 55-year-old patient with a 15-year history of poorly controlled diabetes mellitus undergoes a renal biopsy for nephrotic syndrome. Which of the following is the most characteristic histological lesion found in this condition?",
    options: [
      "Thickening of the basement membrane",
      "Diffuse glomerulosclerosis",
      "Nodular glomerulosclerosis",
      "Armani-Ebstein cells"
    ],
    answerIndex: 2,
    correctAnswerText: "Nodular glomerulosclerosis"
  },
  {
    id: 66,
    image: "images/IMG_0450.jpeg",
    question: "A 24-year-old female with a malar rash develops acute renal failure and heavy proteinuria. Renal biopsy light microscopy reveals prominent \"wire loop\" lesions in the glomeruli. Which of the following is the characteristic finding on immunofluorescence for this patient's condition?",
    options: [
      "Linear IgG deposition along the basement membrane",
      "Granular isolated C3 deposition",
      "Mesangial IgA and C3 deposition",
      "Full house effect with multiple immunoglobulins and complements"
    ],
    answerIndex: 3,
    correctAnswerText: "Full house effect with multiple immunoglobulins and complements"
  },
  {
    id: 67,
    image: "images/IMG_0452.jpeg",
    question: "A 45-year-old female with a history of recurrent nephrolithiasis presents with worsening renal function. Imaging reveals bilaterally small, asymmetrically scarred kidneys with markedly blunted calyces. Renal biopsy is most likely to show which of the following characteristic microscopic features?",
    options: [
      "Thyroidization of tubules",
      "Nodular glomerulosclerosis",
      "Fibrinoid necrosis of arterioles",
      "Crescent formation in Bowman space"
    ],
    answerIndex: 0,
    correctAnswerText: "Thyroidization of tubules"
  },
  {
    id: 68,
    image: "images/IMG_0453.jpeg",
    question: "A 55-year-old female undergoes nephrectomy for a suspected renal tumor. Gross examination reveals the renal parenchyma is extensively replaced by large yellow nodules. Microscopic evaluation demonstrates an abundance of foamy macrophages admixed with lymphocytes. This pathology is most strongly associated with chronic infection by which of the following organisms?",
    options: [
      "Escherichia coli",
      "Proteus species",
      "Mycobacterium tuberculosis",
      "Schistosoma haematobium"
    ],
    answerIndex: 1,
    correctAnswerText: "Proteus species"
  },
  {
    id: 69,
    image: "images/IMG_0455.jpeg",
    question: "A 22-year-old athlete presents with mild dehydration following a marathon. Urinalysis reveals faintly visible casts with no cellular components. These casts are primarily composed of a specific protein that is secreted by which of the following nephron segments?",
    options: [
      "Proximal convoluted tubule",
      "Thin descending limb of Loop of Henle",
      "Thick ascending limb of Loop of Henle",
      "Collecting duct"
    ],
    answerIndex: 2,
    correctAnswerText: "Thick ascending limb of Loop of Henle"
  },
  {
    id: 70,
    image: "images/IMG_0457.jpeg",
    question: "A 65-year-old male develops oliguria and a sharply rising serum creatinine three days after experiencing severe prolonged hemorrhagic shock following a motor vehicle accident. Urinalysis reveals numerous pigmented, granular casts. These specific casts are primarily composed of which of the following?",
    options: [
      "Tamm-Horsfall mucoprotein",
      "Aggregated dysmorphic red blood cells",
      "Lipid-laden macrophages",
      "Necrotic tubular epithelial cells"
    ],
    answerIndex: 3,
    correctAnswerText: "Necrotic tubular epithelial cells"
  },
  {
    id: 71,
    image: "images/IMG_0459.jpeg",
    question: "A 60-year-old male with long-standing uncontrolled diabetes presents with end-stage renal disease. Urinalysis demonstrates broad, acellular casts with distinct sharp cracks at their edges. These specific casts are most indicative of which of the following conditions?",
    options: [
      "Chronic renal failure",
      "Renal amyloidosis",
      "Acute tubular necrosis",
      "Severe dehydration"
    ],
    answerIndex: 0,
    correctAnswerText: "Chronic renal failure"
  },
  {
    id: 72,
    image: "images/IMG_0461.jpeg",
    question: "A 6-year-old boy presents with generalized severe edema and massive proteinuria. Urinalysis reveals the presence of specific casts. When these casts are examined under polarized light microscopy, which of the following characteristic appearances is most likely to be seen?",
    options: [
      "Apple-green birefringence",
      "Maltese cross appearance",
      "Distinct multi-lobed nuclei",
      "Faintly visible outlines"
    ],
    answerIndex: 1,
    correctAnswerText: "Maltese cross appearance"
  },
  {
    id: 73,
    image: "images/IMG_0463.jpeg",
    question: "A 35-year-old female with recurrent urinary tract infections presents with flank pain. Imaging reveals a large staghorn calculus filling the renal pelvis. Urinalysis shows highly alkaline urine and distinct \"coffin lid\" shaped crystals. The offending organism promotes this specific stone formation by producing an enzyme that breaks down urea into which of the following?",
    options: [
      "Uric acid",
      "Citrate",
      "Ammonia",
      "Oxalate"
    ],
    answerIndex: 2,
    correctAnswerText: "Ammonia"
  },
  {
    id: 74,
    image: "images/IMG_0465.jpeg",
    question: "A 50-year-old chronic alcoholic develops fulminant hepatic failure and hepatic encephalopathy. Urinalysis reveals prominent yellowish-brown spheroids with a distinctive concentric, lamellated appearance. Which of the following specific crystals are most likely present in this patient's urine?",
    options: [
      "Calcium oxalate",
      "Triple phosphate",
      "Cystine",
      "Leucine"
    ],
    answerIndex: 3,
    correctAnswerText: "Leucine"
  },
  {
    id: 75,
    image: "",
    question: "A 45-year-old male presents with hypertension and bilateral flank fullness. Imaging reveals bilaterally enlarged kidneys with distorted outlines due to multiple large round cysts over the surface. Genetic testing confirms a mutation in the PKD-1 gene. Which of the following is the most common extra-renal manifestation of this disease?",
    options: [
      "Liver cysts",
      "Berry aneurysms",
      "Subarachnoid hemorrhage",
      "Splenic cysts"
    ],
    answerIndex: 0,
    correctAnswerText: "Liver cysts"
  },
  {
    id: 76,
    image: "",
    question: "A neonate presents with bilateral abdominal masses and respiratory distress shortly after birth. Ultrasonography reveals bilaterally massively enlarged kidneys with radially arranged cysts and completely smooth renal outlines. Genetic analysis is most likely to reveal a defect in which of the following proteins?",
    options: [
      "Polycystin-1",
      "Fibrocystin",
      "Nephrin",
      "Alpha-actinin-4"
    ],
    answerIndex: 1,
    correctAnswerText: "Fibrocystin"
  },
  {
    id: 77,
    image: "",
    question: "A 30-year-old patient presents with profound polyuria and severe salt wasting. Ultrasound evaluation reveals bilaterally shrunken kidneys, but surprisingly, no cysts are visualized. A genetic defect in the MCKD1 gene is identified. This condition is primarily associated with a mutation affecting which of the following proteins?",
    options: [
      "Polycystin-1",
      "Fibrocystin",
      "Uromodulin",
      "Nephrin"
    ],
    answerIndex: 2,
    correctAnswerText: "Uromodulin"
  },
  {
    id: 78,
    image: "images/IMG_0467.jpeg",
    question: "A 25-year-old female with a history of recurrent seizures and facial angiofibromas presents with sudden onset flank pain due to a bleeding renal mass. Biopsy of the mass reveals an admixture of thick-walled blood vessels, smooth muscle bundles, and mature adipose tissue. This tumor belongs to a family of lesions that are characteristically positive for which of the following immunohistochemical markers?",
    options: [
      "Synaptophysin",
      "Calretinin",
      "Cytokeratin",
      "HMB-45"
    ],
    answerIndex: 3,
    correctAnswerText: "HMB-45"
  },
  {
    id: 79,
    image: "images/IMG_0469.jpeg",
    question: "A 40-year-old male with a known history of cerebellar hemangioblastoma presents with painless hematuria. Imaging reveals a unifocal, bright yellow mass at the upper pole of his right kidney. Biopsy demonstrates cells with abundant clear cytoplasm. The pathogenesis of this tumor is most directly linked to a primary genetic defect on which of the following?",
    options: [
      "Chromosome 3p",
      "Chromosome 7",
      "Fumarate Hydratase gene",
      "MET oncogene"
    ],
    answerIndex: 0,
    correctAnswerText: "Chromosome 3p"
  },
  {
    id: 80,
    image: "",
    question: "A 2-year-old child presents with a painless abdominal mass. Further evaluation reveals ambiguous genitalia and early-onset renal failure. Genetic testing confirms a specific mutation in the WT1 gene. Which of the following syndromes does this classic triad most likely describe?",
    options: [
      "WAGR syndrome",
      "Denys-Drash syndrome",
      "Beckwith-Wiedemann syndrome",
      "Li-Fraumeni syndrome"
    ],
    answerIndex: 1,
    correctAnswerText: "Denys-Drash syndrome"
  },
  {
    id: 81,
    image: "",
    question: "A 3-year-old child presents with an irregular abdominal mass that crosses the midline. His mother reports recent abnormal, chaotic eye and limb movements. On examination, his blood pressure is normal, and abdominal imaging reveals prominent calcifications within the non-encapsulated mass. A biopsy of this lesion is most likely to demonstrate which of the following characteristic microscopic findings?",
    options: [
      "Triphasic tumor with epithelial, stromal, and blastemal cells",
      "True rosettes with a clear, empty central lumen",
      "Homer Wright pseudorosettes with a central pink lumen",
      "Perivascular pseudorosettes surrounding a blood vessel"
    ],
    answerIndex: 2,
    correctAnswerText: "Homer Wright pseudorosettes with a central pink lumen"
  },
  {
    id: 82,
    image: "",
    question: "A 50-year-old female undergoes a core needle biopsy for a suspicious breast lump. Microscopic examination confirms an invasive carcinoma. Which of the following histological features is the definitive hallmark distinguishing this invasive malignancy from a benign or in-situ lesion?",
    options: [
      "Intense estrogen receptor positivity",
      "Amplification of the Her-2-Neu gene",
      "Proliferation of the inner epithelial layer",
      "Complete loss of the myoepithelial layer"
    ],
    answerIndex: 3,
    correctAnswerText: "Complete loss of the myoepithelial layer"
  },
  {
    id: 83,
    image: "images/IMG_0471.jpeg",
    question: "A 68-year-old female undergoes a breast biopsy for a slow-growing palpable mass. Histopathology reveals clusters of malignant cells floating in extensive, pale, clear areas. The pathologist diagnoses it as Colloid Carcinoma. Which of the following microscopic features specifically indicates a low-grade variant of this tumor?",
    options: [
      "Abundant mucin pools with sparse tumor cells",
      "High tumor cellularity with minimal extracellular mucin",
      "Complete loss of the outer myoepithelial layer",
      "Prominent thyroidization of the surrounding ducts"
    ],
    answerIndex: 0,
    correctAnswerText: "Abundant mucin pools with sparse tumor cells"
  },
  {
    id: 84,
    image: "",
    question: "A 35-year-old female with a known BRCA1 mutation presents with a well-circumscribed breast mass. Core biopsy reveals a high-grade tumor that is negative for ER, PR, and HER2 (Triple Negative). Which of the following is the characteristic histological hallmark of this specific breast cancer subtype?",
    options: [
      "Extensive extracellular mucin pools",
      "Prominent lymphoplasmacytic infiltrate",
      "Single-file arrangement of tumor cells",
      "Tumor emboli within dermal lymphatics"
    ],
    answerIndex: 1,
    correctAnswerText: "Prominent lymphoplasmacytic infiltrate"
  },
  {
    id: 85,
    image: "images/IMG_0472.jpeg",
    question: "A 35-year-old male with a history of surgically corrected cryptorchidism presents with a painless, palpable right testicular mass. Radical orchiectomy is performed. Gross examination reveals a uniform, lobulated, grey-white tumor strictly confined within the tunica albuginea, with no areas of hemorrhage or necrosis. If a Fine Needle Aspiration Cytology (FNAC) had been performed on this mass, which of the following characteristic findings would most likely be seen?",
    options: [
      "Call-Exner bodies",
      "Schiller-Duval bodies",
      "Tigeroid background",
      "Reinke crystals"
    ],
    answerIndex: 2,
    correctAnswerText: "Tigeroid background"
  },
  {
    id: 86,
    image: "images/IMG_0473.jpeg",
    question: "A 28-year-old male undergoes a radical orchiectomy for a heterogeneous testicular mass. Gross sectioning reveals a cystic tumor containing distinct tufts of hair, sebaceous material, and tooth-like structures. The pathologist diagnoses it as a post-pubertal immature teratoma. The histological grading of this specific tumor is primarily determined by quantifying the amount of which of the following tissues?",
    options: [
      "Mature hyaline cartilage",
      "Stratified squamous epithelium",
      "Functional thyroid follicles",
      "Immature neuroepithelium"
    ],
    answerIndex: 3,
    correctAnswerText: "Immature neuroepithelium"
  },
  {
    id: 87,
    image: "images/IMG_0474.jpeg",
    question: "A 45-year-old female presents with a solitary, painless neck swelling. Fine Needle Aspiration Cytology (FNAC) of the nodule reveals monotonous sheets of follicular cells arranged in microfollicles. The pathologist reports it as a \"Follicular Neoplasm.\" Which of the following is the absolute required finding on a subsequent excision biopsy to definitively diagnose this lesion as a Follicular Carcinoma rather than a benign Adenoma?",
    options: [
      "Transmural capsular invasion",
      "Optically clear nuclei",
      "Extensive Hurthle cell change",
      "Thick chewing gum colloid"
    ],
    answerIndex: 0,
    correctAnswerText: "Transmural capsular invasion"
  },
  {
    id: 88,
    image: "images/IMG_0475.jpeg",
    question: "A 42-year-old male with a family history of pheochromocytoma presents with a thyroid nodule. Biopsy reveals sheets of cells in an amorphous pink stroma that exhibits apple-green birefringence under polarized light. Despite massively elevated levels of the primary tumor marker, the patient's serum calcium levels remain completely normal. Which of the following best explains the absence of hypocalcemia in this patient?",
    options: [
      "Rapid renal excretion of the hormone",
      "The secreted hormone is misfolded and non-functional",
      "Secondary compensatory hyperparathyroidism",
      "Ectopic production of parathyroid hormone"
    ],
    answerIndex: 1,
    correctAnswerText: "The secreted hormone is misfolded and non-functional"
  },
  {
    id: 89,
    image: "images/IMG_0476.jpeg",
    question: "A 70-year-old male with an indurated prostate on digital rectal examination undergoes a needle biopsy. Histopathology of the peripheral zone confirms adenocarcinoma. The predominant area shows neoplastic cells forming irregular, fused glands with a distinct cribriform architecture. According to the Gleason system, this specific histological appearance corresponds to which pattern?",
    options: [
      "Pattern 2",
      "Pattern 3",
      "Pattern 4",
      "Pattern 5"
    ],
    answerIndex: 2,
    correctAnswerText: "Pattern 4"
  },
  {
    id: 90,
    image: "images/IMG_0477.jpeg",
    question: "A 65-year-old male presents with sudden onset seizures and severe headache. MRI reveals a large, irregular frontal lobe mass that crosses the midline through the corpus callosum. A biopsy is performed. Which of the following is the characteristic light microscopy finding of this specific tumor?",
    options: [
      "Eosinophilic pink rod-shaped inclusions",
      "True cellular palisading without central necrosis",
      "Eosinophilic granular structures called Mulberry bodies",
      "Pseudopalisading cells surrounding serpentine necrosis"
    ],
    answerIndex: 3,
    correctAnswerText: "Pseudopalisading cells surrounding serpentine necrosis"
  },
  {
    id: 91,
    image: "images/IMG_0478.jpeg",
    question: "A 45-year-old male presents with progressive unilateral sensorineural hearing loss, vertigo, and headache. MRI reveals an enhancing mass at the cerebellopontine angle. Biopsy demonstrates a biphasic tumor with distinct hypercellular areas exhibiting true nuclear palisading. Which of the following characteristic structures is most likely present in these hypercellular regions?",
    options: [
      "Verocay bodies",
      "Rosenthal fibers",
      "Homer Wright rosettes",
      "Serpentine pseudopalisades"
    ],
    answerIndex: 0,
    correctAnswerText: "Verocay bodies"
  },
  {
    id: 92,
    image: "images/IMG_0479.jpeg",
    question: "A 48-year-old male presents with new-onset seizures. Imaging reveals a prominently calcified mass in the frontal lobe. Gross resection yields a chalky-white material. Microscopic examination of the tumor shows sheets of cells with clear perinuclear halos surrounded by a delicate, branching vascular network. Which of the following molecular findings is definitively diagnostic for this specific neoplasm?",
    options: [
      "EGFR amplification",
      "1p/19q codeletion",
      "BRAF gene fusion",
      "N-MYC amplification"
    ],
    answerIndex: 1,
    correctAnswerText: "1p/19q codeletion"
  },
  {
    id: 93,
    image: "images/IMG_0480.jpeg",
    question: "A 35-year-old male presents with progressive weakness in his lower limbs. MRI of the spine reveals a well-circumscribed intramedullary mass in the lower cervical spinal cord. A biopsy is taken. Which of the following microscopic findings is the classic diagnostic hallmark of this specific tumor?",
    options: [
      "True cellular palisading without central necrosis",
      "Homer Wright pseudorosettes with central neuropil",
      "Perivascular rosettes with a central blood vessel",
      "Rosenthal fibers with eosinophilic inclusions"
    ],
    answerIndex: 2,
    correctAnswerText: "Perivascular rosettes with a central blood vessel"
  },
  {
    id: 94,
    image: "images/IMG_0481.jpeg",
    question: "A 32-year-old pregnant female presents with new-onset, severe headaches. MRI reveals a dural-based extra-axial mass with a distinct dural tail sign. A subsequent biopsy of the lesion demonstrates uniform cells arranged in a tight whorled pattern with multiple purple, calcified psammoma bodies. The accelerated growth of this tumor during her current physiological state is most likely mediated by the tumor's expression of receptors for which of the following?",
    options: [
      "Estrogen",
      "Epidermal growth factor",
      "Human chorionic gonadotropin",
      "Progesterone"
    ],
    answerIndex: 3,
    correctAnswerText: "Progesterone"
  },
  {
    id: 95,
    image: "images/IMG_0482.jpeg",
    question: "A 6-year-old child presents with ataxia and signs of increased intracranial pressure. MRI confirms a solid midline cerebellar mass. Biopsy shows a densely cellular tumor composed of small, undifferentiated cells with multiple Homer Wright pseudorosettes. This tumor is clinically known for which of the following characteristics?",
    options: [
      "Spreading via cerebrospinal fluid to cause drop metastases",
      "Exhibiting true rosettes with empty, white central lumens",
      "Arising primarily from adult glial cells in the frontal lobe",
      "Being inherently cystic on gross examination"
    ],
    answerIndex: 0,
    correctAnswerText: "Spreading via cerebrospinal fluid to cause drop metastases"
  },
  {
    id: 96,
    image: "images/IMG_0483.jpeg",
    question: "A 28-year-old male presents with fever, jaundice, and tender hepatomegaly. Liver biopsy reveals isolated, single hepatocytes displaying intensely dark red, eosinophilic cytoplasm. What is the standard term for this specific histological finding?",
    options: [
      "Ballooning degeneration",
      "Councilman body",
      "Spotty necrosis",
      "Mallory-Denk body"
    ],
    answerIndex: 1,
    correctAnswerText: "Councilman body"
  },
  {
    id: 97,
    image: "images/IMG_0484.jpeg",
    question: "A 50-year-old chronic alcoholic presents with jaundice and hepatomegaly. Liver biopsy reveals macrovesicular steatosis, ballooning degeneration, and irregular, rope-like eosinophilic cytoplasmic inclusions within the hepatocytes. These classic diagnostic inclusions are primarily composed of which of the following?",
    options: [
      "Alpha-1 antitrypsin",
      "Hepatitis B surface antigen",
      "Cytokeratin 8 and 18",
      "Misfolded ceruloplasmin"
    ],
    answerIndex: 2,
    correctAnswerText: "Cytokeratin 8 and 18"
  },
  {
    id: 98,
    image: "images/IMG_0487.jpeg",
    question: "A 22-year-old healthy male presents with a solitary liver mass. His viral hepatitis panel is negative, and serum alpha-fetoprotein (AFP) is within normal limits. Resection reveals a mahogany-brown tumor with a prominent central white stellate scar. Histopathology demonstrates large oncocytes with abundant pink cytoplasm. Which of the following immunohistochemical markers is most characteristically positive in this specific tumor?",
    options: [
      "Glypican-3",
      "Hep Par 1",
      "Arginase 1",
      "Neurotensin"
    ],
    answerIndex: 3,
    correctAnswerText: "Neurotensin"
  },
  {
    id: 99,
    image: "images/IMG_0489.jpeg",
    question: "A 45-year-old female presents with severe generalized pruritus, fatigue, and jaundice. She reports her stools have recently become pale and clay-colored. Serological testing is strongly positive for Anti-Mitochondrial Antibodies (AMA). If a liver biopsy is performed, which of the following is the defining morphological hallmark most likely to be seen?",
    options: [
      "Florid duct lesions with granulomatous destruction",
      "Concentric onion-skin periductal fibrosis",
      "Fibrous obliteration leaving a tombstone scar",
      "Rope-like cytokeratin intermediate filaments"
    ],
    answerIndex: 0,
    correctAnswerText: "Florid duct lesions with granulomatous destruction"
  },
  {
    id: 100,
    image: "images/IMG_0490.jpeg",
    question: "A 60-year-old male with a 30-pack-year smoking history presents with bilateral, slow-growing swellings at the angle of his jaw. Excision of the mass is performed, and gross examination reveals cystic spaces filled with a brown, murky fluid. Which of the following is the characteristic microscopic feature of this specific lesion?",
    options: [
      "Chondromyxoid stroma with epithelial and myoepithelial cells",
      "Papillary projections of oncocytes over a dense lymphoid stroma",
      "Perineural invasion by small, dark basaloid cells in a cribriform pattern",
      "Granulomatous destruction of interlobular salivary ducts"
    ],
    answerIndex: 1,
    correctAnswerText: "Papillary projections of oncocytes over a dense lymphoid stroma"
  },
  {
    id: 101,
    image: "images/IMG_0491.jpeg",
    question: "A 65-year-old female undergoes a biopsy for a long-standing, painless unilateral mass at the angle of her jaw. Histopathology reveals a mixture of epithelial ducts suspended in a purple chondromyxoid stroma. If this benign tumor is simply enucleated rather than completely excised, local recurrence is highly likely due to which of the following inherent characteristics?",
    options: [
      "Multicentric origin within the parotid gland",
      "Derivation from two or more germ cell layers",
      "Microscopic finger-like capsular projections",
      "Early perineural invasion of the facial nerve"
    ],
    answerIndex: 2,
    correctAnswerText: "Microscopic finger-like capsular projections"
  },
  {
    id: 102,
    image: "images/IMG_0492.jpeg",
    question: "A 55-year-old male with long-standing GERD undergoes an upper gastrointestinal endoscopy, which reveals a 4 cm segment of red, velvety mucosa extending proximally from the gastroesophageal junction. A biopsy is taken to confirm the presence of intestinal metaplasia. Which of the following special stains is most appropriate to highlight the diagnostic acidic mucin within the characteristic goblet cells?",
    options: [
      "Periodic Acid-Schiff (PAS)",
      "Masson's Trichrome",
      "Congo Red",
      "Alcian Blue"
    ],
    answerIndex: 3,
    correctAnswerText: "Alcian Blue"
  },
  {
    id: 103,
    image: "images/IMG_0493.jpeg",
    question: "A 10-year-old boy with a known history of cow's milk allergy presents with solid food dysphagia. Endoscopy reveals prominent concentric rings throughout the esophagus, giving it a \"trachealized\" appearance. Biopsy of the mucosa demonstrates an infiltrate of bilobed cells with pink granules. What is the minimum count of these specific cells per high-power field (HPF) required to confirm this diagnosis?",
    options: [
      "> 15 per HPF",
      "> 30 per HPF",
      "> 50 per HPF",
      "> 100 per HPF"
    ],
    answerIndex: 0,
    correctAnswerText: "> 15 per HPF"
  },
  {
    id: 104,
    image: "",
    question: "A 60-year-old obese male with a long history of chronic gastroesophageal reflux disease (GERD) is undergoing endoscopic surveillance. He is at high risk for developing esophageal adenocarcinoma. Which of the following concurrent conditions would paradoxically provide a protective effect against the development of this specific malignancy?",
    options: [
      "Systemic sclerosis",
      "Helicobacter pylori infection",
      "Achalasia cardia",
      "Tylosis palmaris"
    ],
    answerIndex: 1,
    correctAnswerText: "Helicobacter pylori infection"
  },
  {
    id: 105,
    image: "images/IMG_0494.jpeg",
    question: "A 52-year-old male presents with a year-long history of chronic diarrhea, migrating polyarthritis, and recent-onset cognitive decline. Small intestine biopsy demonstrates blunted villi with the lamina propria heavily expanded by foamy macrophages. These macrophages are Periodic Acid-Schiff (PAS) positive and resist diastase digestion. Which of the following findings definitively distinguishes this patient's underlying condition from a similar gastrointestinal pathology caused by Mycobacterium avium complex (MAC)?",
    options: [
      "Presence of PAS-positive pink macrophages",
      "Accumulation of foamy cells in the lamina propria",
      "Negative reaction to Ziehl-Neelsen (ZN) stain",
      "Presentation of chronic malabsorptive diarrhea"
    ],
    answerIndex: 2,
    correctAnswerText: "Negative reaction to Ziehl-Neelsen (ZN) stain"
  },
  {
    id: 106,
    image: "images/IMG_0495.jpeg",
    question: "A 28-year-old female presents with chronic diarrhea, fatigue, and an intensely pruritic papulovesicular rash on her elbows. Laboratory tests reveal iron deficiency anemia. An upper gastrointestinal endoscopy with a biopsy of the D2 segment of the duodenum shows prominent villous flattening and crypt hyperplasia. Which of the following serological markers is the most specific for confirming her diagnosis?",
    options: [
      "Anti-gliadin antibody",
      "Anti-tissue transglutaminase antibody",
      "Anti-mitochondrial antibody",
      "Anti-endomysial antibody"
    ],
    answerIndex: 3,
    correctAnswerText: "Anti-endomysial antibody"
  },
  {
    id: 107,
    image: "images/IMG_0496.jpeg",
    question: "A 28-year-old male presents with chronic diarrhea and right lower quadrant abdominal pain. Colonoscopy reveals discontinuous \"skip lesions\" with a classic cobblestone appearance of the mucosa. Genetic analysis indicates a mutation in the NOD2 gene. Which of the following is the definitive histological hallmark most likely to be seen on biopsy of the affected bowel?",
    options: [
      "Non-caseating granulomas",
      "Neutrophilic crypt abscesses",
      "Regenerating pseudopolyps",
      "Superficial granular erosions"
    ],
    answerIndex: 0,
    correctAnswerText: "Non-caseating granulomas"
  },
  {
    id: 108,
    image: "images/IMG_0497.jpeg",
    question: "A 12-year-old boy presents with colicky abdominal pain and dark brown macules on his lips and buccal mucosa. Endoscopy reveals multiple pedunculated polyps primarily in the jejunum. Biopsy of a polyp demonstrates a characteristic arborizing network of smooth muscle extending into the polyp. Which of the following gene mutations is most likely responsible for this condition?",
    options: [
      "SMAD4",
      "STK11",
      "PTEN",
      "APC"
    ],
    answerIndex: 1,
    correctAnswerText: "STK11"
  },
  {
    id: 109,
    image: "images/IMG_0501.jpeg",
    question: "A 24-year-old male undergoes a screening colonoscopy that reveals over 150 colonic polyps. Physical examination is notable for multiple epidermal cysts and a bony hard swelling on his jaw (mandibular osteoma). Dental records show a history of supernumerary teeth. Which of the following best describes the mutated gene and its associated syndrome in this patient?",
    options: [
      "MLH1 gene - Lynch Syndrome",
      "MUTYH gene - MAP Syndrome",
      "APC gene - Gardner Syndrome",
      "STK11 gene - Peutz-Jeghers Syndrome"
    ],
    answerIndex: 2,
    correctAnswerText: "APC gene - Gardner Syndrome"
  },
  {
    id: 110,
    image: "",
    question: "A 45-year-old male with chronic dyspepsia undergoes an upper GI endoscopy. Biopsy of the gastric antrum reveals a dense monoclonal lymphoid infiltrate, diagnosed as Extranodal Marginal Zone Lymphoma (MALToma). Which specific virulence factor of the implicated organism is primarily responsible for recruiting lymphocytes and driving this specific neoplastic transformation?",
    options: [
      "Lophotrichous flagella",
      "Urease enzyme",
      "Bab A adhesin",
      "Cag A antigen"
    ],
    answerIndex: 3,
    correctAnswerText: "Cag A antigen"
  },
  {
    id: 111,
    image: "images/IMG_0502.jpeg",
    question: "A 55-year-old male presents with early satiety and significant weight loss. Endoscopy reveals a rigid, diffusely thickened stomach wall that fails to distend with air insufflation. Biopsy demonstrates poorly cohesive cells with abundant intracellular mucin displacing the nucleus to the periphery. A loss-of-function mutation in which of the following genes is the primary driver of this specific neoplastic morphology?",
    options: [
      "CDH1",
      "APC",
      "BAX",
      "TP53"
    ],
    answerIndex: 0,
    correctAnswerText: "CDH1"
  },
  {
    id: 112,
    image: "images/IMG_0503.jpeg",
    question: "A 65-year-old male presents with episodes of upper gastrointestinal bleeding. Endoscopy reveals a prominent submucosal mass in the stomach. Biopsy demonstrates a proliferation of spindle-shaped cells with distinct paranuclear vacuoles. While this tumor is known to arise from the pacemaker cells of the gut, which of the following represents the most specific immunohistochemical marker for confirming the diagnosis?",
    options: [
      "CD117 (c-KIT)",
      "DOG-1",
      "Synaptophysin",
      "Desmin"
    ],
    answerIndex: 1,
    correctAnswerText: "DOG-1"
  },
  {
    id: 113,
    image: "images/IMG_0504.jpeg",
    question: "A 45-year-old male presents with severe peripheral edema and hypoproteinemia. Endoscopy reveals massively hypertrophied gastric rugae with a distinct \"cerebriform\" appearance. What is the characteristic microscopic finding expected on gastric biopsy for this specific condition?",
    options: [
      "Cerebriform atypical mononuclear cells",
      "Selective hyperplasia of parietal cells",
      "Corkscrew appearance of hyperplastic glands",
      "Dense intraepithelial lymphocytosis"
    ],
    answerIndex: 2,
    correctAnswerText: "Corkscrew appearance of hyperplastic glands"
  },
  {
    id: 114,
    image: "",
    question: "A 55-year-old chronic smoker undergoes a bronchoscopic biopsy for evaluation of a chronic cough. The pathology report notes the replacement of the normal ciliated respiratory epithelium by stratified squamous epithelium. Which of the following best describes the underlying cellular mechanism for this specific adaptive change?",
    options: [
      "Direct transformation of existing mature cells",
      "Ubiquitin-mediated proteasomal degradation",
      "Growth factor-driven cellular DNA replication",
      "Reprogramming of local tissue stem cells"
    ],
    answerIndex: 3,
    correctAnswerText: "Reprogramming of local tissue stem cells"
  },
  {
    id: 115,
    image: "",
    question: "A 55-year-old male with an acute myocardial infarction undergoes successful coronary angioplasty. Despite restoring blood flow, he develops a paradoxical worsening of myocardial tissue damage. This injury is primarily mediated by a sudden influx of oxygen and calcium into the previously hypoxic tissue. Which of the following is the most potent reactive oxygen species (ROS) responsible for the subsequent lipid peroxidation and cell membrane damage in this patient?",
    options: [
      "Hydroxyl radical",
      "Superoxide anion",
      "Hydrogen peroxide",
      "Hypochlorous acid"
    ],
    answerIndex: 0,
    correctAnswerText: "Hydroxyl radical"
  },
  {
    id: 116,
    image: "",
    question: "A 45-year-old male presents to the emergency department with a severe headache and a blood pressure of 230/130 mmHg. He quickly develops signs of acute kidney injury. A renal biopsy is performed to assess the extent of vascular damage. Which specific pattern of necrosis is most likely to be observed within the walls of the affected renal arterioles?",
    options: [
      "Coagulative necrosis",
      "Fibrinoid necrosis",
      "Caseous necrosis",
      "Liquefactive necrosis"
    ],
    answerIndex: 1,
    correctAnswerText: "Fibrinoid necrosis"
  },
  {
    id: 117,
    image: "",
    question: "A 45-year-old female with a known history of sarcoidosis undergoes routine imaging that incidentally reveals diffuse calcifications in her lungs and gastric mucosa. Her serum biochemistry panel demonstrates marked hypercalcemia. Which of the following best describes the fundamental characteristic of this specific type of calcification?",
    options: [
      "Deposition of calcium strictly within necrotic tissues",
      "Associated with consistently normal serum calcium levels",
      "Deposition of calcium within previously healthy tissues",
      "Formation of characteristic concentric psammoma bodies"
    ],
    answerIndex: 2,
    correctAnswerText: "Deposition of calcium within previously healthy tissues"
  },
  {
    id: 118,
    image: "",
    question: "A 30-year-old male presents with a localized bacterial skin infection. During the acute inflammatory response, neutrophils migrate from the vascular lumen into the affected tissue. Which of the following adhesion molecules and corresponding molecular steps is primarily responsible for mediating initial leukocyte rolling along the vascular endothelium?",
    options: [
      "Integrins",
      "Selectins",
      "PECAM-1 (CD31)",
      "Immunoglobulin superfamily"
    ],
    answerIndex: 1,
    correctAnswerText: "Selectins"
  },
  {
    id: 119,
    image: "",
    question: "A 5-year-old boy presents with recurrent bacterial skin infections. Evaluation of his immune system reveals a defect in the oxygen-dependent intracellular killing mechanism of his neutrophils. Within this normal physiological pathway, which of the following enzymes is specifically responsible for generating the most potent bactericidal compound?",
    options: [
      "Superoxide dismutase",
      "NADPH oxidase",
      "Myeloperoxidase",
      "Cathepsin"
    ],
    answerIndex: 2,
    correctAnswerText: "Myeloperoxidase"
  },
  {
    id: 120,
    image: "",
    question: "A 42-year-old male is admitted to the intensive care unit with severe bacterial pneumonia and sepsis. Laboratory evaluation reveals a markedly elevated total leukocyte count and a strong acute phase reaction. While evaluating his serum protein levels during this active inflammatory state, which of the following proteins will characteristically be present in decreased concentrations?",
    options: [
      "Haptoglobin",
      "Hepcidin",
      "Fibrinogen",
      "Transferrin"
    ],
    answerIndex: 3,
    correctAnswerText: "Transferrin"
  },
  {
    id: 121,
    image: "",
    question: "A 35-year-old patient undergoes an elective inguinal hernia repair. Following the clean surgical incision, a highly orchestrated cascade of healing by primary intention begins. Which of the following cells reaches its peak concentration at the wound site within the first 24 hours?",
    options: [
      "Neutrophils",
      "Macrophages",
      "Endothelial cells",
      "Fibroblasts"
    ],
    answerIndex: 0,
    correctAnswerText: "Neutrophils"
  },
  {
    id: 122,
    image: "images/IMG_0505.jpeg",
    question: "A 28-year-old male presents with a thick, raised, and firm scar on his shoulder following a minor scratch that occurred a year ago. The lesion has grown significantly and extends well beyond the original wound margins. If a biopsy of this lesion is performed, which of the following best describes the expected collagen composition and histological arrangement?",
    options: [
      "Predominantly Type III; parallel bundles",
      "Predominantly Type I; haphazard arrangement",
      "Predominantly Type IV; concentric whorls",
      "Predominantly Type III; haphazard arrangement"
    ],
    answerIndex: 1,
    correctAnswerText: "Predominantly Type I; haphazard arrangement"
  },
  {
    id: 123,
    image: "",
    question: "A patient is suffering from an active intracellular viral infection. Which of the following mechanisms is primarily utilized by the adaptive immune system's effector cells to directly clear this specific type of infection?",
    options: [
      "Secretion of immunoglobulins by plasma cells",
      "CD4 receptor binding to MHC class II molecules",
      "Perforin and granzyme release by CD8 cells",
      "Sensitization of B cells by T-helper lymphocytes"
    ],
    answerIndex: 2,
    correctAnswerText: "Perforin and granzyme release by CD8 cells"
  },
  {
    id: 124,
    image: "",
    question: "A 30-year-old splenectomized male presents with severe pneumococcal sepsis. For effective clearance by macrophages, this capsulated bacterium must first be coated by host proteins to overcome its antiphagocytic capsule. Which of the following pairs of molecules act as the primary mediators for this specific coating process?",
    options: [
      "IgM and Membrane Attack Complex (MAC)",
      "Perforins and Granzymes",
      "IgA and C5b",
      "IgG and C3b"
    ],
    answerIndex: 3,
    correctAnswerText: "IgG and C3b"
  },
  {
    id: 125,
    image: "",
    question: "A 30-year-old male with a viral respiratory infection is being evaluated for immune response. Viral antigens are being presented to cytotoxic T lymphocytes to trigger infected cell destruction. Which of the following is a characteristic of the major histocompatibility complex (MHC) molecule mediating this specific interaction?",
    options: [
      "It is found on all cell membranes except red blood cells",
      "It is composed of alpha-1, alpha-2, beta-1, and beta-2 chains",
      "It primarily restricts the activation of CD4+ helper T cells",
      "It is strictly expressed by professional antigen-presenting cells"
    ],
    answerIndex: 0,
    correctAnswerText: "It is found on all cell membranes except red blood cells"
  },
  {
    id: 126,
    image: "",
    question: "A 22-year-old male develops severe wheezing and diffuse urticaria 10 minutes after a bee sting. While his initial symptoms are rapidly controlled with epinephrine, he experiences a renewed wave of localized tissue inflammation and respiratory distress a few hours later. Which of the following cell types and its primary mediator are most directly responsible for this specific delayed phase of the reaction?",
    options: [
      "Mast cells releasing preformed Histamine",
      "Eosinophils releasing Major Basic Protein",
      "Macrophages secreting Interleukin-1",
      "CD8+ T cells releasing Granzymes"
    ],
    answerIndex: 1,
    correctAnswerText: "Eosinophils releasing Major Basic Protein"
  },
  {
    id: 127,
    image: "",
    question: "A 25-year-old female presents with a malar rash, arthritis, and proteinuria. Her condition is driven by circulating antigen-antibody complexes that deposit in various capillary beds. In contrast to this multi-systemic mechanism, which of the following conditions is primarily mediated by localized \"in situ\" immune complex formation?",
    options: [
      "Serum Sickness",
      "Polyarteritis Nodosa (PAN)",
      "Post-streptococcal glomerulonephritis (PSGN)",
      "Henoch-Schonlein Purpura (HSP)"
    ],
    answerIndex: 2,
    correctAnswerText: "Post-streptococcal glomerulonephritis (PSGN)"
  },
  {
    id: 128,
    image: "",
    question: "A 45-year-old male with end-stage renal failure successfully receives a kidney transplant from an unrelated living donor. To prevent organ rejection, he is immediately started on a lifelong regimen of immunosuppressive medications. Which of the following terms best describes this specific type of transplantation?",
    options: [
      "Autograft",
      "Isograft",
      "Xenograft",
      "Allograft"
    ],
    answerIndex: 3,
    correctAnswerText: "Allograft"
  },
  {
    id: 129,
    image: "",
    question: "A 35-year-old male with acute leukemia undergoes an allogeneic hematopoietic stem cell transplant. Four weeks later, he develops severe skin blisters, progressive jaundice, and intractable diarrhea. Biopsy confirms Graft-Versus-Host Disease (GVHD). Which of the following is an absolute prerequisite for the development of this specific pathological process?",
    options: [
      "Immunocompromised state of the host",
      "Presence of mature B cells in the graft",
      "Perfect HLA match between donor and recipient",
      "Absence of donor T lymphocytes in the graft"
    ],
    answerIndex: 0,
    correctAnswerText: "Immunocompromised state of the host"
  },
  {
    id: 130,
    image: "",
    question: "A 5-year-old child presents with recurrent severe pyogenic infections, petechial rashes, and partial oculocutaneous albinism. Neurological examination reveals early signs of peripheral neuropathy. Genetic testing confirms an autosomal recessive mutation in the LYST gene. Which of the following is the primary underlying cellular defect in this patient?",
    options: [
      "Defective generation of reactive oxygen species",
      "Defective phagolysosome formation",
      "Absent CD18 integrin expression",
      "Defective actin filament assembly"
    ],
    answerIndex: 1,
    correctAnswerText: "Defective phagolysosome formation"
  },
  {
    id: 131,
    image: "",
    question: "A 25-year-old male with a history of recurrent sinopulmonary infections and chronic diarrhea caused by Giardia lamblia requires an emergency blood transfusion following a road traffic accident. Shortly after the transfusion begins, he develops severe, life-threatening anaphylaxis. Laboratory evaluation reveals normal serum levels of IgG and IgM. Which of the following is the most likely underlying primary immunodeficiency in this patient?",
    options: [
      "Severe Combined Immunodeficiency",
      "X-linked Agammaglobulinemia",
      "Isolated IgA deficiency",
      "Common Variable Immunodeficiency"
    ],
    answerIndex: 2,
    correctAnswerText: "Isolated IgA deficiency"
  },
  {
    id: 132,
    image: "",
    question: "A 6-month-old male infant presents with recurrent, severe viral and fungal infections. Clinical examination reveals remarkably shrunken lymph nodes and absent tonsils. A chest X-ray confirms the absence of a thymic shadow. Which of the following is the most common genetic defect responsible for this patient's underlying condition?",
    options: [
      "Adenosine deaminase deficiency",
      "Defective CD40 ligand expression",
      "Bruton tyrosine kinase mutation",
      "Interleukin-2 receptor gamma chain mutation"
    ],
    answerIndex: 3,
    correctAnswerText: "Interleukin-2 receptor gamma chain mutation"
  },
  {
    id: 133,
    image: "",
    question: "A 55-year-old male on long-term hemodialysis for end-stage renal disease develops bilateral tingling, pain, and numbness in his lateral three and a half fingers. Biopsy of the wrist flexor retinaculum reveals Congo red-positive extracellular deposits. Which of the following precursor proteins is most likely responsible for this specific condition?",
    options: [
      "Beta-2 microglobulin",
      "Serum amyloid A",
      "Immunoglobulin light chains",
      "Transthyretin"
    ],
    answerIndex: 0,
    correctAnswerText: "Beta-2 microglobulin"
  },
  {
    id: 134,
    image: "",
    question: "A normal 46,XX female somatic cell must silence one of its X chromosomes during early embryogenesis to prevent toxic overexpression of X-linked genes. Which of the following specific classes of non-coding molecules primarily mediates the formation of the resulting inactive Barr body?",
    options: [
      "Micro-RNA (mi-RNA)",
      "Long Non-coding RNA (LNC-RNA)",
      "Transposons",
      "CG island promoters"
    ],
    answerIndex: 1,
    correctAnswerText: "Long Non-coding RNA (LNC-RNA)"
  },
  {
    id: 135,
    image: "",
    question: "A 6-month-old infant is diagnosed with a severe genetic disorder. DNA sequencing of the affected gene reveals a single base pair substitution that generates a premature stop codon. The resulting protein is completely absent in the patient's cells. Which of the following best classifies this specific type of mutation and its resulting biochemical defect?",
    options: [
      "Missense mutation causing a qualitative abnormality",
      "Silent mutation causing no functional abnormality",
      "Nonsense mutation causing a quantitative abnormality",
      "Intronic mutation causing a gain of function abnormality"
    ],
    answerIndex: 2,
    correctAnswerText: "Nonsense mutation causing a quantitative abnormality"
  },
  {
    id: 136,
    image: "",
    question: "A laboratory technician is setting up a Polymerase Chain Reaction (PCR) assay to detect a single base pair mutation in a patient's DNA sample. After the initial heating phase, the thermal cycler lowers the temperature specifically to 55°C for 45 seconds. Which of the following critical molecular events primarily occurs during this specific temperature step?",
    options: [
      "Complete separation of the double-stranded DNA helix",
      "Rapid addition of dNTPs by DNA polymerase",
      "Breaking of hydrogen bonds between complementary bases",
      "Binding of oligonucleotide primers to the target sequence"
    ],
    answerIndex: 3,
    correctAnswerText: "Binding of oligonucleotide primers to the target sequence"
  },
  {
    id: 137,
    image: "",
    question: "A 2-year-old girl is diagnosed with a rare metabolic disorder. Both her parents are completely healthy, but they are first cousins. There is no prior history of this disease in the extended family. If they plan for another pregnancy, what is the exact probability that their next child will be clinically affected by this same disease?",
    options: [
      "25% regardless of the child's sex",
      "50% only if the child is male",
      "100% since both parents are carriers",
      "0% since both parents are asymptomatic"
    ],
    answerIndex: 0,
    correctAnswerText: "25% regardless of the child's sex"
  },
  {
    id: 138,
    image: "",
    question: "A surgically resected Meckel's diverticulum from a 2-year-old child with painless lower gastrointestinal bleeding undergoes histological evaluation. The pathologist notes the presence of fully differentiated, histologically normal-appearing gastric mucosal glands within the diverticular wall. Which of the following terms best defines this specific type of anomaly?",
    options: [
      "Hamartoma",
      "Choristoma",
      "Teratoma",
      "Anaplasia"
    ],
    answerIndex: 1,
    correctAnswerText: "Choristoma"
  },
  {
    id: 139,
    image: "",
    question: "A 58-year-old male who worked in a PVC pipe manufacturing plant for 30 years presents with right upper quadrant pain and hepatomegaly. A liver biopsy confirms the diagnosis of an aggressive, malignant vascular tumor of the liver. Which of the following occupational chemical exposures is most directly responsible for this specific neoplasm?",
    options: [
      "Benzene",
      "Aflatoxin",
      "Vinyl chloride",
      "Benzidine"
    ],
    answerIndex: 2,
    correctAnswerText: "Vinyl chloride"
  },
  {
    id: 140,
    image: "",
    question: "A 40-year-old female presents with irregular post-coital bleeding. A cervical biopsy confirms invasive squamous cell carcinoma, and PCR testing detects High-Risk Human Papillomavirus (HPV) type 16. Which of the following best describes the exact molecular mechanism of the viral E6 oncoprotein in driving this malignancy?",
    options: [
      "Activation of BCL2 to inhibit apoptosis",
      "Direct phosphorylation of Rb protein",
      "Upregulation of Cyclin D expression",
      "Proteolysis of the p53 tumor suppressor"
    ],
    answerIndex: 3,
    correctAnswerText: "Proteolysis of the p53 tumor suppressor"
  },
  {
    id: 141,
    image: "",
    question: "A 60-year-old male is diagnosed with follicular lymphoma. Genetic analysis of the neoplastic cells reveals a specific alteration that allows them to evade programmed cell death despite accumulating massive DNA damage. Which of the following genetic mechanisms best explains this tumor's survival?",
    options: [
      "Gain of function of the anti-apoptotic BCL-2 gene",
      "Gain of function of the pro-apoptotic BAX gene",
      "Loss of function of the anti-apoptotic BCL-2 gene",
      "Loss of function of a regulatory proto-oncogene"
    ],
    answerIndex: 0,
    correctAnswerText: "Gain of function of the anti-apoptotic BCL-2 gene"
  },
  {
    id: 142,
    image: "",
    question: "A 50-year-old female undergoes a diagnostic FDG-PET scan for staging of a newly diagnosed lung carcinoma. The scan demonstrates intense radiotracer uptake within the primary tumor mass. Which of the following fundamental biochemical alterations is primarily responsible for this increased glucose avidity in malignant cells?",
    options: [
      "Shift from aerobic glycolysis to oxidative phosphorylation",
      "Shift from oxidative phosphorylation to aerobic glycolysis",
      "Decreased expression of cellular glucose transporters",
      "Upregulation of functional M1 pyruvate kinase activity"
    ],
    answerIndex: 1,
    correctAnswerText: "Shift from oxidative phosphorylation to aerobic glycolysis"
  },
  {
    id: 143,
    image: "",
    question: "A 55-year-old male is diagnosed with advanced gastric adenocarcinoma. During surgical staging, tumor cells are found floating freely within the peritoneal cavity, leading to bilateral ovarian metastasis (Krukenberg tumors). Which of the following pathways of metastatic spread is primarily responsible for this specific presentation?",
    options: [
      "Hematogenous spread via capillary networks",
      "Lymphatic spread to subcapsular lymph node sinuses",
      "Transcoelomic spread across body cavities",
      "Drop metastasis via cerebrospinal fluid"
    ],
    answerIndex: 2,
    correctAnswerText: "Transcoelomic spread across body cavities"
  },
  {
    id: 144,
    image: "",
    question: "A 55-year-old male presents with recurrent episodes of superficial thrombophlebitis in different regions of his extremities. Workup for an underlying occult visceral malignancy is initiated. Which of the following paraneoplastic manifestations and its classic associated cancer is most accurately matched?",
    options: [
      "Acanthosis nigricans associated with Renal cell carcinoma",
      "Red cell aplasia associated with Small cell lung carcinoma",
      "Hypercalcemia associated with Ovarian fibrosarcoma",
      "Migratory thrombophlebitis associated with Pancreatic carcinoma"
    ],
    answerIndex: 3,
    correctAnswerText: "Migratory thrombophlebitis associated with Pancreatic carcinoma"
  },
  {
    id: 145,
    image: "",
    question: "A 28-year-old male undergoes an emergency splenectomy following a severe motor vehicle accident. A peripheral blood smear examined three months post-surgery reveals mature erythrocytes containing singular, perfectly round, dark purple inclusions. These specific inclusions represent the retained remnants of which of the following cellular components?",
    options: [
      "Pyknotic nuclear DNA",
      "Denatured precipitated hemoglobin",
      "Aggregated ribosomal RNA",
      "Excess intracellular iron"
    ],
    answerIndex: 0,
    correctAnswerText: "Pyknotic nuclear DNA"
  },
  {
    id: 146,
    image: "",
    question: "A 30-year-old anemic patient has an elevated reticulocyte count. To accurately assess true bone marrow activity, the physician calculates the Reticulocyte Production Index (RPI) rather than relying solely on the Corrected Reticulocyte Count (CRC). What specific physiological variable does the RPI account for that the CRC misses?",
    options: [
      "Decreased total circulating erythrocytes",
      "Premature marrow release of reticulocytes",
      "Decreased total patient hemoglobin levels",
      "Increased splenic macrophage pitting"
    ],
    answerIndex: 1,
    correctAnswerText: "Premature marrow release of reticulocytes"
  },
  {
    id: 147,
    image: "images/IMG_0507.jpeg",
    question: "A 45-year-old female with a history of severe menorrhagia presents with chronic fatigue and pallor. A peripheral blood smear shows microcytic hypochromic red blood cells with prominent pencil-shaped forms. Which of the following laboratory parameters is the earliest and most sensitive indicator of her underlying condition during the pre-latent phase?",
    options: [
      "Increased Total Iron Binding Capacity",
      "Decreased transferrin saturation",
      "Decreased serum ferritin",
      "Decreased serum iron"
    ],
    answerIndex: 2,
    correctAnswerText: "Decreased serum ferritin"
  },
  {
    id: 148,
    image: "",
    question: "A 52-year-old female with long-standing, poorly controlled rheumatoid arthritis presents with progressive fatigue. Laboratory investigations reveal a hemoglobin of 10.2 g/dL, decreased serum iron, decreased total iron-binding capacity (TIBC), and an elevated serum ferritin level. Which of the following specific acute phase reactants is primarily responsible for restricting iron availability in this patient?",
    options: [
      "Erythropoietin",
      "Transferrin",
      "Tumor necrosis factor",
      "Hepcidin"
    ],
    answerIndex: 3,
    correctAnswerText: "Hepcidin"
  },
  {
    id: 149,
    image: "images/IMG_0508.jpeg",
    question: "A 50-year-old male on long-term multi-drug therapy for tuberculosis develops progressive fatigue. Blood work shows a microcytic hypochromic anemia. A bone marrow aspirate stained with Prussian blue reveals nucleated red cell precursors surrounded by a distinct ring of blue granules. Which of the following is the primary underlying pathogenic defect in this condition?",
    options: [
      "Defective porphyrin synthesis",
      "Impaired globin chain production",
      "Mutation in iron transport proteins",
      "Defective nuclear DNA maturation"
    ],
    answerIndex: 0,
    correctAnswerText: "Defective porphyrin synthesis"
  },
  {
    id: 150,
    image: "",
    question: "A 25-year-old pregnant female with a poor diet develops progressive fatigue. Laboratory investigations reveal a macrocytic anemia with an MCV of 110 fL. The physician suspects a deficiency of a specific vitamin whose hepatic stores are known to deplete rapidly within 3 to 4 months. Which of the following is the primary site of absorption for this deficient vitamin?",
    options: [
      "Terminal ileum",
      "Jejunum",
      "Duodenum",
      "Stomach"
    ],
    answerIndex: 1,
    correctAnswerText: "Jejunum"
  },
  {
    id: 151,
    image: "",
    question: "A 22-year-old female presents with a one-month history of severe fatigue, recurrent mucosal infections, and easy bruising. Complete blood count reveals profound pancytopenia. Bone marrow aspiration yields a \"dry tap,\" and a subsequent biopsy shows a cellularity of less than 10% with extensive fat replacement. Despite severe systemic bone marrow failure, she lacks a specific clinical finding because her body fundamentally fails to mount compensatory extramedullary hematopoiesis. Which of the following is this characteristically absent finding?",
    options: [
      "Petechiae and purpura",
      "Exertional dyspnea",
      "Hepatosplenomegaly",
      "High output cardiac murmur"
    ],
    answerIndex: 2,
    correctAnswerText: "Hepatosplenomegaly"
  },
  {
    id: 152,
    image: "",
    question: "A 6-year-old child presents with sudden onset of fatigue and dark urine after prolonged exposure to cold weather. He is ultimately diagnosed with Paroxysmal Cold Hemoglobinuria (PCH). Which of the following best describes the specific autoantibody mediating this condition?",
    options: [
      "IgM antibody that induces direct RBC agglutination",
      "IgG antibody that is maximally active at 37°C",
      "IgM antibody that selectively targets extravascular macrophages",
      "IgG antibody that cannot induce in-vitro agglutination"
    ],
    answerIndex: 3,
    correctAnswerText: "IgG antibody that cannot induce in-vitro agglutination"
  },
  {
    id: 153,
    image: "",
    question: "A 30-year-old man presents with episodic dark urine in the morning and a recent episode of hepatic vein thrombosis. Flow cytometry of his peripheral blood reveals an absence of CD55 and CD59 on the surface of his erythrocytes. Which of the following is the fundamental underlying pathogenic mechanism of this condition?",
    options: [
      "Acquired PIGA gene mutation in stem cells",
      "Inherited defect in red cell membrane spectrin",
      "Autoantibody production against RBC antigens",
      "Point mutation in the beta-globin chain"
    ],
    answerIndex: 0,
    correctAnswerText: "Acquired PIGA gene mutation in stem cells"
  },
  {
    id: 154,
    image: "images/IMG_0509.jpeg",
    question: "A 7-year-old child presents with pallor, scleral icterus, and palpable splenomegaly. A family history of childhood gallstones and splenectomy is noted in the father. A peripheral blood smear shows numerous small, dense erythrocytes completely lacking central pallor. Which of the following specific red blood cell indices is characteristically elevated in this patient's condition?",
    options: [
      "Mean Corpuscular Volume (MCV)",
      "Mean Corpuscular Hemoglobin Concentration (MCHC)",
      "Mean Corpuscular Hemoglobin (MCH)",
      "Total Erythrocyte Count"
    ],
    answerIndex: 1,
    correctAnswerText: "Mean Corpuscular Hemoglobin Concentration (MCHC)"
  },
  {
    id: 155,
    image: "images/IMG_0510.jpeg",
    question: "A 25-year-old male develops acute jaundice and dark urine three days after starting primaquine therapy. A routine peripheral blood smear reveals numerous 'bite cells'. Which of the following specific stains is strictly required to directly visualize the underlying denatured hemoglobin precipitates causing these abnormal cell shapes?",
    options: [
      "Perl's Prussian blue stain",
      "Routine Romanowsky stain",
      "Supravital stain",
      "Periodic acid-Schiff stain"
    ],
    answerIndex: 2,
    correctAnswerText: "Supravital stain"
  },
  {
    id: 156,
    image: "",
    question: "A 2-month-old infant, born to parents with sickle cell trait, presents for a routine check-up. The infant is completely asymptomatic, and a peripheral blood smear shows no abnormal red blood cell shapes. Which of the following is the primary reason for the absence of clinical manifestations and sickling at this specific age?",
    options: [
      "Complete absence of mutated beta-globin chains in the marrow",
      "Neonatal red blood cells are structurally immune to hypoxic stress",
      "High levels of circulating maternal IgG antibodies preventing red cell lysis",
      "High levels of fetal hemoglobin acting as a potent polymerization inhibitor"
    ],
    answerIndex: 3,
    correctAnswerText: "High levels of fetal hemoglobin acting as a potent polymerization inhibitor"
  },
  {
    id: 157,
    image: "images/IMG_0511.jpeg",
    question: "An 8-month-old infant presents with severe anemia, marked hepatosplenomegaly, and frontal bossing. A peripheral blood smear shows microcytic hypochromic red cells, teardrop cells, and target cells. Despite the profound anemia and massive erythroid hyperplasia, the infant's reticulocyte count is paradoxically low. Which of the following is the primary mechanism responsible for this specific finding?",
    options: [
      "Apoptosis of erythroid precursors within the bone marrow",
      "Autoimmune destruction of circulating mature red blood cells",
      "Suppression of renal erythropoietin production",
      "Massive splenic sequestration of newly formed reticulocytes"
    ],
    answerIndex: 0,
    correctAnswerText: "Apoptosis of erythroid precursors within the bone marrow"
  },
  {
    id: 158,
    image: "",
    question: "A 35-year-old male with a known history of severe Hemophilia A presents to the emergency department with a spontaneous massive hemarthrosis of the right knee. If a Thromboelastography (TEG) is performed to assess his global hemostasis, which of the following specific parameters will be most prominently prolonged?",
    options: [
      "Maximum Amplitude (MA)",
      "Reaction time (R)",
      "Alpha angle",
      "Lysis at 30 minutes (Ly30)"
    ],
    answerIndex: 1,
    correctAnswerText: "Reaction time (R)"
  },
  {
    id: 159,
    image: "",
    question: "A 50-year-old male, immobilized for two weeks following major orthopedic surgery, develops a swollen, tense, and painful right calf. Doppler ultrasound confirms an extensive deep vein thrombosis. Which of the following is the most accurate characteristic regarding the primary pathogenesis and management of this specific type of thrombus?",
    options: [
      "It forms primarily due to high-velocity turbulence causing direct endothelial injury",
      "It is a compact \"white thrombus\" predominantly composed of aggregated platelets",
      "It is a large \"red thrombus\" formed mainly due to stasis and RBC margination",
      "The ideal primary pharmacological prophylaxis is an antiplatelet agent like Aspirin"
    ],
    answerIndex: 2,
    correctAnswerText: "It is a large \"red thrombus\" formed mainly due to stasis and RBC margination"
  },
  {
    id: 160,
    image: "",
    question: "A 35-year-old female presents with recurrent petechiae, purpura, and severe menorrhagia. Her coagulation profile is normal, but her bleeding time is prolonged. Complete blood count reveals severe thrombocytopenia. Further analysis indicates an immature platelet fraction (IPF) of strictly 2%. Which of the following represents the primary pathogenesis and corresponding bone marrow finding in this patient?",
    options: [
      "Increased peripheral destruction with increased megakaryocytes",
      "Increased peripheral destruction with decreased megakaryocytes",
      "Decreased bone marrow production with low thrombopoietin",
      "Decreased bone marrow production with decreased megakaryocytes"
    ],
    answerIndex: 3,
    correctAnswerText: "Decreased bone marrow production with decreased megakaryocytes"
  },
  {
    id: 161,
    image: "",
    question: "A 5-year-old boy presents with a sudden onset of widespread petechiae and purpura. His mother reports he had a mild viral upper respiratory tract infection two weeks ago. Complete blood count reveals severe isolated thrombocytopenia. Physical examination shows no palpable hepatosplenomegaly. What is the most appropriate initial management for this child?",
    options: [
      "Reassurance and clinical observation",
      "Prophylactic platelet transfusion",
      "Intravenous Immunoglobulin (IVIg)",
      "Immediate surgical splenectomy"
    ],
    answerIndex: 0,
    correctAnswerText: "Reassurance and clinical observation"
  },
  {
    id: 162,
    image: "",
    question: "A 32-year-old female presents with fever, altered sensorium, and widespread petechiae. Peripheral smear reveals severely decreased platelets and numerous fragmented red blood cells (schistocytes). She is diagnosed with an acquired deficiency of a specific plasma metalloprotease. What is the normal physiological function of this deficient enzyme in a healthy individual?",
    options: [
      "Cleaving circulating fibrinogen into insoluble fibrin",
      "Degrading ultra-large von Willebrand factor multimers",
      "Activating plasminogen to dissolve existing clots",
      "Inhibiting platelet surface glycoprotein IIb/IIIa"
    ],
    answerIndex: 1,
    correctAnswerText: "Degrading ultra-large von Willebrand factor multimers"
  },
  {
    id: 163,
    image: "",
    question: "A 55-year-old male admitted for deep vein thrombosis is started on therapeutic anticoagulation. On day 6 of admission, his platelet count drops by 50%, and he develops a new acute pulmonary embolism. What is the fundamental pathogenesis driving this severe and paradoxical clinical presentation?",
    options: [
      "Toxic suppression of bone marrow megakaryocytes",
      "Direct non-immune platelet aggregation by the drug",
      "IgG antibodies against the Heparin-Platelet Factor 4 complex",
      "IgM-mediated complement lysis of peripheral platelets"
    ],
    answerIndex: 2,
    correctAnswerText: "IgG antibodies against the Heparin-Platelet Factor 4 complex"
  },
  {
    id: 164,
    image: "",
    question: "A 4-day-old neonate, delivered at home without any prophylactic medications, is brought to the emergency department with continuous oozing from the umbilical cord stump. Initial coagulation studies reveal an isolated prolongation of Prothrombin Time (PT) while the Activated Partial Thromboplastin Time (APTT) remains strictly normal. This specific initial laboratory presentation is primarily due to the rapid plasma depletion of which of the following coagulation factors?",
    options: [
      "Factor II",
      "Factor IX",
      "Factor X",
      "Factor VII"
    ],
    answerIndex: 3,
    correctAnswerText: "Factor VII"
  },
  {
    id: 165,
    image: "",
    question: "A 28-year-old female undergoes routine pre-operative screening before an elective cholecystectomy. Her laboratory results reveal a markedly prolonged Activated Partial Thromboplastin Time (APTT) with a normal Prothrombin Time (PT) and normal platelet count. She has absolutely no history of mucosal or deep bleeding, but her medical records indicate a previous episode of deep vein thrombosis (DVT). Which of the following is the most likely diagnosis?",
    options: [
      "Factor XII deficiency",
      "Factor VIII deficiency",
      "Type I von Willebrand disease",
      "Vitamin K deficiency"
    ],
    answerIndex: 0,
    correctAnswerText: "Factor XII deficiency"
  },
  {
    id: 166,
    image: "",
    question: "A 45-year-old patient admitted with severe sepsis develops sudden, widespread bleeding from multiple intravenous puncture sites. A coagulation profile is ordered to confirm the diagnosis of a consumptive coagulopathy. Which of the following laboratory parameters is the most sensitive and specific marker for this condition?",
    options: [
      "Decreased fibrinogen levels",
      "Elevated D-Dimer levels",
      "Prolonged Prothrombin Time (PT)",
      "Decreased platelet count"
    ],
    answerIndex: 1,
    correctAnswerText: "Elevated D-Dimer levels"
  },
  {
    id: 167,
    image: "",
    question: "A 45-year-old male presents with pancytopenia and hepatosplenomegaly. A bone marrow aspirate is hypercellular, packed with large neoplastic cells approximately 3 to 4 times the size of a normal red blood cell. These cells prominently display abundant and densely granular cytoplasm. Based strictly on these fundamental morphological features, what is the most likely origin of these cells?",
    options: [
      "Mature peripheral lymphocytes",
      "Immature lymphoid precursors",
      "Immature myeloid precursors",
      "Mature peripheral neutrophils"
    ],
    answerIndex: 2,
    correctAnswerText: "Immature myeloid precursors"
  },
  {
    id: 168,
    image: "",
    question: "A 60-year-old male with a long-standing history of chronic scaly skin patches develops intense generalized erythroderma. A peripheral blood smear is ordered which reveals atypical lymphocytes with highly folded, brain-like \"cerebriform\" nuclei. Which of the following is the most accurate diagnosis for this specific disseminated phase?",
    options: [
      "Diffuse Large B-cell Lymphoma",
      "Follicular Lymphoma",
      "Mycosis Fungoides",
      "Sezary Syndrome"
    ],
    answerIndex: 3,
    correctAnswerText: "Sezary Syndrome"
  },
  {
    id: 169,
    image: "images/IMG_0512.jpeg",
    question: "A 16-year-old boy presents with a rapidly expanding abdominal mass localized to the ileocecal region. A tissue biopsy is performed, and histopathological examination reveals a classic \"starry sky\" pattern. In this specific histological appearance, what do the \"stars\" strictly represent?",
    options: [
      "Macrophages engulfing cellular debris",
      "Neoplastic B-cell lymphoid blasts",
      "Perinuclear lipid vacuoles",
      "Epstein-Barr viral inclusions"
    ],
    answerIndex: 0,
    correctAnswerText: "Macrophages engulfing cellular debris"
  },
  {
    id: 170,
    image: "images/IMG_0513.jpeg",
    question: "A 65-year-old asymptomatic male is incidentally found to have marked absolute lymphocytosis on a routine check-up. A peripheral blood smear shows numerous mature lymphocytes and frequent 'smudge cells'. To confirm the diagnosis, flow cytometry is performed. Along with CD20 and CD23, these specific neoplastic cells will classically show aberrant positivity for which of the following markers?",
    options: [
      "CD10",
      "CD5",
      "CD3",
      "CD15"
    ],
    answerIndex: 1,
    correctAnswerText: "CD5"
  },
  {
    id: 171,
    image: "images/IMG_0514.jpeg",
    question: "A 62-year-old male presents with fatigue, recurrent atypical mycobacterial infections, and massive splenomegaly. Physical examination is notable for a strict absence of palpable lymphadenopathy. A peripheral blood smear shows atypical mononuclear cells with fine, irregular cytoplasmic projections. Bone marrow aspiration yields a 'dry tap'. Which of the following is the most accurate characteristic regarding this patient's specific condition?",
    options: [
      "The disease predominantly infiltrates and expands the splenic white pulp",
      "The initial drug of choice for severe neutropenia is Cladribine",
      "Bone marrow biopsy reveals fibrosis with a 'fried egg' appearance",
      "The neoplastic cells are classically negative for the TRAP stain"
    ],
    answerIndex: 2,
    correctAnswerText: "Bone marrow biopsy reveals fibrosis with a 'fried egg' appearance"
  },
  {
    id: 172,
    image: "",
    question: "A 5-year-old child is diagnosed with B-cell Acute Lymphoblastic Leukaemia (B-ALL). Bone marrow flow cytometry reveals precursor blasts that are strongly positive for CD10, CD19, CD22, and TdT. During risk stratification, which of the following specific findings would independently classify this patient into a strictly high-risk, poor prognostic category?",
    options: [
      "Total Leukocyte Count (TLC) of 30,000/cu mm",
      "Rapid clearance of peripheral blasts following Prednisone therapy",
      "Age of disease onset at exactly 5 years",
      "Presence of extramedullary leukaemic infiltration in the testes"
    ],
    answerIndex: 3,
    correctAnswerText: "Presence of extramedullary leukaemic infiltration in the testes"
  },
  {
    id: 173,
    image: "",
    question: "A 68-year-old male undergoes routine screening and is completely asymptomatic. Laboratory investigations reveal an isolated serum M-protein spike of 2.1 g/dL. A subsequent bone marrow biopsy demonstrates 6% monoclonal plasma cells. His serum calcium, renal function, hemoglobin, and skeletal survey are entirely within normal limits. Based on these strict criteria, what is the most definitive diagnosis?",
    options: [
      "Monoclonal Gammopathy of Undetermined Significance (MGUS)",
      "Smoldering Multiple Myeloma",
      "Active Multiple Myeloma",
      "Plasma Cell Leukaemia"
    ],
    answerIndex: 0,
    correctAnswerText: "Monoclonal Gammopathy of Undetermined Significance (MGUS)"
  },
  {
    id: 174,
    image: "",
    question: "A 68-year-old male presents with progressive fatigue, mucosal bleeding, and recurrent upper respiratory tract infections. Physical examination reveals marked pallor but strictly no palpable hepatosplenomegaly. Peripheral smear shows pancytopenia. A bone marrow aspirate is mildly hypercellular with 14% blasts and numerous ring sideroblasts. Which of the following cytogenetic abnormalities in this specific condition is associated with a favorable prognosis and targeted response to Lenalidomide?",
    options: [
      "Monosomy 7",
      "5q deletion",
      "t(9;22) translocation",
      "t(15;17) translocation"
    ],
    answerIndex: 1,
    correctAnswerText: "5q deletion"
  },
  {
    id: 175,
    image: "images/IMG_0515.jpeg",
    question: "A 2-year-old child with Down syndrome presents with sudden onset pancytopenia and hepatosplenomegaly. A bone marrow aspirate is performed, revealing numerous large blast cells characterized by prominent peripheral \"membrane blebs\". Which of the following is the most likely diagnosis?",
    options: [
      "Acute Lymphoblastic Leukemia (ALL)",
      "Acute Promyelocytic Leukemia (AML M3)",
      "Acute Megakaryoblastic Leukemia (AML M7)",
      "Acute Monocytic Leukemia (AML M5)"
    ],
    answerIndex: 2,
    correctAnswerText: "Acute Megakaryoblastic Leukemia (AML M7)"
  },
  {
    id: 176,
    image: "",
    question: "A 50-year-old male presents with fatigue, massive splenomegaly, and persistent pruritus. Complete blood count reveals a markedly elevated total leukocyte count with a \"shift to left\" showing circulating bands, metamyelocytes, myelocytes, and basophilia. Cytogenetic analysis confirms the classic Philadelphia chromosome. Which of the following is the precise genetic abnormality defining this translocation?",
    options: [
      "t(9;22) forming the BCR-ABL1 fusion gene",
      "t(15;17) forming the PML-RARA fusion gene",
      "t(8;14) forming the MYC-IGH fusion gene",
      "t(1;19) forming the E2A-PBX1 fusion gene"
    ],
    answerIndex: 0,
    correctAnswerText: "t(9;22) forming the BCR-ABL1 fusion gene"
  },
  {
    id: 177,
    image: "",
    question: "A 62-year-old male presents with facial plethora, persistent headache, and intense pruritus after taking a hot shower. Abdominal examination reveals a palpable spleen. Laboratory investigations show a massively elevated Hemoglobin of 18.5 g/dL and Hematocrit of 56%. To definitively confirm a primary neoplastic etiology rather than a reactive condition, which of the following combined laboratory profiles is most expected?",
    options: [
      "Elevated serum Erythropoietin (EPO) and absent JAK2 mutation",
      "Decreased serum Erythropoietin (EPO) and positive JAK2 mutation",
      "Decreased serum Erythropoietin (EPO) and absent JAK2 mutation",
      "Elevated serum Erythropoietin (EPO) and positive JAK2 mutation"
    ],
    answerIndex: 1,
    correctAnswerText: "Decreased serum Erythropoietin (EPO) and positive JAK2 mutation"
  },
  {
    id: 178,
    image: "",
    question: "A trauma patient with severe bleeding and documented afibrinogenemia requires targeted blood component therapy. The blood bank immediately issues units of Cryoprecipitate. Based on standard blood bank protocols, which of the following strictly applies to this specific component?",
    options: [
      "It contains a comprehensive mix of all coagulation factors",
      "It has a large standard volume of 150 ml per unit",
      "It requires absolutely no pre-transfusion ABO testing",
      "It is routinely stored at a temperature of 2 to 6 degrees Celsius"
    ],
    answerIndex: 2,
    correctAnswerText: "It requires absolutely no pre-transfusion ABO testing"
  },
  {
    id: 179,
    image: "",
    question: "A 30-year-old female with known severe IgA deficiency requires a blood transfusion for symptomatic anemia. To specifically prevent a life-threatening anaphylactic reaction, which modified blood product must be administered to this patient?",
    options: [
      "Irradiated red blood cells",
      "Leukocyte-depleted red blood cells",
      "Fresh blood (< 7 days old)",
      "Saline-washed red blood cells"
    ],
    answerIndex: 3,
    correctAnswerText: "Saline-washed red blood cells"
  },
  {
    id: 180,
    image: "",
    question: "A 45-year-old male develops severe dyspnea and bilateral crepitations 2 hours after receiving a blood transfusion. His oxygen saturation drops to 88%. His blood pressure is 90/60 mmHg and serum BNP levels are strictly within normal limits. What is the fundamental pathogenesis of this specific complication?",
    options: [
      "Anti-HLA antibodies in donor plasma killing pulmonary endothelium",
      "Acute volume overload causing cardiogenic pulmonary edema",
      "Recipient IgE reacting to donor plasma allergens",
      "Massive cytokine release from stored donor leukocytes"
    ],
    answerIndex: 0,
    correctAnswerText: "Anti-HLA antibodies in donor plasma killing pulmonary endothelium"
  },
];
