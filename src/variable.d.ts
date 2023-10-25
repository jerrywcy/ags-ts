import GObject from '@girs/gobject-2.0';

export type VariableListen<T> =
    | [string[] | string, (out: string) => T]
    | [string[] | string]
    | string[]
    | string;

export type VariablePoll<T> =
    | [number, string[] | string | (() => T)]
    | [number, string[] | string | (() => T), (out: string) => T];

export interface VariableOptions<T> {
    poll?: VariablePoll<T>;
    listen?: VariableListen<T>;
}

export class Variable<T> extends GObject.Object {
    constructor(value: T, { poll, listen }: VariableOptions<T>);

    startPoll(): void;
    stopPoll(): void;

    startListen(): void;
    stopListen(): void;

    get isListening(): boolean;
    get isPolling(): boolean;

    dispose(): void;

    getValue(): T;
    setValue(value: T): void;

    get value(): T;
    set value(value: T);
}
