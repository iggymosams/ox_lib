import { ColorInput, MantineThemeOverride } from '@mantine/core';
import { DatePicker } from '@mantine/dates';

export const theme: MantineThemeOverride = {
  colorScheme: 'dark',
  fontFamily: 'Roboto',
  shadows: { sm: '1px 1px 3px rgba(0, 0, 0, 0.5)' },
  components: {
    Button: {
      styles: {
        root: {
          color: 'white',
          background: 'linear-gradient(101deg, rgba(132,22,173,.6) 0%, rgba(102,22,173,.6) 100%);',
          border: 'solid 0.11rem rgba(110, 110, 119, 0.925)',
        },

      },
    },
    // Modal: {
    //   styles: {
    //     modal: {
    //       background: 'rgba(63, 63, 63, 0.2)',
    //       boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    //       backdropFilter: 'blur(5px)',
    //       border: '1px solid rgba(63, 63, 63, 0.85)',
    //       color: "white"
    //     },
    //   },
    // },
    // TextInput: {
    //   styles: {
    //     input: {
    //       background: 'rgba(63, 63, 63, 0.3)',
    //       boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    //       backdropFilter: 'blur(5px)',
    //       border: '1px solid rgba(63, 63, 63, 0.85)',
    //       transition: "border-color 0.2s",
    //       color: "white",
    //       '&:hover': {
    //         borderColor: "rgba(132,22,173,0.8)"
    //       },
    //       '&:active': {
    //         borderColor: "rgba(132,22,173,0.8)"
    //       },

    //       '&:focus': {
    //         borderColor: "rgba(132,22,173,0.8)"
    //       },
    //     },
    //   },
    // },

    Modal: {
      styles: {
        modal: {
          background: 'radial-gradient(circle, rgba(132, 22, 173, 0.58) 50%, rgba(0, 0, 0, 0.71) 100%)',
          border: 'solid 0.11rem rgba(110, 110, 119, 0.925)',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          // backdropFilter: 'blur(5px)',
          color: "white"
        },
        body: {
          color: '#C1C2C5'
        }
      },
    },

    Slider: {
      styles: {
        root: {
          color: "white"
        },
        bar: {
          background: 'linear-gradient(101deg, rgba(132,22,173,.6) 0%, rgba(102,22,173,.6) 100%);',

        },
        thumb: {
          background: 'rgb(132,22,173)'
        },
        markFilled: {
          borderColor: 'rgb(102,22,173)'
        },
        label: {
          color: "white"
        },
        description: {
          color: '#C1C2C5'
        }
      }
    },

    TextInput: {
      styles: {
        input: {
          background: 'radial-gradient(83.87% 1043.26% at 50% 50%, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 100%)',
          border: 'solid 0.11rem rgba(110, 110, 119, 0.925)',
          color: "white"
        },
        label: {
          color: "white"
        },
        description: {
          color: '#C1C2C5'
        }
      },
    },

    TimeInput: {
      styles: {
        input: {
          background: 'radial-gradient(83.87% 1043.26% at 50% 50%, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 100%)',
          border: 'solid 0.11rem rgba(110, 110, 119, 0.925)',
          color: "white"

        },
        label: {
          color: "white"
        },
        description: {
          color: '#C1C2C5'
        }
      },
    },

    Select: {
      styles: {
        input: {
          background: 'radial-gradient(83.87% 1043.26% at 50% 50%, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 100%)',
          border: 'solid 0.11rem rgba(110, 110, 119, 0.925)',
          color: "white"

        },
        label: {
          color: "white"
        },
        description: {
          color: '#C1C2C5'
        },
        dropdown: {
          background: 'linear-gradient(101deg, rgba(132,22,173,1) 0%, rgba(102,22,173,1) 100%);',
          border: 'solid 0.11rem rgba(110, 110, 119, 0.925)',
          color: "white"
        },
        item: {
          "&:hover": {
            background: 'rgba(255,255,255,0.2)',
          },
          "&[data-hovered='true']": {
            background: 'rgba(255,255,255,0.2)',
            color: "white",  // Ensure text is visible

          },
          "&[data-selected='true']": {
            background: 'rgba(240,240,240,0.3)',
            color: "white",  // Ensure text is visible
            "&:hover": {
              background: 'rgba(240,240,240,0.3)',
            },
          },
        }
      },
    },


    MultiSelect: {
      styles: {
        root: {
          transition: "background 0.2s",
        },
        input: {
          background: 'radial-gradient(83.87% 1043.26% at 50% 50%, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 100%)',
          border: 'solid 0.11rem rgba(110, 110, 119, 0.925)',
          color: "white"

        },
        label: {
          color: "white"
        },
        description: {
          color: '#C1C2C5'
        },
        dropdown: {
          background: 'linear-gradient(101deg, rgba(132,22,173,1) 0%, rgba(102,22,173,1) 100%);',
          border: 'solid 0.11rem rgba(110, 110, 119, 0.925)',
          color: "white"
        },
        item: {
          transition: "background 0.2s",

          "&:hover": {
            background: 'rgba(255,255,255,0.2)',
          },
          "&[data-selected='true']": {
            background: 'rgba(255,255,255,0.2)',
            color: "white",  // Ensure text is visible
            "&[data-hovered='true']": {
              background: 'rgba(255,255,255,0.2)',
              color: "white",  // Ensure text is visible
            },
          },
        }
      },
    },

    NumberInput: {
      styles: {
        input: {
          background: 'radial-gradient(83.87% 1043.26% at 50% 50%, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 100%)',
          border: 'solid 0.11rem rgba(110, 110, 119, 0.925)',
          color: "white"

        },
        label: {
          color: "white"
        },
        description: {
          color: '#C1C2C5'
        }

      },
    },

    Checkbox: {
      styles: {
        input: {
          color: 'white',
          background: 'radial-gradient(83.87% 1043.26% at 50% 50%, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 100%)',
          border: 'solid 0.11rem rgba(110, 110, 119, 0.925)',
        },
        label: {
          color: "white"
        },
        description: {
          color: '#C1C2C5'
        }
      },
    },

    PasswordInput: {
      styles: {
        input: {
          background: 'radial-gradient(83.87% 1043.26% at 50% 50%, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 100%)',
          border: 'solid 0.11rem rgba(110, 110, 119, 0.925)',
        },
        icon: {
          backgroundColor: '#8416ad',
          border: 'solid 0.11rem rgba(110, 110, 119, 0.925)',
          color: 'white',
        },
        label: {
          color: "white"
        },
        description: {
          color: '#C1C2C5'
        }
      },
    },
    ColorInput: {
      styles: {
        input: {
          background: 'radial-gradient(83.87% 1043.26% at 50% 50%, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 100%)',
          border: 'solid 0.11rem rgba(110, 110, 119, 0.925)',
          color: "white"
        },
        label: {
          color: "white"
        },
        description: {
          color: '#C1C2C5'
        }
      },
    },
    DatePicker: {
      styles: {
        input: {
          background: 'radial-gradient(83.87% 1043.26% at 50% 50%, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 100%)',
          border: 'solid 0.11rem rgba(110, 110, 119, 0.925)',
          color: "white"
        },
        label: {
          color: "white"
        },
        description: {
          color: '#C1C2C5'
        },
        dropdown: {
          background: 'linear-gradient(101deg, rgba(132,22,173,1) 0%, rgba(102,22,173,1) 100%);',
          border: 'solid 0.11rem rgba(110, 110, 119, 0.925)',
          color: "white"
        },
        calendarHeaderLevel: {
          color: 'white',
          ":hover": {
            background: 'rgba(255,255,255,0.2)',

          }
        },
        weekday: {
          color: "rgba(240,240,240,1)"
        },
        day: {
          "&:hover": {
            background: 'rgba(255,255,255,0.2)',

          },

          "&[data-selected='true']": {
            background: 'rgba(255,255,255,0.2)',
            color: "white",  // Ensure text is visible
          },
        },
        monthPickerControl: {
          "&:hover": {
            background: 'rgba(255,255,255,0.2)',
          },


        },
        monthPickerControlActive: {
          background: 'rgba(255,255,255,0.2)',
          color: "white",
          "&:hover": {
            background: 'rgba(255,255,255,0.2)',

          }
        },
        yearPickerControl: {
          "&:hover": {
            background: 'rgba(255,255,255,0.2)',
          },


        },
        yearPickerControlActive: {
          background: 'rgba(255,255,255,0.2)',
          color: "white",
          "&:hover": {
            background: 'rgba(255,255,255,0.2)',

          }
        },
      },


    },
    MonthPicker: {
      styles: {
        monthsListControl: {
          background: "black",
          "&:hover": {
            background: 'rgba(255,255,255,0.2)',
          },

          "&[data-selected='true']": {
            background: 'rgba(255,255,255,0.2)',
            color: "white",  // Ensure text is visible
          },
        }
      },
    },
  }
};
