import { DeviceInterface } from "../interfaces/Device";

export class Radio implements DeviceInterface {
    enabled: boolean = false;
    volume: number = 0;
    channel: number = 0;

    isEnabled() {
        return this.enabled;
    }

    enable() {
        this.enabled = true;
        this.channel = 1;
    }

    disable() {
        this.enabled = false;
    }
    getVolume() {
        return this.volume;
    }
    setVolume(percent: number) {
        this.volume = percent;
    }

    getChannel() {
        return this.channel;
    }
    setChannel(channel: number) {
        this.channel = channel;
    };
}