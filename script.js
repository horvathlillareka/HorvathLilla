document.addEventListener('DOMContentLoaded', () => {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];
            const projectList = document.getElementById('project-list');
            projectList.innerHTML = `
                <div>
                    <img src="${user.picture.large}" alt="User Picture">
                    <h3>${user.name.first} ${user.name.last}</h3>
                    <p>${user.email}</p>
                </div>
            `;
        })
        .catch(error => console.error('Error fetching user data:', error));
});
