import "@emotion/react";

declare module "@emotion/react" {
    export interface Theme {
        colors: {
            accent: string;
            dark: string;
            light: string;
            medium: string;
        };
    }
}

