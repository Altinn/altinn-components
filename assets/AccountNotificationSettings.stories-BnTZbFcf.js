import{aa as g,a7 as t,c as u}from"./iframe-CAfDO4Rw.js";import{A as S}from"./AccountNotificationSettings-U-lpVll4.js";import{M as f,b as x,a as X}from"./ModalBody-BswaS8cy.js";import{L as C}from"./List-IhGHJ_0j.js";import{S as v}from"./SettingsItem-oA_-525D.js";import{B as j}from"./ButtonGroup-CUCgVY-r.js";import"./preload-helper-PPVm8Dsz.js";import"./Fieldset-oOWDgLCT.js";import"./Switch-DrFSt_mm.js";import"./Field-CeOsIMBN.js";import"./Input-xoXFTL9F.js";import"./Label-Dty_TUWJ.js";import"./TextField-Ds_w_q0K.js";import"./FieldBase-E5ODadVE.js";import"./Typography-CTt20h0e.js";import"./useHighlightedText-D1Egz4xv.js";import"./Section-BoMEazBp.js";import"./Flex-T7A62cDZ.js";import"./Avatar-CgZyFHuO.js";import"./AvatarGroup-wzegiK4S.js";import"./Heading-YvXsCKAz.js";import"./ListItem-B4Cw7EmV.js";import"./Badge-2r7QR-Ea.js";import"./Tooltip-CnjxI-as.js";import"./ChevronUp-Drx-r-2C.js";import"./ChevronDown-BlOuVwd9.js";import"./ChevronRight-CMD5YJ4n.js";import"./SettingsItemBase-dCqVkkCT.js";import"./ItemMedia-C1xz5qH-.js";import"./ItemBase-BuGGJ2CO.js";import"./ItemLink-CCPRI1Ze.js";import"./ItemControls-DVGHNPwh.js";import"./SettingsModal-YVbPlhU4.js";import"./ButtonIcon-DGXgnp7S.js";import"./ButtonLabel-Dlfdkbnt.js";const st={title:"Account/AccountNotificationSettings",component:S,tags:["autodocs"],parameters:{}},s={args:{}},o=n=>{const[c,a]=g.useState({...n}),e=p=>{const{type:A,checked:h,name:d,value:B}=p.target;a(A==="checkbox"?l=>({...l,[d]:h}):l=>({...l,[d]:B}))};return t.jsx(S,{...n,...c,onChange:e})},i=()=>t.jsx(o,{smsAlerts:!0,phone:"99005566"}),r=()=>t.jsx(o,{smsAlerts:!0,phone:"99005566",emailAlerts:!0,email:"mathias@brann.no"}),m=({title:n="Aktør"})=>{const[c,a]=g.useState(!1),e=()=>{a(p=>!p)};return t.jsxs(t.Fragment,{children:[t.jsx(u,{onClick:e,children:"Åpne modal"}),t.jsxs(f,{open:c,onClose:e,children:[t.jsx(x,{title:n,children:t.jsx(C,{children:t.jsx(v,{id:"bb",icon:{name:"Bergen Bar",type:"company"},title:"Bergen Bar",description:"Org. nr. XXX XXX XXX"})})}),t.jsxs(X,{children:[t.jsx(r,{}),t.jsxs(j,{children:[t.jsx(u,{onClick:e,children:"Lagre og avslutt"}),t.jsx(u,{onClick:e,variant:"outline",children:"Avbryt"})]})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(args: AccountNotificationSettingsProps) => {
  const [formData, setFormData] = useState({
    ...args
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
  return <AccountNotificationSettings {...args} {...formData} onChange={onChange} />;
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  return <Controlled smsAlerts={true} phone="99005566" />;
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  return <Controlled smsAlerts={true} phone="99005566" emailAlerts={true} email="mathias@brann.no" />;
}`,...r.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`({
  title = 'Aktør'
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Åpne modal</Button>
      <ModalBase open={open} onClose={onToggle}>
        <ModalHeader title={title}>
          <List>
            <SettingsItem id="bb" icon={{
            name: 'Bergen Bar',
            type: 'company'
          }} title="Bergen Bar" description="Org. nr. XXX XXX XXX" />
          </List>
        </ModalHeader>
        <ModalBody>
          <SmsAndEmailAlerts />
          <ButtonGroup>
            <Button onClick={onToggle}>Lagre og avslutt</Button>
            <Button onClick={onToggle} variant="outline">
              Avbryt
            </Button>
          </ButtonGroup>
        </ModalBody>
      </ModalBase>
    </>;
}`,...m.parameters?.docs?.source}}};const it=["Default","Controlled","SmsAlerts","SmsAndEmailAlerts","AccountNotificationsModal"];export{m as AccountNotificationsModal,o as Controlled,s as Default,i as SmsAlerts,r as SmsAndEmailAlerts,it as __namedExportsOrder,st as default};
