export interface DeviceInterface {
    enabled: boolean;
    volume: number;
    channel: number;
    isEnabled: () => boolean;
    enable: () => void;
    disable: () => void;
    getVolume: () => number;
    setVolume: (percent: number) => void;
    getChannel: () => number;
    setChannel: (channel: number) => void;
}