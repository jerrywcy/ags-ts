import Gtk from '@girs/gtk-3.0';

export type AgsScrollablePolicy = 'automatic' | 'always' | 'never' | 'external';

export interface AgsScrollableProps
    extends Gtk.ScrolledWindow.ConstructorProperties {
    hscroll?: AgsScrollablePolicy;
    vscroll?: AgsScrollablePolicy;
}

export class AgsScrollable extends Gtk.ScrolledWindow {
    constructor(params: AgsScrollableProps);

    get hscroll(): AgsScrollablePolicy;
    set hscroll(hscroll: AgsScrollablePolicy);

    get vscroll(): AgsScrollablePolicy;
    set vscroll(vscroll: AgsScrollablePolicy);
}
