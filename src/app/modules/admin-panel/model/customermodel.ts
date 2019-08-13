export interface AdditionalAttributes {
    addinfo_id? : number;
    customer_id? : number;
    addinfo_attr? : string;
    addinfo_value? : string;
    addinfo_updated_on? : Date;
    addinfo_updated_by? : string;
    addinfo_effective_from? : Date;
    addinfo_effective_to? : Date;
}

export interface LegalInfo {
    legalinfo_id? : number;
    customer_id? : number;
    legalinfo_type? : string;
    legalinfo_value? : string;
    legalinfo_updated_on? : Date;
    legalinfo_updated_by? : string;
    legalinfo_effective_from? : Date;
    legalinfo_effective_to? : Date;
}

export interface Phone {
    ph_id? : number;
    customer_id? : number;
    ph_isd_code? : string;
    ph_no? : string;
    ph_updated_on? : Date;
    ph_updated_by? : string;
    ph_effective_from? : Date;
    ph_effective_to? : Date;
}

export interface Email {
    eml_id? : number;
    customer_id? : number;
    eml_address? : string;
    eml_updated_on?:Date;
    eml_updated_by?:string;
    eml_effective_from? : Date;
    eml_effective_to? : Date;
}

export interface Address {
    add_id? : number;
    customer_id? : number;
    add_type? : string;
    add_address_line1? : string;
    add_address_line2? : string;
    add_city? : string;
    add_state? : string;
    add_country? : string;
    add_pin? : string;
    add_updated_on? : Date;
    add_updated_by? : string;
    add_effective_from? : Date;
    add_effective_to? : Date;
}

export interface Branch {
    branch_id? : number;
    customer_id? : number;
    branch_add_line1? : string;
    branch_add_line2? : string;
    branch_add_city? : string;
    branch_add_state? : string;
    branch_add_pin? : string;
    branch_add_country? : string;
    branch_updated_on? : Date;
    branch_updated_by? : string;
    branch_effective_from? : Date;
    branch_effective_to? : Date;
}

export interface Customer {
    customer_id? : number;
    customer_name? : string;
    customer_code? : string;
    customer_type? : string;
    customer_tag? : string;
    customer_updated_on? : Date;
    customer_updated_by? : string;
    customer_effective_from? : Date;
    customer_effective_to? : Date;
    additional_attributes? : AdditionalAttributes[];
    legal_info? : LegalInfo[];
    phone? : Phone[];
    email? : Email[];
    address? : Address[];
    branch? : Branch[];
}