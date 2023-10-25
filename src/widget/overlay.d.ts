import Gtk from '@girs/gtk-3.0';

export interface AgsOverlayProps extends Gtk.Overlay.ConstructorProperties {
    /**
     * Whether the overlay childs should pass the input through
     */
    pass_through?: boolean;
    /**
     * Overlayed children
     */
    overlays?: Gtk.Widget[];
}

/**
 * Takes the size of its first child, then places subsequent children on top of
 * each other and won't render them outside the container.
 */
export class AgsOverlay extends Gtk.Overlay {
    get pass_through(): boolean;
    set pass_through(passthrough: boolean);

    get overlays(): Gtk.Widget[];
    set overlays(overlays: Gtk.Widget[]);
}
