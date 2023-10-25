import type Gvc from '@girs/gvc-1.0';

import { Service } from '@/service';

export type MixerControlState = 'closed' | 'ready' | 'connecting' | 'failed';

export class Stream extends Service {
    constructor(stream: Gvc.MixerStream);

    get application_id(): string | null;
    get stream(): Gvc.MixerStream;
    get description(): string | null;
    get icon_name(): string | null;
    get id(): number;
    get name(): string | null;
    get state(): MixerControlState;

    get is_muted(): boolean;
    set is_muted(mute: boolean);

    get volume(): number;

    set volume(value: number);

    close(): void;
}

export class Audio extends Service {
    constructor();

    get control(): Gvc.MixerControl;

    get speaker(): Stream;
    set speaker(stream: Stream);

    get microphone(): Stream;
    set microphone(stream: Stream);

    get microphones(): Stream[];
    get speakers(): Stream[];
    get apps(): Stream[];
    get recorders(): Stream[];

    getStream(id: number): Stream;
}

declare const AudioInstance: Audio;

export default AudioInstance;
