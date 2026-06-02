import{aa as g,a7 as t,c as u}from"./iframe-DzC97elN.js";import{A as S}from"./AccountNotificationSettings-dP5UIAAb.js";import{M as f,b as x,a as X}from"./ModalBody-CsfaIftq.js";import{L as C}from"./List-ReLHH8Pg.js";import{S as v}from"./SettingsItem-DeMHkbXP.js";import{B as j}from"./ButtonGroup-BbJZX9rk.js";import"./preload-helper-PPVm8Dsz.js";import"./Fieldset-7r9IZj1d.js";import"./Switch-JfrAs-Bf.js";import"./Field-B6KkaL6q.js";import"./Input-DIyKL79r.js";import"./Label-CsRR5HcT.js";import"./TextField-PmhDe6m1.js";import"./FieldBase-CCQqXbf-.js";import"./Typography-CtPp6NJn.js";import"./useHighlightedText-w8ugv_c2.js";import"./Section-B7XqZvfR.js";import"./Flex-CXtmXiNa.js";import"./Avatar-B0Bwnqej.js";import"./AvatarGroup-CKA1h7_5.js";import"./Heading-DiLLFIwR.js";import"./ListItem-Cp-qX0cT.js";import"./Badge-XkpX5Mm7.js";import"./Tooltip-BXMPu0h3.js";import"./ChevronUp-EqU0sT0I.js";import"./ChevronDown-B5Pjgi_A.js";import"./ChevronRight-DVYABLGR.js";import"./SettingsItemBase-DNgPJ9Wa.js";import"./ItemMedia-BZutnkw1.js";import"./ItemBase-IHm1UMeF.js";import"./ItemLink-DWCmLscF.js";import"./ItemControls-zCivkuXf.js";import"./SettingsModal-B-gWkeFY.js";import"./ButtonIcon-QQ_ZbP2-.js";import"./ButtonLabel-D7hHDrz9.js";const st={title:"Account/AccountNotificationSettings",component:S,tags:["autodocs"],parameters:{}},s={args:{}},o=n=>{const[c,a]=g.useState({...n}),e=p=>{const{type:A,checked:h,name:d,value:B}=p.target;a(A==="checkbox"?l=>({...l,[d]:h}):l=>({...l,[d]:B}))};return t.jsx(S,{...n,...c,onChange:e})},i=()=>t.jsx(o,{smsAlerts:!0,phone:"99005566"}),r=()=>t.jsx(o,{smsAlerts:!0,phone:"99005566",emailAlerts:!0,email:"mathias@brann.no"}),m=({title:n="Aktør"})=>{const[c,a]=g.useState(!1),e=()=>{a(p=>!p)};return t.jsxs(t.Fragment,{children:[t.jsx(u,{onClick:e,children:"Åpne modal"}),t.jsxs(f,{open:c,onClose:e,children:[t.jsx(x,{title:n,children:t.jsx(C,{children:t.jsx(v,{id:"bb",icon:{name:"Bergen Bar",type:"company"},title:"Bergen Bar",description:"Org. nr. XXX XXX XXX"})})}),t.jsxs(X,{children:[t.jsx(r,{}),t.jsxs(j,{children:[t.jsx(u,{onClick:e,children:"Lagre og avslutt"}),t.jsx(u,{onClick:e,variant:"outline",children:"Avbryt"})]})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
