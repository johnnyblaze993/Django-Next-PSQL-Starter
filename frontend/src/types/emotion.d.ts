// src/types/emotion.d.ts
import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      dark: string;
      medium: string;
      light: string;
    };
  }
}