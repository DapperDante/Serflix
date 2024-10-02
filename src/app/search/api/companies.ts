export interface Companies {
    page:          number;
    results:       Company[];
    total_pages:   number;
    total_results: number;
}

export interface Company {
    id:             number;
    logo_path:      null | string;
    name:           string;
    origin_country: string;
}
