import{aa as g,a7 as t,c as u}from"./iframe-CTaNoWWa.js";import{A as S}from"./AccountNotificationSettings-CNzRsiW4.js";import{M as f,b as x,a as X}from"./ModalBody-Dfwh0Tur.js";import{L as C}from"./List-BWBH_N2R.js";import{S as v}from"./SettingsItem-DpGl7SN3.js";import{B as j}from"./ButtonGroup-DcAUocsW.js";import"./preload-helper-PPVm8Dsz.js";import"./Fieldset-DhuOPwxs.js";import"./Switch-DjhkD9Ne.js";import"./Field-BInLTKbx.js";import"./Input-CTz4y9O9.js";import"./Label-yw6hdd5b.js";import"./TextField-CWdssTLQ.js";import"./FieldBase-CgdWEw7I.js";import"./Typography-CN45st3d.js";import"./useHighlightedText-B1ZF3HFO.js";import"./Section-Gj9AU1UQ.js";import"./Flex-CN3B00B1.js";import"./Avatar-Jcwep2-d.js";import"./AvatarGroup-BYP40V--.js";import"./Heading-C1mUjHlh.js";import"./ListItem-bITmjQKl.js";import"./Badge-Dtect8U8.js";import"./Tooltip-ClBwCS6W.js";import"./ChevronUp-0PuCoJui.js";import"./ChevronDown-BHW7W_eE.js";import"./ChevronRight-CohjqIQG.js";import"./SettingsItemBase-CvuyejAQ.js";import"./ItemMedia-wY5sofun.js";import"./ItemBase-DKpUUlFO.js";import"./ItemLink-B-O_qCzl.js";import"./ItemControls-DMuz6Cbk.js";import"./SettingsModal-BQMqrzAH.js";import"./ButtonIcon-TLZW9XLN.js";import"./ButtonLabel-5YzgT7kC.js";const st={title:"Account/AccountNotificationSettings",component:S,tags:["autodocs"],parameters:{}},s={args:{}},o=n=>{const[c,a]=g.useState({...n}),e=p=>{const{type:A,checked:h,name:d,value:B}=p.target;a(A==="checkbox"?l=>({...l,[d]:h}):l=>({...l,[d]:B}))};return t.jsx(S,{...n,...c,onChange:e})},i=()=>t.jsx(o,{smsAlerts:!0,phone:"99005566"}),r=()=>t.jsx(o,{smsAlerts:!0,phone:"99005566",emailAlerts:!0,email:"mathias@brann.no"}),m=({title:n="Aktør"})=>{const[c,a]=g.useState(!1),e=()=>{a(p=>!p)};return t.jsxs(t.Fragment,{children:[t.jsx(u,{onClick:e,children:"Åpne modal"}),t.jsxs(f,{open:c,onClose:e,children:[t.jsx(x,{title:n,children:t.jsx(C,{children:t.jsx(v,{id:"bb",icon:{name:"Bergen Bar",type:"company"},title:"Bergen Bar",description:"Org. nr. XXX XXX XXX"})})}),t.jsxs(X,{children:[t.jsx(r,{}),t.jsxs(j,{children:[t.jsx(u,{onClick:e,children:"Lagre og avslutt"}),t.jsx(u,{onClick:e,variant:"outline",children:"Avbryt"})]})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
