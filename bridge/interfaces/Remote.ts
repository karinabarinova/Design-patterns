import { DeviceInterface as Device } from "./Device";

export interface RemoteInterface {
    device: Device;
    togglePower: () => void;
    volumeDown: () => void;
    volumeUp: () => void;
    prevChannel: () => void;
    nextChannel: () => void;
}