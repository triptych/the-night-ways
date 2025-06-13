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

        // Restart button
        const restartButton = document.getElementById('restart-button');
        if (restartButton) {
            restartButton.addEventListener('click', () => {
                this.restartGame();
            });
        }

        // Inventory slots (for future item interactions)
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('inventory-slot') && !e.target.classList.contains('empty')) {
                this.showItemInfo(e.target);
            }
        });
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
            '🗡️': 'Ancient Sword - A blade forged in dragon fire',
            '🧪': 'Health Potion - Restores vitality',
            '🔮': 'Crystal Orb - Holds mysterious power',
            '🗝️': 'Golden Key - Opens locked doors',
            '💎': 'Crystal Shard - Fragment of the Crystal of Harmony',
            '📜': 'Ancient Scroll - Contains forgotten knowledge',
            '🏹': 'Elven Bow - Crafted by forest elves',
            '🛡️': 'Dragon Scale Shield - Protects against fire',
            '🧿': 'Amulet of Protection - Wards off evil',
            '💰': 'Gold Pouch - Contains precious coins'
        };
        return descriptions[item] || 'Mysterious item';
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

        // Simple alert for now - could be enhanced with a modal
        alert(`${item}\n\n${description}`);
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

    // Save game state (for future localStorage implementation)
    saveGame() {
        const saveData = {
            currentScene: this.currentScene,
            gameState: this.gameState
        };
        localStorage.setItem('emojiQuest_save', JSON.stringify(saveData));
        console.log('💾 Game saved!');
    }

    // Load game state (for future localStorage implementation)
    loadGame() {
        const saveData = localStorage.getItem('emojiQuest_save');
        if (saveData) {
            const parsed = JSON.parse(saveData);
            this.currentScene = parsed.currentScene;
            this.gameState = parsed.gameState;
            this.updateDisplay();
            console.log('📁 Game loaded!');
            return true;
        }
        return false;
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
