import{aa as g,a7 as t,c as u}from"./iframe-D3QbR5Le.js";import{A as S}from"./AccountNotificationSettings-Bg_cl4WI.js";import{M as f,b as x,a as X}from"./ModalBody-BwpzmVNb.js";import{L as C}from"./List-DwnCtREa.js";import{S as v}from"./SettingsItem-DRJ7Gbns.js";import{B as j}from"./ButtonGroup-BYb3YlMN.js";import"./preload-helper-PPVm8Dsz.js";import"./Fieldset-5LTqSg2E.js";import"./Switch-BOPbfOkf.js";import"./Field-CmklkMP8.js";import"./Input-fbRgifOV.js";import"./Label-1ernyuR0.js";import"./TextField-BeFFvfBE.js";import"./FieldBase-BVisqjo6.js";import"./Typography-Dc0CQRXO.js";import"./useHighlightedText-Cs6VCP7b.js";import"./Section-C8MEyA5r.js";import"./Flex-Dql3tqb8.js";import"./Avatar-0HMs51Xi.js";import"./AvatarGroup-BqAJnN7l.js";import"./Heading-D807jdih.js";import"./ListItem-Bm9_FWTz.js";import"./Badge-D-6Sz0uL.js";import"./Tooltip-r3UZaGLO.js";import"./ChevronUp-CTGCEiGM.js";import"./ChevronDown-B0RV9pqr.js";import"./ChevronRight-CW8WMRnL.js";import"./SettingsItemBase-Lt2ogKyw.js";import"./ItemMedia-By1N_mbL.js";import"./ItemBase-CEAJBqnC.js";import"./ItemLink-CZhIWltI.js";import"./ItemControls-UDFYeL-1.js";import"./SettingsModal-CeyZSZ--.js";import"./ButtonIcon-Ye1m4QhY.js";import"./ButtonLabel-ChXqurd4.js";const st={title:"Account/AccountNotificationSettings",component:S,tags:["autodocs"],parameters:{}},s={args:{}},o=n=>{const[c,a]=g.useState({...n}),e=p=>{const{type:A,checked:h,name:d,value:B}=p.target;a(A==="checkbox"?l=>({...l,[d]:h}):l=>({...l,[d]:B}))};return t.jsx(S,{...n,...c,onChange:e})},i=()=>t.jsx(o,{smsAlerts:!0,phone:"99005566"}),r=()=>t.jsx(o,{smsAlerts:!0,phone:"99005566",emailAlerts:!0,email:"mathias@brann.no"}),m=({title:n="Aktør"})=>{const[c,a]=g.useState(!1),e=()=>{a(p=>!p)};return t.jsxs(t.Fragment,{children:[t.jsx(u,{onClick:e,children:"Åpne modal"}),t.jsxs(f,{open:c,onClose:e,children:[t.jsx(x,{title:n,children:t.jsx(C,{children:t.jsx(v,{id:"bb",icon:{name:"Bergen Bar",type:"company"},title:"Bergen Bar",description:"Org. nr. XXX XXX XXX"})})}),t.jsxs(X,{children:[t.jsx(r,{}),t.jsxs(j,{children:[t.jsx(u,{onClick:e,children:"Lagre og avslutt"}),t.jsx(u,{onClick:e,variant:"outline",children:"Avbryt"})]})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
