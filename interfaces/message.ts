export interface ILoginSignUpMessage {
  title: string;
  text: string;
}

export interface IVerificationStatusMessage {
  key: string;
  title: string;
  text: string;
  next: string;
}

export interface IAddPhotoSectionMessage {
  id: string;
  title: string;
  content: string;
  next: string;
  maybeLaterTo: string;
}
