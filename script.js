// Affirmations by mood
const affirmations = {
    happy: [
        "✨ Keep the good energy! You're shining bright! ✨",
        "🌟 Your smile is contagious! Keep spreading joy!",
        "💕 You're a ray of sunshine in this world!",
        "🎉 Your positive energy is inspiring everyone around you!",
        "🌸 You deserve all the happiness you're feeling!",
        "💖 Keep dancing through life with that beautiful smile!",
        "✨ You're absolutely glowing today!",
        "🎊 Your happiness is the best accessory!"
    ],
    sad: [
        "💙 It's okay to feel sad sometimes. You're stronger than you think! 💙",
        "🌈 This sadness is temporary, but your strength is permanent!",
        "💕 You deserve kindness, especially from yourself. Be gentle with you.",
        "🌸 Even the darkest nights end with sunrise. Your light will shine again!",
        "✨ You are loved more than you know. This pain will pass.",
        "💖 Your feelings matter. It's okay to take time to heal.",
        "🎀 You are worthy of love and happiness, always!",
        "⭐ Every tear you cry makes you braver and stronger!"
    ],
    tired: [
        "😴 You're doing amazing work! Rest is productive too! 😴",
        "💤 You deserve to take a break. Self-care isn't selfish!",
        "🌙 Even superstars need to recharge. You're doing great!",
        "✨ Your effort matters, even when you're running on empty!",
        "💕 It's okay to be tired. You've been working so hard!",
        "🎀 Close your eyes and remember: you've got this! Rest now, conquer tomorrow!",
        "🌸 Exhaustion is a sign you've been giving your all. You rock!",
        "⭐ You're allowed to rest without feeling guilty. Relax, you've earned it!"
    ],
    stressed: [
        "😰 Breathe. You've handled hard things before, you can handle this too! 😰",
        "💙 This stress doesn't define you. You are capable and strong!",
        "🌸 One step at a time. You don't have to see the whole staircase!",
        "✨ Your worries don't control your worth. You are enough!",
        "🎀 Let go of what you can't control. Focus on what you can. You've got this!",
        "💖 Stress is just growth in disguise. You're becoming stronger!",
        "🌈 This is temporary. You will get through this. I believe in you!",
        "⭐ Your anxiety doesn't define your abilities. You are capable!"
    ]
};

// More reliable cat GIFs from Giphy
const catGifs = {
    happy: [
        "https://giphy.com/gifs/cat-kitten-cute-PeUJI2O7hxYaI/fullscreen",
        "https://giphy.com/gifs/happy-cat-dancing-NvGRNyb4r32eQ/fullscreen",
        "https://giphy.com/gifs/funny-cat-dance-H4DjXQHprimary/fullscreen",
        "https://giphy.com/gifs/cat-happy-jump-l0MwY7jJ6DWf3xSDC/fullscreen"
    ],
    sad: [
        "https://giphy.com/gifs/cat-sad-l0HlP6rQtDNmHhKzm/fullscreen",
        "https://giphy.com/gifs/sad-cat-l0HlP7Y3QkRjW1jDK/fullscreen",
        "https://giphy.com/gifs/cat-sad-kitty-l0HlHJJI6nTN8KvAI/fullscreen"
    ],
    tired: [
        "https://giphy.com/gifs/cat-sleep-tired-l0HlQZ9FrLfLHB6nK/fullscreen",
        "https://giphy.com/gifs/sleepy-cat-yawning-l0HlLY9x8FZo0XO1i/fullscreen",
        "https://giphy.com/gifs/cat-sleep-nap-l0HlE7Q0nWNKrxLDG/fullscreen"
    ],
    stressed: [
        "https://giphy.com/gifs/cat-worried-stressed-l0HlP6rQtDNmHhKzm/fullscreen",
        "https://giphy.com/gifs/cat-crazy-l0MwY7jJ6DWf3xSDC/fullscreen",
        "https://giphy.com/gifs/cat-anxious-l0HlJKApw0Uw9gVAA/fullscreen"
    ]
};

let currentMood = null;
let currentAffirmationIndex = 0;

// Select mood and show content
function selectMood(mood) {
    currentMood = mood;
    currentAffirmationIndex = 0;
    
    // Hide modal
    document.getElementById('moodModal').classList.remove('active');
    
    // Show main content
    document.getElementById('mainContent').classList.remove('hidden');
    
    // Display first affirmation
    displayAffirmation();
}

// Display current affirmation
function displayAffirmation() {
    const affirmationText = document.getElementById('affirmationText');
    const catEmoji = document.getElementById('catEmoji');
    
    const mood = currentMood;
    const affirmationArray = affirmations[mood];
    
    // Get current affirmation
    const affirmation = affirmationArray[currentAffirmationIndex];
    affirmationText.textContent = affirmation;
    
    // Change emoji based on mood
    const emojiMap = {
        happy: '😸',
        sad: '😿',
        tired: '😴',
        stressed: '😾'
    };
    
    catEmoji.textContent = emojiMap[mood];
}

// Next affirmation
function nextAffirmation() {
    currentAffirmationIndex = (currentAffirmationIndex + 1) % affirmations[currentMood].length;
    displayAffirmation();
}

// Change mood
function changeMood() {
    document.getElementById('moodModal').classList.add('active');
    document.getElementById('mainContent').classList.add('hidden');
}

// Reset page
function resetPage() {
    location.reload();
}

// Show modal on page load
window.addEventListener('load', function() {
    document.getElementById('moodModal').classList.add('active');
});