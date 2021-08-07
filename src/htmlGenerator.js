const generateManager = function(manager) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header bg-primary">
                    <h3 class="card-title">${manager.name}</h3>
                    <h4 class="card-subtitle mb-2 text-muted"><span class="material-icons">
                    local_cafe
                    </span>Manager</h4>
            </div>
            
           <ul class="card-body list-group list-group-flush>
                    <li class="id list-group-item">ID:  ${manager.id}</li>
                    <li class="email list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                    <li class="office list-group-item">Office Number: ${manager.officeNumber}</li>
            </ul

        </div>
    </div>`;
}


const generateEngineer = function(engineer) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header bg-primary">
                    <h3 class="card-title">${engineer.name}</h3>
                    <h4 class="card-subtitle mb-2 text-muted"> <span class="material-icons">
                    engineering
                    </span>Engineer</h4>
            </div>
            
            <ul class="card-body list-group list-group-flush>
                    <li class="id list-group-item">ID: ${engineer.id}</li>
                    <li class="email list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                    <li class="github list-group-item">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
            </ul>

        </div>
    </div>`;
}

const generateIntern = function(intern) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header bg-primary">
                    <h3 class="card-title">${intern.name}</h3>
                    <h4 class="card-subtitle mb-2 text-muted"> <span class="material-icons">
                    school
                    </span>
                     Intern</h4>
            </div>
            
            <ul class="card-body list-group list-group-flush">
                    <li class="id list-group-item">ID: ${intern.id}</li>
                    <li class="email list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
                    <li class="school list-group-item">School: ${intern.school}</li>
            </ul>

        </div>
    </div>`;
}

//Create and push an array of cards for all employees to page
generatePage = (data) => {
console.log("I'm alive");
    cardArray=[];

    data.forEach(item => {
        if (item.getRole() === 'Manager') {
            const managerCard = generateManager(item);
            cardArray.push(managerCard)
        } else if (item.getRole() === 'Engineer') {
            engineerCard = generateEngineer(item);
            cardArray.push(engineerCard);
        } else if (item.getRole() === 'Intern') {
            internCard = generateIntern(item);
            cardArray.push(internCard);
        }
    })

    //Turn array into strings for browser to read
    const allCards = cardArray.join(' ');
    console.log(allCards);

    const profiles = entirePage(allCards);
    return profiles;
}



//Create the rest of html Page
const entirePage = function (allCards) {
    return `
    <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profile</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
  </head>
  <body>
      <header>
          <nav class="navbar bg-dark text-primary p-5" id="navbar">
              <span class="mb-0 h1 w-100 text-center" id="navbar-text">Team Profile</span>
          </nav>
      </header>
      <main>
          <div class="container">
              <div class="row justify-content-center m-4" id="team-cards">
                  
                  ${allCards}
              </div>
          </div>
      </main>
      
  </body>
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
  </html>`;
}

module.exports = generatePage;