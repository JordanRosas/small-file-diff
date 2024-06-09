# small-file-diff
## Setup Guide

How to run this little tiny thing

### Prerequisites

Before you begin, ensure you have the following installed:
- Git
- Node.js
- Visual Studio Code

### Installation and Setup

Follow these steps to set up the project:

#### 1. Clone the Repository

Open a terminal on your computer and navigate to your workspace directory or wherever you keep your projects.

```bash
# Clone the repository using SSH
git clone [PASTE SSH VALUE]
```

#### 2. Navigate to Project Diretory

```bash
# Navigate to project directory
cd small-file-diff
```

#### 3. Install dependencies

```bash
# install dependencies
npm i OR npm install -> Either is fine
```
### 4. Open the Project in Visual Studio Code
Launch Visual Studio Code and open the project directory:

```bash
code .
```
### 5. Update File Paths
Before running the application, you need to update the file paths in the code to point to the two files you want to compare. These changes should be made in the relevant sections of the code.

### 6. Run the Application
Open a terminal in Visual Studio Code by pressing `Ctrl + `` (backtick) and execute the script:

```bash

node index.js
```
### 7. Check Output
If successful, you should see the following message in the terminal:
```bash
Output file has been updated. 
```