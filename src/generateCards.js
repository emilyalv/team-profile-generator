function generateCards(employees) {
  const cards = [];
  for (let i = 0; i < employees.length; i++) {
    const role = employees[i].getRole();
    switch (role) {
      case "Intern":
        cards.push(`
        <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${employees[i].getName()}</h2>
        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${employees[
          i
        ].getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${employees[i].getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${employees[
              i
            ].getEmail()}">${employees[i].getEmail()}</a></li>
            <li class="list-group-item">School: ${employees[i].getSchool()}</li>
        </ul>
    </div>
</div>
        `);
        break;
      case "Engineer":
        cards.push(`
            <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${employees[i].getName()}</h2>
            <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${employees[
              i
            ].getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${employees[i].getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${employees[
                  i
                ].getEmail()}">${employees[i].getEmail()}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${employees[
                  i
                ].getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
            </ul>
        </div>
    </div>
            `);
        break;
      case "Manager":
        cards.push(
          `
            <div class="card employee-card">
            <div class="card-header">
                <h2 class="card-title">${employees[i].getName()}</h2>
                <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${employees[
                  i
                ].getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${employees[i].getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${employees[
                      i
                    ].getEmail()}">${employees[i].getEmail()}</a></li>
                    <li class="list-group-item">Office number: ${employees[
                      i
                    ].getOfficeNumber()}</li>
                </ul>
            </div>
        </div>
            `
        );
        break;

      default:
        break;
    }
  }
  return cards.join("");
}

module.exports = generateCards;
