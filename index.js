//start variable decloration

const Discord = require('discord.js');
const client = new Discord.Client();

const token = "NTk5OTc1MDY5MTM2OTc3OTMx.XStFxA.caRJfpu84OMxsKFAYQwVeMEdD_8";
var number = 0;
var pl = "";
var lobby = 0;

var twonumber = 0;
var team1 = "";
var team2 = "";
var twolobby = 0;

var onenumber = 0;
var oneteam1 = "";
var oneteam2 = "";
var onelobby = 0;

//startup command
    //executed with node .
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

//battle royale lobby code
client.on('message', message => {
  if (message.content === 'b.br') {
 
    if (number < 16){
      number++;
      if(number == 1)
      {
        var host = message.author.username;
      }

      var brmapcode = "4456-4468-3286"
      var embed = new Discord.RichEmbed()
      .setDescription("<@"+ message.author.id + ">" + " you have been added to que [" + number + "/16]" + '\n Lobby: ' + lobby )
      .setColor(0xF700FF)
      message.channel.sendEmbed(embed);
      pl = pl + "<@" + message.author.id + ">, \n";
      }
    if(number >= 16)
    {
      lobby++;
      number = 0;
     var plSplit = pl.split(' ')
 
      var lobbyfinished = new Discord.RichEmbed()
      .setTitle("NEW BATTLE ROYALE LOBBY \n Lobby Info:")
      .setDescription("Players:\n" + pl + "\n Lobby: " + lobby + "\n please add your Host: " + plSplit[0] + "\n Map Code: " + brmapcode)
      .setFooter("Good Luck!")
      .setColor(0xF700FF)
      message.channel.sendEmbed(lobbyfinished);

      pl = "";
    }
  }
});

//2v2 lobby code
client.on('message', message => {
  if (message.content === 'b.2') {
 
    if (twonumber < 4){
      twonumber++;
 
      var twoembed = new Discord.RichEmbed()
      .setDescription("<@"+ message.author.id + ">" + " you have been added to que [" + twonumber + "/4]" + '\n Lobby: ' + twolobby )
      .setColor(0xF700FF)
      message.channel.sendEmbed(twoembed);
      if(twonumber == 1){
        message.author.username;
        team1 = team1 + "<@" + message.author.id + "> and";}
      if(twonumber == 2){
        team1 = team1 + "<@" + message.author.id + ">";}
      if(twonumber == 3){
        team2 = team2 + "<@" + message.author.id + "> and";}
      if(twonumber == 4){
        team2 = team2 + "<@" + message.author.id + ">";}
      }
      if(twonumber >= 4)
      {
 
        twonumber = 0;
        var tvtmapcode = "4065-2137-7390"
        var twolobbyfinished = new Discord.RichEmbed()
 
        .setTitle("NEW 2V2 LOBBY \n Teams:")
        .setDescription( "Team 1: " + team1 + "\n" + "Team 2: " + team2 + "\n Lobby: " + twolobby + "\n please add your host: " + "\n Map Code: " + tvtmapcode)
        .setFooter("Good Luck!")
        .setColor(0xF700FF)
        message.channel.sendEmbed(twolobbyfinished);
        twolobby++;
        team1 = "";
        team2 = "";
      }
 
  }
});

//1v1 lobby code
client.on('message', message => {
  if (message.content === 'b.1') {
 
    if (onenumber < 2){
      onenumber++;
      
      var oneembed = new Discord.RichEmbed()
      .setDescription("<@"+ message.author.id + ">" + " you have been added to que [" + onenumber + "/2]" + '\n Lobby: ' + onelobby )
      .setColor(0xF700FF)
      message.channel.sendEmbed(oneembed);
      if(onenumber == 1){
        oneteam1 = oneteam1 + "<@" + message.author.id + ">"}
      if(onenumber == 2){
        oneteam2 = oneteam2 + "<@" + message.author.id + ">";}
 
    }
    if(onenumber >= 2)
    {
      onenumber = 0;
      var ovomapcode = "0476-3583-6826"
      var onelobbyfinished = new Discord.RichEmbed()
      .setTitle("NEW 1V1 LOBBY \n Teams:")
      .setDescription( "Team 1: " + oneteam1 + "\n" + "Team 2: " + oneteam2 + "\n Lobby: " + onelobby+ "\n Map Code: " + ovomapcode)
      .setFooter("Good Luck!")
      .setColor(0xF700FF)
      message.channel.sendEmbed(onelobbyfinished);
      onelobby++;
      oneteam1 = "";
      oneteam2 = "";
    }
 
  }
});

//
client.on('message', message => {
});

//say command
  //b.say <Title> b.say <Description>
    //makes a custom embed
client.on('message', message => {
  if(message.content.startsWith("b.say"))
  {
    if( message.member.hasPermission("MANAGE_MESSAGES"))
    {
      var cs = message.content.split("b.say ")
      var say = new Discord.RichEmbed()
      .setTitle(cs[1])
      .setDescription(cs[2])
      .setFooter("")
      .setColor(0xF700FF)
      message.channel.sendEmbed(say);
    }
    else{
      message.reply("missing permissions")
    }
  }
  
});

//nickname change command
  //b.setNickname 
    //sets nickname to <name> only if you have permission
    //test run
client.on('message', message => {
  if(message.content.startsWith('b.setNickname'))
  {
    if( message.member.hasPermission('MANAGE_MESSAGES'))
    {
      var csp = message.content.split("b.setNickname ");
      message.member.setNickname(csp[1]);
    }
    else{
      message.reply('missing permissions')
    }
  }
  
});

//register
  //b.register <ign>
    //register yourself
  //b.rregister <@id> <ign> 
    //register another person
client.on('message', message => {
  var name = message.author.username
  let registeredRole = message.guild.roles.find("name", "Registered");

    
  if(message.content.startsWith("b.register"))
  {
    if(!message.member.roles.has(registeredRole)){
      
      var csp = message.content.split("b.register ");
      var role = message.guild.roles.find(role => role.name === "Registered");
      message.member.addRole(role);
      var z = 0;
      message.member.nickname = "[ "+ parseInt(z) +" ] - " + csp[1];
      message.channel.send("registered");
      message.member.setNickname("[ " + parseInt(z) + " ] - " + csp[1])
      message.member.splash = csp[1];
    }
    else
    {
      message.channel.send("already registered");
    }
 }
 if(message.content.startsWith("b.rregister"))
 {
  if( message.member.hasPermission("MANAGE_MESSAGES"))
  {
      var csp = message.content.split(" ");
      let stuser = message.guild.member(message.mentions.members.first() || message.guild.member(args[0]))
      var stsp = message.content.split(message.mentions.members.first() + " ");
      var role = message.guild.roles.find(role => role.name === "Registered");
      stuser.addRole(role);
      var z = 0;
      stuser.nickname = "[ "+ parseInt(z) +" ] - " + stsp[1];
      message.channel.send("registered");
      stuser.setNickname("[ " + parseInt(z) + " ] - " + stsp[1])
      message.member.splash = stsp[1];
  }
 }

//msg log
  if(message.content === "b.log")
  {
    console.log(message);
  }
});

//give starter role
  //b.starter <@id>
    //give the starter role to someone that has paid for it
client.on('message', message => {
  if(message.content.startsWith("b.starter"))
  {
    if( message.member.hasPermission("MANAGE_MESSAGES"))
    {
      let stuser = message.guild.member(message.mentions.members.first() || message.guild.member(args[0]))
      var role = message.guild.roles.find(role => role.name === "Starter");
      stuser.addRole(role);
    }
  }
});

//set client name
  //b.setname
    //sets name to a variable declared in the statement
    //only with MANAGE_MESSAGE permissions
client.on('message', message => {

  if(message.content.startsWith("b.setname"))
  {
    if( message.member.hasPermission("MANAGE_MESSAGES"))
    {
      gn = message.content.split("b.setname ");  
      message.guild.members.get(client.user.id).setNickname(gn[1])
    }
  }
});

//twat command
  //b.twat
    //if you have 'alpha' in your name embed says 'you are alpha'
    //if you don't have 'alpha' in your name embed says 'you are not alpha'
client.on('message', message => {
 

  if(message.content === "b.twat" )
  { 
    var nam = toString(message.author.username);
    if(nam.search(/alpha/))
    { 
      var alpha = new Discord.RichEmbed()
      .setTitle("YOU ARE ALPHA")
      .setDescription("<@"+ message.author.id+ ">" + "is alpha inside and out")
      .setFooter("teehee")
      .setColor(0xF700FF)
      message.channel.sendEmbed(alpha);
    }
    else
    {  
      var alpha = new Discord.RichEmbed()
      .setTitle("YOU ARE NOT ALPHA")
      .setDescription("<@"+ message.author.id+ ">" + "is a non alpha scum\n ur a twat lol")
      .setFooter("twat")
      .setColor(0xF700FF)
      message.channel.sendEmbed(alpha);
    }
  }
});

//2v2 if statements
client.on('message', message => {
  var placeid = message.author.id;
  var pelaceName = message.author.username;
  if(message.content === "b.2place 1")
  { 
    message.react('🍎');
    if(message.content === "b.2place 1"){}
    client.once('messageReactionAdd', (reaction, user) => {
      client.once('messageReactionAdd', (reaction, user) => {
        client.break
        client.break
        let channel = client.channels.get('teehee');
        var e = message.member.nickname.split("- ")
        if(message.channel.content != "b.addpts 60" + " <@"+ placeid + "> " + e[1])
        {
 
          message.guild.channels.get('598629725958832138').createInvite().then(message =>{
 
          message.channel.send("b.addpts 60" + " <@"+ placeid + "> " + e[1])});
          client.break
        }
      });
      client.break
    });
  }
 
  var placeid = message.author.id;
  var placeName = message.author.username;
  if(message.content === "b.2v2place 2")
  { 
    message.react('🍎');
    if(message.content === "b.2v2place 2"){}
    client.once('messageReactionAdd', (reaction, user) => {
      client.once('messageReactionAdd', (reaction, user) => {
        client.break
        client.break
        let channel = client.channels.get('teehee');
        var e = message.member.nickname.split("- ")
        if(message.channel.content != "b.addpts -40" + " <@"+ placeid + "> " + e[1])
        {
 
          message.guild.channels.get('598629725958832138').createInvite().then(message =>{
 
          message.channel.send("b.addpts -40" + " <@"+ placeid + "> " + e[1])});
          client.break
        }
      });
      client.break
    });
  }
});

//1v1 if statements
client.on('message', message => {
  var placeid = message.author.id;
  var placeName = message.author.username;
  if(message.content === "b.1place 1")
  { 
    message.react('🍎');
    if(message.content === "b.1place 1"){}
    client.once('messageReactionAdd', (reaction, user) => {
      client.once('messageReactionAdd', (reaction, user) => {
        client.break
        client.break
        let channel = client.channels.get('teehee');
        var e = message.member.nickname.split("- ")
        if(message.channel.content != "b.addpts 50" + " <@"+ placeid + "> " + e[1])
        {
          
          message.guild.channels.get('598629725958832138').createInvite().then(message =>{
 
          message.channel.send("b.addpts 50" + " <@"+ placeid + "> " + e[1])});
          client.break
        }
      });
      client.break
    });
  }
 
 
  var placeid = message.author.id;
  var e = message.author.username;
  if(message.content === "b.1place 2")
  { 
    message.react('🍎');
    if(message.content === "b.1place 2"){}
    client.once('messageReactionAdd', (reaction, user) => {
      client.once('messageReactionAdd', (reaction, user) => {
        client.break
        client.break
        let channel = client.channels.get('teehee');
        var e = message.member.nickname.split("- ")
        if(message.channel.content != "b.addpts -30" + " <@"+ placeid + "> " + e[1])
        {
 
          message.guild.channels.get('598629725958832138').createInvite().then(message =>{
 
          message.channel.send("b.addpts -30" + " <@"+ placeid + "> " + e[1])});
          client.break
        }
      });
      client.break
    });
  }
});

//add points and stats
  //addpts <amount> <@id> <Username> <id>
    //adds points and role directly to the users nickname
    //updates nickname and sets member.nickname 
  //b.stats
    //shows stats in an embed
    //shows: nickname(including points at start) and rank
client.on('message', message => {
  if(message.content.startsWith("b.addpts")){
    if( message.member.hasPermission("MANAGE_MESSAGES"))
    {
    let ptuser = message.guild.member(message.mentions.members.first() || message.guild.member(args[0]));
    if(!ptuser ) message.channel.send("Can't Find User");

    try{
      
      var messageArray = message.content.split(" ");
      var mesarray = message.content.split("> ")
      var nickSplit = ptuser.nickname.split(" ");
      var amount = nickSplit[1];
      var amounttoadd = messageArray[1]; 
      var together = parseInt(amount) + parseInt(amounttoadd);
      var full = "[ " + together + " ] - " + mesarray[1];
      var ting = toString(full);
      ptuser.setNickname(full);
      ptuser.nickname = full;
      
      if(together <= 0)
      {
        var role = message.guild.roles.find(role => role.name === "Noob");
        message.member.addRole(role);
        var rank = "Noob";
      }
      if(together > 0 && together < 1000)
      {
        var role = message.guild.roles.find(role => role.name === "Beginer");
        message.member.addRole(role);
        var rank = "Beginner";
      }
      if(together > 1000 && together < 2000)
      {
        var role = message.guild.roles.find(role => role.name === "Good Player");
        message.member.addRole(role);
        var rank = "Master";
      }
      if(together > 2000 && together < 3000)
      {
        var role = message.guild.roles.find(role => role.name === "Insane");
        message.member.addRole(role);
        var rank = "Pro";
      }
      if(together > 3000)
      {
        var role = message.guild.roles.find(role => role.name === "Pro");
        message.member.addRole(role);
        var rank = "God";
      }
      message.guild.splash = rank;
      ptuser.nickname = ptuser.nickname
      
      message.channel.send(ptuser.nickname);
    }
    catch(err)
    {
      message.guild.channels.get('598620258445688869').createInvite().then(message =>{
        var register = new Discord.RichEmbed()
        .setTitle("ERROR")
        .setDescription(ptuser + " Please Register Before Attempting To Add Points")
        .setColor(0xF700FF)
        message.channel.sendEmbed(register);
      });
    }
  }
}

 //check stats
  if(message.content == "b.stats")
  { 
    
    var stats = new Discord.RichEmbed()
    .setTitle("Your Stats:")
    .setDescription(message.member.nickname + "\nRank: " + message.guild.splash)
    .setColor(0xF700FF)
    message.channel.sendEmbed(stats);
  }
});

//battle royale if statements
 client.on('message', message => {
  var placeid = message.author.id;
  var placeName = message.author.username;
  if(message.content === "b.brplace 1")
  { 
    message.react('🍎');
    if(message.content === "b.brplace 1"){}
    client.once('messageReactionAdd', (reaction, user) => {
      client.once('messageReactionAdd', (reaction, user) => {
        client.break
        client.break
        let channel = client.channels.get('teehee');
        var e = message.member.nickname.split("- ")
        if(message.channel.content != "b.addpts 140" + " <@"+ placeid + "> " + e[1])
        {

          message.guild.channels.get('598629725958832138').createInvite().then(message =>{
 
          message.channel.send("b.addpts 140" + " <@"+ placeid + "> " + e[1])});
          client.break
        }
      });
      client.break
    });
  }

  var placeid = message.author.id;
  var placeName = message.author.username;
  if(message.content === "b.brplace 2")
  { 
    message.react('🍎');
    if(message.content === "b.brplace 2"){}
    client.once('messageReactionAdd', (reaction, user) => {
      client.once('messageReactionAdd', (reaction, user) => {
        client.break
        client.break
        let channel = client.channels.get('teehee');
        var e = message.member.nickname.split("- ")
        if(message.channel.content != "b.addpts 100" + " <@"+ placeid + "> " + e[1])
        {

          message.guild.channels.get('598629725958832138').createInvite().then(message =>{
 
          message.channel.send("b.addpts 100" + " <@"+ placeid + "> " + e[1])});
          client.break
        }
      });
      client.break
    });
  }

  var placeid = message.author.id;
  var placeName = message.author.username;
  if(message.content === "b.brplace 3")
  { 
    message.react('🍎');
    if(message.content === "b.brplace 3"){}
    client.once('messageReactionAdd', (reaction, user) => {
      client.once('messageReactionAdd', (reaction, user) => {
        client.break
        client.break
        let channel = client.channels.get('teehee');
        var e = message.member.nickname.split("- ")
        if(message.channel.content != "b.addpts 90" + " <@"+ placeid + "> " + e[1])
        {

          message.guild.channels.get('598629725958832138').createInvite().then(message =>{
 
          message.channel.send("b.addpts 90" + " <@"+ placeid + "> " + e[1])});
          client.break
        }
      });
      client.break
    });
  }

  var placeid = message.author.id;
  var placeName = message.author.username;
  if(message.content === "b.brplace 4")
  { 
    message.react('🍎');
    if(message.content === "b.brplace 4"){}
    client.once('messageReactionAdd', (reaction, user) => {
      client.once('messageReactionAdd', (reaction, user) => {
        client.break
        client.break
        let channel = client.channels.get('teehee');
        var e = message.member.nickname.split("- ")
        if(message.channel.content != "b.addpts 70" + " <@"+ placeid + "> " + e[1])
        {

          message.guild.channels.get('598629725958832138').createInvite().then(message =>{
 
          message.channel.send("b.addpts 70" + " <@"+ placeid + "> " + e[1])});
          client.break
        }
      });
      client.break
    });
  }
  var placeid = message.author.id;
  var placeName = message.author.username;
  if(message.content === "b.brplace 5")
  { 
    message.react('🍎');
    if(message.content === "b.brplace 5"){}
    client.once('messageReactionAdd', (reaction, user) => {
      client.once('messageReactionAdd', (reaction, user) => {
        client.break
        client.break
        let channel = client.channels.get('teehee');
        var e = message.member.nickname.split("- ")
        if(message.channel.content != "b.addpts 50" + " <@"+ placeid + "> " + e[1])
        {

          message.guild.channels.get('598629725958832138').createInvite().then(message =>{
 
          message.channel.send("b.addpts 50" + " <@"+ placeid + "> " + e[1])});
          client.break
        }
      });
      client.break
    });
  }

  var placeid = message.author.id;
  var placeName = message.author.username;
  if(message.content === "b.brplace 6")
  { 
    message.react('🍎');
    if(message.content === "b.brplace 6"){}
    client.once('messageReactionAdd', (reaction, user) => {
      client.once('messageReactionAdd', (reaction, user) => {
        client.break
        client.break
        let channel = client.channels.get('teehee');
        var e = message.member.nickname.split("- ")
        if(message.channel.content != "b.addpts 30" + " <@"+ placeid + "> " + e[1])
        {

          message.guild.channels.get('598629725958832138').createInvite().then(message =>{
 
          message.channel.send("b.addpts 30" + " <@"+ placeid + "> " + e[1])});
          client.break
        }
      });
      client.break
    });
  }

  var placeid = message.author.id;
  var placeName = message.author.username;
  if(message.content === "b.brplace 7")
  { 
    message.react('🍎');
    if(message.content === "b.brplace 7"){}
    client.once('messageReactionAdd', (reaction, user) => {
      client.once('messageReactionAdd', (reaction, user) => {
        client.break
        client.break
        let channel = client.channels.get('teehee');
        var e = message.member.nickname.split("- ")
        if(message.channel.content != "b.addpts 20" + " <@"+ placeid + "> " + e[1])
        {

          message.guild.channels.get('598629725958832138').createInvite().then(message =>{
 
          message.channel.send("b.addpts 20" + " <@"+ placeid + "> " + e[1])});
          client.break
        }
      });
      client.break
    });
  }
  var placeid = message.author.id;
  var placeName = message.author.username;
  if(message.content === "b.brplace 8")
  { 
    message.react('🍎');
    if(message.content === "b.brplace 8"){}
    client.once('messageReactionAdd', (reaction, user) => {
      client.once('messageReactionAdd', (reaction, user) => {
        client.break
        client.break
        let channel = client.channels.get('teehee');
        var e = message.member.nickname.split("- ")
        if(message.channel.content != "b.addpts 10" + " <@"+ placeid + "> " + e[1])
        {

          message.guild.channels.get('598629725958832138').createInvite().then(message =>{
 
          message.channel.send("b.addpts 10" + " <@"+ placeid + "> " + e[1])});
          client.break
        }
      });
      client.break
    });
  }
  var placeid = message.author.id;
  var placeName = message.author.username;
  if(message.content === "b.brplace 9")
  { 
    message.react('🍎');
    if(message.content === "b.brplace 9"){}
    client.once('messageReactionAdd', (reaction, user) => {
      client.once('messageReactionAdd', (reaction, user) => {
        client.break
        client.break
        let channel = client.channels.get('teehee');
        var e = message.member.nickname.split("- ")
        if(message.channel.content != "b.addpts 0" + " <@"+ placeid + "> " + e[1])
        {

          message.guild.channels.get('598629725958832138').createInvite().then(message =>{
 
          message.channel.send("b.addpts 0" + " <@"+ placeid + "> " + e[1])});
          client.break
        }
      });
      client.break
    });
  }

   var placeid = message.author.id;
  var placeName = message.author.username;
  if(message.content === "b.brplace 10")
  { 
    message.react('🍎');
    if(message.content === "b.brplace 10"){}
    client.once('messageReactionAdd', (reaction, user) => {
      client.once('messageReactionAdd', (reaction, user) => {
        client.break
        client.break
        let channel = client.channels.get('teehee');
        var e = message.member.nickname.split("- ")
        if(message.channel.content != "b.addpts 0" + " <@"+ placeid + "> " + e[1])
        {

          message.guild.channels.get('598629725958832138').createInvite().then(message =>{
 
          message.channel.send("b.addpts 0" + " <@"+ placeid + "> " + e[1])});
          client.break
        }
      });
      client.break
    });
  }
  var placeid = message.author.id;
  var placeName = message.author.username;
  if(message.content === "b.brplace 11")
  { 
    message.react('🍎');
    if(message.content === "b.brplace 11"){}
    client.once('messageReactionAdd', (reaction, user) => {
      client.once('messageReactionAdd', (reaction, user) => {
        client.break
        client.break
        let channel = client.channels.get('teehee');
        var e = message.member.nickname.split("- ")
        if(message.channel.content != "b.addpts -10" + " <@"+ placeid + "> " + e[1])
        {

          message.guild.channels.get('598629725958832138').createInvite().then(message =>{
 
          message.channel.send("b.addpts -10" + " <@"+ placeid + "> " + e[1])});
          client.break
        }
      });
      client.break
    });
  }

  var placeid = message.author.id;
  var placeName = message.author.username;
  if(message.content === "b.brplace 12")
  { 
    message.react('🍎');
    if(message.content === "b.brplace 12"){}
    client.once('messageReactionAdd', (reaction, user) => {
      client.once('messageReactionAdd', (reaction, user) => {
        client.break
        client.break
        let channel = client.channels.get('teehee');
        var e = message.member.nickname.split("- ")
        if(message.channel.content != "b.addpts -20" + " <@"+ placeid + "> " + e[1])
        {

          message.guild.channels.get('598629725958832138').createInvite().then(message =>{
 
          message.channel.send("b.addpts -20" + " <@"+ placeid + "> " + e[1])});
          client.break
        }
      });
      client.break
    });
  }
  
  var placeid = message.author.id;
  var placeName = message.author.username;
  if(message.content === "b.brplace 13")
  { 
    message.react('🍎');
    if(message.content === "b.brplace 13"){}
    client.once('messageReactionAdd', (reaction, user) => {
      client.once('messageReactionAdd', (reaction, user) => {
        client.break
        client.break
        let channel = client.channels.get('teehee');
        var e = message.member.nickname.split("- ")
        if(message.channel.content != "b.addpts -30" + " <@"+ placeid + "> " + e[1])
        {

          message.guild.channels.get('598629725958832138').createInvite().then(message =>{
 
          message.channel.send("b.addpts -30" + " <@"+ placeid + "> " + e[1])});
          client.break
        }
      });
      client.break
    });
  }

   var placeid = message.author.id;
  var placeName = message.author.username;
  if(message.content === "b.brplace 14")
  { 
    message.react('🍎');
    if(message.content === "b.brplace 14"){}
    client.once('messageReactionAdd', (reaction, user) => {
      client.once('messageReactionAdd', (reaction, user) => {
        client.break
        client.break
        let channel = client.channels.get('teehee');
        var e = message.member.nickname.split("- ")
        if(message.channel.content != "b.addpts -40" + " <@"+ placeid + "> " + e[1])
        {

          message.guild.channels.get('598629725958832138').createInvite().then(message =>{
 
          message.channel.send("b.addpts -40" + " <@"+ placeid + "> " + e[1])});
          client.break
        }
      });
      client.break
    });
  }
  var placeid = message.author.id;
  var placeName = message.author.username;
  if(message.content === "b.brplace 15")
  { 
    message.react('🍎');
    if(message.content === "b.brplace 15"){}
    client.once('messageReactionAdd', (reaction, user) => {
      client.once('messageReactionAdd', (reaction, user) => {
        client.break
        client.break
        let channel = client.channels.get('teehee');
        var e = message.member.nickname.split("- ")
        if(message.channel.content != "b.addpts -50" + " <@"+ placeid + "> " + e[1])
        {

          message.guild.channels.get('598629725958832138').createInvite().then(message =>{
 
          message.channel.send("b.addpts -50" + " <@"+ placeid + "> " + e[1])});
          client.break
        }
      });
      client.break
    });
  }
  var placeid = message.author.id;
  var placeName = message.author.username;
  if(message.content === "b.brplace 16")
  { 
    message.react('🍎');
    if(message.content === "b.brplace 16"){}
    client.once('messageReactionAdd', (reaction, user) => {
      client.once('messageReactionAdd', (reaction, user) => {
        client.break
        client.break
        let channel = client.channels.get('teehee');
        var e = message.member.nickname.split("- ")
        if(message.channel.content != "b.addpts -50" + " <@"+ placeid + "> " + e[1])
        {

          message.guild.channels.get('598629725958832138').createInvite().then(message =>{
 
          message.channel.send("b.addpts -50" + " <@"+ placeid + "> " + e[1])});
          client.break
        }
      });
      client.break
    });
  }
 });


client.login(NTk5OTc1MDY5MTM2OTc3OTMx.XTYsUQ.Iyr-0noS4VbhKBrOBAPIIwnFJTY);
