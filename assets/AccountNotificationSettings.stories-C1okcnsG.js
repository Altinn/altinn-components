import{s as g,p as t}from"./iframe-BBbEwSaq.js";import{A as S}from"./AccountNotificationSettings-BGfaGLrT.js";import{B as u}from"./Button-DpW4Pu6O.js";import{M as f,b as x,a as X}from"./ModalBody-OK8R4PDd.js";import{L as C}from"./List-CzewomMq.js";import{S as v}from"./SettingsItem-BJ3WEYzA.js";import{B as j}from"./ButtonGroup-oq7iIeFJ.js";import"./preload-helper-PPVm8Dsz.js";import"./Fieldset-D2PHhPJw.js";import"./tooltip-D3G3Ewte.js";import"./Switch-CtGtmSJw.js";import"./index-awH0sXcw.js";import"./Label-DdMEJ83A.js";import"./Input-lqau07kD.js";import"./TextField-DWaQI9gc.js";import"./FieldBase-CbyxT5SM.js";import"./Typography-41mT2wo8.js";import"./useHighlightedText-DORd4ETJ.js";import"./Skeleton-DFF9p8Mx.js";import"./Section-Dq0xs0Y_.js";import"./Flex-Cc0Ueohf.js";import"./XMark-Dw8JSfSd.js";import"./useId-DZp72-eX.js";import"./Icon-Cx6QAjG2.js";import"./Avatar-RSQnlVTq.js";import"./AvatarGroup-DM7mpZJM.js";import"./Heading-DDkqEyV3.js";import"./ListItem-CNcOgYac.js";import"./Badge-CZZB9VpQ.js";import"./Tooltip-BL1y86OR.js";import"./ChevronUp-BD5jqYZu.js";import"./ChevronDown-B-mDhRFL.js";import"./ChevronRight-Bj8DUJ8P.js";import"./SettingsItemBase-CVNbE6ML.js";import"./ItemMedia-DR-yuWlq.js";import"./ItemBase-Fqig4UIJ.js";import"./ItemLink-CUO1wpZw.js";import"./ItemControls-DaNsbzwN.js";import"./SettingsModal-CoQVwDnP.js";import"./ButtonIcon-DIFqTzZe.js";import"./ButtonLabel-B0mhwuEU.js";const ut={title:"Account/AccountNotificationSettings",component:S,tags:["autodocs"],parameters:{}},s={args:{}},o=n=>{const[c,a]=g.useState({...n}),e=p=>{const{type:A,checked:B,name:d,value:h}=p.target;a(A==="checkbox"?l=>({...l,[d]:B}):l=>({...l,[d]:h}))};return t.jsx(S,{...n,...c,onChange:e})},i=()=>t.jsx(o,{smsAlerts:!0,phone:"99005566"}),r=()=>t.jsx(o,{smsAlerts:!0,phone:"99005566",emailAlerts:!0,email:"mathias@brann.no"}),m=({title:n="Aktør"})=>{const[c,a]=g.useState(!1),e=()=>{a(p=>!p)};return t.jsxs(t.Fragment,{children:[t.jsx(u,{onClick:e,children:"Åpne modal"}),t.jsxs(f,{open:c,onClose:e,children:[t.jsx(x,{title:n,children:t.jsx(C,{children:t.jsx(v,{id:"bb",icon:{name:"Bergen Bar",type:"company"},title:"Bergen Bar",description:"Org. nr. XXX XXX XXX"})})}),t.jsxs(X,{children:[t.jsx(r,{}),t.jsxs(j,{children:[t.jsx(u,{onClick:e,children:"Lagre og avslutt"}),t.jsx(u,{onClick:e,variant:"outline",children:"Avbryt"})]})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
