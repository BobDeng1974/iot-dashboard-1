import { gateway } from '../../admin-panel/model/gateway';

export interface CustomerDashBoard {
    device_id? : number;
    device_name? : string;
    customer_branch_name? : string;
    device_health? : string;
    device_last_heartbeat? : Date;
    device_mac? : string;
    no_device?: number;
}

export interface customerSupport{
    customer_id ?: number;
    node_id ?: number;
    details ?: string;
    creation_date ?: Date
    status ?: number;
    support_id ?: number
}

export interface payload{
    customer_id ?: number;
    customer_branch_id ?: number;
}

export interface sensorData {
    name: Date;
    value: number;
}

export interface segment{
    customer_branch_id ?: number;
    segment_id ?: number;
    segment_name ?: string;
    gateway ?: gateway[];
}
export interface Notifications {
    time ?: Date;
    customer_id? : number;
    mac_address? : string;
    node_uid? : string;
    reading? : number;
    sensor? : string;
    sensor_type? : number;
    tmax? : number;
    tmin? : number;

}