import Gtk from '@girs/gtk-3.0';

import type { Command } from '@/widget';

export interface AgsMenuProps extends Gtk.Menu.ConstructorProperties {
    children?: Gtk.Widget[];
    onPopup?: Command;
    onMoveScroll?: Command;
}

export class AgsMenu extends Gtk.Menu {
    onPopup: Command;
    onMoveScroll: Command;

    constructor(props: AgsMenuProps);

    get children(): Gtk.Widget[];
    set children(children: Gtk.Widget[]);
}

export interface AgsMenuItemProps extends Gtk.Menu.ConstructorProperties {
    onActivate?: Command;
    onSelect?: Command;
    onDeselect?: Command;
}

export class AgsMenuItem extends Gtk.MenuItem {
    onActivate: Command;
    onSelect: Command;
    onDeselect: Command;

    constructor(props: AgsMenuItemProps);
}
