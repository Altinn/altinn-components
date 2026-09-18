import{aa as g,a7 as t,c as u}from"./iframe-DXZBp66t.js";import{A as S}from"./AccountNotificationSettings-DSy1JT0C.js";import{M as f,b as x,a as X}from"./ModalBody-CKaAr9E1.js";import{L as C}from"./List-DtaDFrd1.js";import{S as v}from"./SettingsItem-OMKKRc_q.js";import{B as j}from"./ButtonGroup-B2DxSKEE.js";import"./preload-helper-PPVm8Dsz.js";import"./Fieldset-BBf9diXL.js";import"./Switch-1iQtSxG7.js";import"./Field-awsdGPJZ.js";import"./Input--Cg-6oUs.js";import"./Label-Byvm_JcV.js";import"./TextField-i7J-tqY2.js";import"./FieldBase-Cs4Gpo93.js";import"./Typography-YwBvvLgA.js";import"./useHighlightedText-D_TdPqyJ.js";import"./Section-CFAnjMLz.js";import"./Flex-D7Hg4_mS.js";import"./Avatar-DCOejOD4.js";import"./AvatarGroup-BwSN7x0U.js";import"./Heading-Dabq2F6t.js";import"./ListItem-cxKfvIRk.js";import"./Badge-CBM-v4IH.js";import"./Tooltip-kyFcP-VK.js";import"./ChevronUp-BmPa9GH0.js";import"./ChevronDown-nMZldMxX.js";import"./ChevronRight-Cf4DVjz-.js";import"./SettingsItemBase-DfAAl5Xt.js";import"./ItemMedia-C0bdVmnE.js";import"./ItemBase-jUefiPXL.js";import"./ItemLink-DQt-IKdJ.js";import"./ItemControls-CKEXZGvE.js";import"./SettingsModal-ClZOd0n6.js";import"./ButtonIcon-qbUbLnzO.js";import"./ButtonLabel-BlR3YqzS.js";const st={title:"Account/AccountNotificationSettings",component:S,tags:["autodocs"],parameters:{}},s={args:{}},o=n=>{const[c,a]=g.useState({...n}),e=p=>{const{type:A,checked:h,name:d,value:B}=p.target;a(A==="checkbox"?l=>({...l,[d]:h}):l=>({...l,[d]:B}))};return t.jsx(S,{...n,...c,onChange:e})},i=()=>t.jsx(o,{smsAlerts:!0,phone:"99005566"}),r=()=>t.jsx(o,{smsAlerts:!0,phone:"99005566",emailAlerts:!0,email:"mathias@brann.no"}),m=({title:n="Aktør"})=>{const[c,a]=g.useState(!1),e=()=>{a(p=>!p)};return t.jsxs(t.Fragment,{children:[t.jsx(u,{onClick:e,children:"Åpne modal"}),t.jsxs(f,{open:c,onClose:e,children:[t.jsx(x,{title:n,children:t.jsx(C,{children:t.jsx(v,{id:"bb",icon:{name:"Bergen Bar",type:"company"},title:"Bergen Bar",description:"Org. nr. XXX XXX XXX"})})}),t.jsxs(X,{children:[t.jsx(r,{}),t.jsxs(j,{children:[t.jsx(u,{onClick:e,children:"Lagre og avslutt"}),t.jsx(u,{onClick:e,variant:"outline",children:"Avbryt"})]})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
