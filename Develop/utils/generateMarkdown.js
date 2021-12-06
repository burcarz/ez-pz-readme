// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `
  [${license}]
  `
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(link) {
  return `
  ${link}
  `
}

// TODO: Create a function to generate markdown for README
module.exports = markdownData => {
  console.log(markdownData)
  const { title, description, install, ...license } = markdownData;

  return `
  # ${markdownData.title}<a name="title"></a>

  ${markdownData.description}

  ## License<a name="license"></a>
  
  [${markdownData.badge}](${markdownData.license})

  ## Installation<a name="install"></a>
  
  ${markdownData.install}

  ## Usage<a name="usage"></a>

  ${markdownData.usage}

  ## Contributing<a name="contri"></a>

  ${markdownData.contribution}

  ## Testing<a name="test"></a>

  ${markdownData.test}

  ## Github Profile<a name="profile></a>

  ${markdownData.user}
  [Link to Profile](${markdownData.profileLink})

  ## Contact

  You can reach me with further questions at [my email](${markdownData.email}).

  ## Table of Contents

  1. [Title](#title)
  2. [License](#license)
  3. [Installation](#install)
  4. [Usage](#usage)
  5. [Constributing](#contri)
  6. [Testing](#test)
  7. [Profile](#profile)
`;
}

