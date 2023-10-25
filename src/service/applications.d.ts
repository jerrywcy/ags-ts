import type Gio from '@girs/gio-2.0';

import { Service } from '@/service';

declare class Application extends Service {
    get app(): Gio.DesktopAppInfo;

    get frequency(): number;
    set frequency(value: number);

    get name(): string | null;
    get desktop(): string | null;
    get description(): string | null;
    get wm_class(): string | null;
    get executable(): string;
    get icon_name(): string | null;

    constructor(app: Gio.DesktopAppInfo, frequency?: number);

    getKey(key: string): string | null;

    match(term: string): boolean;

    launch(): void;
}

export class Applications extends Service {
    query(term: string): Application[];

    constructor();

    get list(): Application[];
    get frequents(): Record<string, number>;
}

declare const ApplicationsInstance: Applications;

export default ApplicationsInstance;
