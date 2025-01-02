# ReCreate [LIVE](https://megabeing.github.io/ReCreate)
![recreate-features](https://github.com/user-attachments/assets/55e945d9-8fd3-415c-b8eb-c342ba27d40c)

## Introduction

ReCreate is a framework that compiles Markdown-style language to create PDFs, such as resumes. It simplifies the process of generating professional documents by providing easy-to-use templates and components.

## Features

- **Templates**: Comes with pre-built templates that can be directly integrated.
- **Extended Markdown**: Allows adding links, images, and other elements, making it more time-efficient compared to LaTeX.

## Requirements

To run this project, you will need:

- React
- Node.js

## Installation

Follow these steps to install and set up the project:

1. Clone the repository:
    ```bash
    git clone https://github.com/megabeing/ReCreate.git
    cd recreate
    ```

2. Install Node.js if not already installed. You can download it from [Node.js](https://nodejs.org/).

3. Install the required packages:
    ```bash
    npm install
    ```

## Usage

Once the installation is complete, you can use the framework as follows:

1. Start the development server:
    ```bash
    npm start
    ```

2. Use the web interface to select templates, add content (links, images, text), and generate your PDF.

## Components

## <u>Section</u>

```
#s 
	Section
#/s
```
### why we need it?
1. We need to optimize the code execution
	* How?
		- When we have code in chunks we do not need to compile the whole code. We can just take the changed section and render it 
2. Easier to resolve bugs
	- How? 
		- Since every chunk is isolated bugs can be easily identified
3. More Spacious and breathable type of coding compared to one single file to write code in

## <u>Heading</u>

```
#h1 Master Heading
#h2 Sub1 Heading
#h3 Sub2 Heading
#h4 Sub3 Heading
```
### why we need it?
1. Create differences inside the rendered documents
2. Makes the rendered document more readable
# <u>Link</u>

```
[content](link)
```
### why we need it?
1. We like the internet and for link is important to connect to the internet
# <u>List</u>

```
 * unordered List point
 1. ordererd List point
```
### why we need it?
1. Helps to describe any document better
2. best for (terms and conditions) or resumes

## Conclusion

ReCreate streamlines the process of creating PDFs with a Markdown-style language, offering a user-friendly alternative to LaTeX. With built-in templates and the ability to add various elements, it reduces the time and effort required to produce professional documents.
