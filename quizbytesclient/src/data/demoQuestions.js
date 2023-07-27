const demoQuiz = {
    questions: [
        {
            id: "0",
            text: "What does HTML stand for?",
            course: "Demo",
            chapter: "Web Development",
            difficultyLevel: 1,
            possibleAnswers: ["Hyper Text Markup Language", "Hyperlink Text Markup Language", "Hyper Transfer Markup Language", "Home Tool Markup Language"],
            correctAnswers: ["Hyper Text Markup Language"]
        },
        {
            id: "1",
            text: "Which programming language is primarily used for web development?",
            course: "Demo",
            chapter: "Web Development",
            difficultyLevel: 1,
            possibleAnswers: ["Java", "Python", "JavaScript", "C++"],
            correctAnswers: ["JavaScript"]
        },
        {
            id: "2",
            text: "Which HTTP status code indicates that the server understands the request but refuses to authorize it?",
            course: "Demo",
            chapter: "Web Development",
            difficultyLevel: 1,
            possibleAnswers: ["401 Unauthorized", "403 Forbidden", "404 Not Found", "500 Internal Server Error"],
            correctAnswers: ["401 Unauthorized", "403 Forbidden"]
        },
        {
            id: "3",
            text: "What does CSS stand for?",
            course: "Demo",
            chapter: "Web Development",
            difficultyLevel: 1,
            possibleAnswers: ["Computer Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets", "Creative Style Sheets"],
            correctAnswers: ["Cascading Style Sheets"]
        },
        {
            id: "4",
            text: "Which HTTP method is used to retrieve data from a server?",
            course: "Demo",
            chapter: "Web Development",
            difficultyLevel: 1,
            possibleAnswers: ["GET", "POST", "PUT", "DELETE"],
            correctAnswers: ["GET"]
        },
        {
            id: "5",
            text: "What does API stand for?",
            course: "Demo",
            chapter: "Web Development",
            difficultyLevel: 1,
            possibleAnswers: ["Application Programming Interface", "Advanced Program Integration", "Automated Programming Interface", "Application Program Interface"],
            correctAnswers: ["Application Programming Interface"]
        },
        {
            id: "6",
            text: "Which HTTP status code indicates a successful response?",
            course: "Demo",
            chapter: "Web Development",
            difficultyLevel: 1,
            possibleAnswers: ["200 OK", "404 Not Found", "500 Internal Server Error", "201 Created"],
            correctAnswers: ["200 OK", "201 Created"]
        },
        {
            id: "7",
            text: "What is the purpose of the alt attribute in the img tag?",
            course: "Demo",
            chapter: "Web Development",
            difficultyLevel: 1,
            possibleAnswers: ["To define alternative content for users with disabilities", "To add a caption to the image", "To set the alignment of the image", "To define the size of the image"],
            correctAnswers: ["To define alternative content for users with disabilities"]
        },
        {
            id: "8",
            text: "Which HTTP methods are considered safe and can be used for read-only operations? (Select all that apply)",
            course: "Demo",
            chapter: "Web Development",
            difficultyLevel: 1,
            possibleAnswers: ["GET", "PUT", "HEAD", "OPTIONS"],
            correctAnswers: ["GET", "HEAD", "OPTIONS"]
        },
        {
            id: "9",
            text: "What is the correct way to add an external JavaScript file to your HTML document?",
            course: "Demo",
            chapter: "Web Development",
            difficultyLevel: 1,
            possibleAnswers: ["<script href=\"script.js\"></script>", "<script name=\"script.js\"></script>", "<script src=\"script.js\"></script>", "<script link=\"script.js\"></script>"],
            correctAnswers: ["<script src=\"script.js\"></script>"]
        },
        {
            id: "10",
            text: "Which of the following are valid HTTP methods? (Select all that apply)",
            course: "Demo",
            chapter: "Web Development",
            difficultyLevel: 1,
            possibleAnswers: ["GET", "POST", "UPDATE", "PATCH"],
            correctAnswers: ["GET", "POST", "PATCH"]
        },
        {
            id: "11",
            text: "Which HTML tag is used to define an unordered list?",
            course: "Demo",
            chapter: "Web Development",
            difficultyLevel: 1,
            possibleAnswers: ["<ul>", "<ol>", "<li>", "<list>"],
            correctAnswers: ["<ul>"]
        },
        {
            id: "12",
            text: "What is the correct way to comment in JavaScript?",
            course: "Demo",
            chapter: "Web Development",
            difficultyLevel: 1,
            possibleAnswers: ["// This is a comment", "<!-- This is a comment -->", "' This is a comment", "/* This is a comment */"],
            correctAnswers: ["// This is a comment"]
        },
        {
            id: "13",
            text: "What is the correct way to stage changes in Git?",
            course: "Demo",
            chapter: "Web Development",
            difficultyLevel: 1,
            possibleAnswers: ["git add", "git commit", "git stage", "git modify"],
            correctAnswers: ["git add"]
        },
        {
            id: "14",
            text: "Which CSS property is used to change the text color of an element?",
            course: "Demo",
            chapter: "Web Development",
            difficultyLevel: 1,
            possibleAnswers: ["text-color", "color", "text-style", "font-color"],
            correctAnswers: ["color"]
        },
        {
            id: "15",
            text: "Which Git command is used to create a new branch?",
            course: "Demo",
            chapter: "Web Development",
            difficultyLevel: 1,
            possibleAnswers: ["git branch", "git checkout", "git merge", "git create"],
            correctAnswers: ["git branch"]
        },
        {
            id: "16",
            text: "What is the purpose of the <head> tag in an HTML document?",
            course: "Demo",
            chapter: "Web Development",
            difficultyLevel: 1,
            possibleAnswers: ["To define the main content of the page", "To display the header section of the page", "To include meta-information about the page", "To define the footer section of the page"],
            correctAnswers: ["To include meta-information about the page"]
        },
        {
            id: "17",
            text: "Which of the following is NOT a valid data type in JavaScript?",
            course: "Demo",
            chapter: "Web Development",
            difficultyLevel: 1,
            possibleAnswers: ["string", "boolean", "number", "float"],
            correctAnswers: ["float"]
        },
        {
            id: "22",
            text: "What are the possible response formats for an HTTP request?",
            course: "Demo",
            chapter: "Web Development",
            difficultyLevel: 1,
            possibleAnswers: ["JSON", "XML", "HTML", "Text"],
            correctAnswers: ["JSON", "XML", "HTML", "Text"]
        },
        {
            id: "23",
            text: "Which of the following HTTP status codes indicate a client error?",
            course: "Demo",
            chapter: "Web Development",
            difficultyLevel: 1,
            possibleAnswers: ["200 OK", "400 Bad Request", "404 Not Found", "500 Internal Server Error", "204 No Content"],
            correctAnswers: ["400 Bad Request", "404 Not Found"]
        },
    ]
}

export default demoQuiz;