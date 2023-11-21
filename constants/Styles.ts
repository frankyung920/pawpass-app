import Colors from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const defaultStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDFFFF",
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  inputField: {
    height: 64,
    borderWidth: 1,
    borderColor: Colors.outline.tertiary,
    borderRadius: 8,
    padding: 10,
    backgroundColor: "#fff",
    fontSize: 16,
    gap: 16,
  },
  primaryBtn: {
    backgroundColor: Colors.primary,
    height: 40,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  primaryBtnText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "pop-sb",
  },
  secondaryButton: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 6,
    height: 32,
    gap: 8,
    paddingHorizontal: 12,
  },
  secondaryButtonText: {
    fontSize: 16,
    fontFamily: "pop-sb",
    lineHeight: 24,
    color: Colors.primary,
  },
  btnIcon: {
    position: "absolute",
    left: 16,
  },
  noBorderBtn: {
    backgroundColor: "#ffffff",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  noBorderBtnText: {
    color: Colors.primary,
    fontSize: 16,
    fontFamily: "pop-sb",
  },
  greyBtn: {
    backgroundColor: Colors.contrast.secondary,
    height: 50,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  greyBtnText: {
    color: Colors.inverse.text.secondary,
    fontSize: 16,
    fontFamily: "pop-sb",
  },
  footer: {
    position: "absolute",
    height: 100,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopColor: Colors.outline.primary,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  modalContainer: {
    borderRadius: 25,
    borderWidth: 1,
    width: "100%",
    position: "absolute",
    bottom: 0,
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 24,
    paddingBottom: 48,
    paddingHorizontal: 24,
    backgroundColor: Colors.background[2],
  },
  cardContainer: {
    backgroundColor: "#fff",
    paddingHorizontal: 24,
    paddingVertical: 16,

    gap: 16,
  },
  cardTitle: {
    fontFamily: "pop-b",
    lineHeight: 24,
    fontSize: 16,
  },
});