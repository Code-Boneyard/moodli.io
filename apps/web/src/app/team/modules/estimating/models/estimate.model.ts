export interface Estimate {    
    // Estimate References
    estimateId: string;

    // Estimate State Tracking
    createdDate: Date;
    createdBy: string;
    lastModifiedDate: Date;
    lastModifiedBy: string;
    isActive: boolean;

    // Estimate Properties
    name: string;
    description: string;
    designStage: string;
    type: string;
    estimator: string;

    // Estimate Management

}