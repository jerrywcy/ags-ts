import Gtk from '@girs/gtk-3.0';

import type { Command } from '@/widget';

export interface AgsEventBoxProps extends Gtk.EventBox.ConstructorProperties {
    onPrimaryClick?: Command;
    onSecondaryClick?: Command;
    onMiddleClick?: Command;
    onPrimaryClickRelease?: Command;
    onSecondaryClickRelease?: Command;
    onMiddleClickRelease?: Command;
    onHover?: Command;
    onHoverLost?: Command;
    onScrollUp?: Command;
    onScrollDown?: Command;
}

export class AgsEventBox extends Gtk.EventBox {
    onPrimaryClick: Command;
    onSecondaryClick: Command;
    onMiddleClick: Command;
    onPrimaryClickRelease: Command;
    onSecondaryClickRelease: Command;
    onMiddleClickRelease: Command;
    onHover: Command;
    onHoverLost: Command;
    onScrollUp: Command;
    onScrollDown: Command;

    constructor(props: AgsEventBoxProps);
}
