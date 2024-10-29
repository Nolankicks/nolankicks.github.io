---
title: 'Fortwars Dev Blog #1'
description: 'A break down of Fortwars development so far'
date: 'Oct 29 2024'
published: false
---

For the past few weeks, a few contributors and I have been working on a remake of [Fortwars](https://sbox.game/nolankicks/fortwars) in [s&box](https://sbox.game/about).

<Header title="Goals" />
When I started the projects, I had a few libraries I wanted to make the use of.

### Game Events
[Game Events](https://sbox.game/facepunch/libevents) is an event library made by facepunch. It allows easy dispatching of events within the scene. Alot of the core game loop is managed this way.

Here's an exmaple of how dispatching an event looks like

```cs
//Define the event
public record OnGameEnd() : IGameEvent;

//Disptach the event
Scene.Dispatch( new OnGameEnd() );

//Listen to the event
public class MyCoolComponent : Component, IGameEventHandler<OnGameEnd>
{
    public void OnGameEvent( OnGameEnd eventArgs )
    {
        //Do something
    }
}
```

### Shrimple Character Controller
Shrimple Character Controller is a simple and easy to use character controller. It run well and is easy to tweak. The issues that came up when using it were quickly fixed by [Small Fish](https://smallfi.sh).

<Header title="Game Loop" author="Kicks" authorLink="TESTER" />

Most of the game loop is handled through a simple switch state

```cs
switch ( State )
{
	case GameState.BuildMode:
		//After build time is over, switch to fight mode
		if ( StateSwitch > BuildTime )
				{
					Scene.Dispatch( new OnFightMode() );
					State = GameState.FightMode;
				}
				break;

	case GameState.FightMode:
		//Constantly check for the winning team
		CheckForWinningTeam();

		//If we don't have one by the end, start overtime
		if ( GetWinningTeam() == Team.None && StateSwitch > FightTime )
		{
			Scene.Dispatch( new OnGameOvertimeBuild() );
			State = GameState.OvertimeBuild;
		}
		break;
}
```
By handling the game state through game events, it allows a lot of the game to be managed by GameObjects throughout the scene.

