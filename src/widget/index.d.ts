import type GObject from '@girs/gobject-2.0';
import type Gtk from '@girs/gtk-3.0';

import type { AgsBox, AgsBoxProps } from './box';
import type { AgsButton, AgsButtonProps } from './button';
import type { AgsCenterBox, AgsCenterBoxProps } from './centerbox';
import type {
    AgsCircularProgress,
    AgsCircularProgressProps,
} from './circularprogress';
import type { AgsEntry, AgsEntryProps } from './entry';
import type { AgsEventBox, AgsEventBoxProps } from './eventbox';
import type { AgsIcon, AgsIconProps } from './icon';
import type { AgsLabel, AgsLabelProps } from './label';
import type {
    AgsMenu,
    AgsMenuItem,
    AgsMenuItemProps,
    AgsMenuProps,
} from './menu';
import type { AgsOverlay, AgsOverlayProps } from './overlay';
import type { AgsProgressBar, AgsProgressBarProps } from './progressbar';
import type { AgsRevealer, AgsRevealerProps } from './revealer';
import type { AgsScrollable, AgsScrollableProps } from './scrollable';
import type { AgsSlider, AgsSliderProps } from './slider';
import type { AgsStack, AgsStackProps } from './stack';
import type { AgsWindow, AgsWindowProps } from './window';

export type { AgsBox, AgsBoxProps } from './box';
export type { AgsButton, AgsButtonProps } from './button';
export type { AgsCenterBox, AgsCenterBoxProps } from './centerbox';
export type {
    AgsCircularProgress,
    AgsCircularProgressProps,
} from './circularprogress';
export type { AgsEntry, AgsEntryProps } from './entry';
export type { AgsEventBox, AgsEventBoxProps } from './eventbox';
export type { AgsIcon, AgsIconProps } from './icon';
export type {
    AgsLabel,
    AgsLabelJustification,
    AgsLabelProps,
    AgsLabelTruncate,
} from './label';
export type {
    AgsMenu,
    AgsMenuItem,
    AgsMenuItemProps,
    AgsMenuProps,
} from './menu';
export type { AgsOverlay, AgsOverlayProps } from './overlay';
export type { AgsProgressBar, AgsProgressBarProps } from './progressbar';
export type {
    AgsRevealer,
    AgsRevealerProps,
    AgsRevealerTransition,
} from './revealer';
export type {
    AgsScrollable,
    AgsScrollablePolicy,
    AgsScrollableProps,
} from './scrollable';
export type { AgsSlider, AgsSliderProps } from './slider';
export type { AgsStack, AgsStackProps, AgsStackTransition } from './stack';
export type {
    AgsWindow,
    AgsWindowAnchor,
    AgsWindowLayer,
    AgsWindowProps,
} from './window';

/**
 * If `Command` is a `string`, it will get run as a command in a subprocess
 * asynchronously, if it is a `function`, that function gets called with the
 * widget as the first parameter.
 *
 * If `Command` is a `string` then in the case of entry's `onChange`, `onAccept`
 * and slider's `onChange` `"{}"` substring will get replaced with the widget's
 * value
 */
export type Command = string | ((...args: unknown[]) => boolean);

export interface BaseProps<Self> {
    /**
     * List of class CSS selectors separated by white space.
     */
    className?: string;

    /**
     * List of class CSS selectors.
     */
    classNames?: string[];

    /**
     * Like `css` but with the `*` selector. e.g `color: white;`.
     */
    style?: string;

    /**
     * Inline CSS. e.g `label { color: white; }`. if both `style` and `css` is
     * set `css` takes precedence
     */
    css?: string;

    /**
     * Horizontal alignment.
     */
    halign?: 'fill' | 'start' | 'end' | 'center' | 'baseline';

    /**
     * Vertical alignment.
     */
    valign?: 'fill' | 'start' | 'end' | 'center' | 'baseline';

    /**
     * Every connection can be one of `['signal', callback]`, `[number,
     * callback]` or `[Service, callback, event]` (`event` is `changed` by
     * default).
     */
    connections?: Array<
        | [string, (self: Self, ...args: unknown[]) => unknown]
        | [number, (self: Self, ...args: unknown[]) => unknown]
        | [GObject.Object, (self: Self, ...args: unknown[]) => unknown, string?]
    >;

    /**
     * You can set any property on any object (which is a blessing and a curse
     * on dynamic languages like JS) Make sure that the property you are trying
     * to set is not something predefined for `Gtk.Widget` like `Gtk.Label`'s
     * `label` property Prefixing with an underscore is good practice to avoid
     * conflicts
     */
    properties?: Array<[prop: string, value: unknown]>;

    /**
     * A bind is a simple connection that updates a widget's property with
     * another object's property.
     */
    binds?: Array<
        [
            prop: string,
            obj: GObject.Object,
            objProp?: string,
            transform?: (value: unknown) => unknown,
        ]
    >;

    /**
     * The setup prop is useful when you want to nest widgets and also do
     * something imperatively
     */
    setup?: (self: Self) => void;
}

type WidgetConstructor<W extends Gtk.Widget, P> = (
    props: P & BaseProps<W>
) => W;

interface WidgetConstructProps {
    type: Gtk.Widget;
}

type AgsBoxConstructor = WidgetConstructor<AgsBox, AgsBoxProps>;
type AgsButtonConstructor = WidgetConstructor<AgsButton, AgsButtonProps>;
type AgsCenterBoxConstructor = WidgetConstructor<
    AgsCenterBox,
    AgsCenterBoxProps
>;
type AgsCircularProgressConstructor = WidgetConstructor<
    AgsCircularProgress,
    AgsCircularProgressProps
>;
type AgsEntryConstructor = WidgetConstructor<AgsEntry, AgsEntryProps>;
type AgsEventBoxConstructor = WidgetConstructor<AgsEventBox, AgsEventBoxProps>;
type AgsIconConstructor = WidgetConstructor<AgsIcon, AgsIconProps>;
type AgsLabelConstructor = WidgetConstructor<AgsLabel, AgsLabelProps>;
type AgsMenuConstructor = WidgetConstructor<AgsMenu, AgsMenuProps>;
type AgsMenuItemConstructor = WidgetConstructor<AgsMenuItem, AgsMenuItemProps>;
type AgsOverlayConstructor = WidgetConstructor<AgsOverlay, AgsOverlayProps>;
type AgsProgressBarConstructor = WidgetConstructor<
    AgsProgressBar,
    AgsProgressBarProps
>;
type AgsRevealerConstructor = WidgetConstructor<AgsRevealer, AgsRevealerProps>;
type AgsScrollableConstructor = WidgetConstructor<
    AgsScrollable,
    AgsScrollableProps
>;
type AgsSliderConstructor = WidgetConstructor<AgsSlider, AgsSliderProps>;
type AgsStackConstructor = WidgetConstructor<AgsStack, AgsStackProps>;
// @ts-expect-error
type AgsWindowConstructor = WidgetConstructor<AgsWindow, AgsWindowProps>;

declare const Box: AgsBoxConstructor;
declare const Button: AgsButtonConstructor;
declare const CenterBox: AgsCenterBoxConstructor;
declare const CircularProgress: AgsCircularProgressConstructor;
declare const Entry: AgsEntryConstructor;
declare const EventBox: AgsEventBoxConstructor;
declare const Icon: AgsIconConstructor;
declare const Label: AgsLabelConstructor;
declare const Menu: AgsMenuConstructor;
declare const MenuItem: AgsMenuItemConstructor;
declare const Overlay: AgsOverlayConstructor;
declare const ProgressBar: AgsProgressBarConstructor;
declare const Revealer: AgsRevealerConstructor;
declare const Scrollable: AgsScrollableConstructor;
declare const Slider: AgsSliderConstructor;
declare const Stack: AgsStackConstructor;
declare const Window: AgsWindowConstructor;
export {
    Box,
    Button,
    CenterBox,
    CircularProgress,
    Entry,
    EventBox,
    Icon,
    Label,
    Menu,
    MenuItem,
    Overlay,
    ProgressBar,
    Revealer,
    Scrollable,
    Slider,
    Stack,
    Window,
};

declare interface Widget {
    Box: AgsBoxConstructor;
    Button: AgsButtonConstructor;
    CenterBox: AgsCenterBoxConstructor;
    CircularProgress: AgsCircularProgressConstructor;
    Entry: AgsEntryConstructor;
    EventBox: AgsEventBoxConstructor;
    Icon: AgsIconConstructor;
    Label: AgsLabelConstructor;
    Menu: AgsMenuConstructor;
    MenuItem: AgsMenuItemConstructor;
    Overlay: AgsOverlayConstructor;
    ProgressBar: AgsProgressBarConstructor;
    Revealer: AgsRevealerConstructor;
    Scrollable: AgsScrollableConstructor;
    Slider: AgsSliderConstructor;
    Stack: AgsStackConstructor;
    Window: AgsWindowConstructor;

    <Props>(
        props: WidgetConstructProps
    ): WidgetConstructor<typeof props.type, Props>;
}

declare const WidgetInstance: Widget;

export default WidgetInstance;
