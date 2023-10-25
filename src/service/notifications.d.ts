import type GLib from '@girs/glib-2.0';

import { Service } from '@/service';

export interface Action {
    id: string;
    label: string;
}

export interface Hints {
    'image-data'?: GLib.Variant;
    'desktop-entry'?: GLib.Variant;
    urgency?: GLib.Variant;
}

export type Urgency = 'low' | 'critical' | 'normal';

export class Notification extends Service {
    get id(): number;
    get app_name(): string;
    get app_entry(): string | null;
    get app_icon(): string;
    get summary(): string;
    get body(): string;
    get actions(): Action[];
    get urgency(): Urgency;
    get time(): number;
    get image(): string | null;
    get popup(): boolean;

    constructor(
        appName: string,
        id: number,
        appIcon: string,
        summary: string,
        body: string,
        acts: string[],
        hints: Hints,
        popup: boolean
    );

    dismiss(): void;

    close(): void;

    invoke(id: string): void;
}

export class Notifications extends Service {
    constructor();

    get dnd(): boolean;
    set dnd(value: boolean);

    get notifications(): Notification[];

    get popups(): Notification[];

    getPopup(id: number): Notification | null;

    getNotification(id: number): Notification | undefined;

    clear(): void;
}

declare const NotificationsInstance: Notifications;

export default NotificationsInstance;
