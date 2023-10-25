import Gtk from '@girs/gtk-3.0';

export type AgsWindowLayer = 'background' | 'bottom' | 'top' | 'overlay';
export type AgsWindowAnchor = 'left' | 'right' | 'top' | 'bottom';

export interface AgsWindowProps
    extends Omit<Gtk.Window.ConstructorProperties, 'margin'> {
    /**
     * Valid values are `"top"`, `"bottom"`, `"left"`, `"right"`. Anchor points
     * of the window. Leave it empty to make it centered.
     */
    anchor?: AgsWindowAnchor[];
    /**
     * Tells the window manager to leave space for the window and not tile other
     * windows over it.
     */
    exclusive?: boolean;
    /**
     * Useful if you have an `entry` or other widgets that require user input.
     */
    focusable?: boolean;
    /**
     * Valid values are `"overlay"`, `"top"`, `"bottom"`, `"background"`. It is
     * `"top"` by default.
     */
    layer?: AgsWindowLayer;
    /**
     * Corresponds to CSS notation, e.g `[0, 6]` would have 0 margin on the top
     * and bottom and would have 6 on the right and left.
     */
    margin?: number[];
    /**
     * Which monitor to show the window on. If it is left undefined the window
     * will show on the currently focused monitor.
     */
    monitor?: number;
    /**
     * Pressing `ESC` while the window has focus will close it.
     */
    popup?: boolean;
    visible?: boolean;
}

export class AgsWindow extends Gtk.Window {
    constructor(props: AgsWindowProps);

    get monitor(): number;
    set monitor(monitor: number);

    get exclusive(): boolean;
    set exclusive(exclusive: boolean);

    get layer(): AgsWindowLayer;
    set layer(layer: AgsWindowLayer);

    get anchor(): AgsWindowAnchor[];
    set anchor(anchor: AgsWindowAnchor[]);
    // @ts-expect-error
    get margin(): number[];
    // @ts-expect-error
    set margin(margin: number[]);

    get popup(): boolean;
    set popup(popup: boolean);

    get focusable(): boolean;
    set focusable(focusable: boolean);
}
