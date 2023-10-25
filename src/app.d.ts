import Gtk from '@girs/gtk-3.0';

export interface AppConfig {
    windows?: Gtk.Window[];
    style?: string;
    notificationPopupTimeout: number;
    cacheNotificationActions: boolean;
    closeWindowDelay: Record<string, number>;
    maxStreamVolume: number;
}

export class App extends Gtk.Application {
    windows: Gtk.Window[];
    configDir: string;

    resetCss(): void;
    applyCss(path: string): void;
    toggleWindow(name: string): void;
    openWindow(name: string): void;
    closeWindow(name: string): void;
    getWindow(name: string): Gtk.Window;
    removeWindow(w: Gtk.Window | string): void;
    addWindow(w: Gtk.Window): void;
    quit(): void;
}

declare const AppInstance: App;

export default AppInstance;
