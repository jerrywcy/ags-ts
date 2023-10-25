import Gtk from '@girs/gtk-3.0';

export interface AgsBoxProps extends Gtk.Box.ConstructorProperties {
    /**
     * List of child widgets.
     */
    children?: Gtk.Widget[];
    /**
     * Setting `vertical = true` is the same as `orientation: 1`
     */
    vertical?: boolean;
}

export class AgsBox extends Gtk.Box {
    constructor(props: AgsBoxProps);

    get children(): Gtk.Widget[];
    set children(children: Gtk.Widget[]);

    get vertical(): boolean;
    set vertical(vertical: boolean);
}
