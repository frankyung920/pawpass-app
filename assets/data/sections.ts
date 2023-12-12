import { IMyDogSections } from "@/interfaces/IMyDogSections";

export const Sections = [
  {
    icon: "file-medical",
    title: "MEDICAL RECORD",
    desc: "All current, request and vaccination records history",
  } as IMyDogSections,
  {
    icon: "passport",
    title: "TRAVEL DOCUMENT",
    desc: "All current, request and travel document list",
  } as IMyDogSections,
  {
    icon: "paw",
    title: "VET",
    desc: "Search nearest vet, book appointment and request all e-signed document from vet",
  } as IMyDogSections,
  {
    icon: "lightbulb",
    title: "TRAVEL GUIDES",
    desc: "Travel tips, customs information and preparation information",
  } as IMyDogSections,
] as IMyDogSections[];
