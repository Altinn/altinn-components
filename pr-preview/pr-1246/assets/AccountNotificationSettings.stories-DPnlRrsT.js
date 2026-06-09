import{aa as g,a7 as t,c as u}from"./iframe-D6Pw3lmv.js";import{A as S}from"./AccountNotificationSettings-DnMYTlJF.js";import{M as f,b as x,a as X}from"./ModalBody-eofliHBo.js";import{L as C}from"./List-yiBkID25.js";import{S as v}from"./SettingsItem-CW-6UT7J.js";import{B as j}from"./ButtonGroup-BukNZ9_Z.js";import"./preload-helper-PPVm8Dsz.js";import"./Fieldset-D2_QSSax.js";import"./Switch-DTtTZAwl.js";import"./Field-FWJUOm-g.js";import"./Input-BPiAPMWI.js";import"./Label-DQDgnIdR.js";import"./TextField-1Y0CJPxo.js";import"./FieldBase-q3f36oGg.js";import"./Typography-bPKdoJNM.js";import"./useHighlightedText-iOuYupmt.js";import"./Section-B6MiXL8W.js";import"./Flex-CRGRbwD2.js";import"./Avatar-BMlUzpXZ.js";import"./AvatarGroup-AckQ-RzX.js";import"./Heading-Bsu5tLR0.js";import"./ListItem-B1hZ7A47.js";import"./Badge-CVXUfZnL.js";import"./Tooltip-BRKe6VnT.js";import"./ChevronUp-vVDQNUNf.js";import"./ChevronDown-CBhAS_PQ.js";import"./ChevronRight-DrJyRyMs.js";import"./SettingsItemBase-XkXN956I.js";import"./ItemMedia-BWttq_aD.js";import"./ItemBase-D25TzUDm.js";import"./ItemLink-J0cRTxzg.js";import"./ItemControls-DN7HEIDI.js";import"./SettingsModal-DtZGdoZV.js";import"./ButtonIcon-BZRYAWT7.js";import"./ButtonLabel-Byk5sCAh.js";const st={title:"Account/AccountNotificationSettings",component:S,tags:["autodocs"],parameters:{}},s={args:{}},o=n=>{const[c,a]=g.useState({...n}),e=p=>{const{type:A,checked:h,name:d,value:B}=p.target;a(A==="checkbox"?l=>({...l,[d]:h}):l=>({...l,[d]:B}))};return t.jsx(S,{...n,...c,onChange:e})},i=()=>t.jsx(o,{smsAlerts:!0,phone:"99005566"}),r=()=>t.jsx(o,{smsAlerts:!0,phone:"99005566",emailAlerts:!0,email:"mathias@brann.no"}),m=({title:n="Aktør"})=>{const[c,a]=g.useState(!1),e=()=>{a(p=>!p)};return t.jsxs(t.Fragment,{children:[t.jsx(u,{onClick:e,children:"Åpne modal"}),t.jsxs(f,{open:c,onClose:e,children:[t.jsx(x,{title:n,children:t.jsx(C,{children:t.jsx(v,{id:"bb",icon:{name:"Bergen Bar",type:"company"},title:"Bergen Bar",description:"Org. nr. XXX XXX XXX"})})}),t.jsxs(X,{children:[t.jsx(r,{}),t.jsxs(j,{children:[t.jsx(u,{onClick:e,children:"Lagre og avslutt"}),t.jsx(u,{onClick:e,variant:"outline",children:"Avbryt"})]})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
