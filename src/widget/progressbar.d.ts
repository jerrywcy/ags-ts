import Gtk from '@girs/gtk-3.0';

export interface AgsProgressBarProps
    extends Gtk.ProgressBar.ConstructorProperties {
    vertical?: boolean;
    value?: number;
}

export class AgsProgressBar extends Gtk.ProgressBar {
    get value(): number;
    set value(value: number);

    get vertical(): boolean;
    set vertical(vertical: boolean);
}
