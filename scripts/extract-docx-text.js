#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('📄 Extracting text from .docx files...');

// Function to check if a file is a .docx file
function isDocxFile(filename) {
  return filename.toLowerCase().endsWith('.docx');
}

// Function to extract text from .docx file using python-docx
function extractTextFromDocx(docxPath) {
  try {
    // Use python to extract text from docx
    const pythonScript = `
import docx
import sys

def extract_text_from_docx(file_path):
    try:
        doc = docx.Document(file_path)
        full_text = []
        for paragraph in doc.paragraphs:
            full_text.append(paragraph.text)
        return '\\n'.join(full_text)
    except Exception as e:
        return f"Error extracting text: {str(e)}"

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python script.py <docx_file_path>")
        sys.exit(1)
    
    file_path = sys.argv[1]
    text = extract_text_from_docx(file_path)
    print(text)
`;
    
    // Write temporary Python script
    const tempScriptPath = path.join(__dirname, 'temp_extract.py');
    fs.writeFileSync(tempScriptPath, pythonScript);
    
    // Execute Python script
    const result = execSync(`python "${tempScriptPath}" "${docxPath}"`, { 
      encoding: 'utf8',
      stdio: ['pipe', 'pipe', 'pipe']
    });
    
    // Clean up temporary script
    fs.unlinkSync(tempScriptPath);
    
    return result.trim();
  } catch (error) {
    console.error(`Error extracting text from ${docxPath}:`, error.message);
    return `Error extracting text from ${path.basename(docxPath)}: ${error.message}`;
  }
}

// Function to recursively find all .docx files
function findDocxFiles(dir) {
  const docxFiles = [];
  
  function scanDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        scanDirectory(fullPath);
      } else if (isDocxFile(item)) {
        docxFiles.push(fullPath);
      }
    }
  }
  
  scanDirectory(dir);
  return docxFiles;
}

// Function to convert .docx to .txt
function convertDocxToTxt(docxPath) {
  const dir = path.dirname(docxPath);
  const filename = path.basename(docxPath, '.docx');
  const txtPath = path.join(dir, `${filename}.txt`);
  
  console.log(`📄 Processing: ${path.basename(docxPath)}`);
  
  try {
    const text = extractTextFromDocx(docxPath);
    fs.writeFileSync(txtPath, text, 'utf8');
    console.log(`✅ Created: ${path.basename(txtPath)}`);
    return true;
  } catch (error) {
    console.error(`❌ Failed to convert ${path.basename(docxPath)}:`, error.message);
    return false;
  }
}

// Main execution
async function main() {
  try {
    // Check if python-docx is installed
    try {
      execSync('python -c "import docx"', { stdio: 'ignore' });
    } catch (error) {
      console.log('📦 Installing python-docx...');
      try {
        execSync('pip install python-docx', { stdio: 'inherit' });
        console.log('✅ python-docx installed successfully');
      } catch (installError) {
        console.error('❌ Failed to install python-docx. Please install it manually:');
        console.error('   pip install python-docx');
        process.exit(1);
      }
    }
    
    const projectRoot = path.join(__dirname, '..');
    const docxFiles = findDocxFiles(projectRoot);
    
    if (docxFiles.length === 0) {
      console.log('ℹ️  No .docx files found in the project.');
      return;
    }
    
    console.log(`📁 Found ${docxFiles.length} .docx files to process:`);
    docxFiles.forEach(file => console.log(`   - ${path.relative(projectRoot, file)}`));
    console.log('');
    
    let successCount = 0;
    let errorCount = 0;
    
    for (const docxFile of docxFiles) {
      const success = convertDocxToTxt(docxFile);
      if (success) {
        successCount++;
      } else {
        errorCount++;
      }
    }
    
    console.log('\n📊 Summary:');
    console.log(`✅ Successfully converted: ${successCount} files`);
    if (errorCount > 0) {
      console.log(`❌ Failed to convert: ${errorCount} files`);
    }
    
    console.log('\n🎉 Text extraction complete!');
    
  } catch (error) {
    console.error('❌ An error occurred:', error.message);
    process.exit(1);
  }
}

// Run the script
main(); 