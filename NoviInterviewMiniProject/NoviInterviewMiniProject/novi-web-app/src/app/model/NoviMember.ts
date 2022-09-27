enum MemberStatus {
    "non_member" = "person",
    "prospect" = "Prospect",
    "pending" = "Pending",
    "current" = "Current",
    "grace_period" = "Grace Period",
    "expired" = "Expired",
    "inheriting" = "Inheriting",
}

enum MemberSubStatus {
    "pending_approval" = "Pending Approval",
    "pending_dependent_membership" = "Pending Dependent Membership",
    "incomplete_signup" = "Incomplete Signup"
}

export interface NoviMember {
    Active: boolean;
    Name: string,
    FirstName: string,
    LastName: string,
    CustomerType: string,
    Email: string,
    Phone: string,
    Mobile: string
    MemberStatus: MemberStatus;
    MemberSubStatus: MemberSubStatus;
    DirectoryGallery: [];
    Groups: [];
}