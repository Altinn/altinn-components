import{r as a,j as e}from"./iframe-DolAyTrH.js";import{M as g}from"./Modal-BHWW5bKu.js";import{S as H}from"./Bell-0DYxxaeW.js";import{S as L}from"./ExternalLink-DUyU8vdO.js";import{M as p}from"./ModalBase-Biclu8IY.js";import{B as n}from"./Button-BnKV4VN-.js";import{H as E}from"./Heading-ytdfVfHq.js";import{T as u}from"./Typography-BxahTxrH.js";import{B as d}from"./ButtonGroup-D7dkSlZP.js";import{C as A}from"./Checkbox-B2HO-CyZ.js";import{a as X}from"./Fieldset-VDMCFkLM.js";import{T as N}from"./TextField-BlEMz5sX.js";import{S as G}from"./Switch-D5tSqIJ9.js";import{M as h,a as v}from"./ModalBody-BDCdjJbS.js";import{F as I}from"./Flex-DJLVkQLj.js";import{A as P}from"./AccountNotificationSettings-OKUBInYj.js";import{b as z}from"./brreg-2IRVVnCD.js";import"./preload-helper-PPVm8Dsz.js";import"./XMark-DTdVjjyM.js";import"./useId-CHjpN4lF.js";import"./Section-B969stp2.js";import"./index-BGgdxP5s.js";import"./button-DvTcN5eG.js";import"./use-merge-refs-D0JupAUo.js";import"./lite-DaUVFjkg.js";import"./useHighlightedText-DjzGplEp.js";import"./Skeleton-CgJZAB6S.js";import"./Label-B4hULeup.js";import"./index-Bcer_oBx.js";import"./Input-CbO5ihcQ.js";import"./input-BNW4iEHl.js";import"./FieldBase-Cd7L_EtW.js";import"./Icon-DyTdluPS.js";import"./Avatar-koXMFN1u.js";import"./AvatarGroup-B7A0z_e3.js";const Me={title:"Components/Modal",component:p,args:{},parameters:{layout:"centered"}},C=t=>{const[o,s]=a.useState(!0),r=()=>{s(i=>!i)};return e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:r,children:"Open modal"}),e.jsxs(g,{...t,open:o,onClose:r,children:[e.jsx(E,{size:"xl",children:"Title"}),e.jsx(u,{children:e.jsx("p",{children:"Modal content."})})]})]})},B=t=>{const[o,s]=a.useState(!0),r=()=>{s(i=>!i)};return e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:r,children:"Open modal"}),e.jsxs(g,{...t,open:o,onClose:r,dismissable:!0,children:[e.jsx(E,{size:"xl",children:"Title"}),e.jsx(u,{children:e.jsx("p",{children:"Modal content."})})]})]})},S=()=>{const[t,o]=a.useState(!0),s=()=>{o(r=>!r)};return e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:s,children:"Open modal"}),e.jsxs(g,{open:t,onClose:s,closedBy:"none",children:[e.jsxs(u,{children:[e.jsx("h1",{children:"Før du går videre ..."}),e.jsx("p",{children:"Du forlater nå Altinn og går over til Skatteetaten."})]}),e.jsxs(d,{children:[e.jsx(n,{onClick:s,children:"Fint, fortsett"}),e.jsx(n,{onClick:s,variant:"outline",children:"Nei, avbryt"})]})]})]})},M=()=>{const[t,o]=a.useState(!0),s=()=>{o(r=>!r)};return e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:s,children:"Open modal"}),e.jsxs(g,{open:t,onClose:s,closedBy:"none",children:[e.jsxs(u,{children:[e.jsx("h1",{children:"Vent litt!"}),e.jsx("p",{children:"Er du sikker på at du vil slette hele innboksen din?"})]}),e.jsxs(d,{children:[e.jsx(n,{onClick:s,variant:"outline",children:"Nei, avbryt"}),e.jsx(n,{onClick:s,color:"danger",children:"Ja, gå videre"})]})]})]})},y=()=>{const[t,o]=a.useState(!0),s=()=>{o(r=>!r)};return e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:s,children:"Open modal"}),e.jsxs(g,{open:t,onClose:s,children:[e.jsxs(u,{children:[e.jsx("h1",{children:"Vent litt!"}),e.jsx("p",{children:"Er du sikker på at du vil slette hele innboksen din?"})]}),e.jsx(A,{label:"Ikke vis dette igjen"}),e.jsxs(d,{children:[e.jsx(n,{children:"Ja, gå videre"}),e.jsx(n,{variant:"outline",children:"Nei, absolutt ikke"})]})]})]})},k=()=>{const[t,o]=a.useState(!0),s=()=>{o(c=>!c)},[r,i]=a.useState({smsAlerts:!1}),f=c=>{const{type:x,checked:b,name:m,value:j}=c.target;i(x==="checkbox"?l=>({...l,[m]:b}):l=>({...l,[m]:j}))};return e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:s,children:"Open modal"}),e.jsxs(g,{open:t,onClose:s,children:[e.jsxs(u,{children:[e.jsx("h1",{children:"Før du går videre ..."}),e.jsxs("p",{children:["Vi mangler varslingsadresser for ",e.jsx("strong",{children:"Bergen bar"}),"."]}),e.jsx("p",{children:"Legg inn en bedriftens e-post og evt. et telefonnummer for å motta varslinger om nytt innhold."})]}),e.jsxs(X,{size:"sm",children:[e.jsx(N,{label:"E-postadresse for varslinger",name:"email",placeholder:"E-postadresse"}),e.jsx(G,{onChange:f,label:"Varsle på SMS",name:"smsAlerts",value:"sms"}),r?.smsAlerts&&e.jsx(N,{name:"sms",placeholder:"Mobiltelefon"})]}),e.jsxs(d,{children:[e.jsx(n,{children:"Lagre og gå videre"}),e.jsx(n,{variant:"outline",children:"Hopp over"})]})]})]})},D=t=>{const[o,s]=a.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:()=>s(!0),children:"Open modal"}),e.jsxs(p,{...t,open:o,onClose:()=>s(!1),variant:"content",children:[e.jsx(h,{title:"Modal title",onClose:()=>s(!1)}),e.jsx(v,{children:e.jsxs(u,{children:[e.jsx("p",{children:"Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla. Donec id elit non mi porta gravida at eget metus. Donec sed odio dui. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."}),e.jsx("p",{children:"Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum id ligula porta felis euismod semper. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et."}),e.jsx("p",{children:"Nullam quis risus eget urna mollis ornare vel eu leo. Vestibulum id ligula porta felis euismod semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula porta felis euismod semper. Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."}),e.jsx("p",{children:"Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vestibulum id ligula porta felis euismod semper. Donec ullamcorper nulla non metus auctor fringilla. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis euismod."}),e.jsx("p",{children:"Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla. Donec id elit non mi porta gravida at eget metus. Donec sed odio dui. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."}),e.jsx("p",{children:"Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum id ligula porta felis euismod semper. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et."}),e.jsx("p",{children:"Nullam quis risus eget urna mollis ornare vel eu leo. Vestibulum id ligula porta felis euismod semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula porta felis euismod semper. Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."}),e.jsx("p",{children:"Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vestibulum id ligula porta felis euismod semper. Donec ullamcorper nulla non metus auctor fringilla. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis euismod."})]})})]})]})},O=t=>{const[o,s]=a.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:()=>s(!0),children:"Open modal"}),e.jsxs(p,{...t,open:o,onClose:()=>s(!1),variant:"content",children:[e.jsx(h,{title:"Modal title",onClose:()=>s(!1),sticky:!1}),e.jsx(v,{children:e.jsxs(u,{children:[e.jsx("p",{children:"Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla. Donec id elit non mi porta gravida at eget metus. Donec sed odio dui. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."}),e.jsx("p",{children:"Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum id ligula porta felis euismod semper. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et."}),e.jsx("p",{children:"Nullam quis risus eget urna mollis ornare vel eu leo. Vestibulum id ligula porta felis euismod semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula porta felis euismod semper. Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."}),e.jsx("p",{children:"Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vestibulum id ligula porta felis euismod semper. Donec ullamcorper nulla non metus auctor fringilla. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis euismod."}),e.jsx("p",{children:"Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla. Donec id elit non mi porta gravida at eget metus. Donec sed odio dui. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."}),e.jsx("p",{children:"Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum id ligula porta felis euismod semper. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et."}),e.jsx("p",{children:"Nullam quis risus eget urna mollis ornare vel eu leo. Vestibulum id ligula porta felis euismod semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula porta felis euismod semper. Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."}),e.jsx("p",{children:"Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vestibulum id ligula porta felis euismod semper. Donec ullamcorper nulla non metus auctor fringilla. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis euismod."})]})})]})]})},q={render:t=>{const[o,s]=a.useState(!0);return e.jsxs(I,{padding:4,children:[e.jsx(n,{onClick:()=>s(!0),children:"Open modal"}),e.jsxs(p,{...t,open:o,onClose:()=>s(!1),variant:"full",children:[e.jsx(h,{title:"Modal title",onClose:()=>s(!1)}),e.jsx(v,{children:e.jsx("p",{children:"Modal content."})})]})]})}},T=t=>{const[o,s]=a.useState(!0),[r,i]=a.useState({smsAlerts:!0,phone:"99005544"}),f=c=>{const{type:x,checked:b,name:m,value:j}=c.target;i(x==="checkbox"?l=>({...l,[m]:b}):l=>({...l,[m]:j}))};return e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:()=>s(!0),children:"Open modal"}),e.jsxs(p,{...t,open:o,onClose:()=>s(!1),children:[e.jsx(h,{icon:{type:"company",name:"Bergen Bar"},title:"Bergen Bar",description:"Org nr. XXX XXX XXX",onClose:()=>s(!1)}),e.jsxs(v,{children:[e.jsx(P,{...t,...r,onChange:f}),e.jsxs(d,{children:[e.jsx(n,{children:"Lagre og avslutt"}),e.jsx(n,{variant:"outline",children:"Avbryt"})]})]})]})]})},F=t=>{const[o,s]=a.useState(!0),[r,i]=a.useState({smsAlerts:!0,phone:"99005544"}),f=c=>{const{type:x,checked:b,name:m,value:j}=c.target;i(x==="checkbox"?l=>({...l,[m]:b}):l=>({...l,[m]:j}))};return e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:()=>s(!0),children:"Open modal"}),e.jsxs(p,{...t,open:o,onClose:()=>s(!1),children:[e.jsx(h,{icon:H,title:"Varslinger",onClose:()=>s(!1)}),e.jsxs(v,{children:[e.jsx(P,{...t,...r,onChange:f}),e.jsxs(d,{children:[e.jsx(n,{children:"Lagre og avslutt"}),e.jsx(n,{variant:"outline",children:"Avbryt"})]})]})]})]})},V=t=>{const[o,s]=a.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:()=>s(!0),children:"Open modal"}),e.jsxs(p,{...t,open:o,onClose:()=>s(!1),children:[e.jsx(h,{icon:z,title:"Varslinger",onClose:()=>s(!1)}),e.jsxs(v,{children:[e.jsxs(u,{size:"sm",children:[e.jsx("p",{children:"Hvis det har skjedd endringer i informasjonen som er registrert på selskapet, må du melde fra om dette i Samordnet registermelding."}),e.jsxs("p",{children:["Samordet registermelding finner du på ",e.jsx("a",{href:"https://brreg.no/",children:"brreg.no"}),"."]})]}),e.jsx(d,{size:"md",children:e.jsxs(n,{variant:"outline",children:[e.jsx(L,{}),e.jsx("span",{children:"Samordnet registermelding"})]})})]})]})," "]})};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`(args: ModalProps) => {
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
}`,...C.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`(args: ModalProps) => {
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
}`,...B.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
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
}`,...S.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
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
}`,...M.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
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
}`,...y.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
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
}`,...k.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`(args: ModalBaseProps) => {
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
}`,...D.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`(args: ModalBaseProps) => {
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
}`,...O.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`(args: ModalBaseProps) => {
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
}`,...T.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`(args: ModalBaseProps) => {
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
}`,...F.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`(args: ModalBaseProps) => {
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
}`,...V.parameters?.docs?.source}}};const ye=["Default","Dismissable","ConfirmDialog","DangerDialog","ConfirmDismissDialog","OptionsDialog","Content","NonStickyHeader","Full","CompanyModal","SettingsModal","ExternalModal"];export{T as CompanyModal,S as ConfirmDialog,y as ConfirmDismissDialog,D as Content,M as DangerDialog,C as Default,B as Dismissable,V as ExternalModal,q as Full,O as NonStickyHeader,k as OptionsDialog,F as SettingsModal,ye as __namedExportsOrder,Me as default};
