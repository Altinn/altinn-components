var L=Object.defineProperty;var t=(n,o)=>L(n,"name",{value:o,configurable:!0});import{aa as i,a7 as e,c as r}from"./iframe-C320xpwq.js";import{b as A}from"./brreg-2IRVVnCD.js";import{S as X}from"./ExternalLink-DMkx3ux6.js";import{S as G}from"./Bell-TfOG8jz6.js";import{M as d,b as h,a as v}from"./ModalBody-BULMryTE.js";import{A as P}from"./AccountNotificationSettings-BqdCVHWV.js";import{B as g}from"./ButtonGroup-BhnnwPdG.js";import{M as f}from"./Modal-CCjkKNNQ.js";import{T as m}from"./Typography-DeOYXGTy.js";import{C as I}from"./Checkbox-C9Td1WtJ.js";import{H}from"./Heading-C_k6PbIN.js";import{F as z}from"./Flex-vd8VAqWN.js";import{F as J}from"./Fieldset-CvKtF-g0.js";import{T as E}from"./TextField-0ILAc4vl.js";import{S as w}from"./Switch-CWssEnQq.js";import"./preload-helper-Cc2_yIPf.js";import"./Section-CQzKKRAw.js";import"./Avatar-DiTaWPNi.js";import"./AvatarGroup-C3ZQ77zA.js";import"./useHighlightedText-DSoWCMjQ.js";import"./Field-WScL1nVe.js";import"./Input-Butkrn3v.js";import"./Label-CArvchbl.js";import"./FieldBase-CS4MYGp7.js";const ve={title:"Components/Modal",component:d,args:{},parameters:{layout:"centered"}},B=t(n=>{const[o,s]=i.useState(!0),a=t(()=>{s(l=>!l)},"onToggle");return e.jsxs(e.Fragment,{children:[e.jsx(r,{onClick:a,children:"Open modal"}),e.jsxs(f,{...n,open:o,onClose:a,children:[e.jsx(H,{size:"xl",children:"Title"}),e.jsx(m,{children:e.jsx("p",{children:"Modal content."})})]})]})},"Default"),S=t(n=>{const[o,s]=i.useState(!0),a=t(()=>{s(l=>!l)},"onToggle");return e.jsxs(e.Fragment,{children:[e.jsx(r,{onClick:a,children:"Open modal"}),e.jsxs(f,{...n,open:o,onClose:a,dismissable:!0,children:[e.jsx(H,{size:"xl",children:"Title"}),e.jsx(m,{children:e.jsx("p",{children:"Modal content."})})]})]})},"Dismissable"),M=t(()=>{const[n,o]=i.useState(!0),s=t(()=>{o(a=>!a)},"onToggle");return e.jsxs(e.Fragment,{children:[e.jsx(r,{onClick:s,children:"Open modal"}),e.jsxs(f,{open:n,onClose:s,closedBy:"none",children:[e.jsxs(m,{children:[e.jsx("h1",{children:"Før du går videre ..."}),e.jsx("p",{children:"Du forlater nå Altinn og går over til Skatteetaten."})]}),e.jsxs(g,{children:[e.jsx(r,{onClick:s,children:"Fint, fortsett"}),e.jsx(r,{onClick:s,variant:"outline",children:"Nei, avbryt"})]})]})]})},"ConfirmDialog"),y=t(()=>{const[n,o]=i.useState(!0),s=t(()=>{o(a=>!a)},"onToggle");return e.jsxs(e.Fragment,{children:[e.jsx(r,{onClick:s,children:"Open modal"}),e.jsxs(f,{open:n,onClose:s,closedBy:"none",children:[e.jsxs(m,{children:[e.jsx("h1",{children:"Vent litt!"}),e.jsx("p",{children:"Er du sikker på at du vil slette hele innboksen din?"})]}),e.jsxs(g,{children:[e.jsx(r,{onClick:s,variant:"outline",children:"Nei, avbryt"}),e.jsx(r,{onClick:s,color:"danger",children:"Ja, gå videre"})]})]})]})},"DangerDialog"),k=t(()=>{const[n,o]=i.useState(!0),s=t(()=>{o(a=>!a)},"onToggle");return e.jsxs(e.Fragment,{children:[e.jsx(r,{onClick:s,children:"Open modal"}),e.jsxs(f,{open:n,onClose:s,children:[e.jsxs(m,{children:[e.jsx("h1",{children:"Vent litt!"}),e.jsx("p",{children:"Er du sikker på at du vil slette hele innboksen din?"})]}),e.jsx(I,{label:"Ikke vis dette igjen"}),e.jsxs(g,{children:[e.jsx(r,{children:"Ja, gå videre"}),e.jsx(r,{variant:"outline",children:"Nei, absolutt ikke"})]})]})]})},"ConfirmDismissDialog"),D=t(()=>{const[n,o]=i.useState(!0),s=t(()=>{o(p=>!p)},"onToggle"),[a,l]=i.useState({smsAlerts:!1}),x=t(p=>{const{type:b,checked:j,name:c,value:C}=p.target;l(b==="checkbox"?u=>({...u,[c]:j}):u=>({...u,[c]:C}))},"onChange");return e.jsxs(e.Fragment,{children:[e.jsx(r,{onClick:s,children:"Open modal"}),e.jsxs(f,{open:n,onClose:s,children:[e.jsxs(m,{children:[e.jsx("h1",{children:"Før du går videre ..."}),e.jsxs("p",{children:["Vi mangler varslingsadresser for ",e.jsx("strong",{children:"Bergen bar"}),"."]}),e.jsx("p",{children:"Legg inn en bedriftens e-post og evt. et telefonnummer for å motta varslinger om nytt innhold."})]}),e.jsxs(J,{size:"sm",children:[e.jsx(E,{label:"E-postadresse for varslinger",name:"email",placeholder:"E-postadresse"}),e.jsx(w,{onChange:x,label:"Varsle på SMS",name:"smsAlerts",value:"sms"}),a?.smsAlerts&&e.jsx(E,{name:"sms",placeholder:"Mobiltelefon"})]}),e.jsxs(g,{children:[e.jsx(r,{children:"Lagre og gå videre"}),e.jsx(r,{variant:"outline",children:"Hopp over"})]})]})]})},"OptionsDialog"),O=t(n=>{const[o,s]=i.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(r,{onClick:t(()=>s(!0),"onClick"),children:"Open modal"}),e.jsxs(d,{...n,open:o,onClose:t(()=>s(!1),"onClose"),variant:"content",children:[e.jsx(h,{title:"Modal title",onClose:t(()=>s(!1),"onClose")}),e.jsx(v,{children:e.jsxs(m,{children:[e.jsx("p",{children:"Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla. Donec id elit non mi porta gravida at eget metus. Donec sed odio dui. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."}),e.jsx("p",{children:"Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum id ligula porta felis euismod semper. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et."}),e.jsx("p",{children:"Nullam quis risus eget urna mollis ornare vel eu leo. Vestibulum id ligula porta felis euismod semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula porta felis euismod semper. Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."}),e.jsx("p",{children:"Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vestibulum id ligula porta felis euismod semper. Donec ullamcorper nulla non metus auctor fringilla. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis euismod."}),e.jsx("p",{children:"Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla. Donec id elit non mi porta gravida at eget metus. Donec sed odio dui. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."}),e.jsx("p",{children:"Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum id ligula porta felis euismod semper. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et."}),e.jsx("p",{children:"Nullam quis risus eget urna mollis ornare vel eu leo. Vestibulum id ligula porta felis euismod semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula porta felis euismod semper. Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."}),e.jsx("p",{children:"Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vestibulum id ligula porta felis euismod semper. Donec ullamcorper nulla non metus auctor fringilla. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis euismod."})]})})]})]})},"Content"),q=t(n=>{const[o,s]=i.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(r,{onClick:t(()=>s(!0),"onClick"),children:"Open modal"}),e.jsxs(d,{...n,open:o,onClose:t(()=>s(!1),"onClose"),variant:"content",children:[e.jsx(h,{title:"Modal title",onClose:t(()=>s(!1),"onClose"),sticky:!1}),e.jsx(v,{children:e.jsxs(m,{children:[e.jsx("p",{children:"Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla. Donec id elit non mi porta gravida at eget metus. Donec sed odio dui. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."}),e.jsx("p",{children:"Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum id ligula porta felis euismod semper. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et."}),e.jsx("p",{children:"Nullam quis risus eget urna mollis ornare vel eu leo. Vestibulum id ligula porta felis euismod semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula porta felis euismod semper. Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."}),e.jsx("p",{children:"Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vestibulum id ligula porta felis euismod semper. Donec ullamcorper nulla non metus auctor fringilla. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis euismod."}),e.jsx("p",{children:"Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla. Donec id elit non mi porta gravida at eget metus. Donec sed odio dui. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."}),e.jsx("p",{children:"Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum id ligula porta felis euismod semper. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et."}),e.jsx("p",{children:"Nullam quis risus eget urna mollis ornare vel eu leo. Vestibulum id ligula porta felis euismod semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula porta felis euismod semper. Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."}),e.jsx("p",{children:"Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vestibulum id ligula porta felis euismod semper. Donec ullamcorper nulla non metus auctor fringilla. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis euismod."})]})})]})]})},"NonStickyHeader"),T={render:t(n=>{const[o,s]=i.useState(!0);return e.jsxs(z,{padding:4,children:[e.jsx(r,{onClick:t(()=>s(!0),"onClick"),children:"Open modal"}),e.jsxs(d,{...n,open:o,onClose:t(()=>s(!1),"onClose"),variant:"full",children:[e.jsx(h,{title:"Modal title",onClose:t(()=>s(!1),"onClose")}),e.jsx(v,{children:e.jsx("p",{children:"Modal content."})})]})]})},"render")},F=t(n=>{const[o,s]=i.useState(!0),[a,l]=i.useState({smsAlerts:!0,phone:"99005544"}),x=t(p=>{const{type:b,checked:j,name:c,value:C}=p.target;l(b==="checkbox"?u=>({...u,[c]:j}):u=>({...u,[c]:C}))},"onChange");return e.jsxs(e.Fragment,{children:[e.jsx(r,{onClick:t(()=>s(!0),"onClick"),children:"Open modal"}),e.jsxs(d,{...n,open:o,onClose:t(()=>s(!1),"onClose"),children:[e.jsx(h,{icon:{type:"company",name:"Bergen Bar"},title:"Bergen Bar",description:"Org nr. XXX XXX XXX",onClose:t(()=>s(!1),"onClose")}),e.jsxs(v,{children:[e.jsx(P,{...n,...a,onChange:x}),e.jsxs(g,{children:[e.jsx(r,{children:"Lagre og avslutt"}),e.jsx(r,{variant:"outline",children:"Avbryt"})]})]})]})]})},"CompanyModal"),V=t(n=>{const[o,s]=i.useState(!0),[a,l]=i.useState({smsAlerts:!0,phone:"99005544"}),x=t(p=>{const{type:b,checked:j,name:c,value:C}=p.target;l(b==="checkbox"?u=>({...u,[c]:j}):u=>({...u,[c]:C}))},"onChange");return e.jsxs(e.Fragment,{children:[e.jsx(r,{onClick:t(()=>s(!0),"onClick"),children:"Open modal"}),e.jsxs(d,{...n,open:o,onClose:t(()=>s(!1),"onClose"),children:[e.jsx(h,{icon:G,title:"Varslinger",onClose:t(()=>s(!1),"onClose")}),e.jsxs(v,{children:[e.jsx(P,{...n,...a,onChange:x}),e.jsxs(g,{children:[e.jsx(r,{children:"Lagre og avslutt"}),e.jsx(r,{variant:"outline",children:"Avbryt"})]})]})]})]})},"SettingsModal"),N=t(n=>{const[o,s]=i.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx(r,{onClick:t(()=>s(!0),"onClick"),children:"Open modal"}),e.jsxs(d,{...n,open:o,onClose:t(()=>s(!1),"onClose"),children:[e.jsx(h,{icon:A,title:"Varslinger",onClose:t(()=>s(!1),"onClose")}),e.jsxs(v,{children:[e.jsxs(m,{size:"sm",children:[e.jsx("p",{children:"Hvis det har skjedd endringer i informasjonen som er registrert på selskapet, må du melde fra om dette i Samordnet registermelding."}),e.jsxs("p",{children:["Samordet registermelding finner du på ",e.jsx("a",{href:"https://brreg.no/",children:"brreg.no"}),"."]})]}),e.jsx(g,{size:"md",children:e.jsxs(r,{variant:"outline",children:[e.jsx(X,{}),e.jsx("span",{children:"Samordnet registermelding"})]})})]})]})," "]})},"ExternalModal");B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`(args: ModalProps) => {
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
}`,...B.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`(args: ModalProps) => {
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
}`,...S.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
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
}`,...M.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
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
}`,...y.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
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
}`,...k.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
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
}`,...D.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`(args: ModalBaseProps) => {
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
}`,...O.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`(args: ModalBaseProps) => {
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
}`,...q.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`(args: ModalBaseProps) => {
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
}`,...V.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`(args: ModalBaseProps) => {
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
}`,...N.parameters?.docs?.source}}};const fe=["Default","Dismissable","ConfirmDialog","DangerDialog","ConfirmDismissDialog","OptionsDialog","Content","NonStickyHeader","Full","CompanyModal","SettingsModal","ExternalModal"];export{F as CompanyModal,M as ConfirmDialog,k as ConfirmDismissDialog,O as Content,y as DangerDialog,B as Default,S as Dismissable,N as ExternalModal,T as Full,q as NonStickyHeader,D as OptionsDialog,V as SettingsModal,fe as __namedExportsOrder,ve as default};
