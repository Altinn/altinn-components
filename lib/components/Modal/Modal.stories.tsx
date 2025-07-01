import type { Meta, StoryObj } from '@storybook/react-vite';
import { type ChangeEvent, useState } from 'react';
import {
  Button,
  ButtonGroup,
  Checkbox,
  Fieldset,
  Flex,
  Heading,
  Modal,
  ModalBase,
  type ModalBaseProps,
  ModalBody,
  ModalHeader,
  type ModalProps,
  Switch,
  TextField,
  Typography,
} from '../';

const meta: Meta<typeof ModalBase> = {
  title: 'Components/Modal',
  component: ModalBase,
  args: {},
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof ModalBase>;

export const Default = (args: ModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <>
      <Button onClick={onToggle}>Open modal</Button>
      <Modal {...args} open={open} onClose={onToggle}>
        <Heading size="xl">Title</Heading>
        <Typography>
          <p>Modal content.</p>
        </Typography>
      </Modal>
    </>
  );
};

export const Dismissable = (args: ModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <>
      <Button onClick={onToggle}>Open modal</Button>
      <Modal {...args} open={open} onClose={onToggle} dismissable>
        <Heading size="xl">Title</Heading>
        <Typography>
          <p>Modal content.</p>
        </Typography>
      </Modal>
    </>
  );
};

export const ConfirmDialog = () => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <>
      <Button onClick={onToggle}>Open modal</Button>
      <Modal open={open} onClose={onToggle} closedBy="none">
        <Typography>
          <h1>Før du går videre ...</h1>
          <p>Du forlater nå Altinn og går over til Skatteetaten.</p>
        </Typography>
        <ButtonGroup>
          <Button onClick={onToggle}>Fint, fortsett</Button>
          <Button onClick={onToggle} variant="outline">
            Nei, avbryt
          </Button>
        </ButtonGroup>
      </Modal>
    </>
  );
};

export const DangerDialog = () => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <>
      <Button onClick={onToggle}>Open modal</Button>
      <Modal open={open} onClose={onToggle} closedBy="none">
        <Typography>
          <h1>Vent litt!</h1>
          <p>Er du sikker på at du vil slette hele innboksen din?</p>
        </Typography>
        <ButtonGroup>
          <Button onClick={onToggle} variant="outline">
            Nei, avbryt
          </Button>
          <Button onClick={onToggle} color="danger">
            Ja, gå videre
          </Button>
        </ButtonGroup>
      </Modal>
    </>
  );
};

export const ConfirmDismissDialog = () => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <>
      <Button onClick={onToggle}>Open modal</Button>
      <Modal open={open} onClose={onToggle}>
        <Typography>
          <h1>Vent litt!</h1>
          <p>Er du sikker på at du vil slette hele innboksen din?</p>
        </Typography>
        <Checkbox label="Ikke vis dette igjen" />
        <ButtonGroup>
          <Button>Ja, gå videre</Button>
          <Button variant="outline">Nei, absolutt ikke</Button>
        </ButtonGroup>
      </Modal>
    </>
  );
};

export const OptionsDialog = () => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen((prevState) => !prevState);
  };

  const [formData, setFormData] = useState({ smsAlerts: false });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { type, checked, name, value } = e.target;

    if (type === 'checkbox') {
      setFormData((prevState) => {
        return {
          ...prevState,
          [name]: checked,
        };
      });
    } else {
      setFormData((prevState) => {
        return {
          ...prevState,
          [name]: value,
        };
      });
    }
  };

  return (
    <>
      <Button onClick={onToggle}>Open modal</Button>
      <Modal open={open} onClose={onToggle}>
        <Typography>
          <h1>Før du går videre ...</h1>
          <p>
            Vi mangler varslingsadresser for <strong>Bergen bar</strong>.
          </p>
          <p>Legg inn en bedriftens e-post og evt. et telefonnummer for å motta varslinger om nytt innhold.</p>
        </Typography>

        <Fieldset size="sm">
          <TextField label="E-postadresse for varslinger" name="email" placeholder="E-postadresse" />
          <Switch onChange={onChange} label="Varsle på SMS" name="smsAlerts" value="sms" />
          {formData?.smsAlerts && <TextField name="sms" placeholder="Mobiltelefon" />}
        </Fieldset>

        <ButtonGroup spacing={2}>
          <Button>Lagre og gå videre</Button>
          <Button variant="outline">Hopp over</Button>
        </ButtonGroup>
      </Modal>
    </>
  );
};

export const Content = (args: ModalBaseProps) => {
  const [open, setOpen] = useState<boolean>(true);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open modal</Button>
      <ModalBase {...args} open={open} onClose={() => setOpen(false)} variant="content">
        <ModalHeader title="Modal title" onClose={() => setOpen(false)} />
        <ModalBody>
          <Typography>
            <p>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam
              quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla. Donec
              id elit non mi porta gravida at eget metus. Donec sed odio dui. Fusce dapibus, tellus ac cursus commodo,
              tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
            </p>
            <p>
              Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum id ligula porta felis
              euismod semper. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel
              scelerisque nisl consectetur et.
            </p>
            <p>
              Nullam quis risus eget urna mollis ornare vel eu leo. Vestibulum id ligula porta felis euismod semper.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula porta felis euismod semper.
              Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum
              at eros.
            </p>

            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vestibulum id ligula porta felis
              euismod semper. Donec ullamcorper nulla non metus auctor fringilla. Integer posuere erat a ante venenatis
              dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis euismod.
            </p>
            <p>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam
              quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla. Donec
              id elit non mi porta gravida at eget metus. Donec sed odio dui. Fusce dapibus, tellus ac cursus commodo,
              tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
            </p>
            <p>
              Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum id ligula porta felis
              euismod semper. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel
              scelerisque nisl consectetur et.
            </p>
            <p>
              Nullam quis risus eget urna mollis ornare vel eu leo. Vestibulum id ligula porta felis euismod semper.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula porta felis euismod semper.
              Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum
              at eros.
            </p>

            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vestibulum id ligula porta felis
              euismod semper. Donec ullamcorper nulla non metus auctor fringilla. Integer posuere erat a ante venenatis
              dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis euismod.
            </p>
          </Typography>
        </ModalBody>
      </ModalBase>
    </>
  );
};

export const NonStickyHeader = (args: ModalBaseProps) => {
  const [open, setOpen] = useState<boolean>(true);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open modal</Button>
      <ModalBase {...args} open={open} onClose={() => setOpen(false)} variant="content">
        <ModalHeader title="Modal title" onClose={() => setOpen(false)} sticky={false} />
        <ModalBody>
          <Typography>
            <p>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam
              quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla. Donec
              id elit non mi porta gravida at eget metus. Donec sed odio dui. Fusce dapibus, tellus ac cursus commodo,
              tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
            </p>
            <p>
              Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum id ligula porta felis
              euismod semper. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel
              scelerisque nisl consectetur et.
            </p>
            <p>
              Nullam quis risus eget urna mollis ornare vel eu leo. Vestibulum id ligula porta felis euismod semper.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula porta felis euismod semper.
              Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum
              at eros.
            </p>

            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vestibulum id ligula porta felis
              euismod semper. Donec ullamcorper nulla non metus auctor fringilla. Integer posuere erat a ante venenatis
              dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis euismod.
            </p>
            <p>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam
              quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla. Donec
              id elit non mi porta gravida at eget metus. Donec sed odio dui. Fusce dapibus, tellus ac cursus commodo,
              tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
            </p>
            <p>
              Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum id ligula porta felis
              euismod semper. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel
              scelerisque nisl consectetur et.
            </p>
            <p>
              Nullam quis risus eget urna mollis ornare vel eu leo. Vestibulum id ligula porta felis euismod semper.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula porta felis euismod semper.
              Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum
              at eros.
            </p>

            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vestibulum id ligula porta felis
              euismod semper. Donec ullamcorper nulla non metus auctor fringilla. Integer posuere erat a ante venenatis
              dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis euismod.
            </p>
          </Typography>
        </ModalBody>
      </ModalBase>
    </>
  );
};

export const Full: Story = {
  render: (args: ModalBaseProps) => {
    const [open, setOpen] = useState<boolean>(true);
    return (
      <Flex padding={4}>
        <Button onClick={() => setOpen(true)}>Open modal</Button>
        <ModalBase {...args} open={open} onClose={() => setOpen(false)} variant="full">
          <ModalHeader title="Modal title" onClose={() => setOpen(false)} />
          <ModalBody>
            <p>Modal content.</p>
          </ModalBody>
        </ModalBase>
      </Flex>
    );
  },
};
