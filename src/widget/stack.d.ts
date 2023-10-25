import Gtk from '@girs/gtk-3.0';

export type AgsStackTransition =
    | 'none'
    | 'crossfade'
    | 'slide_right'
    | 'slide_left'
    | 'slide_up'
    | 'slide_down'
    | 'slide_left_right'
    | 'slide_up_down'
    | 'over_up'
    | 'over_down'
    | 'over_left'
    | 'over_right'
    | 'under_up'
    | 'under_down'
    | 'under_left'
    | 'under_right'
    | 'over_up_down'
    | 'over_down_up'
    | 'over_left_right'
    | 'over_right_left';

export interface AgsStackProps extends Gtk.Stack.ConstructorProperties {
    /**
     * Name of the widget to show. This can't be set on construction, instead
     * the first give widget will be shown.
     */
    shown?: string;
    /**
     * Name - Widget pairs
     */
    items?: Array<[string, Gtk.Widget]>;
    transition?: AgsStackTransition;
}

export class AgsStack extends Gtk.Stack {
    add_named(child: Gtk.Widget, name: string): void;

    get items(): Array<[string, Gtk.Widget]>;
    set items(items: Array<[string, Gtk.Widget]>);

    get transition(): AgsStackTransition;
    set transition(transition: AgsStackTransition);

    get shown(): string | null;
    set shown(name: string | null);
}
