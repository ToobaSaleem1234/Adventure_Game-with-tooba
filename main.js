#! /usr/bin/env node
import inquirer from "inquirer";
console.log("=".repeat(90));
console.log("\t WELCOME-TO-CODE-WITH-TOOBA\t");
console.log("=".repeat(120));
console.log("\t ADVENTURE GAME\t");
console.log("=".repeat(90));
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 20;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 20;
        this.fuel = fuel;
    }
}
let player_name = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "Enter your name"
    }
]);
let opponent_name = await inquirer.prompt([
    {
        name: "name",
        type: "list",
        message: "Select your opponent",
        choices: ["Sara", "Areeba", "Anus"]
    }
]);
let p1 = new Player(player_name.name);
let o1 = new Opponent(opponent_name.name);
do {
    // TOOBA
    if (opponent_name.name == "Sara") {
        let ask = await inquirer.prompt([
            {
                name: "name",
                type: "list",
                message: "Select your operation",
                choices: ["attack", "energy drink", "exit"]
            }
        ]);
        if (ask.name == "attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log(`${p1.name}, You loose`);
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log(`${p1.name}, You Win`);
                    process.exit();
                }
            }
        }
        if (ask.name == "energy drink") {
            p1.fuelIncrease();
            console.log(`Your fuel is ${p1.fuel}`);
            process.exit();
        }
        if (ask.name == "exit") {
            console.log(`${p1.name}, Game Over`);
            process.exit();
        }
    }
    // AREEBA
    if (opponent_name.name == "Areeba") {
        let ask = await inquirer.prompt([
            {
                name: "name",
                type: "list",
                message: "Select your operation",
                choices: ["attack", "energy drink", "exit"]
            }
        ]);
        if (ask.name == "attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log(`${p1.name}, You loose`);
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log(`${p1.name}, You Win`);
                    process.exit();
                }
            }
        }
        if (ask.name == "energy drink") {
            p1.fuelIncrease();
            console.log(`Your fuel is ${p1.fuel}`);
            process.exit();
        }
        if (ask.name == "exit") {
            console.log(`${p1.name}, Game Over`);
            process.exit();
        }
    }
    // ANUS
    if (opponent_name.name == "Anus") {
        let ask = await inquirer.prompt([
            {
                name: "name",
                type: "list",
                message: "Select your operation",
                choices: ["attack", "energy drink", "exit"]
            }
        ]);
        if (ask.name == "attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log(`${p1.name}, You loose`);
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log(`${p1.name}, You Win`);
                    process.exit();
                }
            }
        }
        if (ask.name == "energy drink") {
            p1.fuelIncrease();
            console.log(`Your fuel is ${p1.fuel}`);
            process.exit();
        }
        if (ask.name == "exit") {
            console.log(`${p1.name}, Game Over`);
            process.exit();
        }
    }
} while (true);
