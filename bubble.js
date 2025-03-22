document.body.addEventListener("click",(event)=>{
    const greetings = [
        "Hello!",
        "Hi there!",
        "Hey!",
        "Good morning!",
        "Good afternoon!",
        "Good evening!",
        "Howdy!",
        "Greetings!",
        "What's up?",
        "Yo!",
        "How’s it going?",
        "Nice to see you!",
        "Long time no see!",
        "Hey, how are you?",
        "Hope you're doing well!",
        "How have you been?",
        "What’s new?",
        "Sup!",
        "Welcome!",
        "Great to see you!",
        "How’s your day?",
        "Hiya!",
        "Morning!",
        "Afternoon!",
        "Evening!",
        "How’s everything?",
        "Pleasure to meet you!",
        "How are things?",
        "Good to see you!",
        "How’s life?",
        "How’s your day going?",
        "What’s good?",
        "Hey there!",
        "Look who it is!",
        "How’s your week?",
        "What’s happening?",
        "What’s popping?",
        "How’s your world?",
        "Happy to see you!",
        "What’s cracking?",
        "How’s your vibe?",
        "Hola!",
        "Bonjour!",
        "Salutations!",
        "Hi friend!",
        "Top of the morning to you!",
        "How’s your day treating you?",
        "Wazzup?",
        "How do you do?",
        "Ayo!"
    ];
    
    const greet=Math.floor(Math.random()*50);
    
    const bubble=document.createElement("div"); 
    bubble.className="bubbles";
    bubble.textContent=`${greetings[greet]}`;
    const x=event.clientX;
    const y=event.clientY;
    bubble.style.left=`${x-50}px`;
    bubble.style.top=`${y-50}px`;
    const color1=Math.floor(Math.random()*256);
    const color2=Math.floor(Math.random()*256);
    const color3=Math.floor(Math.random()*256);
    bubble.style.backgroundColor=`rgb(${color1},${color2},${color3})`;
    document.body.appendChild(bubble);

    setTimeout(()=>{
        bubble.remove()
    },5000)
})
