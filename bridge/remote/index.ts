import { DeviceInterface } from "../interfaces/Device";
import { RemoteInterface } from "../interfaces/Remote";

export class Remote implements RemoteInterface {
    device: DeviceInterface;

    constructor(device: DeviceInterface) {
        this.device = device;
    }

    togglePower() {
        if (this.device.isEnabled()) {
            this.device.disable()
        } else {
            this.device.enable()
        }
    };

    volumeDown() {
        this.device.setVolume(this.device.getVolume() - 1);
    };

    volumeUp() {
        this.device.setVolume(this.device.getVolume() + 1);
    }

    prevChannel() {
        this.device.setChannel(this.device.getChannel() - 1);
    }

    nextChannel() {
        this.device.setChannel(this.device.getChannel() + 1);
    }
}