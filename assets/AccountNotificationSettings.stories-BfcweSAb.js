import{s as g,p as t}from"./iframe-a6n42jIx.js";import{A as S}from"./AccountNotificationSettings-CZ6euQk4.js";import{B as u}from"./Button-DYhT04-k.js";import{M as f,b as x,a as X}from"./ModalBody-BJnVO0Kt.js";import{L as C}from"./List-COoWd7bx.js";import{S as v}from"./SettingsItem-DlTLSdm-.js";import{B as j}from"./ButtonGroup-r8c9eAn-.js";import"./preload-helper-PPVm8Dsz.js";import"./Fieldset-DQYus6I2.js";import"./tooltip-D8RdZxwd.js";import"./Switch-SU31XbhY.js";import"./index-D2z1-3lt.js";import"./Label-CP4RT8OS.js";import"./Input-BUxVKC9v.js";import"./TextField-BZ7hsKcf.js";import"./FieldBase-BOMRGuHX.js";import"./Typography-K_BS0H0I.js";import"./useHighlightedText-Bq-Ej33u.js";import"./Skeleton-BMznOa58.js";import"./Section-SbJC69tZ.js";import"./Flex-BTGTFkLF.js";import"./XMark-ENWUN_kz.js";import"./useId-JsUrCC3L.js";import"./Icon-C2KYL6xM.js";import"./Avatar-DDS_Cv_Z.js";import"./AvatarGroup-BaunAvi6.js";import"./Heading-Dza3pExo.js";import"./ListItem-CKB37Xdc.js";import"./Badge-BmuPJ3WS.js";import"./Tooltip-CHTkUxru.js";import"./ChevronUp-DaZVux3Q.js";import"./ChevronDown--dIT-Lld.js";import"./ChevronRight-DzQRiVjQ.js";import"./SettingsItemBase-B7NLkNBM.js";import"./ItemMedia-9TYJyMgm.js";import"./ItemLink-BU8f8KGB.js";import"./ItemControls-vHjq0nAG.js";import"./SettingsModal-CcO2d848.js";import"./ButtonIcon-BSWg8HV7.js";import"./ButtonLabel-00C_O_zy.js";const lt={title:"Account/AccountNotificationSettings",component:S,tags:["autodocs"],parameters:{}},s={args:{}},o=n=>{const[c,a]=g.useState({...n}),e=p=>{const{type:A,checked:B,name:d,value:h}=p.target;a(A==="checkbox"?l=>({...l,[d]:B}):l=>({...l,[d]:h}))};return t.jsx(S,{...n,...c,onChange:e})},i=()=>t.jsx(o,{smsAlerts:!0,phone:"99005566"}),r=()=>t.jsx(o,{smsAlerts:!0,phone:"99005566",emailAlerts:!0,email:"mathias@brann.no"}),m=({title:n="Aktør"})=>{const[c,a]=g.useState(!1),e=()=>{a(p=>!p)};return t.jsxs(t.Fragment,{children:[t.jsx(u,{onClick:e,children:"Åpne modal"}),t.jsxs(f,{open:c,onClose:e,children:[t.jsx(x,{title:n,children:t.jsx(C,{children:t.jsx(v,{id:"bb",icon:{name:"Bergen Bar",type:"company"},title:"Bergen Bar",description:"Org. nr. XXX XXX XXX"})})}),t.jsxs(X,{children:[t.jsx(r,{}),t.jsxs(j,{children:[t.jsx(u,{onClick:e,children:"Lagre og avslutt"}),t.jsx(u,{onClick:e,variant:"outline",children:"Avbryt"})]})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ut=["Default","Controlled","SmsAlerts","SmsAndEmailAlerts","AccountNotificationsModal"];export{m as AccountNotificationsModal,o as Controlled,s as Default,i as SmsAlerts,r as SmsAndEmailAlerts,ut as __namedExportsOrder,lt as default};
