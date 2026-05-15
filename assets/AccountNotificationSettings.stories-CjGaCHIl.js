import{r as g,j as t}from"./iframe-CZMLD2fe.js";import{A as S}from"./AccountNotificationSettings-D8O7gPzm.js";import{B as u}from"./Button-z0ZioQWK.js";import{M as f,a as x,b as X}from"./ModalBody-COFFml6R.js";import{L as C}from"./List-DD7ggiIe.js";import{S as j}from"./SettingsItem-uM6SM568.js";import{B as v}from"./ButtonGroup-lppFG0T2.js";import"./preload-helper-PPVm8Dsz.js";import"./Fieldset-CaCWnSVo.js";import"./lite-DaUVFjkg.js";import"./index-DZ8nICMn.js";import"./use-merge-refs-BZH6UNTX.js";import"./Switch-k_GymHg0.js";import"./index-iGjPLQV7.js";import"./Label-C0JPWrbN.js";import"./Input-1NX1qonS.js";import"./input-okGdJMyY.js";import"./TextField-DWuCPUHk.js";import"./FieldBase-bsYRos9m.js";import"./Typography-BegW4Ytw.js";import"./useHighlightedText-CmlayFSP.js";import"./Skeleton-D52MvI5U.js";import"./button-CZknkFMR.js";import"./Section-B1dSFwPq.js";import"./Flex-oWhCvzqt.js";import"./XMark-BBRiAlI8.js";import"./useId-Dmu9AgSD.js";import"./Icon-CbE8dCFV.js";import"./Avatar-DzGFAhDt.js";import"./AvatarGroup-sNwukvT8.js";import"./Heading-5rlhad8Q.js";import"./ListItem-rMlRzJII.js";import"./Badge-CuHz7XFr.js";import"./Tooltip-Cmq5kiMI.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ChevronUp-C_Nv0CUA.js";import"./ChevronDown-Bjx7qU4A.js";import"./ChevronRight-7zRCvc5i.js";import"./SettingsItemBase-C4lOIklE.js";import"./ItemLink-D5-BdpwL.js";import"./ItemMedia-CE_zTi22.js";import"./ItemControls-CSi2HZsx.js";import"./SettingsModal-BPOEW54D.js";import"./ButtonIcon-BscAx0sF.js";import"./ButtonLabel-k_kFU7aM.js";const At={title:"Account/AccountNotificationSettings",component:S,tags:["autodocs"],parameters:{}},s={args:{}},r=n=>{const[p,a]=g.useState({...n}),e=c=>{const{type:A,checked:B,name:d,value:h}=c.target;a(A==="checkbox"?l=>({...l,[d]:B}):l=>({...l,[d]:h}))};return t.jsx(S,{...n,...p,onChange:e})},i=()=>t.jsx(r,{smsAlerts:!0,phone:"99005566"}),o=()=>t.jsx(r,{smsAlerts:!0,phone:"99005566",emailAlerts:!0,email:"mathias@brann.no"}),m=({title:n="Aktør"})=>{const[p,a]=g.useState(!1),e=()=>{a(c=>!c)};return t.jsxs(t.Fragment,{children:[t.jsx(u,{onClick:e,children:"Åpne modal"}),t.jsxs(f,{open:p,onClose:e,children:[t.jsx(x,{title:n,children:t.jsx(C,{children:t.jsx(j,{id:"bb",icon:{name:"Bergen Bar",type:"company"},title:"Bergen Bar",description:"Org. nr. XXX XXX XXX"})})}),t.jsxs(X,{children:[t.jsx(o,{}),t.jsxs(v,{children:[t.jsx(u,{onClick:e,children:"Lagre og avslutt"}),t.jsx(u,{onClick:e,variant:"outline",children:"Avbryt"})]})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`(args: AccountNotificationSettingsProps) => {
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
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  return <Controlled smsAlerts={true} phone="99005566" />;
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  return <Controlled smsAlerts={true} phone="99005566" emailAlerts={true} email="mathias@brann.no" />;
}`,...o.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`({
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
}`,...m.parameters?.docs?.source}}};const Bt=["Default","Controlled","SmsAlerts","SmsAndEmailAlerts","AccountNotificationsModal"];export{m as AccountNotificationsModal,r as Controlled,s as Default,i as SmsAlerts,o as SmsAndEmailAlerts,Bt as __namedExportsOrder,At as default};
