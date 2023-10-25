import Gtk from '@girs/gtk-3.0';

export interface AgsCircularProgressProps extends Gtk.Bin {
    /**
     * Whether the progress bar should have rounded ends.
     */
    rounded?: boolean;
    /**
     * Number between 0 and 1.
     */
    value?: number;
    inverted?: boolean;
    /**
     * Number between 0 and 1, e.g 0.75 is the top.
     */
    start_at?: number;
}

export class AgsCircularProgress extends Gtk.Bin {
    get rounded(): boolean;
    set rounded(r: boolean);

    get inverted(): boolean;
    set inverted(inverted: boolean);

    get start_at(): number;
    set start_at(value: number);

    get value(): number;
    set value(value: number);
}
