import { Service } from '@/service';

export type PlaybackStatus = 'Playing' | 'Paused' | 'Stopped';
export type LoopStatus = 'None' | 'Track' | 'Playlist';

export class MprisPlayer extends Service {
    get bus_name(): string;
    get name(): string;
    get entry(): string;
    get identity(): string;
    get trackid(): string;
    get track_artists(): string[];
    get track_title(): string;
    get track_cover_url(): string;
    get cover_path(): string;
    get play_back_status(): PlaybackStatus;
    get can_go_next(): boolean;
    get can_go_prev(): boolean;
    get can_play(): boolean;
    get shuffle_status(): boolean | null;
    get loop_status(): LoopStatus | null;
    get length(): number;

    constructor(busName: string);

    close(): void;

    get volume(): number;
    set volume(value: number);

    get position(): number;
    set position(time: number);

    playPause(): void;
    play(): void;
    stop(): void;

    next(): void;
    previous(): void;

    shuffle(): void;
    loop(): void;
}

export type Players = Map<string, MprisPlayer>;
export class Mpris extends Service {
    get players(): MprisPlayer[];

    constructor();

    getPlayer(name: string): MprisPlayer | null;
}

declare const MprisInstance: Mpris;

export default MprisInstance;
