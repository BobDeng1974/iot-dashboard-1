export interface CustomerDashBoard {
    device_id? : number;
    device_name? : string;
    customer_branch_name? : string;
    device_health? : string;
    device_last_heartbeat? : Date;
    device_mac? : string;
    no_device?: number;
}