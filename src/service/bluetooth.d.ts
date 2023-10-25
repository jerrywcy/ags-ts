import type GnomeBluetooth from '@/gnomebluetooth-3.0';
import { Service } from '@/service';

export type AdapterState =
    | 'absent'
    | 'on'
    | 'turning-on'
    | 'turning-off'
    | 'off';

export class BluetoothDevice extends Service {
    get device(): GnomeBluetooth.Device;

    constructor(device: GnomeBluetooth.Device);

    close(): void;

    get address(): string;
    get alias(): string;
    get battery_level(): number;
    get battery_percentage(): number;
    get connected(): boolean;
    get icon_name(): string;
    get name(): string;
    get paired(): boolean;
    get trusted(): boolean;
    get type(): string | null;
    get connecting(): boolean;

    setConnection(connect: boolean): void;
}

export class Bluetooth extends Service {
    constructor();

    toggle(): void;

    connectDevice(
        device: BluetoothDevice,
        connect: boolean,
        callback: (s: boolean) => void
    ): void;

    getDevice(address: string): BluetoothDevice | undefined;

    set enabled(v: boolean);
    get enabled();

    get state(): AdapterState;

    get devices(): BluetoothDevice[];
    get connected_devices(): BluetoothDevice[];
}

declare const BluetoothInstance: Bluetooth;

export default BluetoothInstance;
