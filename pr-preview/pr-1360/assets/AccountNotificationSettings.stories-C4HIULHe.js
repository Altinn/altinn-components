import{aa as g,a7 as t,c as u}from"./iframe-C9sF4CIH.js";import{A as S}from"./AccountNotificationSettings-CsQPSQZV.js";import{M as f,b as x,a as X}from"./ModalBody-CtBEkc_A.js";import{L as C}from"./List-Ljyom4hg.js";import{S as v}from"./SettingsItem-D4XSqtud.js";import{B as j}from"./ButtonGroup-D3X_1KmS.js";import"./preload-helper-PPVm8Dsz.js";import"./Fieldset-C2-Eg5b7.js";import"./Switch-DTc2sA6x.js";import"./Field-D40vPUUg.js";import"./Input-DZS0C5P8.js";import"./Label-BQs4ZavD.js";import"./TextField-CXuTUxrC.js";import"./FieldBase-BZH1Lr7P.js";import"./Typography-BQsARAdQ.js";import"./useHighlightedText-kH4xSFNx.js";import"./Section-Ca3vkTbM.js";import"./Flex-DnMHh9vb.js";import"./Avatar-DJ-M8TRd.js";import"./AvatarGroup-SMrP0suq.js";import"./Heading-CN6nglwQ.js";import"./ListItem-BH0TUSLo.js";import"./Badge-dpJAfWyX.js";import"./Tooltip-hEd8MeM6.js";import"./ChevronUp-Bw8O-5uv.js";import"./ChevronDown-DNNZgNQx.js";import"./ChevronRight-BzqVHEpk.js";import"./SettingsItemBase-kU9_c0w6.js";import"./ItemMedia-Ck6acBMI.js";import"./ItemBase-CbO6Ng8R.js";import"./ItemLink-LcJuXaju.js";import"./ItemControls-BU12ltKZ.js";import"./SettingsModal-Bifh5L4V.js";import"./ButtonIcon-D2wF1g1O.js";import"./ButtonLabel-CEN1m5GJ.js";const st={title:"Account/AccountNotificationSettings",component:S,tags:["autodocs"],parameters:{}},s={args:{}},o=n=>{const[c,a]=g.useState({...n}),e=p=>{const{type:A,checked:h,name:d,value:B}=p.target;a(A==="checkbox"?l=>({...l,[d]:h}):l=>({...l,[d]:B}))};return t.jsx(S,{...n,...c,onChange:e})},i=()=>t.jsx(o,{smsAlerts:!0,phone:"99005566"}),r=()=>t.jsx(o,{smsAlerts:!0,phone:"99005566",emailAlerts:!0,email:"mathias@brann.no"}),m=({title:n="Aktør"})=>{const[c,a]=g.useState(!1),e=()=>{a(p=>!p)};return t.jsxs(t.Fragment,{children:[t.jsx(u,{onClick:e,children:"Åpne modal"}),t.jsxs(f,{open:c,onClose:e,children:[t.jsx(x,{title:n,children:t.jsx(C,{children:t.jsx(v,{id:"bb",icon:{name:"Bergen Bar",type:"company"},title:"Bergen Bar",description:"Org. nr. XXX XXX XXX"})})}),t.jsxs(X,{children:[t.jsx(r,{}),t.jsxs(j,{children:[t.jsx(u,{onClick:e,children:"Lagre og avslutt"}),t.jsx(u,{onClick:e,variant:"outline",children:"Avbryt"})]})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
