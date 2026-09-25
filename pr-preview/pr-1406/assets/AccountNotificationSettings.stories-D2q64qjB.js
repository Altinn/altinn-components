import{aa as g,a7 as t,c as u}from"./iframe-vkxhbe5D.js";import{A as S}from"./AccountNotificationSettings-DKYcQcnz.js";import{M as f,b as x,a as X}from"./ModalBody-DMnwwAr3.js";import{L as C}from"./List-BJAmkQFZ.js";import{S as v}from"./SettingsItem-BYguKgsh.js";import{B as j}from"./ButtonGroup-Bd7c8rmX.js";import"./preload-helper-PPVm8Dsz.js";import"./Fieldset-DmG9BQOf.js";import"./Switch-IF2_uDNO.js";import"./Field-BcGRggAS.js";import"./Input-B9GDLkmV.js";import"./Label-DJ_rl2vz.js";import"./TextField-C_iOCERW.js";import"./FieldBase-BW43HWjL.js";import"./Typography-CiocPTHR.js";import"./useHighlightedText-DzpG-WJS.js";import"./Section-OrN1j090.js";import"./Flex-C01l7uCb.js";import"./Avatar-DCCKPKpG.js";import"./AvatarGroup-73OlPczV.js";import"./Heading-BheO61Dl.js";import"./ListItem-CZ_cmVNu.js";import"./Badge-B0jqz-MR.js";import"./Tooltip-BAvCNtSf.js";import"./ChevronUp-BTS4WsVi.js";import"./ChevronDown-CQjb94KI.js";import"./ChevronRight-BjSUzT6t.js";import"./SettingsItemBase-DC9Hi0Xx.js";import"./ItemMedia-iOETwWXj.js";import"./ItemBase-C6j3qrdE.js";import"./ItemLink-OwzyFxZn.js";import"./ItemControls-Dt4HN_B7.js";import"./SettingsModal-DangJQGU.js";import"./ButtonIcon-BjmAFG2x.js";import"./ButtonLabel-CaIsvuRE.js";const st={title:"Account/AccountNotificationSettings",component:S,tags:["autodocs"],parameters:{}},s={args:{}},o=n=>{const[c,a]=g.useState({...n}),e=p=>{const{type:A,checked:h,name:d,value:B}=p.target;a(A==="checkbox"?l=>({...l,[d]:h}):l=>({...l,[d]:B}))};return t.jsx(S,{...n,...c,onChange:e})},i=()=>t.jsx(o,{smsAlerts:!0,phone:"99005566"}),r=()=>t.jsx(o,{smsAlerts:!0,phone:"99005566",emailAlerts:!0,email:"mathias@brann.no"}),m=({title:n="Aktør"})=>{const[c,a]=g.useState(!1),e=()=>{a(p=>!p)};return t.jsxs(t.Fragment,{children:[t.jsx(u,{onClick:e,children:"Åpne modal"}),t.jsxs(f,{open:c,onClose:e,children:[t.jsx(x,{title:n,children:t.jsx(C,{children:t.jsx(v,{id:"bb",icon:{name:"Bergen Bar",type:"company"},title:"Bergen Bar",description:"Org. nr. XXX XXX XXX"})})}),t.jsxs(X,{children:[t.jsx(r,{}),t.jsxs(j,{children:[t.jsx(u,{onClick:e,children:"Lagre og avslutt"}),t.jsx(u,{onClick:e,variant:"outline",children:"Avbryt"})]})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
