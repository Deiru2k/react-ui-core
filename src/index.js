// Default styles
import Default from './styles';

// Components
import Alert from './components/alert';
import Panel from './components/panel';
import Button from './components/buttons';
import Loading from './components/loading';
import Label from './components/label';
import Badges from './components/badges';
import { Container, Row, Col } from './components/grid';
import Image from './components/images';
import Table from './components/table';
import Form from './components/form';

const defaultProps = {
  styles: Default,
  components: {},
};

export default function(props = defaultProps) {
  const { styles, components } = props;

  return {
    Alert: Alert(styles.alert),
    Panel: Panel(styles.panel),
    Button: Button(styles.button),
    Loading: Loading(styles.loading),
    Label: Label(styles.label),
    Badges: Badges(styles.badges),
    Image: Image(styles.images),

    Table: {
      Container: Table.Container(styles.table),
      Row: Table.Row(styles.table),
      Cell: Table.Cell(styles.table),
      Heading: Table.Heading(styles.table),
    },

    Form: {
      Container: Form.Container(styles.form),
      Group: Form.Group(styles.form),
      Input: Form.Input(styles.form),
      Textarea: Form.Textarea(styles.form),
      Label: Form.Label(styles.form),
      Checkbox: Form.Checkbox(styles.form),
      Radio: Form.Radio(styles.form),
      Select: Form.Select(styles.form),
      Static: Form.Static(styles.form),
    },

    Container: Container(styles.grid),
    Row: Row(styles.grid),
    Col: Col(styles.grid),
    ...components,
  };
}
