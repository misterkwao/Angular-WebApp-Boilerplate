import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

export const MyPreset = definePreset(Aura, {
  semantic: {
    colorScheme: {
      light: {
        primary: {
          50: '#f9f9f9',
          100: '#f2f2f2',
          200: '#e5e5e5',
          300: '#d9d9d9',
          400: '#a6a6a6',
          500: '#000000',
          600: '#1a1a1a',
          700: '#262626',
          800: '#333333',
          900: '#404040',
          950: '#595959',
        },
        secondary: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
        surface: {
          0: '#ffffff',
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#eeeeee',
          300: '#e0e0e0',
          400: '#bdbdbd',
          500: '#9e9e9e',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121',
          950: '#0a0a0a',
        },
      },
      dark: {
        primary: {
          50: '#f5f5f5',
          100: '#e5e5e5',
          200: '#d9d9d9',
          300: '#bfbfbf',
          400: '#a6a6a6',
          500: '#ffffff',
          600: '#d9d9d9',
          700: '#bfbfbf',
          800: '#a6a6a6',
          900: '#8c8c8c',
          950: '#737373',
        },
        secondary: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
        surface: {
          0: '#2a2a2a', // Medium grey background
          50: '#212121',
          100: '#2a2a2a',
          200: '#363636',
          300: '#424242',
          400: '#525252',
          500: '#6b6b6b',
          600: '#868686',
          700: '#a3a3a3',
          800: '#c2c2c2',
          900: '#e3e3e3',
          950: '#ffffff',
        },
      },
    },
  },
  components: {
    // card: {
    //   colorScheme: {
    //     light: {
    //       root: { background: '{surface.0}', color: '{surface.700}' },
    //       subtitle: { color: '{surface.500}' },
    //     },
    //     dark: {
    //       root: { background: '{surface.900}', color: '{surface.0}' },
    //       subtitle: { color: '{surface.400}' },
    //     },
    //   },
    // },
    // inputtext: {
    //   root: {
    //     borderRadius: '10px',
    //     focusRing: {
    //       width: '1px',
    //       style: 'dashed',
    //       color: '#fcba03',
    //       offset: '1px',
    //     },
    //     focusBorderColor: 'transparent',
    //   },
    //   colorScheme: {
    //     dark: {
    //       root: {
    //         background: '{surface.0}',
    //         borderColor: 'none',
    //         color: 'white',
    //       },
    //     },
    //     light: {
    //       root: {
    //         background: 'none',
    //       },
    //     },
    //   },
    // },
    // progressspinner: {
    //   colorScheme: {
    //     light: {
    //       root: {
    //         colorOne: '{primary.500}',
    //         colorTwo: '{primary.500}',
    //         colorThree: '{primary.500}',
    //         colorFour: '{primary.500}',
    //       },
    //     },
    //     dark: {
    //       root: {
    //         colorOne: '{primary.500}',
    //         colorTwo: '{primary.500}',
    //         colorThree: '{primary.500}',
    //         colorFour: '{primary.500}',
    //       },
    //     },
    //   },
    // },
    menu: {
      colorScheme: {
        light: {
          root: { background: '{surface.0}', color: '{surface.700}' },
        },
        dark: {
          root: {
            background: '{surface.100}',
            borderColor: '{surface.200}',
          },
          item: {
            focusBackground: '{surface.200}',
            color: '{surface.950}',
            focusColor: '{surface.950}',
          },
        },
      },
    },
    // selectbutton: {
    //   root: {
    //     borderRadius: '20px',
    //   },
    // },
    // togglebutton: {
    //   content: {
    //     padding: '3px',
    //     borderRadius: '0',
    //   },
    // },
    // tabs: {
    //   colorScheme: {
    //     dark: {
    //       tab: {
    //         activeColor: 'white',
    //       },
    //       tabpanel: {
    //         color: 'white',
    //       },
    //     },
    //     light: {
    //       tabpanel: {
    //         color: 'black',
    //       },
    //     },
    //   },
    //   tablist: {
    //     background: 'none',
    //   },
    //   tabpanel: {
    //     background: 'none',
    //   },
    // },
    // datepicker: {
    //   colorScheme: {
    //     dark: {
    //       panel: {
    //         borderColor: '#5d5d5789',
    //         background: '#262624',
    //         borderRadius: '15px',
    //       },
    //       date: {
    //         color: 'white',
    //       },
    //       weekDay: {
    //         color: 'white',
    //       },
    //       header: {
    //         background: 'none',
    //       },
    //       selectMonth: {
    //         color: 'white',
    //       },
    //       selectYear: {
    //         color: 'white',
    //       },
    //     },
    //     light: {
    //       panel: {
    //         borderRadius: '15px',
    //         borderColor: '#b0b0a7be',
    //       },
    //     },
    //   },
    // },
    // datatable: {
    //   colorScheme: {
    //     dark: {
    //       headerCell: {
    //         background: '{surface.0}',
    //         color: 'white',
    //         borderColor: '{surface.50}',
    //       },
    //       bodyCell: {
    //         borderColor: '{surface.500}',
    //       },
    //       row: {
    //         background: 'none',
    //         color: 'white',
    //       },
    //     },
    //     light: {
    //       headerCell: {
    //         background: '{surface.200}',
    //         color: 'black',
    //         borderColor: '{surface.50}',
    //       },
    //     },
    //   },
    // },
    // paginator: {
    //   root: {
    //     background: 'none',
    //   },
    // },
    // select: {
    //   colorScheme: {
    //     dark: {
    //       root: {
    //         background: 'none',
    //         color: 'white',
    //         paddingY:'1px'
    //       },
    //       option: {
    //         color: 'white',
    //       },
    //       overlay: {
    //         background: '{surface.0}',
    //         color: 'white',
    //       },
    //     },
    //   },
    // },
  },
});
