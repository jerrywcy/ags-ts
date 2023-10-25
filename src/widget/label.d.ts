import Gtk from '@girs/gtk-3.0';

interface Props extends Gtk.Label.ConstructorProperties {
    justification?: string;
    truncate?: string;
}

export type AgsLabelProps = Props | string | undefined;

export type AgsLabelJustification = 'left' | 'center' | 'right' | 'fill';
export type AgsLabelTruncate = 'none' | 'start' | 'middle' | 'end';

export class AgsLabel extends Gtk.Label {
    constructor(params: AgsLabelProps);

    get label(): string;
    set label(label: string);

    get truncate(): AgsLabelTruncate;
    set truncate(truncate: AgsLabelTruncate);

    get justification(): AgsLabelJustification;
    set justification(justify: AgsLabelJustification);
}
