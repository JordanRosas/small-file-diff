const fs = require('fs-extra');

async function readAndSplitFile(filePath) {
    try {
        const content = await fs.readFile(filePath, 'utf8');
        return content.split(/\/\/ Section start|\/\/ Section end/);
    } catch (error) {
        console.error('Error reading file:', error);
        return [];
    }
}

async function applyChanges(originalFile, updatedFile, outputFile) {
    const originalSections = await readAndSplitFile(originalFile);
    const updatedSections = await readAndSplitFile(updatedFile);

    const outputSections = originalSections.map((section, index) => {
        if (section.trim() !== updatedSections[index].trim()) {
            return updatedSections[index];  // Use updated section if different
        }
        return section;  // Use original section if not changed
    });

    const outputContent = outputSections.join("// Section end");
    await fs.writeFile(outputFile, outputContent);
    console.log('Output file has been updated.');
}

// File paths
const originalFilePath = '/Users/jordanrosas/Desktop/original_test.txt';
const updatedFilePath = '/Users/jordanrosas/Desktop/v2.txt';
const outputFilePath = '/Users/jordanrosas/Desktop/outputFile.txt';

// Execute the function
applyChanges(originalFilePath, updatedFilePath, outputFilePath);
