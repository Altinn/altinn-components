import{aa as g,a7 as t,c as u}from"./iframe-DTEeNdyk.js";import{A as S}from"./AccountNotificationSettings-Cb2r0LG4.js";import{M as f,b as x,a as X}from"./ModalBody-CfnSJT4_.js";import{L as C}from"./List-CU3KNR3a.js";import{S as v}from"./SettingsItem-CX9DYdlK.js";import{B as j}from"./ButtonGroup-C9iOkEQW.js";import"./preload-helper-PPVm8Dsz.js";import"./Fieldset-desO2eeR.js";import"./Switch-DCLLijOX.js";import"./Field-IhE5_Jjk.js";import"./Input-BxybDda_.js";import"./Label-B-q4Hdcy.js";import"./TextField-CwRDu9ti.js";import"./FieldBase-DjxBgQLC.js";import"./Typography-CqVDEuXx.js";import"./useHighlightedText-D9AI5Zbv.js";import"./Section-D3DDcoJn.js";import"./Flex-Bg6HJ0Xq.js";import"./Avatar-vmGSBU3d.js";import"./AvatarGroup-Sicw8XeK.js";import"./Heading-DUvNz5de.js";import"./ListItem-DvG_gwPx.js";import"./Badge-CRnEe1Vv.js";import"./Tooltip-Oh_JH-x_.js";import"./ChevronUp-C99xJaCq.js";import"./ChevronDown-MYe8GL0o.js";import"./ChevronRight-DC0APSAK.js";import"./SettingsItemBase-CuUzDCHv.js";import"./ItemMedia-BWl2RL2w.js";import"./ItemBase-CqyVza2q.js";import"./ItemLink-TlorRN3x.js";import"./ItemControls-BKFWWzHw.js";import"./SettingsModal-dBfWKUwq.js";import"./ButtonIcon-3YefSWar.js";import"./ButtonLabel-aN9xoT5L.js";const st={title:"Account/AccountNotificationSettings",component:S,tags:["autodocs"],parameters:{}},s={args:{}},o=n=>{const[c,a]=g.useState({...n}),e=p=>{const{type:A,checked:h,name:d,value:B}=p.target;a(A==="checkbox"?l=>({...l,[d]:h}):l=>({...l,[d]:B}))};return t.jsx(S,{...n,...c,onChange:e})},i=()=>t.jsx(o,{smsAlerts:!0,phone:"99005566"}),r=()=>t.jsx(o,{smsAlerts:!0,phone:"99005566",emailAlerts:!0,email:"mathias@brann.no"}),m=({title:n="Aktør"})=>{const[c,a]=g.useState(!1),e=()=>{a(p=>!p)};return t.jsxs(t.Fragment,{children:[t.jsx(u,{onClick:e,children:"Åpne modal"}),t.jsxs(f,{open:c,onClose:e,children:[t.jsx(x,{title:n,children:t.jsx(C,{children:t.jsx(v,{id:"bb",icon:{name:"Bergen Bar",type:"company"},title:"Bergen Bar",description:"Org. nr. XXX XXX XXX"})})}),t.jsxs(X,{children:[t.jsx(r,{}),t.jsxs(j,{children:[t.jsx(u,{onClick:e,children:"Lagre og avslutt"}),t.jsx(u,{onClick:e,variant:"outline",children:"Avbryt"})]})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
