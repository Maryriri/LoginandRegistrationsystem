const SystemChoice = {
    Login: 1,
    Register: 2,
    Exit: 3
};

let users = [];

async function enterUserData() {
    const username = prompt("Enter your username:");
    const password = prompt("Enter your password:");
    const email = prompt("Enter your email:");
    return { username, password, email, isRegistered: true, isLoggedIn: false };
}

async function registerUser() {
    const newUser = await enterUserData();
    if (users.some(user => user.username === newUser.username)) {
        alert("Username already exists. Registration failed.");
        return;
    }
    users.push(newUser);
    alert("User registered successfully!");
}

async function loginUser() {
    const username = prompt("Enter your username:");
    const password = prompt("Enter your password:");
    const user = users.find(user => user.username === username);
    if (user) {
        if (user.password === password) {
            user.isLoggedIn = true;
            alert("Login successful!");
        } else {
            alert("Incorrect password. Please try again.");
        }
    } else {
        alert("User not found. Please register first.");
    }
}

function handleUserChoice(choice) {
    switch (choice) {
        case SystemChoice.Login:
            loginUser();
            break;
        case SystemChoice.Register:
            registerUser();
            break;
        case SystemChoice.Exit:
            exitProgram();
            break;
    }
}

function displayMenu() {
    alert("--- Menu ---\n1. Login\n2. Register\n3. Exit");
}

function startSystem() {
    while (true) {
        displayMenu();
        const choice = parseInt(prompt("Enter your choice (1: Login, 2: Register, 3: Exit):"));
        handleUserChoice(choice);
    }
}

startSystem();
