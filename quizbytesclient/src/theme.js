import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

export const designTokens = () => ({

    grey: {
        100: "#e0e0e0",
        200: "#c2c2c2",
        300: "#a3a3a3",
        400: "#858585",
        500: "#666666",
        600: "#525252",
        700: "#3d3d3d",
        800: "#292929",
        900: "#141414",
    },
    primary: {
        100: "#edf6f3",
        200: "#daede6",
        300: "#c8e3da",
        400: "#b5dacd",
        500: "#a3d1c1",
        600: "#82a79a",
        700: "#627d74",
        800: "#41544d",
        900: "#212a27"
    },
    secondary: {
        100: "#fdf3f0",
        200: "#fbe6e0",
        300: "#f8dad1",
        400: "#f6cdc1",
        500: "#f4c1b2",
        600: "#c39a8e",
        700: "#92746b",
        800: "#624d47",
        900: "#312724"
    },

    white: {
        100: "#ffffff",
        200: "#fcfcfc"
    },
    black: {
        100: "#000000"
    }

});

export const themeSettings = (mode) => {
    const colors = designTokens();
    return {
        palette: {
            mode: mode,
            ...(mode === "dark"
                ? {
                    // palette values for dark mode
                    primary: {
                        main: colors.primary[500],
                        light: colors.primary[400],
                        dark: colors.primary[600]
                    },
                    secondary: {
                        main: colors.secondary[500],
                        light: colors.secondary[400],
                        dark: colors.secondary[600]
                    },
                    neutral: {
                        dark: colors.grey[700],
                        main: colors.grey[500],
                        light: colors.grey[100],
                    },
                    background: {
                        default: colors.grey[800],
                    },
                    grey: {
                        dark: colors.grey[900],
                        main: colors.grey[500],
                        light: colors.grey[300]
                    },
                    white: {
                        main: colors.white[100],
                        text: colors.white[200]
                    },
                    black: {
                        main: colors.black[100]
                    },
                    error: {
                        main: '#E34965'
                    },
                    selection : {
                        main: '#FEEB75'
                    },
                    progression: {
                        complete: '#209C05',
                        current: 'F2CE02',
                        incomplete: 'D61F1F'
                    },
                }
                : {
                    // palette values for light mode
                    primary: {
                        main: colors.primary[500],
                        light: colors.primary[400],
                        dark: colors.primary[600]
                    },
                    secondary: {
                        main: colors.secondary[500],
                        light: colors.secondary[400],
                        dark: colors.secondary[600]
                    },
                    neutral: {
                        dark: colors.grey[700],
                        main: colors.grey[500],
                        light: colors.grey[100],
                    },
                    background: {
                        default: colors.white[200],
                    },
                    grey: {
                        dark: colors.grey[800],
                        main: colors.grey[500],
                        light: colors.grey[300]
                    },
                    white: {
                        main: colors.white[100],
                        text: colors.white[200]
                    },
                    black: {
                        main: colors.black[100]
                    },
                    error: {
                        main: '#E34965'
                    },
                    selection : {
                        main: '#FEEB75'
                    },
                    progression: {
                        complete: '#209C05',
                        current: '#F2CE02',
                        incomplete: '#D61F1F'
                    },
                }),
        },
        typography: {
            fontSize: 12,
            h1: {
                fontSize: 40,
            },
            h2: {
                fontSize: 32,
            },
            h3: {
                fontSize: 24,
            },
            h4: {
                fontSize: 20,
            },
            h5: {
                fontSize: 16,
            },
            h6: {
                fontSize: 14,
            },
        },
        breakpoints: {
            values: {
                xxs:0,
                xs: 290,
                sm: 464,
                md: 900,
                lg: 1200,
                xl: 1536,
                xxl: 3800,
            },
        },
        components: {
            MuiToolbar: {
                styleOverrides: {
                    regular: {
                        minHeight: 56,
                        maxHeight: 56,
                        '@media (min-width: 464px)': {
                            minHeight: 56,
                            maxHeight: 56,
                        }
                    }
                }
            },
            MuiCssBaseline: {
                styleOverrides: {
                    '*': {
                        '&::-webkit-scrollbar': {
                            width: '0.8em',
                        },
                        '&::-webkit-scrollbar-track': {
                            backgroundColor: colors.grey[700],
                            boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
                        },
                        '&::-webkit-scrollbar-thumb': {
                            backgroundColor: colors.grey[200],
                            borderRadius: '4px',
                        },
                    },
                },
            },
        },

    };
};

export const ColorModeContext = createContext({
    toggleColorMode: () => { },
});

export const useMode = () => {
    const [mode, setMode] = useState("light");

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () =>
                setMode((prev) => (prev === "light" ? "dark" : "light")),
        }),
        []
    );

    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
    return [theme, colorMode];
};