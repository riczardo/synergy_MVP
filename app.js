// State management
let currentState = 'INITIAL_MEDICATIONS'; // or 'NEW_MEDICATION'
let currentMedicines = [];

// Initialize the application
function initializeApp() {
    const select = document.getElementById('medicine-select');
    select.innerHTML = '<option value="">Wybierz lek...</option>';
    
    Object.keys(MEDICINES_DATABASE).sort().forEach(medicine => {
        const option = document.createElement('option');
        option.value = medicine;
        option.textContent = medicine;
        select.appendChild(option);
    });

    // Set initial state UI
    updateUIForCurrentState();
}

// Update UI based on current state
function updateUIForCurrentState() {
    const headerText = document.getElementById('step-header');
    const addButton = document.getElementById('add-button');
    const proceedButton = document.getElementById('proceed-button');
    const stepDescription = document.getElementById('step-description');

    if (currentState === 'INITIAL_MEDICATIONS') {
        headerText.textContent = 'Krok 1: Lista obecnie przyjmowanych leków';
        stepDescription.textContent = 'Wybierz wszystkie leki, które pacjent obecnie przyjmuje:';
        addButton.textContent = 'Dodaj do listy';
        proceedButton.style.display = 'block';
    } else {
        headerText.textContent = 'Krok 2: Sprawdzanie nowego leku';
        stepDescription.textContent = 'Wybierz lek, który chcesz przepisać pacjentowi:';
        addButton.textContent = 'Sprawdź interakcje';
        proceedButton.style.display = 'none';
    }
}

// Proceed to next step
function proceedToNewMedication() {
    if (currentMedicines.length === 0) {
        alert('Proszę dodać co najmniej jeden lek do listy obecnie przyjmowanych leków.');
        return;
    }

    currentState = 'NEW_MEDICATION';
    updateUIForCurrentState();
    document.getElementById('medicine-select').value = '';
    document.getElementById('interaction-warnings').innerHTML = '';
}

// Add or check medicine based on current state
function handleMedicineAction() {
    const select = document.getElementById('medicine-select');
    const medicine = select.value;
    
    if (!medicine) {
        alert('Proszę wybrać lek z listy');
        return;
    }

    if (currentState === 'INITIAL_MEDICATIONS') {
        addToCurrentMedications(medicine);
    } else {
        checkNewMedication(medicine);
    }
}

// Add to current medications list
function addToCurrentMedications(medicine) {
    if (currentMedicines.includes(medicine)) {
        alert('Ten lek jest już na liście');
        return;
    }

    currentMedicines.push(medicine);
    updateMedicineList();
    document.getElementById('medicine-select').value = '';
}

// Check new medication for interactions
function checkNewMedication(medicine) {
    if (currentMedicines.includes(medicine)) {
        alert('Ten lek jest już na liście pacjenta');
        return;
    }

    const interactions = checkInteractionsForNewMedicine(medicine);
    displayInteractionResults(medicine, interactions);
}

// Check interactions between new medicine and current medicines
function checkInteractionsForNewMedicine(newMedicine) {
    const interactions = [];
    
    currentMedicines.forEach(currentMedicine => {
        // Check both directions of potential interaction
        const interactionKey1 = `${newMedicine}-${currentMedicine}`;
        const interactionKey2 = `${currentMedicine}-${newMedicine}`;
        
        if (INTERACTIONS[interactionKey1]) {
            interactions.push({
                medicines: [newMedicine, currentMedicine],
                ...INTERACTIONS[interactionKey1]
            });
        } else if (INTERACTIONS[interactionKey2]) {
            interactions.push({
                medicines: [newMedicine, currentMedicine],
                ...INTERACTIONS[interactionKey2]
            });
        }
    });

    return interactions;
}

// Display interaction results
function displayInteractionResults(medicine, interactions) {
    const warningDiv = document.getElementById('interaction-warnings');
    warningDiv.innerHTML = '';

    if (interactions.length === 0) {
        warningDiv.innerHTML = `
            <div class="alert alert-success">
                <h4 class="alert-heading">✅ Brak interakcji</h4>
                <p>Lek ${medicine} można bezpiecznie dodać do obecnej listy leków pacjenta.</p>
            </div>
        `;
        return;
    }

    const warningHeader = document.createElement('h4');
    warningHeader.className = 'alert-heading mb-3';
    warningHeader.textContent = `⚠️ Wykryto potencjalne interakcje dla leku ${medicine}:`;
    warningDiv.appendChild(warningHeader);

    interactions.forEach(interaction => {
        const warning = document.createElement('div');
        warning.className = `alert alert-${interaction.severity}`;
        warning.innerHTML = `
            <strong>${interaction.medicines.join(' + ')}</strong><br>
            ${interaction.description}
        `;
        warningDiv.appendChild(warning);
    });
}

// Update the displayed list of current medicines
function updateMedicineList() {
    const list = document.getElementById('medicine-list');
    list.innerHTML = '';
    
    if (currentMedicines.length === 0) {
        list.innerHTML = '<div class="text-muted">Brak leków na liście</div>';
        return;
    }

    currentMedicines.forEach(medicine => {
        const item = document.createElement('div');
        item.className = 'medicine-item';
        const medicineInfo = MEDICINES_DATABASE[medicine];
        item.innerHTML = `
            ${medicine}
            <span class="medicine-category">(${medicineInfo.category})</span>
            <button onclick="removeMedicine('${medicine}')" class="remove-btn">
                ❌
            </button>
        `;
        list.appendChild(item);
    });
}

// Remove a medicine from the current list
function removeMedicine(medicine) {
    currentMedicines = currentMedicines.filter(m => m !== medicine);
    updateMedicineList();
    document.getElementById('interaction-warnings').innerHTML = '';
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', initializeApp);
