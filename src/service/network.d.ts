import type NM from '@girs/nm-1.0';

import { Service } from '@/service';

export type InternetStatus = 'connected' | 'connecting' | 'disconnected';
export type DeviceState =
    | 'unmanaged'
    | 'unavailable'
    | 'disconnected'
    | 'prepare'
    | 'config'
    | 'need_auth'
    | 'ip_config'
    | 'ip_check'
    | 'secondaries'
    | 'activated'
    | 'deactivating'
    | 'failed'
    | 'unknown';
export type WirelessIconNames =
    | 'network-wireless-signal-excellent-symbolic'
    | 'network-wireless-signal-good-symbolic'
    | 'network-wireless-signal-ok-symbolic'
    | 'network-wireless-signal-weak-symbolic'
    | 'network-wireless-signal-none-symbolic'
    | 'network-wireless-acquiring-symbolic'
    | 'network-wireless-offline-symbolic'
    | 'network-wireless-disabled-symbolic';
export type WiredIconNames =
    | 'network-wired-acquiring-symbolic'
    | 'network-wired-symbolic'
    | 'network-wired-no-route-symbolic'
    | 'network-wired-disconnected-symbolic';

export class Wifi extends Service {
    constructor(client: NM.Client, device: NM.DeviceWifi);

    scan(): void;

    get access_points(): Array<{
        bssid: string | null;
        address: string | null;
        lastSeen: number;
        ssid: string | null;
        active: boolean;
        strength: number;
        iconName: string | undefined;
    }>;

    get enabled(): boolean;
    set enabled(v: boolean);

    get strength(): number;
    get internet(): InternetStatus;
    get ssid(): string;

    get state(): DeviceState;
    get icon_name(): WirelessIconNames;
}

export class Wired extends Service {
    constructor(device: NM.DeviceEthernet);

    get speed(): number;
    get internet(): InternetStatus;
    get state(): DeviceState;
    get icon_name(): WiredIconNames;
}

export class Network extends Service {
    wifi: Wifi;
    wired: Wired;
    primary?: string;
    connectivity: string;

    constructor();

    toggleWifi(): void;
}

declare const NetworkInstance: Network;

export default NetworkInstance;
