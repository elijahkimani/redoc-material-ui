import { Theme, useTheme } from "@material-ui/core";
import { darken } from "@material-ui/core/styles/colorManipulator";
import React, { useMemo } from "react";
import { RedocRawOptions, RedocStandalone } from "redoc";
import { StyledRedocWrapper } from "./styles";

export interface MuiRedocStandaloneProps {
  /**
   * Object definition for the OpenAPI/Swagger-generated API Reference Documentation
   * */
  spec?: object;
  /**
   * URL for the OpenAPI/Swagger-generated API Reference Documentation
   * */
  specUrl?: string;
  options?: Omit<RedocRawOptions, "theme">;
  /**
   * Custom Mui theme to be passed to the ReDoc wrapper
   *
   * If defined, these theme will override the default theme set by Mui or the ThemeProvider
   */
  theme?: Theme;
}

export const MuiRedocStandalone = (props: MuiRedocStandaloneProps) => {
  const { spec, specUrl, options = {}, theme: componentTheme } = props;

  const defaultTheme = useTheme();

  const theme = useMemo(() => {
    if (componentTheme) return componentTheme;
    return defaultTheme;
  }, [defaultTheme, componentTheme]);

  return (
    <StyledRedocWrapper theme={theme}>
      <RedocStandalone
        spec={spec}
        specUrl={specUrl}
        options={{
          ...options,
          theme: {
            colors: {
              primary: {
                main: theme.palette.primary.main,
                dark: theme.palette.primary.dark,
                light: theme.palette.primary.light,
                contrastText: theme.palette.primary.contrastText,
              },
              text: {
                primary: theme.palette.text.primary,
                secondary: theme.palette.text.secondary,
              },
              border: {
                light: theme.palette.divider,
                dark: theme.palette.divider,
              },
            },
            typography: {
              fontSize: `${theme.typography.fontSize}px`,
              fontFamily: theme.typography.fontFamily,
              fontWeightLight: theme.typography.fontWeightLight?.toString(),
              fontWeightRegular: theme.typography.fontWeightRegular?.toString(),
              fontWeightBold: theme.typography.fontWeightBold?.toString(),
              code: {
                fontSize: `${theme.typography.fontSize}px`,
                fontFamily: "monospace",
              },
              headings: {
                fontFamily: theme.typography.fontFamily,
                fontWeight: theme.typography.fontWeightBold?.toString(),
              },
              links: {
                color: theme.palette.text.secondary,
              },
            },
            sidebar: {
              backgroundColor: theme.palette.background.default,
              textColor: theme.palette.text.secondary,
              activeTextColor: theme.palette.text.primary,
            },
            schema: {
              typeTitleColor: theme.palette.secondary.light,
              nestedBackground: theme.palette.background.paper,
              linesColor: theme.palette.secondary.dark,
            },
            rightPanel: {
              backgroundColor:
                theme.palette.type === "dark"
                  ? darken(theme.palette.background.default, 0.15)
                  : "#303846",
            },
          },
        }}
      />
    </StyledRedocWrapper>
  );
};

export default MuiRedocStandalone;
