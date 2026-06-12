import{aa as g,a7 as t,c as u}from"./iframe-DWR_BPge.js";import{A as S}from"./AccountNotificationSettings-C49SFtVJ.js";import{M as f,b as x,a as X}from"./ModalBody-TFV96CG9.js";import{L as C}from"./List-CSRccNVp.js";import{S as v}from"./SettingsItem-BaQWAhOp.js";import{B as j}from"./ButtonGroup-BQ7wgDtN.js";import"./preload-helper-PPVm8Dsz.js";import"./Fieldset-CmPgreUf.js";import"./Switch-Cw7BxWBg.js";import"./Field-Ck35a6Qp.js";import"./Input-_0Vw9ldu.js";import"./Label-BsbeMro6.js";import"./TextField-CnsffK4d.js";import"./FieldBase-BMAVe4Iy.js";import"./Typography-Ck9DnhQz.js";import"./useHighlightedText-CxSGKcWS.js";import"./Section-BCFzX2B1.js";import"./Flex-6ZJb0CGr.js";import"./Avatar-Cok-GZxK.js";import"./AvatarGroup-CXLQt8Ir.js";import"./Heading-DZv3ITVf.js";import"./ListItem-DKhaVzxg.js";import"./Badge-DkIfMZHe.js";import"./Tooltip-DTF1wjLo.js";import"./ChevronUp-B_nN6-rE.js";import"./ChevronDown-DyMHpH4k.js";import"./ChevronRight-Byhvri5k.js";import"./SettingsItemBase-ucDTJ2CS.js";import"./ItemMedia-CNbHl28k.js";import"./ItemBase-Cw7jbG4w.js";import"./ItemLink-DjqXhCHd.js";import"./ItemControls-BuEVWR3X.js";import"./SettingsModal-B9paxYpJ.js";import"./ButtonIcon-CMheF9Lh.js";import"./ButtonLabel-VQkVwOaH.js";const st={title:"Account/AccountNotificationSettings",component:S,tags:["autodocs"],parameters:{}},s={args:{}},o=n=>{const[c,a]=g.useState({...n}),e=p=>{const{type:A,checked:h,name:d,value:B}=p.target;a(A==="checkbox"?l=>({...l,[d]:h}):l=>({...l,[d]:B}))};return t.jsx(S,{...n,...c,onChange:e})},i=()=>t.jsx(o,{smsAlerts:!0,phone:"99005566"}),r=()=>t.jsx(o,{smsAlerts:!0,phone:"99005566",emailAlerts:!0,email:"mathias@brann.no"}),m=({title:n="Aktør"})=>{const[c,a]=g.useState(!1),e=()=>{a(p=>!p)};return t.jsxs(t.Fragment,{children:[t.jsx(u,{onClick:e,children:"Åpne modal"}),t.jsxs(f,{open:c,onClose:e,children:[t.jsx(x,{title:n,children:t.jsx(C,{children:t.jsx(v,{id:"bb",icon:{name:"Bergen Bar",type:"company"},title:"Bergen Bar",description:"Org. nr. XXX XXX XXX"})})}),t.jsxs(X,{children:[t.jsx(r,{}),t.jsxs(j,{children:[t.jsx(u,{onClick:e,children:"Lagre og avslutt"}),t.jsx(u,{onClick:e,variant:"outline",children:"Avbryt"})]})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
