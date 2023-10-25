import GObject from '@girs/gobject-2.0';

export * from './applications';
export { default as Applications } from './applications';
export * from './audio';
export { default as Audio } from './audio';
export * from './battery';
export { default as Battery } from './battery';
export * from './bluetooth';
export { default as Bluetooth } from './bluetooth';
export * from './hyprland';
export { default as Hyprland } from './hyprland';
export * from './mpris';
export { default as Mpris } from './mpris';
export * from './network';
export { default as Network } from './network';
export * from './notifications';
export { default as Notifications } from './notifications';
export * from './systemtray';
export { default as SystemTray } from './systemtray';

export class Service extends GObject.Object {
    connect(
        signal: string,
        callback: (_: this, ...args: any[]) => void
    ): number;

    updateProperty(prop: string, value: unknown): void;

    changed(property: string): void;
}
