---
title: 'Fortwars'
description: "A gamemode for Garry's Mod, made in s&box"
date: 'Sep 27 24'
sbox: 'https://sbox.game/nolankicks/fortwars'
image: 'fortwars/fortwars.png'
---

Fortwars is a fork of [Dead 4 Left Rewrite](deadleft). I first thought about using [HC1 from Facepunch](https://sbox.game/facepunch/hc1) as a base, but I found it too bloated.

The game state is a simple switch sate which is pretty perforant and easy to use

```cs
    switch ( State )
    {
        case GameState.Waiting:
            //Do something
        break;

        case GaemState.BuildMode:
            //Do something
        break...
    }
```

Player data is changed though the use of [Game Events](https://sbox.game/facepunch/hc1):
```cs
Scene.Dispatch( new OnBuildMode() );
```

Fortwars took about a week of work and polishing took a few more.

<Img src="../fortwars/fortwarsimg.png" />