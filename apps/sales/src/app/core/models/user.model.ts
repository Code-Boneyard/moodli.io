export interface Roles {
    globalAdmin?: boolean;
    tenantAdmin?: boolean;
    tenantUser?: boolean;
    client?: boolean;
}

export interface User {
    // Basics
    id?: string;
    uid?: string;
    roles?: Roles;
    displayName?: string;

    // References
    tenantId?: string;
    subscriptionId?: string;
    companyId?: string;

    // State Tracking
    lastLogin?: Date;
    connectionStatus?: string;
    showTutorial?: boolean;
    emailVerified?: boolean;
    isActive?: boolean;
    userSince?: Date;

    // User Properties
    initials?: string;
    title?: string;
    department?: string;
    organziation?: string;
    workEmail?: string;
    firstName?: string;
    lastName?: string;
    location?: string;
    workPhone?: string;
    mobilePhone?: string;

    // Account Management
    emailSignature?: any;
    theme?: any;
    calendarView?: string;
    smsTextNotifications?: boolean;
    emailNotifications?: boolean;
    favProjects?: Array<string>;
    photoUrl?: string;
}
