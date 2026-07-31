import{aa as g,a7 as t,c as u}from"./iframe-CAjSv_nS.js";import{A as S}from"./AccountNotificationSettings-CF1mNs5j.js";import{M as f,b as x,a as X}from"./ModalBody-BEocNTvo.js";import{L as C}from"./List-Cb27YNZb.js";import{S as v}from"./SettingsItem-DMp8uTMO.js";import{B as j}from"./ButtonGroup-CHaM1dTc.js";import"./preload-helper-PPVm8Dsz.js";import"./Fieldset-qE_JUP-E.js";import"./Switch-D9JMrYde.js";import"./Field-D8Qe0uka.js";import"./Input-BnE3VUoY.js";import"./Label-CjI2CUCN.js";import"./TextField-sSdKcljq.js";import"./FieldBase-B3aukQxa.js";import"./Typography-CP4EAHNP.js";import"./useHighlightedText-BhVVUcDt.js";import"./Section-QeF7xouO.js";import"./Flex-Dkl3V3J_.js";import"./Avatar-CgMczA0n.js";import"./AvatarGroup-ujKKLt3E.js";import"./Heading-Dl2CB_qz.js";import"./ListItem-tV3UUBFk.js";import"./Badge-Dlsqw5tH.js";import"./Tooltip-DmTt27sC.js";import"./ChevronUp-CiQ1vTJ_.js";import"./ChevronDown-DV1YpklV.js";import"./ChevronRight-DBCR3hzH.js";import"./SettingsItemBase-XF7ZTHu0.js";import"./ItemMedia-DCE7hmVr.js";import"./ItemBase-Bsx8jWac.js";import"./ItemLink-BmhLdRET.js";import"./ItemControls-C86-eNC3.js";import"./SettingsModal-r0MnGfEQ.js";import"./ButtonIcon-BmNdvyqy.js";import"./ButtonLabel-BEVL1UP8.js";const st={title:"Account/AccountNotificationSettings",component:S,tags:["autodocs"],parameters:{}},s={args:{}},o=n=>{const[c,a]=g.useState({...n}),e=p=>{const{type:A,checked:h,name:d,value:B}=p.target;a(A==="checkbox"?l=>({...l,[d]:h}):l=>({...l,[d]:B}))};return t.jsx(S,{...n,...c,onChange:e})},i=()=>t.jsx(o,{smsAlerts:!0,phone:"99005566"}),r=()=>t.jsx(o,{smsAlerts:!0,phone:"99005566",emailAlerts:!0,email:"mathias@brann.no"}),m=({title:n="Aktør"})=>{const[c,a]=g.useState(!1),e=()=>{a(p=>!p)};return t.jsxs(t.Fragment,{children:[t.jsx(u,{onClick:e,children:"Åpne modal"}),t.jsxs(f,{open:c,onClose:e,children:[t.jsx(x,{title:n,children:t.jsx(C,{children:t.jsx(v,{id:"bb",icon:{name:"Bergen Bar",type:"company"},title:"Bergen Bar",description:"Org. nr. XXX XXX XXX"})})}),t.jsxs(X,{children:[t.jsx(r,{}),t.jsxs(j,{children:[t.jsx(u,{onClick:e,children:"Lagre og avslutt"}),t.jsx(u,{onClick:e,variant:"outline",children:"Avbryt"})]})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
