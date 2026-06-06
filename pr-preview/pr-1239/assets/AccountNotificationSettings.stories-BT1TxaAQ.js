import{aa as g,a7 as t,c as u}from"./iframe-azCfu0oF.js";import{A as S}from"./AccountNotificationSettings-BdBN6tMP.js";import{M as f,b as x,a as X}from"./ModalBody-DGD_YXs5.js";import{L as C}from"./List-BJ8sIySu.js";import{S as v}from"./SettingsItem-afKC6fvl.js";import{B as j}from"./ButtonGroup-n2_tAFRz.js";import"./preload-helper-PPVm8Dsz.js";import"./Fieldset-Cpu1NhxZ.js";import"./Switch-CLshW7kB.js";import"./Field-DqJ_4ymP.js";import"./Input-B4WsPqAp.js";import"./Label-Fg6nLSp0.js";import"./TextField-i3cTYrXw.js";import"./FieldBase-CGNAcfuA.js";import"./Typography-CWMVViTm.js";import"./useHighlightedText-BA5UWeOm.js";import"./Section-cdVnHieS.js";import"./Flex-Dtc9ln1d.js";import"./Avatar-B6mgyHuO.js";import"./AvatarGroup-BFb9xeKa.js";import"./Heading-BxIru1wm.js";import"./ListItem-BaYTZi8Y.js";import"./Badge-CtmzFrHa.js";import"./Tooltip-DFhjbzqi.js";import"./ChevronUp-_1tTwlgk.js";import"./ChevronDown-D-2Ujwox.js";import"./ChevronRight-DmbA9yvG.js";import"./SettingsItemBase-QxuxVgeV.js";import"./ItemMedia-BlulKlBL.js";import"./ItemBase-DvAzRiVb.js";import"./ItemLink-iPqP_Q-k.js";import"./ItemControls-D1geOcjK.js";import"./SettingsModal-DgA94iaR.js";import"./ButtonIcon-CwW43bfK.js";import"./ButtonLabel-C-fKFqCV.js";const st={title:"Account/AccountNotificationSettings",component:S,tags:["autodocs"],parameters:{}},s={args:{}},o=n=>{const[c,a]=g.useState({...n}),e=p=>{const{type:A,checked:h,name:d,value:B}=p.target;a(A==="checkbox"?l=>({...l,[d]:h}):l=>({...l,[d]:B}))};return t.jsx(S,{...n,...c,onChange:e})},i=()=>t.jsx(o,{smsAlerts:!0,phone:"99005566"}),r=()=>t.jsx(o,{smsAlerts:!0,phone:"99005566",emailAlerts:!0,email:"mathias@brann.no"}),m=({title:n="Aktør"})=>{const[c,a]=g.useState(!1),e=()=>{a(p=>!p)};return t.jsxs(t.Fragment,{children:[t.jsx(u,{onClick:e,children:"Åpne modal"}),t.jsxs(f,{open:c,onClose:e,children:[t.jsx(x,{title:n,children:t.jsx(C,{children:t.jsx(v,{id:"bb",icon:{name:"Bergen Bar",type:"company"},title:"Bergen Bar",description:"Org. nr. XXX XXX XXX"})})}),t.jsxs(X,{children:[t.jsx(r,{}),t.jsxs(j,{children:[t.jsx(u,{onClick:e,children:"Lagre og avslutt"}),t.jsx(u,{onClick:e,variant:"outline",children:"Avbryt"})]})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
