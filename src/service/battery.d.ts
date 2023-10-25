import { Service } from '@/service';

export class Battery extends Service {
    get available(): boolean;
    get percent(): number;
    get charging(): boolean;
    get charged(): boolean;
    get icon_name(): string;
    get time_remaining(): number;
    get energy(): number;
    get energy_full(): number;
    get energy_rate(): number;

    constructor();
}

declare const BatteryInstance: Battery;

export default BatteryInstance;
