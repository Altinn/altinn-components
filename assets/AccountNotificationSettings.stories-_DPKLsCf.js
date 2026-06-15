import{aa as g,a7 as t,c as u}from"./iframe-DdvxY_xq.js";import{A as S}from"./AccountNotificationSettings-BoRTAB7C.js";import{M as f,b as x,a as X}from"./ModalBody-DsO_o22C.js";import{L as C}from"./List-D-SdhPLS.js";import{S as v}from"./SettingsItem-DEGsY3PT.js";import{B as j}from"./ButtonGroup-D_joR3q8.js";import"./preload-helper-PPVm8Dsz.js";import"./Fieldset-DJUmo8lq.js";import"./Switch-C2kkkoTe.js";import"./Field-Dc25EUil.js";import"./Input-2Gn2X0Ml.js";import"./Label-CJtMWK76.js";import"./TextField-Bv_39GkJ.js";import"./FieldBase-DD97eycm.js";import"./Typography-CUBjJcUl.js";import"./useHighlightedText-BFt57PCX.js";import"./Section-lr4hansN.js";import"./Flex-Ban15jaQ.js";import"./Avatar-BkRf-LcA.js";import"./AvatarGroup-o6Z87nDX.js";import"./Heading-CE6yLC7h.js";import"./ListItem-Ct5xEdC8.js";import"./Badge-CGTcd0en.js";import"./Tooltip-BRmZYzim.js";import"./ChevronUp-C_S4jFxx.js";import"./ChevronDown-BoDhB4yd.js";import"./ChevronRight-C3Cb2zNm.js";import"./SettingsItemBase-CQVL7LEG.js";import"./ItemMedia-DUTgrI06.js";import"./ItemBase-BUxw1lU_.js";import"./ItemLink-S0obXchf.js";import"./ItemControls-DoOKV45e.js";import"./SettingsModal-CwLHclOx.js";import"./ButtonIcon-BH7NDyQX.js";import"./ButtonLabel-kMxmKDlJ.js";const st={title:"Account/AccountNotificationSettings",component:S,tags:["autodocs"],parameters:{}},s={args:{}},o=n=>{const[c,a]=g.useState({...n}),e=p=>{const{type:A,checked:h,name:d,value:B}=p.target;a(A==="checkbox"?l=>({...l,[d]:h}):l=>({...l,[d]:B}))};return t.jsx(S,{...n,...c,onChange:e})},i=()=>t.jsx(o,{smsAlerts:!0,phone:"99005566"}),r=()=>t.jsx(o,{smsAlerts:!0,phone:"99005566",emailAlerts:!0,email:"mathias@brann.no"}),m=({title:n="Aktør"})=>{const[c,a]=g.useState(!1),e=()=>{a(p=>!p)};return t.jsxs(t.Fragment,{children:[t.jsx(u,{onClick:e,children:"Åpne modal"}),t.jsxs(f,{open:c,onClose:e,children:[t.jsx(x,{title:n,children:t.jsx(C,{children:t.jsx(v,{id:"bb",icon:{name:"Bergen Bar",type:"company"},title:"Bergen Bar",description:"Org. nr. XXX XXX XXX"})})}),t.jsxs(X,{children:[t.jsx(r,{}),t.jsxs(j,{children:[t.jsx(u,{onClick:e,children:"Lagre og avslutt"}),t.jsx(u,{onClick:e,variant:"outline",children:"Avbryt"})]})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
