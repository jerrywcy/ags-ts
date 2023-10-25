import type Gtk from '@girs/gtk-3.0';

import { AgsBox } from './box';

export interface AgsCenterBoxProps extends Gtk.Box.ConstructorProperties {
    children?: Gtk.Widget[];
    start_widget?: Gtk.Widget;
    center_widget?: Gtk.Widget;
    end_widget?: Gtk.Widget;
}

export class AgsCenterBox extends AgsBox {
    set children(children: Gtk.Widget[]);

    get start_widget(): Gtk.Widget | null;
    set start_widget(child: Gtk.Widget | null);

    get end_widget(): Gtk.Widget | null;
    set end_widget(child: Gtk.Widget | null);

    get center_widget(): Gtk.Widget | null;
    set center_widget(child: Gtk.Widget | null);
}
