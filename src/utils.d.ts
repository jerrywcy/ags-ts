import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type Gtk from '@girs/gtk-3.0';

import { type Command } from '@/widget';

export function readFile(path: string): string;

export function readFileAsync(path: string): Promise<string>;

export function writeFile(string: string, path: string): Promise<Gio.File>;

export function loadInterfaceXML(iface: string): string | null;

export function bulkConnect(
    service: GObject.Object,
    list: Array<
        [
            event: string,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            callback: (...args: any[]) => void,
        ]
    >
): number[];

export function bulkDisconnect(service: GObject.Object, ids: number[]): void;

export function connect(
    obj: GObject.Object,
    widget: Gtk.Widget,
    callback: (widget: Gtk.Widget, ...args: unknown[]) => void,
    event?: string
): void;

export function interval(
    interval: number,
    callback: () => void,
    bind?: Gtk.Widget
): number;

export function timeout(ms: number, callback: () => void): number;

export function runCmd(cmd: Command, ...args: unknown[]): boolean;

export function lookUpIcon(name?: string, size?: number): Gtk.IconInfo | null;

export function ensureDirectory(path?: string): void;

export function execAsync(cmd: string | string[]): Promise<string>;

export function exec(cmd: string): string;

export function subprocess(
    cmd: string | string[],
    callback: (out: string) => void,
    onError?: (error: Error) => void,
    bind?: Gtk.Widget
): Gio.Subprocess | null;
