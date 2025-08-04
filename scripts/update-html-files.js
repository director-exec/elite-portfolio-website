#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🎨 Updating HTML files with new design...');

// Function to read the template
function readTemplate() {
  return fs.readFileSync('template.html', 'utf8');
}

// Function to extract content from existing HTML files
function extractContent(htmlContent) {
  // Remove any existing head, header, footer, and script tags
  let content = htmlContent
    .replace(/<head[\s\S]*?<\/head>/gi, '')
    .replace(/<header[\s\S]*?<\/header>/gi, '')
    .replace(/<footer[\s\S]*?<\/footer>/gi, '')
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<body[^>]*>/gi, '')
    .replace(/<\/body>/gi, '')
    .replace(/<html[^>]*>/gi, '')
    .replace(/<\/html>/gi, '')
    .trim();
  
  return content;
}

// Function to update HTML file
function updateHtmlFile(filePath) {
  try {
    console.log(`📄 Processing: ${path.basename(filePath)}`);
    
    // Read the existing file
    const existingContent = fs.readFileSync(filePath, 'utf8');
    
    // Extract the main content
    const mainContent = extractContent(existingContent);
    
    // Read the template
    const template = readTemplate();
    
    // Replace the placeholder content with the actual content
    const updatedContent = template.replace(
      '<!-- PAGE CONTENT GOES HERE -->\n        <div class="page-content">\n            <div class="container">\n                <div class="content-card">\n                    <h1>Page Title</h1>\n                    <p>This is where the page content will go. Replace this with the actual content from your .txt files.</p>\n                </div>\n            </div>\n        </div>',
      `<div class="page-content">
            <div class="container">
                <div class="content-card">
                    ${mainContent}
                </div>
            </div>
        </div>`
    );
    
    // Write the updated content back to the file
    fs.writeFileSync(filePath, updatedContent, 'utf8');
    console.log(`✅ Updated: ${path.basename(filePath)}`);
    return true;
  } catch (error) {
    console.error(`❌ Failed to update ${path.basename(filePath)}:`, error.message);
    return false;
  }
}

// Function to recursively find all HTML files
function findHtmlFiles(dir) {
  const htmlFiles = [];
  
  function scanDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        scanDirectory(fullPath);
      } else if (item.toLowerCase().endsWith('.html')) {
        htmlFiles.push(fullPath);
      }
    }
  }
  
  scanDirectory(dir);
  return htmlFiles;
}

// Main execution
async function main() {
  try {
    const projectRoot = path.join(__dirname, '..');
    const htmlFiles = findHtmlFiles(projectRoot);
    
    // Filter out the template and index files
    const filesToUpdate = htmlFiles.filter(file => {
      const basename = path.basename(file);
      return basename !== 'template.html' && basename !== 'index.html';
    });
    
    if (filesToUpdate.length === 0) {
      console.log('ℹ️  No HTML files found to update.');
      return;
    }
    
    console.log(`📁 Found ${filesToUpdate.length} HTML files to update:`);
    filesToUpdate.forEach(file => console.log(`   - ${path.relative(projectRoot, file)}`));
    console.log('');
    
    let successCount = 0;
    let errorCount = 0;
    
    for (const htmlFile of filesToUpdate) {
      const success = updateHtmlFile(htmlFile);
      if (success) {
        successCount++;
      } else {
        errorCount++;
      }
    }
    
    console.log('\n📊 Summary:');
    console.log(`✅ Successfully updated: ${successCount} files`);
    if (errorCount > 0) {
      console.log(`❌ Failed to update: ${errorCount} files`);
    }
    
    console.log('\n🎉 HTML files update complete!');
    
  } catch (error) {
    console.error('❌ An error occurred:', error.message);
    process.exit(1);
  }
}

// Run the script
main(); 