document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Configuration: Add as many cities as you want here
    const cities = [
        { name: 'Local Time', zone: undefined, type: 'local' }, // undefined zone uses browser default
        { name: 'New Delhi', zone: 'Asia/Kolkata' },
        { name: 'New York', zone: 'America/New_York' },
        { name: 'London', zone: 'Europe/London' },
        { name: 'Tokyo', zone: 'Asia/Tokyo' },
        { name: 'Sydney', zone: 'Australia/Sydney' },
        { name: 'Paris', zone: 'Europe/Paris' },
        { name: 'Dubai', zone: 'Asia/Dubai' },
        { name: 'Los Angeles', zone: 'America/Los_Angeles' },
        { name: 'Singapore', zone: 'Asia/Singapore' }
    ];

    const gridContainer = document.getElementById('clock-grid');
    const searchInput = document.getElementById('search-bar');
    const themeToggle = document.getElementById('theme-toggle');

    // 2. Initial Render of Clock Cards
    function renderClocks(filterText = '') {
        gridContainer.innerHTML = ''; // Clear current grid
        
        cities.forEach(city => {
            // Filter logic
            if (filterText && !city.name.toLowerCase().includes(filterText.toLowerCase())) {
                return;
            }

            const card = document.createElement('div');
            card.className = 'clock-card';
            // Add unique ID for updating
            const safeName = city.name.replace(/\s+/g, '-').toLowerCase();
            card.innerHTML = `
                <div class="city-name">${city.name}</div>
                <div class="digital-time" id="time-${safeName}">--:--</div>
                <div class="date-display" id="date-${safeName}">Loading...</div>
                <div class="timezone-info">${city.zone || 'Your Location'}</div>
            `;
            gridContainer.appendChild(card);
        });
        updateTime(); // Force immediate update so numbers appear instantly
    }

    // 3. Time Update Logic
    function updateTime() {
        const now = new Date();
        const optionsDate = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
        const optionsTime = { hour: '2-digit', minute: '2-digit', second: '2-digit' };

        cities.forEach(city => {
            const safeName = city.name.replace(/\s+/g, '-').toLowerCase();
            const timeEl = document.getElementById(`time-${safeName}`);
            const dateEl = document.getElementById(`date-${safeName}`);

            // Check if element exists (it might be hidden by search filter)
            if (timeEl && dateEl) {
                let timeString, dateString;

                if (city.type === 'local') {
                    timeString = now.toLocaleTimeString();
                    dateString = now.toLocaleDateString(undefined, optionsDate);
                } else {
                    timeString = now.toLocaleTimeString('en-US', { timeZone: city.zone, ...optionsTime });
                    dateString = now.toLocaleDateString('en-US', { timeZone: city.zone, ...optionsDate });
                }

                timeEl.textContent = timeString;
                dateEl.textContent = dateString;
            }
        });
    }

    // 4. Search Listener
    searchInput.addEventListener('input', (e) => {
        renderClocks(e.target.value);
    });

    // 5. Dark Mode Logic
    function toggleTheme() {
        const isDark = document.body.getAttribute('data-theme') === 'dark';
        if (isDark) {
            document.body.removeAttribute('data-theme');
            themeToggle.textContent = '🌙';
            localStorage.setItem('theme', 'light');
        } else {
            document.body.setAttribute('data-theme', 'dark');
            themeToggle.textContent = '☀️';
            localStorage.setItem('theme', 'dark');
        }
    }

    // Check saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '☀️';
    }

    themeToggle.addEventListener('click', toggleTheme);

    // 6. Ad Logic Check (Optional Simulation)
    // This checks if ad blocks are empty and ensures they are hidden
    function checkAds() {
        const ads = document.querySelectorAll('.ad-container');
        ads.forEach(ad => {
            if (ad.innerHTML.trim().length === 0) {
                ad.style.display = 'none';
            } else {
                ad.style.display = 'block';
            }
        });
    }

    // Initialize
    renderClocks();
    setInterval(updateTime, 1000);
    
    // Run ad check after a slight delay to allow ad scripts to load
    setTimeout(checkAds, 2000);
});
