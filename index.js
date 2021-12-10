const ReadLine = require("readline").createInterface({ // for the user input
    input: process.stdin,
    output: process.stdout
})
const chalk = require('chalk'); // for the text color
const spammer = require("imessage-spammer");
const fs = require("fs");
const os = require('os');
const { exit } = require("process");

if (os.type === "MacOS") {

} else {
    console.log("\nThis script is for Mac only.\n");
    exit();
}

const MessageSpam = `
This would be one message.
This would the message 2.
A third message.
And a fourth
`;

// change this to false if you dont want to install the chalk package
var printBanner = true;

console.clear();

function Banner() {
    console.log(chalk.blueBright(`
|==========================================|
|                                          |
|  ██╗███████╗██████╗  █████╗ ███╗   ███╗  |
|  ██║██╔════╝██╔══██╗██╔══██╗████╗ ████║  |
|  ██║███████╗██████╔╝███████║██╔████╔██║  |
|  ██║╚════██║██╔═══╝ ██╔══██║██║╚██╔╝██║  |
|  ██║███████║██║     ██║  ██║██║ ╚═╝ ██║  |
|  ╚═╝╚══════╝╚═╝     ╚═╝  ╚═╝╚═╝     ╚═╝  |
|       https://github.com/iUseYahoo       |
|==========================================|
`));
}

function checkForPackages() {
    if (printBanner === true) {
        fs.access("./node_modules/chalk", function (error) {
            if (error) {
                console.log("\nChalk is not installed. Please run 'npm i chalk@4.1.1'.")
            }
        })
    }

    fs.access("./node_modules/imessage-spammer", function (error) {
        if (error) {
            console.log("\nimessage-spammer is not installed. Please run 'npm i imessage-spammer'.")
        }
    })
};

if (printBanner === true) {
    Banner()
} else {
    return;
}

async function main() {
    ReadLine.question("Enter persons name: ", PN => {
        spammer(`${PN}`, MessageSpam);
    })
}

main().catch(error => { // this .catch and below the catch errors and console.log (print) them
    console.error(error)
})