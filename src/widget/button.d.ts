import Gtk from '@girs/gtk-3.0';

import type { Command } from '@/widget';

export interface AgsButtonProps extends Gtk.Button.ConstructorProperties {
    onClicked?: Command;
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

export class AgsButton extends Gtk.Button {
    onClicked: Command;
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

    constructor(props: AgsButtonProps);
}
