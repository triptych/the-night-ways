// Emoji Quest Interactive Fiction Engine
class EmojiQuestEngine {
    constructor() {
        this.currentScene = 'start';
        this.gameState = {
            playerClass: null,
            health: 100,
            experience: 0,
            gold: 50,
            inventory: [],
            flags: {},
            visitedScenes: []
        };
        this.maxInventorySlots = 6;
        this.scenes = {};
        this.isInitialized = false;
    }

    // Initialize the game
    init() {
        if (this.isInitialized) return;

        this.loadGameData();
        this.setupEventListeners();
        this.updateDisplay();
        this.isInitialized = true;

        console.log('🎮 Emoji Quest Engine initialized!');
    }

    // Load game data from the external file
    loadGameData() {
        if (typeof GAME_DATA !== 'undefined') {
            this.scenes = GAME_DATA.scenes;
        } else {
            console.error('Game data not found! Make sure game-data.js is loaded.');
        }
    }

    // Set up event listeners
    setupEventListeners() {
        // Choice button clicks
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('choice-button')) {
                const choiceIndex = parseInt(e.target.dataset.choice);
                this.makeChoice(choiceIndex);
            }
        });

        // Game control buttons
        const saveButton = document.getElementById('save-button');
        const loadButton = document.getElementById('load-button');
        const restartButton = document.getElementById('restart-button');

        if (saveButton) {
            saveButton.addEventListener('click', () => {
                this.showSaveDialog();
            });
        }

        if (loadButton) {
            loadButton.addEventListener('click', () => {
                this.showLoadDialog();
            });
        }

        if (restartButton) {
            restartButton.addEventListener('click', () => {
                this.restartGame();
            });
        }

        // Inventory slots (for item interactions)
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('inventory-slot') && !e.target.classList.contains('empty')) {
                this.showItemInfo(e.target);
            }
        });

        // Item dialog close buttons
        document.addEventListener('click', (e) => {
            if (e.target.id === 'dialog-close-btn' || e.target.id === 'dialog-ok-btn') {
                const dialog = document.getElementById('item-info-dialog');
                if (dialog) {
                    dialog.close();
                }
            }
        });

        // Close dialog when clicking outside (on backdrop)
        document.addEventListener('click', (e) => {
            if (e.target.id === 'item-info-dialog') {
                e.target.close();
            }
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey || e.metaKey) {
                switch (e.key.toLowerCase()) {
                    case 's':
                        e.preventDefault();
                        this.quickSave();
                        break;
                    case 'l':
                        e.preventDefault();
                        this.quickLoad();
                        break;
                    case 'r':
                        e.preventDefault();
                        this.restartGame();
                        break;
                }
            }
        });

        // Auto-save every scene change
        this.enableAutoSave();
    }

    // Make a choice and transition to the next scene
    makeChoice(choiceIndex) {
        const currentSceneData = this.scenes[this.currentScene];
        if (!currentSceneData || !currentSceneData.choices || !currentSceneData.choices[choiceIndex]) {
            console.error('Invalid choice:', choiceIndex);
            return;
        }

        const choice = currentSceneData.choices[choiceIndex];

        // Apply choice effects
        this.applyChoiceEffects(choice);

        // Transition to next scene
        if (choice.nextScene) {
            this.transitionToScene(choice.nextScene);
        }
    }

    // Apply effects from a choice
    applyChoiceEffects(choice) {
        if (!choice.effects) return;

        const effects = choice.effects;

        // Stat changes
        if (effects.health) this.gameState.health = Math.max(0, Math.min(100, this.gameState.health + effects.health));
        if (effects.experience) this.gameState.experience += effects.experience;
        if (effects.gold) this.gameState.gold = Math.max(0, this.gameState.gold + effects.gold);

        // Set player class
        if (effects.setPlayerClass) {
            this.gameState.playerClass = effects.setPlayerClass;
        }

        // Add items to inventory
        if (effects.addItem) {
            this.addToInventory(effects.addItem);
        }

        // Remove items from inventory
        if (effects.removeItem) {
            this.removeFromInventory(effects.removeItem);
        }

        // Set flags
        if (effects.setFlag) {
            for (const [flag, value] of Object.entries(effects.setFlag)) {
                this.gameState.flags[flag] = value;
            }
        }

        // Trigger magical effect
        if (effects.magical) {
            this.triggerMagicalEffect();
        }
    }

    // Add item to inventory
    addToInventory(item) {
        if (this.gameState.inventory.length < this.maxInventorySlots) {
            this.gameState.inventory.push(item);
            this.updateInventoryDisplay();
            return true;
        }
        return false;
    }

    // Remove item from inventory
    removeFromInventory(item) {
        const index = this.gameState.inventory.indexOf(item);
        if (index > -1) {
            this.gameState.inventory.splice(index, 1);
            this.updateInventoryDisplay();
            return true;
        }
        return false;
    }

    // Transition to a new scene
    transitionToScene(sceneId) {
        const sceneData = this.scenes[sceneId];
        if (!sceneData) {
            console.error('Scene not found:', sceneId);
            return;
        }

        // Check if scene has conditions
        if (sceneData.conditions && !this.checkConditions(sceneData.conditions)) {
            console.log('Scene conditions not met for:', sceneId);
            return;
        }

        this.currentScene = sceneId;
        this.gameState.visitedScenes.push(sceneId);

        // Trigger auto-save
        this.performAutoSave();

        // Add transition effect
        this.addTransitionEffect();

        // Update display after a short delay for effect
        setTimeout(() => {
            this.updateDisplay();
        }, 100);
    }

    // Check if conditions are met
    checkConditions(conditions) {
        for (const [condition, value] of Object.entries(conditions)) {
            switch (condition) {
                case 'hasItem':
                    if (!this.gameState.inventory.includes(value)) return false;
                    break;
                case 'hasFlag':
                    if (!this.gameState.flags[value]) return false;
                    break;
                case 'playerClass':
                    if (this.gameState.playerClass !== value) return false;
                    break;
                case 'minHealth':
                    if (this.gameState.health < value) return false;
                    break;
                case 'minGold':
                    if (this.gameState.gold < value) return false;
                    break;
                default:
                    console.warn('Unknown condition:', condition);
            }
        }
        return true;
    }

    // Update all display elements
    updateDisplay() {
        this.updateSceneDisplay();
        this.updateChoicesDisplay();
        this.updateStatsDisplay();
        this.updateInventoryDisplay();
        this.updateSceneIndicator();
    }

    // Update the main scene display
    updateSceneDisplay() {
        const sceneData = this.scenes[this.currentScene];
        if (!sceneData) return;

        const sceneEmojis = document.getElementById('scene-emojis');
        const sceneText = document.getElementById('scene-text');

        if (sceneEmojis && sceneData.emojis) {
            sceneEmojis.textContent = sceneData.emojis;
        }

        if (sceneText && sceneData.text) {
            // Replace placeholders with game state values
            let text = sceneData.text;
            text = text.replace(/\{playerClass\}/g, this.getPlayerClassEmoji());
            text = text.replace(/\{health\}/g, this.gameState.health);
            text = text.replace(/\{gold\}/g, this.gameState.gold);
            text = text.replace(/\{experience\}/g, this.gameState.experience);

            sceneText.textContent = text;
        }
    }

    // Update the choices display
    updateChoicesDisplay() {
        const choicesContainer = document.getElementById('choices-container');
        const sceneData = this.scenes[this.currentScene];

        if (!choicesContainer || !sceneData) return;

        choicesContainer.innerHTML = '';

        if (sceneData.choices) {
            sceneData.choices.forEach((choice, index) => {
                // Check if choice is available
                if (choice.conditions && !this.checkConditions(choice.conditions)) {
                    return; // Skip this choice
                }

                const choiceButton = document.createElement('div');
                choiceButton.className = 'choice-button';
                choiceButton.dataset.choice = index;
                choiceButton.textContent = choice.text;

                // Add special styling for certain choices
                if (choice.effects && choice.effects.magical) {
                    choiceButton.classList.add('magical-choice');
                }

                choicesContainer.appendChild(choiceButton);
            });
        }

        // If no choices available, show a continue button or game over
        if (choicesContainer.children.length === 0) {
            const continueButton = document.createElement('div');
            continueButton.className = 'choice-button';
            continueButton.textContent = '🔄 Continue';
            continueButton.addEventListener('click', () => {
                this.handleGameEnd();
            });
            choicesContainer.appendChild(continueButton);
        }
    }

    // Update stats display
    updateStatsDisplay() {
        const healthElement = document.getElementById('health');
        const experienceElement = document.getElementById('experience');
        const goldElement = document.getElementById('gold');

        if (healthElement) healthElement.textContent = this.gameState.health;
        if (experienceElement) experienceElement.textContent = this.gameState.experience;
        if (goldElement) goldElement.textContent = this.gameState.gold;
    }

    // Update inventory display
    updateInventoryDisplay() {
        const inventorySlots = document.querySelectorAll('.inventory-slot');

        inventorySlots.forEach((slot, index) => {
            if (index < this.gameState.inventory.length) {
                slot.textContent = this.gameState.inventory[index];
                slot.classList.remove('empty');
                slot.title = this.getItemDescription(this.gameState.inventory[index]);
            } else {
                slot.textContent = '📦';
                slot.classList.add('empty');
                slot.title = 'Empty slot';
            }
        });
    }

    // Update scene indicator
    updateSceneIndicator() {
        const sceneIndicator = document.getElementById('current-scene');
        if (sceneIndicator) {
            sceneIndicator.textContent = this.currentScene;
        }
    }

    // Get player class emoji
    getPlayerClassEmoji() {
        switch (this.gameState.playerClass) {
            case 'wizard': return '🧙‍♂️';
            case 'archer': return '🏹';
            case 'knight': return '🛡️';
            default: return '👤';
        }
    }

    // Get item description
    getItemDescription(item) {
        const descriptions = {
            '🗡️': 'A blade forged in dragon fire, incredibly sharp and powerful',
            '🧪': 'Restores vitality when consumed, healing wounds instantly',
            '🔮': 'Holds mysterious power, pulsing with arcane energy',
            '🗝️': 'Opens locked doors and hidden passages',
            '💎': 'Fragment of the Crystal of Harmony, glowing with pure light',
            '📜': 'Contains forgotten knowledge and ancient spells',
            '🏹': 'Crafted by forest elves, never misses its target',
            '🛡️': 'Protects against fire and magical attacks',
            '🧿': 'Wards off evil spirits and dark magic',
            '💰': 'Contains precious coins from distant lands'
        };
        return descriptions[item] || 'A mysterious item with unknown properties';
    }

    // Get item name
    getItemName(item) {
        const names = {
            '🗡️': 'Ancient Sword',
            '🧪': 'Health Potion',
            '🔮': 'Crystal Orb',
            '🗝️': 'Golden Key',
            '💎': 'Crystal Shard',
            '📜': 'Ancient Scroll',
            '🏹': 'Elven Bow',
            '🛡️': 'Dragon Scale Shield',
            '🧿': 'Amulet of Protection',
            '💰': 'Gold Pouch'
        };
        return names[item] || 'Mysterious Item';
    }

    // Add transition effect
    addTransitionEffect() {
        const sceneDisplay = document.querySelector('.scene-display');
        if (sceneDisplay) {
            sceneDisplay.classList.add('scene-transition');
            setTimeout(() => {
                sceneDisplay.classList.remove('scene-transition');
            }, 500);
        }
    }

    // Trigger magical effect
    triggerMagicalEffect() {
        const sceneDisplay = document.querySelector('.scene-display');
        if (sceneDisplay) {
            sceneDisplay.classList.add('magical-effect');
            setTimeout(() => {
                sceneDisplay.classList.remove('magical-effect');
            }, 1000);
        }
    }

    // Show item information
    showItemInfo(itemElement) {
        const item = itemElement.textContent;
        const description = this.getItemDescription(item);
        const itemName = this.getItemName(item);

        // Get dialog elements
        const dialog = document.getElementById('item-info-dialog');
        const dialogItemName = document.getElementById('dialog-item-name');
        const dialogItemEmoji = document.getElementById('dialog-item-emoji');
        const dialogItemDescription = document.getElementById('dialog-item-description');

        if (dialog && dialogItemName && dialogItemEmoji && dialogItemDescription) {
            // Populate dialog content
            dialogItemName.textContent = itemName;
            dialogItemEmoji.textContent = item;
            dialogItemDescription.textContent = description;

            // Show the dialog
            dialog.showModal();
        }
    }

    // Handle game end scenarios
    handleGameEnd() {
        if (this.currentScene === 'victory') {
            alert('🎉 Congratulations! You have restored the Crystal Kingdom! 🎉');
        } else if (this.currentScene === 'defeat') {
            alert('💀 Game Over! The kingdom remains in darkness... 💀');
        }

        // Option to restart
        if (confirm('Would you like to play again?')) {
            this.restartGame();
        }
    }

    // Restart the game
    restartGame() {
        this.currentScene = 'start';
        this.gameState = {
            playerClass: null,
            health: 100,
            experience: 0,
            gold: 50,
            inventory: [],
            flags: {},
            visitedScenes: []
        };

        this.updateDisplay();
        console.log('🔄 Game restarted!');
    }

    // Enhanced save game with multiple slots
    saveGame(slotNumber = 1, slotName = '') {
        const timestamp = new Date().toLocaleString();
        const saveData = {
            currentScene: this.currentScene,
            gameState: { ...this.gameState },
            timestamp: timestamp,
            slotName: slotName || `Save ${slotNumber}`,
            playerClass: this.gameState.playerClass,
            sceneTitle: this.getSceneTitle(this.currentScene)
        };

        const saveKey = `nightWays_save_${slotNumber}`;
        try {
            localStorage.setItem(saveKey, JSON.stringify(saveData));
            this.showNotification(`💾 Game saved to slot ${slotNumber}!`, 'success');
            console.log(`💾 Game saved to slot ${slotNumber}!`);
            return true;
        } catch (error) {
            this.showNotification('❌ Save failed! Storage may be full.', 'error');
            console.error('Save failed:', error);
            return false;
        }
    }

    // Enhanced load game with slot selection
    loadGame(slotNumber = 1) {
        const saveKey = `nightWays_save_${slotNumber}`;
        try {
            const saveData = localStorage.getItem(saveKey);
            if (saveData) {
                const parsed = JSON.parse(saveData);
                this.currentScene = parsed.currentScene;
                this.gameState = { ...parsed.gameState };
                this.updateDisplay();
                this.showNotification(`📁 Game loaded from slot ${slotNumber}!`, 'success');
                console.log(`📁 Game loaded from slot ${slotNumber}!`);
                return true;
            } else {
                this.showNotification(`❌ No save found in slot ${slotNumber}`, 'error');
                return false;
            }
        } catch (error) {
            this.showNotification('❌ Load failed! Save file may be corrupted.', 'error');
            console.error('Load failed:', error);
            return false;
        }
    }

    // Quick save to slot 1 (Ctrl+S)
    quickSave() {
        this.saveGame(1, 'Quick Save');
    }

    // Quick load from slot 1 (Ctrl+L)
    quickLoad() {
        if (this.loadGame(1)) {
            // Success notification handled by loadGame
        }
    }

    // Auto-save functionality
    enableAutoSave() {
        this.autoSaveEnabled = true;
        this.autoSaveInterval = 5; // Auto-save every 5 scene changes
        this.scenesSinceAutoSave = 0;
    }

    // Perform auto-save if conditions are met
    performAutoSave() {
        if (!this.autoSaveEnabled) return;

        this.scenesSinceAutoSave++;
        if (this.scenesSinceAutoSave >= this.autoSaveInterval) {
            this.saveGame(0, 'Auto Save');
            this.scenesSinceAutoSave = 0;
        }
    }

    // Show save dialog with multiple slots
    showSaveDialog() {
        const saves = this.getAllSaves();
        const dialogHTML = this.createSaveDialogHTML(saves);
        this.showModal('💾 Save Game', dialogHTML, this.handleSaveDialogActions.bind(this));
    }

    // Show load dialog with multiple slots
    showLoadDialog() {
        const saves = this.getAllSaves();
        const dialogHTML = this.createLoadDialogHTML(saves);
        this.showModal('📁 Load Game', dialogHTML, this.handleLoadDialogActions.bind(this));
    }

    // Get all save slots
    getAllSaves() {
        const saves = {};
        for (let i = 0; i <= 5; i++) { // Slots 0-5 (0 is auto-save)
            const saveKey = `nightWays_save_${i}`;
            const saveData = localStorage.getItem(saveKey);
            if (saveData) {
                try {
                    saves[i] = JSON.parse(saveData);
                } catch (error) {
                    console.error(`Error parsing save slot ${i}:`, error);
                }
            }
        }
        return saves;
    }

    // Create save dialog HTML
    createSaveDialogHTML(saves) {
        let html = '<div class="save-slots">';

        for (let i = 1; i <= 5; i++) {
            const save = saves[i];
            const slotName = save ? save.slotName : `Empty Slot ${i}`;
            const timestamp = save ? save.timestamp : '';
            const playerClass = save ? this.getPlayerClassEmoji(save.playerClass) : '';
            const sceneTitle = save ? save.sceneTitle : '';

            html += `
                <div class="save-slot" data-slot="${i}">
                    <div class="slot-header">
                        <span class="slot-number">Slot ${i}</span>
                        <span class="slot-class">${playerClass}</span>
                    </div>
                    <div class="slot-name">${slotName}</div>
                    <div class="slot-scene">${sceneTitle}</div>
                    <div class="slot-timestamp">${timestamp}</div>
                    <button class="save-button" data-slot="${i}">💾 Save Here</button>
                </div>
            `;
        }

        html += '</div>';
        return html;
    }

    // Create load dialog HTML
    createLoadDialogHTML(saves) {
        let html = '<div class="save-slots">';

        // Auto-save slot
        if (saves[0]) {
            const autoSave = saves[0];
            html += `
                <div class="save-slot auto-save" data-slot="0">
                    <div class="slot-header">
                        <span class="slot-number">Auto Save</span>
                        <span class="slot-class">${this.getPlayerClassEmoji(autoSave.playerClass)}</span>
                    </div>
                    <div class="slot-name">${autoSave.slotName}</div>
                    <div class="slot-scene">${autoSave.sceneTitle}</div>
                    <div class="slot-timestamp">${autoSave.timestamp}</div>
                    <button class="load-button" data-slot="0">📁 Load</button>
                </div>
            `;
        }

        // Manual save slots
        for (let i = 1; i <= 5; i++) {
            const save = saves[i];
            if (save) {
                html += `
                    <div class="save-slot" data-slot="${i}">
                        <div class="slot-header">
                            <span class="slot-number">Slot ${i}</span>
                            <span class="slot-class">${this.getPlayerClassEmoji(save.playerClass)}</span>
                        </div>
                        <div class="slot-name">${save.slotName}</div>
                        <div class="slot-scene">${save.sceneTitle}</div>
                        <div class="slot-timestamp">${save.timestamp}</div>
                        <button class="load-button" data-slot="${i}">📁 Load</button>
                        <button class="delete-button" data-slot="${i}">🗑️ Delete</button>
                    </div>
                `;
            } else {
                html += `
                    <div class="save-slot empty" data-slot="${i}">
                        <div class="slot-header">
                            <span class="slot-number">Slot ${i}</span>
                        </div>
                        <div class="slot-name">Empty Slot</div>
                        <div class="slot-scene">No save data</div>
                        <div class="slot-timestamp"></div>
                    </div>
                `;
            }
        }

        html += '</div>';
        return html;
    }

    // Handle save dialog button clicks
    handleSaveDialogActions(event) {
        if (event.target.classList.contains('save-button')) {
            const slotNumber = parseInt(event.target.dataset.slot);
            const slotName = prompt(`Enter a name for save slot ${slotNumber}:`, `Save ${slotNumber}`);
            if (slotName !== null) {
                this.saveGame(slotNumber, slotName);
                this.closeModal();
            }
        }
    }

    // Handle load dialog button clicks
    handleLoadDialogActions(event) {
        if (event.target.classList.contains('load-button')) {
            const slotNumber = parseInt(event.target.dataset.slot);
            if (confirm(`Load game from slot ${slotNumber}? Current progress will be lost.`)) {
                this.loadGame(slotNumber);
                this.closeModal();
            }
        } else if (event.target.classList.contains('delete-button')) {
            const slotNumber = parseInt(event.target.dataset.slot);
            if (confirm(`Delete save in slot ${slotNumber}? This cannot be undone.`)) {
                this.deleteSave(slotNumber);
                this.showLoadDialog(); // Refresh the dialog
            }
        }
    }

    // Delete a save slot
    deleteSave(slotNumber) {
        const saveKey = `nightWays_save_${slotNumber}`;
        localStorage.removeItem(saveKey);
        this.showNotification(`🗑️ Save slot ${slotNumber} deleted`, 'info');
    }

    // Get scene title for display
    getSceneTitle(sceneId) {
        const sceneData = this.scenes[sceneId];
        if (sceneData && sceneData.text) {
            // Return first 50 characters of scene text
            return sceneData.text.substring(0, 50).trim() + '...';
        }
        return sceneId.replace(/_/g, ' ').toUpperCase();
    }

    // Get player class emoji with fallback
    getPlayerClassEmoji(playerClass) {
        switch (playerClass) {
            case 'wizard': return '🧙‍♂️';
            case 'archer': return '🏹';
            case 'knight': return '🛡️';
            default: return '👤';
        }
    }

    // Show modal dialog
    showModal(title, content, actionHandler) {
        // Remove existing modal if any
        this.closeModal();

        const modal = document.createElement('div');
        modal.className = 'modal-overlay';
        modal.innerHTML = `
            <div class="modal-dialog">
                <div class="modal-header">
                    <h3>${title}</h3>
                    <button class="modal-close">✕</button>
                </div>
                <div class="modal-content">
                    ${content}
                </div>
                <div class="modal-footer">
                    <button class="modal-cancel">Cancel</button>
                </div>
            </div>
        `;

        // Add event listeners
        modal.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal-overlay') ||
                e.target.classList.contains('modal-close') ||
                e.target.classList.contains('modal-cancel')) {
                this.closeModal();
            } else if (actionHandler) {
                actionHandler(e);
            }
        });

        document.body.appendChild(modal);
    }

    // Close modal dialog
    closeModal() {
        const modal = document.querySelector('.modal-overlay');
        if (modal) {
            modal.remove();
        }
    }

    // Show notification
    showNotification(message, type = 'info') {
        // Remove existing notification
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;

        document.body.appendChild(notification);

        // Auto-remove after 3 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 3000);
    }

    // Get game statistics
    getStats() {
        return {
            currentScene: this.currentScene,
            scenesVisited: this.gameState.visitedScenes.length,
            itemsCollected: this.gameState.inventory.length,
            ...this.gameState
        };
    }
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = EmojiQuestEngine;
}
