document.addEventListener('DOMContentLoaded', () => {
    // Example code for activities page
    if (document.querySelector('#activities')) {
        const activities = [
            { name: 'Wyjście do DPS', date: '2023-06-17', points: 40 },
            { name: 'Wolontariat na wydarzeniu sportowym', date: '2023-06-28', points: 30 },
            { name: 'Zbiórka na rzecz schroniska dla zwierząt', date: '2023-06-20', points: 20 },
            // Add more activities here
        ];

        const activityList = document.getElementById('activity-list');
        activities.forEach(activity => {
            const li = document.createElement('li');
            li.className = 'list-group-item';
            li.textContent = `${activity.name} - Data: ${activity.date}, Punkty: ${activity.points}`;
            activityList.appendChild(li);
        });
    }

    // Example code for ranking page
    if (document.querySelector('#ranking')) {
        let ranking = [
            { name: 'Jan Kowalski', points: 100 },
            { name: 'Anna Nowak', points: 80 },
            { name: 'Wojciech Borkowski', points: 90 },
            // Add more ranking entries here
        ];

        // Sortowanie rankingów
        ranking.sort((a, b) => b.points - a.points); // Sortowanie malejąco

        const rankingList = document.getElementById('ranking-list');
        ranking.forEach((student, index) => {
            const li = document.createElement('li');
            li.className = 'list-group-item';
            li.textContent = `${index + 1}. ${student.name} - Punkty: ${student.points}`;
            rankingList.appendChild(li);
        });
    }
});
