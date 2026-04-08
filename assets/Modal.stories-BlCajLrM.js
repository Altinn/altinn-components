import{i as e}from"./chunk-DseTPa7n.js";import{t}from"./react-CpyhhMkF.js";import{t as n}from"./jsx-runtime-DwqL_Y-t.js";import{t as r}from"./Bell-Dy1Lu3cE.js";import{t as i}from"./ExternalLink-VhbOBqC7.js";import{t as a}from"./AccountNotificationSettings-D9mTq542.js";import{t as o}from"./Fieldset-Bi-S6onu.js";import{t as s}from"./Checkbox-Clj0HG5u.js";import{t as c}from"./Switch-8Dpd7HT2.js";import{t as l}from"./TextField-Ds66Sg2V.js";import{t as u}from"./Typography-DBWZN96y.js";import{t as d}from"./Heading-CJB15i5Q.js";import{t as f}from"./Button-L6T5IVdq.js";import{t as p}from"./ButtonGroup-qEf-oFo1.js";import{t as m}from"./Flex-SBjIXoOg.js";import{t as h}from"./ModalBase-BCoKaUL8.js";import{n as g,t as _}from"./ModalBody-CcVlYYQR.js";import{t as v}from"./Modal-B-wa7xso.js";import{t as y}from"./brreg-DjEOhzdy.js";var b=e(t(),1),x=n(),S={title:`Components/Modal`,component:h,args:{},parameters:{layout:`centered`}},C=e=>{let[t,n]=(0,b.useState)(!0),r=()=>{n(e=>!e)};return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(f,{onClick:r,children:`Open modal`}),(0,x.jsxs)(v,{...e,open:t,onClose:r,children:[(0,x.jsx)(d,{size:`xl`,children:`Title`}),(0,x.jsx)(u,{children:(0,x.jsx)(`p`,{children:`Modal content.`})})]})]})},w=e=>{let[t,n]=(0,b.useState)(!0),r=()=>{n(e=>!e)};return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(f,{onClick:r,children:`Open modal`}),(0,x.jsxs)(v,{...e,open:t,onClose:r,dismissable:!0,children:[(0,x.jsx)(d,{size:`xl`,children:`Title`}),(0,x.jsx)(u,{children:(0,x.jsx)(`p`,{children:`Modal content.`})})]})]})},T=()=>{let[e,t]=(0,b.useState)(!0),n=()=>{t(e=>!e)};return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(f,{onClick:n,children:`Open modal`}),(0,x.jsxs)(v,{open:e,onClose:n,closedBy:`none`,children:[(0,x.jsxs)(u,{children:[(0,x.jsx)(`h1`,{children:`Før du går videre ...`}),(0,x.jsx)(`p`,{children:`Du forlater nå Altinn og går over til Skatteetaten.`})]}),(0,x.jsxs)(p,{children:[(0,x.jsx)(f,{onClick:n,children:`Fint, fortsett`}),(0,x.jsx)(f,{onClick:n,variant:`outline`,children:`Nei, avbryt`})]})]})]})},E=()=>{let[e,t]=(0,b.useState)(!0),n=()=>{t(e=>!e)};return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(f,{onClick:n,children:`Open modal`}),(0,x.jsxs)(v,{open:e,onClose:n,closedBy:`none`,children:[(0,x.jsxs)(u,{children:[(0,x.jsx)(`h1`,{children:`Vent litt!`}),(0,x.jsx)(`p`,{children:`Er du sikker på at du vil slette hele innboksen din?`})]}),(0,x.jsxs)(p,{children:[(0,x.jsx)(f,{onClick:n,variant:`outline`,children:`Nei, avbryt`}),(0,x.jsx)(f,{onClick:n,color:`danger`,children:`Ja, gå videre`})]})]})]})},D=()=>{let[e,t]=(0,b.useState)(!0),n=()=>{t(e=>!e)};return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(f,{onClick:n,children:`Open modal`}),(0,x.jsxs)(v,{open:e,onClose:n,children:[(0,x.jsxs)(u,{children:[(0,x.jsx)(`h1`,{children:`Vent litt!`}),(0,x.jsx)(`p`,{children:`Er du sikker på at du vil slette hele innboksen din?`})]}),(0,x.jsx)(s,{label:`Ikke vis dette igjen`}),(0,x.jsxs)(p,{children:[(0,x.jsx)(f,{children:`Ja, gå videre`}),(0,x.jsx)(f,{variant:`outline`,children:`Nei, absolutt ikke`})]})]})]})},O=()=>{let[e,t]=(0,b.useState)(!0),n=()=>{t(e=>!e)},[r,i]=(0,b.useState)({smsAlerts:!1});return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(f,{onClick:n,children:`Open modal`}),(0,x.jsxs)(v,{open:e,onClose:n,children:[(0,x.jsxs)(u,{children:[(0,x.jsx)(`h1`,{children:`Før du går videre ...`}),(0,x.jsxs)(`p`,{children:[`Vi mangler varslingsadresser for `,(0,x.jsx)(`strong`,{children:`Bergen bar`}),`.`]}),(0,x.jsx)(`p`,{children:`Legg inn en bedriftens e-post og evt. et telefonnummer for å motta varslinger om nytt innhold.`})]}),(0,x.jsxs)(o,{size:`sm`,children:[(0,x.jsx)(l,{label:`E-postadresse for varslinger`,name:`email`,placeholder:`E-postadresse`}),(0,x.jsx)(c,{onChange:e=>{let{type:t,checked:n,name:r,value:a}=e.target;i(t===`checkbox`?e=>({...e,[r]:n}):e=>({...e,[r]:a}))},label:`Varsle på SMS`,name:`smsAlerts`,value:`sms`}),r?.smsAlerts&&(0,x.jsx)(l,{name:`sms`,placeholder:`Mobiltelefon`})]}),(0,x.jsxs)(p,{children:[(0,x.jsx)(f,{children:`Lagre og gå videre`}),(0,x.jsx)(f,{variant:`outline`,children:`Hopp over`})]})]})]})},k=e=>{let[t,n]=(0,b.useState)(!0);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(f,{onClick:()=>n(!0),children:`Open modal`}),(0,x.jsxs)(h,{...e,open:t,onClose:()=>n(!1),variant:`content`,children:[(0,x.jsx)(g,{title:`Modal title`,onClose:()=>n(!1)}),(0,x.jsx)(_,{children:(0,x.jsxs)(u,{children:[(0,x.jsx)(`p`,{children:`Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla. Donec id elit non mi porta gravida at eget metus. Donec sed odio dui. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.`}),(0,x.jsx)(`p`,{children:`Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum id ligula porta felis euismod semper. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`}),(0,x.jsx)(`p`,{children:`Nullam quis risus eget urna mollis ornare vel eu leo. Vestibulum id ligula porta felis euismod semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula porta felis euismod semper. Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.`}),(0,x.jsx)(`p`,{children:`Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vestibulum id ligula porta felis euismod semper. Donec ullamcorper nulla non metus auctor fringilla. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis euismod.`}),(0,x.jsx)(`p`,{children:`Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla. Donec id elit non mi porta gravida at eget metus. Donec sed odio dui. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.`}),(0,x.jsx)(`p`,{children:`Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum id ligula porta felis euismod semper. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`}),(0,x.jsx)(`p`,{children:`Nullam quis risus eget urna mollis ornare vel eu leo. Vestibulum id ligula porta felis euismod semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula porta felis euismod semper. Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.`}),(0,x.jsx)(`p`,{children:`Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vestibulum id ligula porta felis euismod semper. Donec ullamcorper nulla non metus auctor fringilla. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis euismod.`})]})})]})]})},A=e=>{let[t,n]=(0,b.useState)(!0);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(f,{onClick:()=>n(!0),children:`Open modal`}),(0,x.jsxs)(h,{...e,open:t,onClose:()=>n(!1),variant:`content`,children:[(0,x.jsx)(g,{title:`Modal title`,onClose:()=>n(!1),sticky:!1}),(0,x.jsx)(_,{children:(0,x.jsxs)(u,{children:[(0,x.jsx)(`p`,{children:`Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla. Donec id elit non mi porta gravida at eget metus. Donec sed odio dui. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.`}),(0,x.jsx)(`p`,{children:`Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum id ligula porta felis euismod semper. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`}),(0,x.jsx)(`p`,{children:`Nullam quis risus eget urna mollis ornare vel eu leo. Vestibulum id ligula porta felis euismod semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula porta felis euismod semper. Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.`}),(0,x.jsx)(`p`,{children:`Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vestibulum id ligula porta felis euismod semper. Donec ullamcorper nulla non metus auctor fringilla. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis euismod.`}),(0,x.jsx)(`p`,{children:`Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla. Donec id elit non mi porta gravida at eget metus. Donec sed odio dui. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.`}),(0,x.jsx)(`p`,{children:`Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum id ligula porta felis euismod semper. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`}),(0,x.jsx)(`p`,{children:`Nullam quis risus eget urna mollis ornare vel eu leo. Vestibulum id ligula porta felis euismod semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula porta felis euismod semper. Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.`}),(0,x.jsx)(`p`,{children:`Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vestibulum id ligula porta felis euismod semper. Donec ullamcorper nulla non metus auctor fringilla. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis euismod.`})]})})]})]})},j={render:e=>{let[t,n]=(0,b.useState)(!0);return(0,x.jsxs)(m,{padding:4,children:[(0,x.jsx)(f,{onClick:()=>n(!0),children:`Open modal`}),(0,x.jsxs)(h,{...e,open:t,onClose:()=>n(!1),variant:`full`,children:[(0,x.jsx)(g,{title:`Modal title`,onClose:()=>n(!1)}),(0,x.jsx)(_,{children:(0,x.jsx)(`p`,{children:`Modal content.`})})]})]})}},M=e=>{let[t,n]=(0,b.useState)(!0),[r,i]=(0,b.useState)({smsAlerts:!0,phone:`99005544`}),o=e=>{let{type:t,checked:n,name:r,value:a}=e.target;i(t===`checkbox`?e=>({...e,[r]:n}):e=>({...e,[r]:a}))};return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(f,{onClick:()=>n(!0),children:`Open modal`}),(0,x.jsxs)(h,{...e,open:t,onClose:()=>n(!1),children:[(0,x.jsx)(g,{icon:{type:`company`,name:`Bergen Bar`},title:`Bergen Bar`,description:`Org nr. XXX XXX XXX`,onClose:()=>n(!1)}),(0,x.jsxs)(_,{children:[(0,x.jsx)(a,{...e,...r,onChange:o}),(0,x.jsxs)(p,{children:[(0,x.jsx)(f,{children:`Lagre og avslutt`}),(0,x.jsx)(f,{variant:`outline`,children:`Avbryt`})]})]})]})]})},N=e=>{let[t,n]=(0,b.useState)(!0),[i,o]=(0,b.useState)({smsAlerts:!0,phone:`99005544`}),s=e=>{let{type:t,checked:n,name:r,value:i}=e.target;o(t===`checkbox`?e=>({...e,[r]:n}):e=>({...e,[r]:i}))};return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(f,{onClick:()=>n(!0),children:`Open modal`}),(0,x.jsxs)(h,{...e,open:t,onClose:()=>n(!1),children:[(0,x.jsx)(g,{icon:r,title:`Varslinger`,onClose:()=>n(!1)}),(0,x.jsxs)(_,{children:[(0,x.jsx)(a,{...e,...i,onChange:s}),(0,x.jsxs)(p,{children:[(0,x.jsx)(f,{children:`Lagre og avslutt`}),(0,x.jsx)(f,{variant:`outline`,children:`Avbryt`})]})]})]})]})},P=e=>{let[t,n]=(0,b.useState)(!0);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(f,{onClick:()=>n(!0),children:`Open modal`}),(0,x.jsxs)(h,{...e,open:t,onClose:()=>n(!1),children:[(0,x.jsx)(g,{icon:y,title:`Varslinger`,onClose:()=>n(!1)}),(0,x.jsxs)(_,{children:[(0,x.jsxs)(u,{size:`sm`,children:[(0,x.jsx)(`p`,{children:`Hvis det har skjedd endringer i informasjonen som er registrert på selskapet, må du melde fra om dette i Samordnet registermelding.`}),(0,x.jsxs)(`p`,{children:[`Samordet registermelding finner du på `,(0,x.jsx)(`a`,{href:`https://brreg.no/`,children:`brreg.no`}),`.`]})]}),(0,x.jsx)(p,{size:`md`,children:(0,x.jsxs)(f,{variant:`outline`,children:[(0,x.jsx)(i,{}),(0,x.jsx)(`span`,{children:`Samordnet registermelding`})]})})]})]}),` `]})};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`(args: ModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <Modal {...args} open={open} onClose={onToggle}>
        <Heading size="xl">Title</Heading>
        <Typography>
          <p>Modal content.</p>
        </Typography>
      </Modal>
    </>;
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`(args: ModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <Modal {...args} open={open} onClose={onToggle} dismissable>
        <Heading size="xl">Title</Heading>
        <Typography>
          <p>Modal content.</p>
        </Typography>
      </Modal>
    </>;
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
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
    </>;
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
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
    </>;
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
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
    </>;
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  const [formData, setFormData] = useState({
    smsAlerts: false
  });
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      type,
      checked,
      name,
      value
    } = e.target;
    if (type === 'checkbox') {
      setFormData(prevState => {
        return {
          ...prevState,
          [name]: checked
        };
      });
    } else {
      setFormData(prevState => {
        return {
          ...prevState,
          [name]: value
        };
      });
    }
  };
  return <>
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

        <ButtonGroup>
          <Button>Lagre og gå videre</Button>
          <Button variant="outline">Hopp over</Button>
        </ButtonGroup>
      </Modal>
    </>;
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`(args: ModalBaseProps) => {
  const [open, setOpen] = useState<boolean>(true);
  return <>
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
    </>;
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`(args: ModalBaseProps) => {
  const [open, setOpen] = useState<boolean>(true);
  return <>
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
    </>;
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: (args: ModalBaseProps) => {
    const [open, setOpen] = useState<boolean>(true);
    return <Flex padding={4}>
        <Button onClick={() => setOpen(true)}>Open modal</Button>
        <ModalBase {...args} open={open} onClose={() => setOpen(false)} variant="full">
          <ModalHeader title="Modal title" onClose={() => setOpen(false)} />
          <ModalBody>
            <p>Modal content.</p>
          </ModalBody>
        </ModalBase>
      </Flex>;
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`(args: ModalBaseProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const [formData, setFormData] = useState({
    smsAlerts: true,
    phone: '99005544'
  });
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      type,
      checked,
      name,
      value
    } = e.target;
    if (type === 'checkbox') {
      setFormData(prevState => {
        return {
          ...prevState,
          [name]: checked
        };
      });
    } else {
      setFormData(prevState => {
        return {
          ...prevState,
          [name]: value
        };
      });
    }
  };
  return <>
      <Button onClick={() => setOpen(true)}>Open modal</Button>
      <ModalBase {...args} open={open} onClose={() => setOpen(false)}>
        <ModalHeader icon={{
        type: 'company',
        name: 'Bergen Bar'
      }} title="Bergen Bar" description="Org nr. XXX XXX XXX" onClose={() => setOpen(false)} />
        <ModalBody>
          <AccountNotificationSettings {...args} {...formData} onChange={onChange} />
          <ButtonGroup>
            <Button>Lagre og avslutt</Button>
            <Button variant="outline">Avbryt</Button>
          </ButtonGroup>
        </ModalBody>
      </ModalBase>
    </>;
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`(args: ModalBaseProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const [formData, setFormData] = useState({
    smsAlerts: true,
    phone: '99005544'
  });
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      type,
      checked,
      name,
      value
    } = e.target;
    if (type === 'checkbox') {
      setFormData(prevState => {
        return {
          ...prevState,
          [name]: checked
        };
      });
    } else {
      setFormData(prevState => {
        return {
          ...prevState,
          [name]: value
        };
      });
    }
  };
  return <>
      <Button onClick={() => setOpen(true)}>Open modal</Button>
      <ModalBase {...args} open={open} onClose={() => setOpen(false)}>
        <ModalHeader icon={BellIcon} title="Varslinger" onClose={() => setOpen(false)} />
        <ModalBody>
          <AccountNotificationSettings {...args} {...formData} onChange={onChange} />
          <ButtonGroup>
            <Button>Lagre og avslutt</Button>
            <Button variant="outline">Avbryt</Button>
          </ButtonGroup>
        </ModalBody>
      </ModalBase>
    </>;
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`(args: ModalBaseProps) => {
  const [open, setOpen] = useState<boolean>(true);
  return <>
      <Button onClick={() => setOpen(true)}>Open modal</Button>
      <ModalBase {...args} open={open} onClose={() => setOpen(false)}>
        <ModalHeader icon={brreg} title="Varslinger" onClose={() => setOpen(false)} />
        <ModalBody>
          <Typography size="sm">
            <p>
              Hvis det har skjedd endringer i informasjonen som er registrert på selskapet, må du melde fra om dette i
              Samordnet registermelding.
            </p>
            <p>
              Samordet registermelding finner du på <a href="https://brreg.no/">brreg.no</a>.
            </p>
          </Typography>
          <ButtonGroup size="md">
            <Button variant="outline">
              <ExternalLinkIcon />
              <span>Samordnet registermelding</span>
            </Button>
          </ButtonGroup>
        </ModalBody>
      </ModalBase>{' '}
    </>;
}`,...P.parameters?.docs?.source}}};var F=[`Default`,`Dismissable`,`ConfirmDialog`,`DangerDialog`,`ConfirmDismissDialog`,`OptionsDialog`,`Content`,`NonStickyHeader`,`Full`,`CompanyModal`,`SettingsModal`,`ExternalModal`];export{M as CompanyModal,T as ConfirmDialog,D as ConfirmDismissDialog,k as Content,E as DangerDialog,C as Default,w as Dismissable,P as ExternalModal,j as Full,A as NonStickyHeader,O as OptionsDialog,N as SettingsModal,F as __namedExportsOrder,S as default};