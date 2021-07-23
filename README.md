# URL Shortener


## Contributing guidelines

Welcome and thank you for considering contributing to the project! 

Before contributing, please read the following guidelines which will help us make the contribution process simple and effective. It also communicate that you respect the time of the developers managing and developing this open source project. In return, they should reciprocate that respect in addressing your issue, assessing changes, and helping you finalize your pull requests.

## Code of Conduct

Everybody can contribute to the project. However, keep in mind some important rules:
- Be respectful of different viewpoints and experiences
- Accept constructive criticism
- Focus on what is best for the community

Unacceptable behavior such as violence, threat, harassment or other behavior which could be considered inappropriate will be sanctioned.

## What kinds of contributions are we looking for?

Your help is always welcome! You can contribute to the project by suggesting new features, reporting issues, improving documentation and more. So don't hesitate!

## Pull Requests

PRs are welcome! In general, PR should:
- Fix a feature
- Add/upgrade a feature
- Report an issue
- Include documentation in the repo
- Use the PR template available in the doc folder

## Contributing

If you want to make changes:
1. Clone the repositories : there is one repo for the front and one for the back
2. Do your changes (please follow the style of the project)
3. Push your changes on a new branch
4. Submit your Pull Request (don't forget to use the PR template!)

## Getting started

This project uses:
- ReactJS (front)
- MySQL (database)
- Node.js (back)
- PHPMyAdmin to visualize the database
- Express (back)
- [bcrypt](https://www.bcrypt.fr/) to create a hash of the user password
- [JSON Web Token](https://jwt.io/) to create a token when the user logs in
- [Docker](https://www.docker.com/)
- Sequelize (back)

## Launch the back

- Launch Docker
- Open your terminal and go to the back folder of the project
- Enter the following command in your terminal to launch and build: `docker-compose up --build`
- To leave the back enter the following command in your terminal : `ctrl + c` and `docker-compose down`

## Database

- Two tables : users and links
- To visualize, use PHPMyAdmin : go to [localhost:8301](http://localhost:8301)

## Organisation

- docker-compose.yml : permit use of docker for the project back-end
- docker/mysql : contain the dump for the database and stock data for database
- src : main directory 
- The main file is app.js
- Interaction between back-end and database : there are four routes in this project which interact with the database (3 POST and 1  GET, see testing for the routes)
    

## Testing

To test the routes : use postman/insomnia
- Route for Signing up into the project :
    - POST
    - http://localhost:8201/user/signup/
    -  body : url-encoded
        - pseudo : pseudoTest
        - password : passwordTest
        - email : email@email.com

- Route for Signing in once you have registered at least one user :
    - POST
    - http://localhost:8201/user/signin/
    - body : url-encoded
        - pseudo : pseudoTest
        - password : passwordTest
        - email : email@email.com

- Route for creating a shortened link (must have at least one user) :
    - POST
    - http://localhost:8201/links/
    - body : url-encoded
        - key :
            - user_idUser
            - customLink
            - originLink
        - value :
            - 1
            - e@email.com
            - email@email.com

- Route for getting all links from a specific user (must have at least one user with a link): 
    - GET
    - http://localhost:8201/links/
    - params : 
        - key: user_idUser
        - value: 1