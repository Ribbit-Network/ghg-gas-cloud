import firebase from "firebase/compat";

export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  phoneNumber: string;
  avatarUrl: string;
  verified: boolean;
}
