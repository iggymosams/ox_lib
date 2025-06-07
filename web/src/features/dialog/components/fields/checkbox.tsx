import { Checkbox, createStyles } from '@mantine/core';
import { ICheckbox } from '../../../../typings/dialog';
import { UseFormRegisterReturn } from 'react-hook-form';

interface Props {
  row: ICheckbox;
  index: number;
  register: UseFormRegisterReturn;
}
const useStyles = createStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    background: 'linear-gradient(101deg, rgba(132,22,173,.3) 0%, rgba(102,22,173,.3) 100%);',
    '&:checked': {
      background: 'linear-gradient(101deg, rgba(132,22,173,.6) 0%, rgba(102,22,173,.6) 100%);',
      borderColor: theme.colors.dark[2],
      color: 'white',
    },
  },
  inner: {
    '> svg > path': {
      fill: 'white',
    },
  },
}));

const CheckboxField: React.FC<Props> = (props) => {
  const { classes } = useStyles();

  return (
    <Checkbox
      {...props.register}
      classNames={classes}
      sx={{ display: 'flex' }}
      required={props.row.required}
      label={props.row.label}
      defaultChecked={props.row.checked}
      disabled={props.row.disabled}
    />
  );
};

export default CheckboxField;
