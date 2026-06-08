import{aa as g,a7 as t,c as u}from"./iframe-KbHODQgb.js";import{A as S}from"./AccountNotificationSettings-BAHVQ7FG.js";import{M as f,b as x,a as X}from"./ModalBody-BLUO0OyV.js";import{L as C}from"./List-DEwsIv64.js";import{S as v}from"./SettingsItem-Bnc2UwGo.js";import{B as j}from"./ButtonGroup-D1R72gzy.js";import"./preload-helper-PPVm8Dsz.js";import"./Fieldset-B1O7F_Xf.js";import"./Switch-ym8FDDIw.js";import"./Field-B8zKs9Bz.js";import"./Input-DwLHHyGz.js";import"./Label-C3jcdxRS.js";import"./TextField-BjErri7K.js";import"./FieldBase-Vfg8qV6A.js";import"./Typography-C9K693Jo.js";import"./useHighlightedText-uGguOCwY.js";import"./Section-BQYKGPm8.js";import"./Flex-DJYB_We1.js";import"./Avatar-DL544SyI.js";import"./AvatarGroup-CCjx5RK0.js";import"./Heading-jxV4Y0yK.js";import"./ListItem-B8fUE1Gh.js";import"./Badge-MoiWNolG.js";import"./Tooltip-BDxQfQSw.js";import"./ChevronUp-DjGQTIt5.js";import"./ChevronDown-DDGA5gfO.js";import"./ChevronRight-wplb_UH2.js";import"./SettingsItemBase-DG21eKyz.js";import"./ItemMedia-vwuqAhM8.js";import"./ItemBase-CTCHDdfF.js";import"./ItemLink-NIMU7q5y.js";import"./ItemControls-BYcmr1lT.js";import"./SettingsModal-_8PcUVyb.js";import"./ButtonIcon-J3Dvocxh.js";import"./ButtonLabel-S0TUviQT.js";const st={title:"Account/AccountNotificationSettings",component:S,tags:["autodocs"],parameters:{}},s={args:{}},o=n=>{const[c,a]=g.useState({...n}),e=p=>{const{type:A,checked:h,name:d,value:B}=p.target;a(A==="checkbox"?l=>({...l,[d]:h}):l=>({...l,[d]:B}))};return t.jsx(S,{...n,...c,onChange:e})},i=()=>t.jsx(o,{smsAlerts:!0,phone:"99005566"}),r=()=>t.jsx(o,{smsAlerts:!0,phone:"99005566",emailAlerts:!0,email:"mathias@brann.no"}),m=({title:n="Aktør"})=>{const[c,a]=g.useState(!1),e=()=>{a(p=>!p)};return t.jsxs(t.Fragment,{children:[t.jsx(u,{onClick:e,children:"Åpne modal"}),t.jsxs(f,{open:c,onClose:e,children:[t.jsx(x,{title:n,children:t.jsx(C,{children:t.jsx(v,{id:"bb",icon:{name:"Bergen Bar",type:"company"},title:"Bergen Bar",description:"Org. nr. XXX XXX XXX"})})}),t.jsxs(X,{children:[t.jsx(r,{}),t.jsxs(j,{children:[t.jsx(u,{onClick:e,children:"Lagre og avslutt"}),t.jsx(u,{onClick:e,variant:"outline",children:"Avbryt"})]})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
