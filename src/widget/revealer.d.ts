import Gtk from '@girs/gtk-3.0';

export type AgsRevealerTransition =
    | 'none'
    | 'crossfade'
    | 'slide_right'
    | 'slide_left'
    | 'slide_up'
    | 'slide_down';

export interface AgsRevealerProps extends Gtk.Revealer.ConstructorProperties {
    transitions?: AgsRevealerTransition;
}

export class AgsRevealer extends Gtk.Revealer {
    get transition(): AgsRevealerTransition;
    set transition(transition: AgsRevealerTransition);
}
