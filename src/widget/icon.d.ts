import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import Gtk from '@girs/gtk-3.0';

interface Props extends Gtk.Image.ConstructorProperties {
    /**
     * Name of an icon or path to a file
     */
    icon?: string | GdkPixbuf.Pixbuf;
    /**
     * Forced size
     */
    size?: number;
}

export type AgsIconProps = Props | string | GdkPixbuf.Pixbuf | undefined;

export class AgsIcon extends Gtk.Image {
    constructor(params: AgsIconProps | string | GdkPixbuf.Pixbuf);

    get size(): number;
    set size(size: number);

    get icon(): string | GdkPixbuf.Pixbuf;
    set icon(icon: string | GdkPixbuf.Pixbuf);
}
