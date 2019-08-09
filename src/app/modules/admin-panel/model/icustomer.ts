import { Idevice } from 'src/app/model/idevice';

export interface Icustomer{
    no : number
    name :string
    address : string
    state ?:string
    city ?:string
    country ?:string
    pincode ?: number
    latitude : number
    longitude : number
    subscription_type: string 
    //devices : Idevice[]
}