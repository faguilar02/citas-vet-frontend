export interface LoginResponse {
  secure_url:  null;
  public_id:   null;
  fullName:    string;
  phoneNumber: string;
  address:     string;
  email:       string;
  updatedAt:   Date;
  userId:      string;
  role:        string;
  isActive:    boolean;
  createdAt:   Date;
  token:       string;
}
