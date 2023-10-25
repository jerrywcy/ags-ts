import type DbusmenuGtk3 from '@girs/dbusmenugtk3-0.4';
import type Gdk from '@girs/gdk-3.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Gio from '@girs/gio-2.0';

import type { StatusNotifierItemProxy } from '@/dbus';
import { Service } from '@/service';

export class TrayItem extends Service {
    menu?: DbusmenuGtk3.Menu;

    constructor(busName: string, objectPath: string);

    activate(event: Gdk.Event): void;

    secondaryActivate(event: Gdk.Event): void;

    scroll(event: Gdk.EventScroll): void;

    openMenu(event: Gdk.Event): void;

    get category(): StatusNotifierItemProxy['Category'];
    get id(): StatusNotifierItemProxy['Id'];
    get title(): StatusNotifierItemProxy['Title'];
    get status(): StatusNotifierItemProxy['Status'];
    get window_id(): StatusNotifierItemProxy['WindowId'];
    get is_menu(): StatusNotifierItemProxy['ItemIsMenu'];

    get tooltip_markup(): string;

    get icon(): string | GdkPixbuf.Pixbuf;
}

export class SystemTray extends Service {
    get IsStatusNotifierHostRegistered(): true;
    get ProtocolVersion(): 0;
    get RegisteredStatusNotifierItems(): string[];

    get items(): TrayItem[];
    getItem(name: string): TrayItem;

    constructor();

    RegisterStatusNotifierItemAsync(
        serviceName: string[],
        invocation: Gio.DBusMethodInvocation
    ): void;
}

declare const SystemTrayInstance: SystemTray;

export default SystemTrayInstance;
