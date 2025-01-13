// medicines.js

const MEDICINES_DATABASE = {
    // Cardiovascular Medications
    "Warfarin": {
        category: "Anticoagulant",
        type: "Prescription",
        conflicts: ["Aspirin", "Ibuprofen", "Naproxen", "Diclofenac", "Clopidogrel", "Amoxicillin", "Ciprofloxacin", "Clarithromycin", "Sertraline", "Escitalopram"]
    },
    "Metoprolol": {
        category: "Beta Blocker",
        type: "Prescription",
        conflicts: ["Amlodipine", "Finasteride", "Salbutamol", "Pseudoephedrine"]
    },
    "Ramipril": {
        category: "ACE Inhibitor",
        type: "Prescription",
        conflicts: ["Spironolactone", "Valsartan", "Allopurinol", "Pseudoephedrine"]
    },
    "Atorvastatin": {
        category: "Statin",
        type: "Prescription",
        conflicts: ["Clarithromycin", "Azithromycin", "Omeprazole", "Pantoprazole"]
    },
    "Amlodipine": {
        category: "Calcium Channel Blocker",
        type: "Prescription",
        conflicts: ["Metoprolol", "Bisoprolol", "Clarithromycin", "Azithromycin"]
    },
    "Bisoprolol": {
        category: "Beta Blocker",
        type: "Prescription",
        conflicts: ["Amlodipine", "Salbutamol", "Pseudoephedrine"]
    },
    "Valsartan": {
        category: "ARB",
        type: "Prescription",
        conflicts: ["Ramipril", "Spironolactone", "Allopurinol"]
    },
    "Clopidogrel": {
        category: "Antiplatelet",
        type: "Prescription",
        conflicts: ["Warfarin", "Aspirin", "Omeprazole", "Pantoprazole"]
    },
    "Furosemide": {
        category: "Diuretic",
        type: "Prescription",
        conflicts: ["Spironolactone", "Metformin", "Digoxin"]
    },
    "Spironolactone": {
        category: "Diuretic",
        type: "Prescription",
        conflicts: ["Ramipril", "Valsartan", "Furosemide", "Metformin"]
    },

    // Pain/Anti-inflammatory Medications
    "Aspirin": {
        category: "NSAID",
        type: "OTC",
        conflicts: ["Warfarin", "Clopidogrel", "Ibuprofen", "Naproxen", "Diclofenac"]
    },
    "Ibuprofen": {
        category: "NSAID",
        type: "OTC",
        conflicts: ["Warfarin", "Aspirin", "Naproxen", "Diclofenac", "Sertraline", "Escitalopram"]
    },
    "Paracetamol": {
        category: "Analgesic",
        type: "OTC",
        conflicts: []  // Relatively safe with most medications
    },
    "Diclofenac": {
        category: "NSAID",
        type: "Prescription",
        conflicts: ["Warfarin", "Aspirin", "Ibuprofen", "Naproxen", "Sertraline", "Escitalopram"]
    },
    "Naproxen": {
        category: "NSAID",
        type: "Prescription",
        conflicts: ["Warfarin", "Aspirin", "Ibuprofen", "Diclofenac", "Sertraline", "Escitalopram"]
    },

    // Antibiotics
    "Amoxicillin": {
        category: "Antibiotic",
        type: "Prescription",
        conflicts: ["Warfarin", "Allopurinol", "Methotrexate"]
    },
    "Ciprofloxacin": {
        category: "Antibiotic",
        type: "Prescription",
        conflicts: ["Warfarin", "Methotrexate", "Ondansetron", "Insulin"]
    },
    "Clarithromycin": {
        category: "Antibiotic",
        type: "Prescription",
        conflicts: ["Warfarin", "Atorvastatin", "Amlodipine", "Quetiapine"]
    },
    "Doxycycline": {
        category: "Antibiotic",
        type: "Prescription",
        conflicts: ["Warfarin", "Metformin", "Insulin"]
    },
    "Azithromycin": {
        category: "Antibiotic",
        type: "Prescription",
        conflicts: ["Atorvastatin", "Amlodipine", "Quetiapine"]
    },

    // Additional Cardiovascular Medications
    "Digoxin": {
        category: "Cardiac Glycoside",
        type: "Prescription",
        conflicts: ["Furosemide", "Amiodarone", "Verapamil"]
    },
    "Amiodarone": {
        category: "Antiarrhythmic",
        type: "Prescription",
        conflicts: ["Digoxin", "Warfarin", "Quetiapine"]
    },
    "Diltiazem": {
        category: "Calcium Channel Blocker",
        type: "Prescription",
        conflicts: ["Metoprolol", "Bisoprolol", "Atorvastatin"]
    },
    "Losartan": {
        category: "ARB",
        type: "Prescription",
        conflicts: ["Ramipril", "Spironolactone", "Allopurinol"]
    },

    // Additional Psychiatric Medications
    "Fluoxetine": {
        category: "Antidepressant",
        type: "Prescription",
        conflicts: ["Warfarin", "Aspirin", "Tramadol"]
    },
    "Venlafaxine": {
        category: "Antidepressant",
        type: "Prescription",
        conflicts: ["Aspirin", "Ibuprofen", "Tramadol"]
    },
    "Risperidone": {
        category: "Antipsychotic",
        type: "Prescription",
        conflicts: ["Carbamazepine", "Fluoxetine", "Paroxetine"]
    },

    // Additional Pain Medications
    "Tramadol": {
        category: "Opioid Analgesic",
        type: "Prescription",
        conflicts: ["Fluoxetine", "Sertraline", "Amitriptyline"]
    },
    "Codeine": {
        category: "Opioid Analgesic",
        type: "Prescription",
        conflicts: ["Fluoxetine", "Paroxetine", "Bupropion"]
    },

    // Additional Gastrointestinal Medications
    "Domperidone": {
        category: "Antiemetic",
        type: "Prescription",
        conflicts: ["Amiodarone", "Clarithromycin", "Fluconazole"]
    },
    "Esomeprazole": {
        category: "PPI",
        type: "Prescription",
        conflicts: ["Clopidogrel", "Iron supplements", "Digoxin"]
    },

    // Additional Respiratory Medications
    "Formoterol": {
        category: "Long-acting Beta Agonist",
        type: "Prescription",
        conflicts: ["Metoprolol", "Bisoprolol", "Propranolol"]
    },
    "Ipratropium": {
        category: "Anticholinergic",
        type: "Prescription",
        conflicts: ["Tiotropium", "Glycopyrronium"]
    },

    // Additional Antibiotics
    "Trimethoprim": {
        category: "Antibiotic",
        type: "Prescription",
        conflicts: ["Spironolactone", "Methotrexate", "Warfarin"]
    },
    "Flucloxacillin": {
        category: "Antibiotic",
        type: "Prescription",
        conflicts: ["Warfarin", "Methotrexate"]
    }
};

const INTERACTIONS = {
    // Cardiovascular Drug Interactions
    "Warfarin-Aspirin": {
        severity: "high",
        description: "Znacznie zwiększone ryzyko krwawienia. Połączenie wymaga ścisłego monitorowania."
    },
    "Warfarin-Ibuprofen": {
        severity: "high",
        description: "Wysokie ryzyko krwawienia z przewodu pokarmowego. Należy unikać połączenia."
    },
    "Warfarin-Naproxen": {
        severity: "high",
        description: "Znacznie zwiększone ryzyko krwawienia. Należy unikać połączenia."
    },
    "Warfarin-Diclofenac": {
        severity: "high",
        description: "Wysokie ryzyko krwawienia. Należy unikać połączenia."
    },
    "Warfarin-Clopidogrel": {
        severity: "high",
        description: "Bardzo wysokie ryzyko krwawienia. Połączenie tylko w szczególnych przypadkach."
    },
    "Warfarin-Amoxicillin": {
        severity: "medium",
        description: "Może zwiększać działanie przeciwzakrzepowe. Wymagane monitorowanie INR."
    },
    "Warfarin-Ciprofloxacin": {
        severity: "high",
        description: "Znacznie zwiększone ryzyko krwawienia. Wymagana modyfikacja dawki warfaryny."
    },
    "Warfarin-Clarithromycin": {
        severity: "high",
        description: "Zwiększone ryzyko krwawienia. Konieczne monitorowanie INR."
    },
    "Warfarin-Sertraline": {
        severity: "medium",
        description: "Zwiększone ryzyko krwawienia. Wymagane monitorowanie."
    },

    // Beta Blocker Interactions
    "Metoprolol-Amlodipine": {
        severity: "medium",
        description: "Ryzyko nadmiernego spadku ciśnienia krwi i zwolnienia rytmu serca."
    },
    "Metoprolol-Salbutamol": {
        severity: "medium",
        description: "Zmniejszona skuteczność obu leków."
    },
    "Bisoprolol-Amlodipine": {
        severity: "medium",
        description: "Ryzyko znacznego spadku ciśnienia krwi."
    },

    // ACE Inhibitor/ARB Interactions
    "Ramipril-Spironolactone": {
        severity: "medium",
        description: "Zwiększone ryzyko hiperkaliemii (wysokiego poziomu potasu)."
    },
    "Ramipril-Valsartan": {
        severity: "high",
        description: "Zwiększone ryzyko hipotensji, hiperkaliemii i niewydolności nerek."
    },
    "Valsartan-Spironolactone": {
        severity: "medium",
        description: "Ryzyko hiperkaliemii. Wymagane monitorowanie poziomu potasu."
    },

    // Statin Interactions
    "Atorvastatin-Clarithromycin": {
        severity: "high",
        description: "Zwiększone ryzyko uszkodzenia mięśni (rabdomiolizy)."
    },
    "Atorvastatin-Azithromycin": {
        severity: "medium",
        description: "Możliwe zwiększone ryzyko miopatii."
    },

    // NSAID Interactions
    "Aspirin-Ibuprofen": {
        severity: "medium",
        description: "Zmniejszona skuteczność przeciwpłytkowa aspiryny i zwiększone ryzyko krwawienia."
    },
    "Aspirin-Naproxen": {
        severity: "medium",
        description: "Zwiększone ryzyko krwawienia z przewodu pokarmowego."
    },
    "Ibuprofen-Naproxen": {
        severity: "high",
        description: "Znacznie zwiększone ryzyko krwawienia z przewodu pokarmowego."
    },

    // Antiplatelet Interactions
    "Clopidogrel-Omeprazole": {
        severity: "medium",
        description: "Zmniejszona skuteczność przeciwpłytkowa klopidogrelu."
    },
    "Clopidogrel-Pantoprazole": {
        severity: "low",
        description: "Możliwe zmniejszenie skuteczności klopidogrelu."
    },

    // Diuretic Interactions
    "Furosemide-Spironolactone": {
        severity: "medium",
        description: "Ryzyko zaburzeń elektrolitowych. Wymaga monitorowania."
    },
    "Spironolactone-Metformin": {
        severity: "low",
        description: "Możliwe zaburzenia poziomu glukozy."
    },

    // Antibiotic Interactions
    "Ciprofloxacin-Ondansetron": {
        severity: "medium",
        description: "Zwiększone ryzyko zaburzeń rytmu serca."
    },
    "Clarithromycin-Quetiapine": {
        severity: "high",
        description: "Zwiększone stężenie kwetiapiny i ryzyko działań niepożądanych."
    },

    // SSRI Interactions
    "Sertraline-Ibuprofen": {
        severity: "medium",
        description: "Zwiększone ryzyko krwawienia z przewodu pokarmowego."
    },
    "Escitalopram-Naproxen": {
        severity: "medium",
        description: "Zwiększone ryzyko krwawienia."
    },

    // Cardiac Glycoside Interactions
    "Digoxin-Furosemide": {
        severity: "medium",
        description: "Zwiększone ryzyko zaburzeń elektrolitowych i arytmii."
    },
    "Digoxin-Amiodarone": {
        severity: "high",
        description: "Znacznie zwiększone stężenie digoksyny. Konieczna redukcja dawki digoksyny."
    },
    "Digoxin-Verapamil": {
        severity: "high",
        description: "Ryzyko bradykardii i bloku przedsionkowo-komorowego."
    },

    // Antiarrhythmic Interactions
    "Amiodarone-Warfarin": {
        severity: "high",
        description: "Zwiększone działanie przeciwzakrzepowe. Konieczna redukcja dawki warfaryny."
    },
    "Amiodarone-Quetiapine": {
        severity: "high",
        description: "Zwiększone ryzyko zaburzeń rytmu serca."
    },

    // Calcium Channel Blocker Interactions
    "Diltiazem-Metoprolol": {
        severity: "medium",
        description: "Ryzyko bradykardii i hipotensji."
    },
    "Diltiazem-Atorvastatin": {
        severity: "medium",
        description: "Zwiększone stężenie atorwastatyny. Może wymagać redukcji dawki."
    },

    // Antidepressant Interactions
    "Fluoxetine-Tramadol": {
        severity: "high",
        description: "Ryzyko zespołu serotoninowego. Należy unikać połączenia."
    },
    "Fluoxetine-Warfarin": {
        severity: "medium",
        description: "Zwiększone ryzyko krwawienia. Wymagane monitorowanie INR."
    },
    "Venlafaxine-Tramadol": {
        severity: "high",
        description: "Wysokie ryzyko zespołu serotoninowego."
    },

    // Opioid Interactions
    "Tramadol-Sertraline": {
        severity: "high",
        description: "Zwiększone ryzyko zespołu serotoninowego i drgawek."
    },
    "Codeine-Fluoxetine": {
        severity: "medium",
        description: "Zmniejszona skuteczność przeciwbólowa kodeiny."
    },

    // Gastrointestinal Drug Interactions
    "Domperidone-Amiodarone": {
        severity: "high",
        description: "Zwiększone ryzyko zaburzeń rytmu serca."
    },
    "Esomeprazole-Clopidogrel": {
        severity: "medium",
        description: "Zmniejszona skuteczność przeciwpłytkowa klopidogrelu."
    },

    // Respiratory Drug Interactions
    "Formoterol-Metoprolol": {
        severity: "medium",
        description: "Zmniejszona skuteczność obu leków."
    },
    "Ipratropium-Tiotropium": {
        severity: "medium",
        description: "Zwiększone ryzyko działań niepożądanych antycholinergicznych."
    },

    // Antibiotic Additional Interactions
    "Trimethoprim-Spironolactone": {
        severity: "high",
        description: "Zwiększone ryzyko hiperkaliemii."
    },
    "Trimethoprim-Warfarin": {
        severity: "medium",
        description: "Zwiększone działanie przeciwzakrzepowe. Monitorowanie INR."
    },
    "Flucloxacillin-Warfarin": {
        severity: "medium",
        description: "Może wpływać na działanie warfaryny. Wymagane monitorowanie INR."
    }
};