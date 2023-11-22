import {
  IAddPhotoSectionMessage,
  ILoginSignUpMessage,
  IVerificationStatusMessage,
} from "@/interfaces/message";

export const LoginSignUpMessage = {
  signUpSuccess: {
    title: "Welcome aboard!",
    text: "You have successfully signed up! Start exploring Pawpass and enjoy a world of possibilities.",
  } as ILoginSignUpMessage,
  loginSuccess: {
    title: "Welcome back!",
    text: "You have successfully signed in! Get ready to dive into Pawpass and make the most of your experience.",
  } as ILoginSignUpMessage,
};

export const VerificationStatusMessage = [
  {
    key: "success",
    title: "",
    text: "",
    next: "/(tabs)/home",
  },
  {
    key: "microChipSuccess",
    title: "Microchip Number Successfully Verified!",
    text: "Your dog microchip is confirmed.",
    next: "/verification/ownerIdIndexPage",
  },
  {
    key: "identitySuccess",
    title: "Identity Card Successfully Verified!",
    text: "Your dog and ownership is confirmed.",
    next: "/addPhoto/pet-verification",
  },
] as IVerificationStatusMessage[];

export const AddPhotoSectionMessage = [
  {
    id: "onboarding",
    title: "Add a Photo",
    content: "Add your photo to show them who’s the owner!",
    next: "/(tabs)/home",
    maybeLaterTo: "/(tabs)/home",
  },
  {
    id: "pet-verification",
    title: "Add a Pet Photo",
    content: "Snap a pic of your pet for better experience.",
    next: "/(tabs)/home",
    maybeLaterTo: "/(tabs)/home",
  },
] as IAddPhotoSectionMessage[];
