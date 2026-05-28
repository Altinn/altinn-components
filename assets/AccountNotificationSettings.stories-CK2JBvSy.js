import{s as g,p as t}from"./iframe-43_RSSTf.js";import{A as S}from"./AccountNotificationSettings-DEoqmf3B.js";import{B as u}from"./Button-B83AdZGF.js";import{M as f,b as x,a as X}from"./ModalBody-RXLH-EOA.js";import{L as C}from"./List-CB81-vLr.js";import{S as v}from"./SettingsItem-C7MNkQHp.js";import{B as j}from"./ButtonGroup-w02pJMP9.js";import"./preload-helper-PPVm8Dsz.js";import"./Fieldset-C5LDAjlI.js";import"./tooltip-CaRi0lSN.js";import"./Switch-YXKvHF1V.js";import"./index-D9XEmR3s.js";import"./Label-DtAXMx4b.js";import"./Input-B-eeYerN.js";import"./TextField-C2NHcdr5.js";import"./FieldBase-DaCzydfk.js";import"./Typography-Ct8ipg3s.js";import"./useHighlightedText-CH9gApkX.js";import"./Skeleton-C5aNvb_u.js";import"./Section-i7Bzbjq_.js";import"./Flex-CbLPS6D2.js";import"./XMark-Baw5EL5c.js";import"./useId-BLkk23cI.js";import"./Icon-DxaOlqJE.js";import"./Avatar-B5wzfTza.js";import"./AvatarGroup-vsY4p1Py.js";import"./Heading-2vQl8tBj.js";import"./ListItem-DsTKnjuo.js";import"./Badge-CLU8wZww.js";import"./Tooltip-DwmHlyIr.js";import"./ChevronUp-DrEXLnbF.js";import"./ChevronDown-DzTSEYyg.js";import"./ChevronRight-DXBQR3xu.js";import"./SettingsItemBase-0pp7psHT.js";import"./ItemMedia-C7TJfaPW.js";import"./ItemBase-ByoSv5t_.js";import"./ItemLink-NtTBDy97.js";import"./ItemControls-DImp59Cc.js";import"./SettingsModal-pzz_m3jh.js";import"./ButtonIcon-wjUMimDA.js";import"./ButtonLabel-Db8R2o-l.js";const ut={title:"Account/AccountNotificationSettings",component:S,tags:["autodocs"],parameters:{}},s={args:{}},o=n=>{const[c,a]=g.useState({...n}),e=p=>{const{type:A,checked:B,name:d,value:h}=p.target;a(A==="checkbox"?l=>({...l,[d]:B}):l=>({...l,[d]:h}))};return t.jsx(S,{...n,...c,onChange:e})},i=()=>t.jsx(o,{smsAlerts:!0,phone:"99005566"}),r=()=>t.jsx(o,{smsAlerts:!0,phone:"99005566",emailAlerts:!0,email:"mathias@brann.no"}),m=({title:n="Aktør"})=>{const[c,a]=g.useState(!1),e=()=>{a(p=>!p)};return t.jsxs(t.Fragment,{children:[t.jsx(u,{onClick:e,children:"Åpne modal"}),t.jsxs(f,{open:c,onClose:e,children:[t.jsx(x,{title:n,children:t.jsx(C,{children:t.jsx(v,{id:"bb",icon:{name:"Bergen Bar",type:"company"},title:"Bergen Bar",description:"Org. nr. XXX XXX XXX"})})}),t.jsxs(X,{children:[t.jsx(r,{}),t.jsxs(j,{children:[t.jsx(u,{onClick:e,children:"Lagre og avslutt"}),t.jsx(u,{onClick:e,variant:"outline",children:"Avbryt"})]})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
