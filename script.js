let quotes = [
    {
    "quote": "Pivot! Pivot! Pivot! Pivot! Pivot!",
    "character": "Ross"
    },
    {
    "quote": "Joey doesn't share food!",
    "character": "Joey"
    },
    {
    "quote": "Guys can fake it? Unbelievable! The one thing that’s ours!",
    "character": "Monica"
    },
    {
    "quote": "It's a moo point. It's like a cow's opinion; it doesn't matter. It's moo.",
    "character": "Joey"
    },
    {
    "quote": "Yeah, that's right. I stepped up! She's my friend and she needed help. And if I have to I'd pee on any one of you.",
    "character": "Joey"
    },
    {
    "quote": "But they don't know that we know they know we know!",
    "character": "Phoebe"
    },
    {
    "quote": "This is brand-new information!",
    "character": "Phoebe"
    },
    {
    "quote": "Phoebe. That's P, as in Phoebe, H as in hoebe, O as in oebe, E as in ebe, B as in bebe, and E as in 'Ello there mate.",
    "character": "Phoebe"
    }
];

const $btn = $('#btn');

$btn.click(function(){
    let number = Math.floor(Math.random()*quotes.length);

    $("#quote").html('<span>"</span>' + quotes[number].quote + '<span>"</span>')
    $("#character").html('<span>- </span>' + quotes[number].character)
});