const Discord = require("discord.js");
const dotenv = require("dotenv");
dotenv.config();

const client = new Discord.Client();

const prefix = '$';
const cListMap = new Map();
cListMap["greet"] = "greets the user";
cListMap["sname"] = "prints name of server";
cListMap["insult"] = "insult thrown at the user"
cListMap["user-info"] = "tell user's username and ID";
cListMap["commands"] = "list commands and their descriptions";

client.once ('ready', ()=>{
    console.log("Bot is now online");
})
client.on('message', message =>{
    if (message.content === `${prefix}greet`){
        message.channel.send("Welcome to the Arena, friend!");
    }else if (message.content === prefix + "insult"){
        
        let randNum = Math.floor(Math.random() * 10) + 1; //1-10
        let insult = "";
        switch (randNum){
            case 1:
                insult = "Away, you starvelling, you elf-skin, you dried neat’s-tongue, bull’s-pizzle, you stock-fish!";
                break;
            case 2:
                insult = "A most notable coward, an infinite and endless liar, an hourly promise breaker, the owner of no one good quality.";
                break;
            case 3:
                insult = "Away, you three-inch fool!";
                break;
            case 4:
                insult = "Come, come, you froward and unable worms!";
                break;
            case 5:
                insult = "I am sick when I do look on thee!";
                break;
            case 6:
                insult = "I’d beat thee, but I would infect my hands."
                break;
            case 7:
                insult = "More of your conversation would infect my brain."
                break;
            case 8:
                insult = "Thou art a boil, a plague sore";
                break;
            case 9:
                insult = "Villain, I have done thy mother";
                break;
            case 10:
                insult = "What, you egg!";
            default: //nothing
        }
        message.channel.send(insult);
    }
    else if (message.content === prefix + "sname"){
        message.channel.send("This server's name is:" + message.guild.name + "\nTotal Members: " + message.guild.memberCount);
    } 
    else if (message.content === `${prefix}user-info`) {
		message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
	}else if (message.content === prefix + "commands"){
        let tempStr = "";
        cListMap.forEach((description, command)=>{
            tempStr += (description + " :: " + command + "\n"); 
        })
        message.channel.send(tempStr);
    }
})





client.login(process.env.BOT_TOKEN);