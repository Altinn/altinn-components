import{aa as g,a7 as t,c as u}from"./iframe-Da53zzTq.js";import{A as S}from"./AccountNotificationSettings-Cc2AuBmi.js";import{M as f,b as x,a as X}from"./ModalBody-CWm38mqT.js";import{L as C}from"./List-CC5ASBuj.js";import{S as v}from"./SettingsItem-BeuHMIHB.js";import{B as j}from"./ButtonGroup-D9Sva-zY.js";import"./preload-helper-PPVm8Dsz.js";import"./Fieldset-D12O3Gzy.js";import"./Switch-DAQ_sxHW.js";import"./Field-BfWcyiGr.js";import"./Input-CoMQYpcI.js";import"./Label-BttEpvGq.js";import"./TextField-SHZ6OI7S.js";import"./FieldBase-BU_zP5Yv.js";import"./Typography-Dy4MqSc4.js";import"./useHighlightedText-CRKmbQjK.js";import"./Section-CfHJUgK6.js";import"./Flex-D2KvdX5w.js";import"./Avatar-CNmsZKUa.js";import"./AvatarGroup-CiKX_xpR.js";import"./Heading-DscqP9Yc.js";import"./ListItem-y8d5EwTe.js";import"./Badge-Cz-Xpmja.js";import"./Tooltip-Ovi09slt.js";import"./ChevronUp-kw1y4I9y.js";import"./ChevronDown-n3Y6y8IU.js";import"./ChevronRight-R352om1g.js";import"./SettingsItemBase-Bk5ZV-QL.js";import"./ItemMedia-DBIH2IUr.js";import"./ItemBase-DxSyPEoM.js";import"./ItemLink-LSrTzTCf.js";import"./ItemControls-ohsHtP8K.js";import"./SettingsModal-BEEglA2y.js";import"./ButtonIcon-D9kRL-nY.js";import"./ButtonLabel-D6-xX-4X.js";const st={title:"Account/AccountNotificationSettings",component:S,tags:["autodocs"],parameters:{}},s={args:{}},o=n=>{const[c,a]=g.useState({...n}),e=p=>{const{type:A,checked:h,name:d,value:B}=p.target;a(A==="checkbox"?l=>({...l,[d]:h}):l=>({...l,[d]:B}))};return t.jsx(S,{...n,...c,onChange:e})},i=()=>t.jsx(o,{smsAlerts:!0,phone:"99005566"}),r=()=>t.jsx(o,{smsAlerts:!0,phone:"99005566",emailAlerts:!0,email:"mathias@brann.no"}),m=({title:n="Aktør"})=>{const[c,a]=g.useState(!1),e=()=>{a(p=>!p)};return t.jsxs(t.Fragment,{children:[t.jsx(u,{onClick:e,children:"Åpne modal"}),t.jsxs(f,{open:c,onClose:e,children:[t.jsx(x,{title:n,children:t.jsx(C,{children:t.jsx(v,{id:"bb",icon:{name:"Bergen Bar",type:"company"},title:"Bergen Bar",description:"Org. nr. XXX XXX XXX"})})}),t.jsxs(X,{children:[t.jsx(r,{}),t.jsxs(j,{children:[t.jsx(u,{onClick:e,children:"Lagre og avslutt"}),t.jsx(u,{onClick:e,variant:"outline",children:"Avbryt"})]})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
