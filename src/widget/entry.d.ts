import Gtk from '@girs/gtk-3.0';

import type { Command } from '@/widget';

export interface AgsEntryProps extends Gtk.Entry.ConstructorProperties {
    onAccept?: Command;
    onChange?: Command;
}

export class AgsEntry extends Gtk.Entry {
    onAccept: Command;
    onChange: Command;

    constructor(props: AgsEntryProps);
}
