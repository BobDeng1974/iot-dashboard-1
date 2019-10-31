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
  