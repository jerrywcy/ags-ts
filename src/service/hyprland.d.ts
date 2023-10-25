import { Service } from '@/service';

declare class Active extends Service {
    updateProperty(prop: string, value: unknown): void;
}

export class ActiveClient extends Active {
    get address(): string;
    get title(): string;
    get class(): string;
}

export class ActiveWorkspace extends Active {
    get id(): number;
    get name(): string;
}

export class Actives extends Service {
    constructor();

    get client(): ActiveClient;
    get monitor(): string;
    get workspace(): ActiveWorkspace;
}

export interface Workspace {
    id: number;
    name: string;
    monitor: string;
    windows: number;
    hasfullscreen: boolean;
    lastwindow: string;
    lastwindowtitle: string;
}

export interface Monitor {
    id: number;
    name: string;
    description: string;
    make: string;
    model: string;
    serial: string;
    width: number;
    height: number;
    refreshRate: number;
    x: number;
    y: number;
    activeWorkspace: {
        id: number;
        name: string;
    };
    specialWorkspace: {
        id: number;
        name: string;
    };
    reserved: [number, number, number, number];
    scale: number;
    transform: number;
    focused: boolean;
    dpmsStatus: boolean;
    vrr: boolean;
}

export interface Client {
    address: string;
    mapped: boolean;
    hidden: boolean;
    at: [number, number];
    size: [number, number];
    workspace: {
        id: number;
        name: string;
    };
    floating: boolean;
    monitor: number;
    class: string;
    title: string;
    initialClass: string;
    initialTitle: string;
    pid: number;
    xwayland: boolean;
    pinned: boolean;
    fullscreen: boolean;
    fullscreenMode: number;
    fakeFullscreen: boolean;
    grouped: string[];
    swallowing: string;
}

export class Hyprland extends Service {
    active: Actives;
    monitors: Monitor[];
    workspaces: Workspace[];
    clients: Client[];

    getMonitor(id: number): Monitor;
    getWorkspace(id: number): Workspace;
    getClient(address: string): Client;
}

declare const HyprlandInstance: Hyprland;

export default HyprlandInstance;
