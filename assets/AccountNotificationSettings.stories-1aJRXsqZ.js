import{aa as g,a7 as t,c as u}from"./iframe-CId_qj2z.js";import{A as S}from"./AccountNotificationSettings-zMvtavWV.js";import{M as f,b as x,a as X}from"./ModalBody-Dz1aFIAA.js";import{L as C}from"./List-DXvLeeCM.js";import{S as v}from"./SettingsItem-jVVCw9XU.js";import{B as j}from"./ButtonGroup-BzI-lfVi.js";import"./preload-helper-PPVm8Dsz.js";import"./Fieldset-CmK-0hU8.js";import"./Switch-Jy7pPJYw.js";import"./Field-C9CrCSTd.js";import"./Input-qq9zM3Qu.js";import"./Label-Bri1HqH-.js";import"./TextField-QbJymoSS.js";import"./FieldBase-BhNxXsJd.js";import"./Typography-DeDqtkyf.js";import"./useHighlightedText-B-8pDdyK.js";import"./Section-B4HJGPR6.js";import"./Flex-CPV4Eexm.js";import"./Avatar-qewy70Fx.js";import"./AvatarGroup-DDqOMRUz.js";import"./Heading-sNyVbkrk.js";import"./ListItem-UVHT4kno.js";import"./Badge-DHd56Np2.js";import"./Tooltip-B4yZ0kY7.js";import"./ChevronUp-7fsujl90.js";import"./ChevronDown-D4kQ2fb9.js";import"./ChevronRight-CD2F4Mmq.js";import"./SettingsItemBase-DJsVo98M.js";import"./ItemMedia-DATZMrih.js";import"./ItemBase-Bm8A6BXO.js";import"./ItemLink-BiQUVyar.js";import"./ItemControls-s3x5r9Y_.js";import"./SettingsModal-Ypx-VLJc.js";import"./ButtonIcon-6rERrVIq.js";import"./ButtonLabel-CxcuksMv.js";const st={title:"Account/AccountNotificationSettings",component:S,tags:["autodocs"],parameters:{}},s={args:{}},o=n=>{const[c,a]=g.useState({...n}),e=p=>{const{type:A,checked:h,name:d,value:B}=p.target;a(A==="checkbox"?l=>({...l,[d]:h}):l=>({...l,[d]:B}))};return t.jsx(S,{...n,...c,onChange:e})},i=()=>t.jsx(o,{smsAlerts:!0,phone:"99005566"}),r=()=>t.jsx(o,{smsAlerts:!0,phone:"99005566",emailAlerts:!0,email:"mathias@brann.no"}),m=({title:n="Aktør"})=>{const[c,a]=g.useState(!1),e=()=>{a(p=>!p)};return t.jsxs(t.Fragment,{children:[t.jsx(u,{onClick:e,children:"Åpne modal"}),t.jsxs(f,{open:c,onClose:e,children:[t.jsx(x,{title:n,children:t.jsx(C,{children:t.jsx(v,{id:"bb",icon:{name:"Bergen Bar",type:"company"},title:"Bergen Bar",description:"Org. nr. XXX XXX XXX"})})}),t.jsxs(X,{children:[t.jsx(r,{}),t.jsxs(j,{children:[t.jsx(u,{onClick:e,children:"Lagre og avslutt"}),t.jsx(u,{onClick:e,variant:"outline",children:"Avbryt"})]})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
