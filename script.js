document.addEventListener('DOMContentLoaded', function() {
    function updateTime() {
        const now = new Date();

        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

        // Local Time
        document.getElementById('time-local').textContent = now.toLocaleTimeString();
        document.getElementById('date-local').textContent = now.toLocaleDateString(undefined, options);

        // India Time
        const indiaTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
        document.getElementById('time-india').textContent = indiaTime.toLocaleTimeString();
        document.getElementById('date-india').textContent = indiaTime.toLocaleDateString(undefined, options);

        // New York Time
        const newYorkTime = new Date(now.toLocaleString('en-US', { timeZone: 'America/New_York' }));
        document.getElementById('time-new-york').textContent = newYorkTime.toLocaleTimeString();
        document.getElementById('date-new-york').textContent = newYorkTime.toLocaleDateString(undefined, options);

        // London Time
        const londonTime = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/London' }));
        document.getElementById('time-london').textContent = londonTime.toLocaleTimeString();
        document.getElementById('date-london').textContent = londonTime.toLocaleDateString(undefined, options);

        // Tokyo Time
        const tokyoTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Tokyo' }));
        document.getElementById('time-tokyo').textContent = tokyoTime.toLocaleTimeString();
        document.getElementById('date-tokyo').textContent = tokyoTime.toLocaleDateString(undefined, options);

        // Sydney Time
        const sydneyTime = new Date(now.toLocaleString('en-US', { timeZone: 'Australia/Sydney' }));
        document.getElementById('time-sydney').textContent = sydneyTime.toLocaleTimeString();
        document.getElementById('date-sydney').textContent = sydneyTime.toLocaleDateString(undefined, options);

        // Paris Time
        const parisTime = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/Paris' }));
        document.getElementById('time-paris').textContent = parisTime.toLocaleTimeString();
        document.getElementById('date-paris').textContent = parisTime.toLocaleDateString(undefined, options);

        // Dubai Time
        const dubaiTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Dubai' }));
        document.getElementById('time-dubai').textContent = dubaiTime.toLocaleTimeString();
        document.getElementById('date-dubai').textContent = dubaiTime.toLocaleDateString(undefined, options);
    }

    updateTime();
    setInterval(updateTime, 1000);
});
