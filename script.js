const animalInfo = {
    lion: {
        description: "Meet the King of naps=he sleeps 20 hours a day,but when his awake,he rules the jungle[and your heart].with a roar that can be heard 8km away,he's basically natures loudspeaker.Come say Hi!!!-just don't challenge him to a staring contest.",
        image: "images/lion.png"
    },
    elephant: {
        description: "With ears like satellite dishs and a memory better than your phone,our elephants are impossible to forget.They can drink 50 gallons of water a day-imagine the size of their smoothies!Wave at them and you might just get a trunk wave back!",
        image: "images/elephant.png"
    },
    giraffe: {
        description: "Our Giraffes are 6 ft tall..at birth.With necks longer than your wifi cable,they are nature's high rise eaters.They might be shy,but their height gives them a serious overlook advantage",
        image: "images/giraffe.png"
    },
    zebra: {
        description: "Black with white stripes or white with black stripes?even they are not sure.They wear nature's coolest outfit and never have to worry about matching.Come see these stylish grazers before they run of the catwalk",
        image: "images/zebra.png"
    },
    monkey: {
        description: "Swinging,playing and ocassionally stealing your snacks-monkeys are the life of the zoo party,They are clever,curious and always up to something,Watch closely=they might be watching you back",
        image: "images/monkey.png"
    },
    tiger: {
        description: "Stealth mode activated.Oour tigers move like ninjas and look like artwork.With stripes more unique than finger prints,no 2 are the same.They are MAJESTIC,MYSTERIOUS and definitely not house-cat material",
        image: "images/tiger.png"
    },
    rhino: {
        description: "Thick skin,big heart and a horn to impress.Our rhino might look like a tank,but he is just a big softie[with armor]Do not let the heavy steps fool you-he is suprisingly grateful",
        image: "images/rhino.png"
    },
    crocodile: {
        description: "Ancient,armored and always sunbathing-the ultimate chill predator.Step closer[but not to close]and see this living dino in action",
        image: "images/crocodile.png"
    },
    panda: {
        description: "Our pandas eat bamboo like it's a buffet and nap likes it's a sport.They roll,tumble and ocassionally fall of things-cuteness overload guaranteed.Warning:you might fall in love instantly",
        image: "images/panda.png"
    },
    koala: {
        description: "Koalas  sleep 18 hours a day- talk about living the dream.With their fluffy ears and grumpy-sweeet faces, they are basically living teddy bears.Come watch them chill in slow motion-its strangely satisfying",
        image: "images/koala.png"
    },
    flamingo: {
        description: "They balance on 1 leg better thna you do on two.Flamingos are pink because of their diet-talk about eating your way to style.Come see them strike a pose and live the aesthetic life",
        image: "images/flamingo.png"
    },
    penguin: {
        description: "They walk like comedians,dress like waiters, and swim like pros.These birds can't fly,but they slide into your heart like it's an ice rink",
        image: "images/penguin.png"
    }
};

// Add event listeners to animal buttons
document.querySelectorAll(".animal-link").forEach(link => {
    link.addEventListener("click", () => {
        const animal = link.getAttribute("data-animal");
        const animalData = animalInfo[animal];
        document.getElementById("content").innerHTML = `
            <p>${animalData.description}</p>
            <img src="${animalData.image}" alt="${animal}" style="max-width: 100%; border-radius: 8px;">
        `;
    });
});

// Map icon functionality
document.querySelector(".map-icon").addEventListener("click", () => {
    document.getElementById("content").innerHTML = `
        <h2>Zoo Map</h2>
        <img src="images/zoo-map.png" alt="Zoo Map" style="max-width: 100%; border-radius: 8px;">
        <p>Explore all our habitats and attractions!</p>
    `;
});