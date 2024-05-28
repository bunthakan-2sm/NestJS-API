export interface MainUserDTO {
  id: string;
  displayName: string;
  photos: object;
  provider: string;
  _raw: string;
  _json: object;
}

export interface GoogleUserDTO extends MainUserDTO {
  name: object;
  emails: object;
}