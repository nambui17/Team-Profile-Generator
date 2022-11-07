# Team Profile Generator

  ![MIT License](https://img.shields.io/badge/License-MIT-green.svg)

  ## Description

  It generates a team profile with cards based on provided info. An html document titled index.html will be created with information inputted through the command line. For each team profile page, there will be one manager, then after manager information is inputted, the option to select an engineer or intern will be provided. Entering info about the engineer or intern will create a new card for the engineer/intern in the final webpage after the application concludes.

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Contribution](#contribution)
  - [Test](#test)

  ## Installation

  Install the program by cloning the code from GitHub to the local machine. The GitHub repo can be found at the following link:

  [Team Profile Generator GitHub](https://github.com/nambui17/Team-Profile-Generator)
  
  Run the following command to install inquirer. This will be necessary to run the program. This program has been tested using inquirer version 8.2.4.
  ```
  npm i inquirer@8.2.4 
  ```
  Once inquirer has been installed, Fontawesome will also need to be installed for some icons that will be used. Run the following command in the command line to install font awesome.
  ```
  npm install --save @fortawesome/fontawesome-free
  ```
  Testing the program will make use of jest. Install jest by running the following command in the terminal.
  ```
  npm i jest
  ```
  That's all for the installation instructions! You are now ready to generate a Team Profile website!

  ## Usage

  Starting the application requires opening up a terminal at the folder used for the code. Start the program by running either of the two following commands on the command line.
  ```
  npm start
  ```
  or
  ```
  node index.js
  ```
  The command line will run through adding a manager first. Enter in the information for a manager such as name, employee id, email, etc. Then after the manager is added, the command line will prompt for a yes or no to add another team member to the team profile. Upon selecting no the application will end and an html document with all members added will be generated. If yes is selected, then the command line will ask whether to add an engineer or intern. Enter in the engineer's or intern's information then the command line will ask whether or not to add another member. Repeat this process until all team members have been added. When prompted for another team member, select no to end the process. The new team profile website can be found in the `dist` folder as well as a `style.css` file used in conjuction with the new `index.html` file. The final document should have the following appearance.

  ![Final Team Profile Example](/utils/images/Example-Profile.png)

  Clicking on the email address of one of the team members will open up the user's default email application and start to construct an email with the person's email in the `"To:"` line.

  Clicking on any Engineer's GitHub profile name will redirect to their GitHub profile.

  ## Credits

  N/A

  ## License 

  This project is covered under the MIT License. View the Repo or navigate to the license link below.

  [MIT License](https://spdx.org/licenses/MIT.html)

  ## Contributing

  N/A

  ## Tests

  Test the program by running `npm test` on the command line. The test will run through the class files and determine if each method and class properties in the class are operating.

  ## Questions

  Please visit my GitHub profile or reach me at my email for any further questions!

  GitHub Link: [nambui17](https://github.com/nambui17)

  E-mail: nam.bui17@icloud.com

  ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
  ![NPM](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
  ![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
  ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
  ![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)