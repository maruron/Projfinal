import { StyleSheet } from "react-native";
import theme from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: theme.COLORS.WHITE,
  },
  title: {
    fontSize: theme.FONT_SIZE.XL,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: theme.COLORS.BLACK,
  },
  label: {
    fontSize: theme.FONT_SIZE.MD,
    marginBottom: 8,
    color: theme.COLORS.BLACK,
  },
  input: {
    borderWidth: 1,
    borderColor: theme.COLORS.GRAY_02,
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    backgroundColor: theme.COLORS.GRAY_01,
  },
  button: {
    backgroundColor: theme.COLORS.GREEN,
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  logoutButton: {
    backgroundColor: theme.COLORS.RED,
  },
  buttonText: {
    color: theme.COLORS.WHITE,
    fontSize: theme.FONT_SIZE.MD,
    fontWeight: "bold",
  },
});
