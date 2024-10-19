import type { PageLoad } from './$types';

const fortwars: App.Project = {
    title: "Fortwars",
    description: "A gamemode for Garry's Mod, made in s&box",
    date: "May 25 2024",
    link: "https://sbox.game/nolankicks/fortwars",
    image: "sbox.png",
};

const deadleft: App.Project = {
    title: "Dead 4 Left",
    description: "A gamemode in s&box I made when I first learned programming, rewrote recently",
    date: "May 25 2024",
    link: "https://sbox.game/nolankicks/dead4left",
    image: "sbox.png",
};

const crazycab: App.Project = {
    title: "Crazy Cab",
    description: "Help programmed on this project for the s&box game jam",
    date: "May 25 2024",
    link: "https://sbox.game/vidya/crazy-cab",
    image: "sbox.png",
};

const melonracer: App.Project = {
    title: "Melon Racer",
    description: "A classic Garry's Mode gamemode I remade in s&box",
    date: "May 25 2024",
    link: "https://sbox.game/nolankicks/melonracer",
    image: "melonrader.png",
};

export const load: PageLoad = async ({ params }) => {
    const projects: App.Project[] = [fortwars, deadleft, crazycab, melonracer];
    return {
        projects
    };
};