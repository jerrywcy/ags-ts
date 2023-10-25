import Gtk from '@girs/gtk-3.0';

import type { Command } from '@/widget';

export interface AgsSliderProps extends Gtk.Scale.ConstructorProperties {
    /**
     * If this is a string "{}" substring will get replaced with the value
     */
    onChange?: Command;
    value?: number;
    min?: number;
    max?: number;
    step?: number;
}

export class AgsSlider extends Gtk.Scale {
    onChange: Command;

    constructor(props: AgsSliderProps);

    get value(): number;
    set value(value: number);

    get min(): number;
    set min(min: number);

    get max(): number;
    set max(max: number);

    get step(): number;
    set step(step: number);

    get dragging(): boolean;
    set dragging(dragging: boolean);

    get vertical(): boolean;
    set vertical(vertical: boolean);
}
