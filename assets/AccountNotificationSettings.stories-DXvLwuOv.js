import{s as g,p as t}from"./iframe-WHERbRNQ.js";import{A as S}from"./AccountNotificationSettings-CDI-xBPj.js";import{B as u}from"./Button-DkTjWAj1.js";import{M as f,b as x,a as X}from"./ModalBody-7W0CxkDb.js";import{L as C}from"./List-D4V152hW.js";import{S as v}from"./SettingsItem-CgOb41Ez.js";import{B as j}from"./ButtonGroup-BZN8TM8O.js";import"./preload-helper-PPVm8Dsz.js";import"./Fieldset-P-4sGzUV.js";import"./tooltip-C7TGaz5I.js";import"./Switch-DwucQso5.js";import"./index-CPQpJFkN.js";import"./Label-DoBAei1C.js";import"./Input-D2AEap14.js";import"./TextField-XgPuuW3K.js";import"./FieldBase-9wEEVFHi.js";import"./Typography-CVWBmure.js";import"./useHighlightedText-CCsQk8zm.js";import"./Skeleton-rNcUZaAx.js";import"./Section-D-Yeh31t.js";import"./Flex-DJNl6q2s.js";import"./XMark-5kXogJ_J.js";import"./useId-BfbJ7PbP.js";import"./Icon-jpLauUO9.js";import"./Avatar-BsRLrsxS.js";import"./AvatarGroup-Bo3l1p7S.js";import"./Heading-POmwd9W2.js";import"./ListItem-DNg50TZS.js";import"./Badge-DPxfDcUM.js";import"./Tooltip-C3iERcDF.js";import"./ChevronUp-BIOdACnc.js";import"./ChevronDown-DWIhSCAm.js";import"./ChevronRight-HD9xUhWG.js";import"./SettingsItemBase-DLWRfTF4.js";import"./ItemMedia-CZ4j0uoG.js";import"./ItemBase-BC1KuoSI.js";import"./ItemLink-Bc2_vK4_.js";import"./ItemControls-CXMEe70O.js";import"./SettingsModal-Cgo4pod6.js";import"./ButtonIcon-Dpjnx9Q5.js";import"./ButtonLabel-DaknUBOb.js";const ut={title:"Account/AccountNotificationSettings",component:S,tags:["autodocs"],parameters:{}},s={args:{}},o=n=>{const[c,a]=g.useState({...n}),e=p=>{const{type:A,checked:B,name:d,value:h}=p.target;a(A==="checkbox"?l=>({...l,[d]:B}):l=>({...l,[d]:h}))};return t.jsx(S,{...n,...c,onChange:e})},i=()=>t.jsx(o,{smsAlerts:!0,phone:"99005566"}),r=()=>t.jsx(o,{smsAlerts:!0,phone:"99005566",emailAlerts:!0,email:"mathias@brann.no"}),m=({title:n="Aktør"})=>{const[c,a]=g.useState(!1),e=()=>{a(p=>!p)};return t.jsxs(t.Fragment,{children:[t.jsx(u,{onClick:e,children:"Åpne modal"}),t.jsxs(f,{open:c,onClose:e,children:[t.jsx(x,{title:n,children:t.jsx(C,{children:t.jsx(v,{id:"bb",icon:{name:"Bergen Bar",type:"company"},title:"Bergen Bar",description:"Org. nr. XXX XXX XXX"})})}),t.jsxs(X,{children:[t.jsx(r,{}),t.jsxs(j,{children:[t.jsx(u,{onClick:e,children:"Lagre og avslutt"}),t.jsx(u,{onClick:e,variant:"outline",children:"Avbryt"})]})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const dt=["Default","Controlled","SmsAlerts","SmsAndEmailAlerts","AccountNotificationsModal"];export{m as AccountNotificationsModal,o as Controlled,s as Default,i as SmsAlerts,r as SmsAndEmailAlerts,dt as __namedExportsOrder,ut as default};
