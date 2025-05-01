const message = document.getElementById("message");

const main = async () => {
  try {
    const guildId = new URLSearchParams(window.location.search).get("id");

    if(!guildId) {
      window.location = "https://github.com/deniz-blue/discord-invite#readme";
      return;
    };
    
    const res = await fetch(`https://discord.com/api/guilds/${guildId}/widget.json`);
    const json = await res.json();
    const invite = json.instant_invite;
    window.location = invite;

    const a = document.createElement("a");
    a.href = invite;
    a.innerText = "Click here to get redirected";
    message.innerHTML = "";
    message.appendChild(a);
  } catch(e) {
    console.log(e);
    message.innerHTML = "";
    message.innerText = "There was an error, check console";
  }
};

main();
