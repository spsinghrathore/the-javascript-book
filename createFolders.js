const fs = require('fs');
const path = require('path');

// Root directory for your repo
const rootDir = 'JavaScript-Treasure-Map';

// List of concepts with folder names
const concepts = [
  '01_What_is_JavaScript',
  '02_How_JS_Works',
  '03_Variables_Constants',
  '04_Data_Types',
  '05_Operators_Expressions',
  '06_Type_Conversion_Coercion',
  '07_Conditionals',
  '08_Loops',
  '09_Functions',
  '10_Scope_Lexical',
  '11_Hoisting',
  '12_Closures',
  '13_This_Keyword',
  '14_OO_JS',
  '15_Prototypes_Inheritance',
  '16_Arrays_Methods',
  '17_DOM_Manipulation',
  '18_Events_Handling',
  '19_Async_JS',
  '20_Async_Await_Fetch',
  '21_Error_Handling',
  '22_Modern_JS_ES6_Plus',
  '23_Modules_Tooling',
  '24_JSON_APIs',
  '25_Mini_Projects'
];

// Sub-files in each concept folder
const files = [
  'What_is.md',
  'How_it_works.md',
  'Why_should_I_care.md',
  'Real_Life_Examples.md',
  'Practice.md',
  'Cheatsheet.md',
  'Revision_Notes.md'
];

function createFolders() {
  if (!fs.existsSync(rootDir)) {
    fs.mkdirSync(rootDir);
  }

  concepts.forEach(concept => {
    const conceptDir = path.join(rootDir, concept);
    if (!fs.existsSync(conceptDir)) {
      fs.mkdirSync(conceptDir);
      console.log(`📁 Created: ${conceptDir}`);
    }

    files.forEach(file => {
      const filePath = path.join(conceptDir, file);
      if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, `# ${file.replace('.md', '').replace(/_/g, ' ')}\n`);
        console.log(`📄 Created: ${filePath}`);
      }
    });
  });

  console.log('✅ All folders and files created successfully!');
}

createFolders();
