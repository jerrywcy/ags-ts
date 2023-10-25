import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';

declare namespace GnomeBluetooth {
    export class Client {
        /**
         * Returns a reference to the {@link GnomeBluetooth.Client} singleton.
         * Use {@link GObject.Object} when done with the object.
         *
         * @returns A {@link GnomeBluetooth.Client} object.
         */
        static new(): Client;

        /**
         * This will start the process of connecting to one of the
         * known-connectable services on the device. This means that it could
         * connect to all the audio services on a headset, but just to the input
         * service on a keyboard.
         *
         * Broadly speaking, this will only have an effect on devices with audio
         * and HID services, and do nothing if the device doesn't have the
         * "connectable" property set.
         *
         * When the connection operation is finished, `callback` will be called.
         * You can then call {@link GnomeBluetooth.Client.connect_service_finish}
         * to get the result of the operation.
         *
         * @param path - The object path on which to operate
         * @param connect - Whether try to connect or disconnect from services
         *   on a device
         * @param callback - Optional {@link Gio.Cancellable} object, null to
         *   ignore
         * @param cancellable - A {@link Gio.AsyncReadyCallback} to call when the
         *   connection is complete
         */
        connect_service(
            path: string,
            connect: boolean,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback
        ): void;

        /**
         * Finishes the connection operation. See
         * {@link GnomeBluetooth.Client.connect_service}.
         *
         * @param res - A {@link Gio.AsyncResult}
         * @returns `true` if the connection operation succeeded, `false`
         *   otherwise.
         */
        connect_service_finish(res: Gio.AsyncResult): boolean;

        /**
         * Returns an unfiltered {@link Gio.ListStore} representing the devices
         * attached to the default Bluetooth adapter.
         *
         * @returns A {@link Gio.ListStore}
         */
        get_devices(): Gio.ListStore;

        /**
         * Returns whether there are connected devices with the input
         * capability. This can be used by an OS user interface to warn the user
         * before disabling Bluetooth so that the user isn't stranded without
         * any input devices.
         *
         * @returns `true` if there are connected input devices.
         */
        has_connected_input_devices(): boolean;

        /**
         * The D-Bus path of the default Bluetooth adapter or `null`.
         */
        readonly 'default-adapter': string;

        /**
         * The address of the default Bluetooth adapter or `null`.
         */
        readonly 'default-adapter-address': string;

        /**
         * The name of the default Bluetooth adapter or `null`.
         */
        readonly 'default-adapter-name': string;

        /**
         * `true` if the default Bluetooth adapter is powered.
         */
        'default-adapter-powered': boolean;

        /**
         * `true` if the default Bluetooth adapter is in setup mode
         * (discoverable, and discovering).
         */
        'defalt-adapter-setup-mode': boolean;

        /**
         * The {@link GnomeBluetooth.AdapterState} of the default Bluetooth
         * adapter. More precise than
         * {@link GnomeBluetooth.Client.default-adapter-powered}.
         */
        readonly 'default-adapter-state': AdapterState;

        /**
         * The number of detected Bluetooth adapters.
         */
        readonly 'num-adapters': number;
    }

    export class Device {
        dump(): void;

        get_object_path(): string;

        to_string(): string;

        address: string;
        alias: string;
        battery_level: number;
        battery_percentage: number;
        battery_type: GnomeBluetooth.BatteryType;
        readonly connectable: boolean;
        connected: boolean;
        icon: string;
        legacy_pairing: boolean;
        name: string;
        paired: boolean;
        proxy: Gio.DBusProxy;
        trusted: boolean;
        type: GnomeBluetooth.Type;
        uuids: string[];
    }

    /**
     * The type of a Bluetooth device. See also %BLUETOOTH_TYPE_INPUT and
     * %BLUETOOTH_TYPE_AUDIO
     */
    export enum Type {
        /**
         * Any Device, or a device of an unknown type
         */
        ANY = 1,
        /**
         * A Telephone (usually a cell/mobile phone)
         */
        PHONE = 2,
        /**
         * A Modem
         */
        MODEM = 4,
        /**
         * A Computer, can be a laptop, a wearable computer, etc.
         */
        COMPUTER = 8,
        /**
         * A Network device, such as a router
         */
        NETWORK = 16,
        /**
         * A Headset (usually a hands-free device)
         */
        HEADSET = 32,
        /**
         * Headphones (covers two ears)
         */
        HEADPHONES = 64,
        /**
         * Another Type of audio device
         */
        OTHER_AUDIO = 128,
        /**
         * A Keyboard
         */
        KEYBOARD = 256,
        /**
         * A Mouse
         */
        MOUSE = 512,
        /**
         * A Camera (still or moving)
         */
        CAMERA = 1024,
        /**
         * A Printer
         */
        PRINTER = 2048,
        /**
         * A Joypad, joystick, or other game controller
         */
        JOYPAD = 4096,
        /**
         * A Drawing tablet
         */
        TABLET = 8192,
        /**
         * A Video device, such as a webcam
         */
        VIDEO = 16384,
        /**
         * A Remote control
         */
        REMOTE_CONTROL = 32768,
        /**
         * A Scanner
         */
        SCANNER = 65536,
        /**
         * A Display
         */
        DISPLAY = 131072,
        /**
         * A Wearable computer
         */
        WEARABLE = 262144,
        /**
         * A Toy or game
         */
        TOY = 524288,
        /**
         * Audio Speaker or speakers
         */
        SPEAKERS = 1048576,
    }

    export namespace Type {
        /**
         * Returns a human-readable string representation of `type` usable for
         * display to users. Do not free the return value. The returned string
         * is already translated with gettext().
         */
        export function to_string(type: Type): string;
    }

    /**
     * The type of battery reporting supported by the device.
     */
    export enum BatteryType {
        /**
         * No battery reporting
         */
        NONE = 0,
        /**
         * Battery reported in percentage
         */
        PERCENTAGE = 1,
        /**
         * Battery reported coarsely
         */
        COARSE = 2,
    }

    /**
     * A more precise power state for a Bluetooth adapter.
     */
    export enum AdapterState {
        /**
         * Bluetooth adapter is missing.
         */
        ABSENT = 0,
        /**
         * Bluetooth adapter is on.
         */
        ON = 1,
        /**
         * Bluetooth adapter is being turned on.
         */
        TURNING_ON = 2,
        /**
         * Bluetooth adapter is being turned off.
         */
        TURNING_OFF = 3,
        /**
         * Bluetooth adapter is off.
         */
        OFF = 4,
    }

    /**
     * Returns the type of device corresponding to the given `appearance` value,
     * as usually found in the GAP service.
     *
     * @param appearance - A Bluetooth device appearance
     * @returns A {@link GnomeBluetooth.Type}
     */
    export function appearance_to_type(appearance: number): Type;

    /**
     * Returns the type of device corresponding to the given `class` value. *
     *
     * @param class_num - A Bluetooth device class
     * @returns A {@link GnomeBluetooth.Type}
     */
    export function class_to_type(class_num: number): Type;

    /**
     * Start a GUI application for transferring files over Bluetooth..
     *
     * @param address - Remote device to use
     * @param alias - Remote device's name
     * @returns `true` on success, `false` on error
     */
    export function send_to_address(address: string, alias: string): boolean;

    /**
     * Returns a string representing a human-readable (but not usable for
     * display to users) version of the `uuid`. Do not free the return value.
     *
     * @param uuid - A string representing a Bluetooth UUID
     * @returns A string
     */
    export function uuid_to_string(uuid: string): string;

    /**
     * Returns whether the string is a valid Bluetooth address. This does not
     * contact the device in any way.
     *
     * @param bdaddr - A string representing a Bluetooth address
     * @returns `true` if the address is valid, `false` if not.
     */
    export function verify_address(bdaddr: string): boolean;

    /**
     * Use This value to select any Bluetooth audio device where a
     * {@link GnomeBluetooth.Type} enum is required.
     */
    export const TYPE_AUDIO = 1048800;

    /**
     * Use this value to select any Bluetooth input device where a
     * {@link GnomeBluetooth.Type} enum is required.
     */
    export const TYPE_INPUT = 13056;
}

export default GnomeBluetooth;
