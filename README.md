# Ags

This package helps those who want to write a configuration file for [ags](https://github.com/Aylur/ags) in typescript.

## Installation

```bash
npm install ags-ts
```

## Usage

### Widgets

Built-in widgets are exported in named export `Widget`. Some types are also exported for convenience, such as `AgsBox`.

### Utils

All utils functions are directly imported, as shown in the example.

### Variables

Exported in named export `Variables`, along with three helper types `VariableOptions`, `VariablePoll` and `VariableListen`;

### Services

Each built-in service is directly exported, along with the base `Service` type.

### App

Exported in named export `App`.

### Gjs Related

These gjs related model are also exported just in case: `Cairo`, `DbusmenuGtk3`, `Gdk`, `GdkPixbuf`, `Gio`, `GnomeBluetooth`, `GObject`, `Gtk`, `Gvc`, `NM`.

### Example

Below is an example of the official [simple bar](https://github.com/Aylur/ags/blob/main/example/simple-bar/config.js) written in typescript with this package:

```typescript
// importing
import { exec, execAsync } from 'ags';
import {
	Hyprland,
	Notifications,
	Mpris,
	Audio,
	Battery,
	SystemTray,
	App,
	Widget,
} from 'ags';

const Workspaces = () =>
	Widget.Box({
		className: 'workspaces',
		connections: [
			[
				Hyprland.active.workspace,
				(self) => {
					// generate an array [1..10] then make buttons from the index
					const arr = Array.from({ length: 10 }, (_, i) => i + 1);
					self.children = arr.map((i) =>
						Widget.Button({
							onClicked: () =>
								execAsync(`hyprctl dispatch workspace ${i}`),
							child: Widget.Label(`${i}`),
							className:
								Hyprland.active.workspace.id == i
									? 'focused'
									: '',
						}),
					);
				},
			],
		],
	});

const ClientTitle = () =>
	Widget.Label({
		className: 'client-title',
		binds: [['label', Hyprland.active.client, 'title']],
	});

const Clock = () =>
	Widget.Label({
		className: 'clock',
		connections: [
			// this is bad practice, since exec() will block the main event loop
			// in the case of a simple date its not really a problem
			[1000, (self) => (self.label = exec('date "+%H:%M:%S %b %e."'))],

			// this is what you should do
			[
				1000,
				(self) =>
					execAsync(['date', '+%H:%M:%S %b %e.'])
						.then((date) => (self.label = date))
						.catch(console.error),
			],
		],
	});

// we don't need dunst or any other notification daemon
// because the Notifications module is a notification daemon itself
const Notification = () =>
	Widget.Box({
		className: 'notification',
		children: [
			Widget.Icon({
				icon: 'preferences-system-notifications-symbolic',
				connections: [
					[
						Notifications,
						(self) =>
							(self.visible = Notifications.popups.length > 0),
					],
				],
			}),
			Widget.Label({
				connections: [
					[
						Notifications,
						(self) => {
							self.label = Notifications.popups[0]?.summary || '';
						},
					],
				],
			}),
		],
	});

const Media = () =>
	Widget.Button({
		className: 'media',
		onPrimaryClick: () => Mpris.getPlayer('')?.playPause(),
		onScrollUp: () => Mpris.getPlayer('')?.next(),
		onScrollDown: () => Mpris.getPlayer('')?.previous(),
		child: Widget.Label({
			connections: [
				[
					Mpris,
					(self) => {
						const mpris = Mpris.getPlayer('');
						// mpris player can be undefined
						if (mpris)
							self.label = `${mpris.trackArtists.join(', ')} - ${
								mpris.trackTitle
							}`;
						else self.label = 'Nothing is playing';
					},
				],
			],
		}),
	});

const Volume = () =>
	Widget.Box({
		className: 'volume',
		style: 'min-width: 180px',
		children: [
			Widget.Stack({
				items: [
					// tuples of [string, Widget]
					['101', Widget.Icon('audio-volume-overamplified-symbolic')],
					['67', Widget.Icon('audio-volume-high-symbolic')],
					['34', Widget.Icon('audio-volume-medium-symbolic')],
					['1', Widget.Icon('audio-volume-low-symbolic')],
					['0', Widget.Icon('audio-volume-muted-symbolic')],
				],
				connections: [
					[
						Audio,
						(self) => {
							if (!Audio.speaker) return;

							if (Audio.speaker.is_muted) {
								self.shown = '0';
								return;
							}

							const show = [101, 67, 34, 1, 0].find(
								(threshold) =>
									threshold <= Audio.speaker.volume * 100,
							);

							self.shown = `${show}`;
						},
						'speaker-changed',
					],
				],
			}),
			Widget.Slider({
				hexpand: true,
				drawValue: false,
				onChange: ({ value }) => (Audio.speaker.volume = value),
				connections: [
					[
						Audio,
						(self) => {
							self.value = Audio.speaker?.volume || 0;
						},
						'speaker-changed',
					],
				],
			}),
		],
	});

const BatteryLabel = () =>
	Widget.Box({
		className: 'battery',
		children: [
			Widget.Icon({
				connections: [
					[
						Battery,
						(self) => {
							self.icon = `battery-level-${
								Math.floor(Battery.percent / 10) * 10
							}-symbolic`;
						},
					],
				],
			}),
			Widget.ProgressBar({
				valign: 'center',
				connections: [
					[
						Battery,
						(self) => {
							if (Battery.percent < 0) return;

							self.fraction = Battery.percent / 100;
						},
					],
				],
			}),
		],
	});

const SysTray = () =>
	Widget.Box({
		connections: [
			[
				SystemTray,
				(self) => {
					self.children = SystemTray.items.map((item) =>
						Widget.Button({
							child: Widget.Icon({
								binds: [['icon', item, 'icon']],
							}),
							onPrimaryClick: (_, event) => item.activate(event),
							onSecondaryClick: (_, event) =>
								item.openMenu(event),
							binds: [['tooltip-markup', item, 'tooltip-markup']],
						}),
					);
				},
			],
		],
	});

// layout of the bar
const Left = () =>
	Widget.Box({
		children: [Workspaces(), ClientTitle()],
	});

const Center = () =>
	Widget.Box({
		children: [Media(), Notification()],
	});

const Right = () =>
	Widget.Box({
		halign: 'end',
		children: [Volume(), BatteryLabel(), Clock(), SysTray()],
	});

const Bar = ({ monitor }: { monitor?: number } = {}) =>
	Widget.Window({
		name: `bar-${monitor}`, // name has to be unique
		className: 'bar',
		monitor,
		anchor: ['top', 'left', 'right'],
		exclusive: true,
		child: Widget.CenterBox({
			startWidget: Left(),
			centerWidget: Center(),
			endWidget: Right(),
		}),
	});

// exporting the config so ags can manage the windows
export default {
	style: App.configDir + '/style.css',
	windows: [
		Bar(),

		// you can call it, for each monitor
		// Bar({ monitor: 0 }),
		// Bar({ monitor: 1 })
	],
};
```
