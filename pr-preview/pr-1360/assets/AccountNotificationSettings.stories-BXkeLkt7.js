import{aa as g,a7 as t,c as u}from"./iframe-BKPYfBaP.js";import{A as S}from"./AccountNotificationSettings-BgWauUZW.js";import{M as f,b as x,a as X}from"./ModalBody-qGK1jZij.js";import{L as C}from"./List-BhWzbYIR.js";import{S as v}from"./SettingsItem-BlqBaERd.js";import{B as j}from"./ButtonGroup-CQeTBn3N.js";import"./preload-helper-PPVm8Dsz.js";import"./Fieldset-Bicpx1ya.js";import"./Switch-T1iKx95o.js";import"./Field-DD7IzQnc.js";import"./Input-CHWt3Nk0.js";import"./Label-TLLhNVMu.js";import"./TextField-C5wmiUHQ.js";import"./FieldBase-BZsWcTUs.js";import"./Typography-Cdqx97qL.js";import"./useHighlightedText-BNKt0Eyh.js";import"./Section-DIn3fiOi.js";import"./Flex-Dg9OypdH.js";import"./Avatar-CBzwnIR6.js";import"./AvatarGroup-C3fpFOg5.js";import"./Heading-BlMy4Ad2.js";import"./ListItem-vuMFE_6d.js";import"./Badge-MDs50kx6.js";import"./Tooltip-BCY8jcz2.js";import"./ChevronUp-B-ED2Onp.js";import"./ChevronDown-CR6j5uYN.js";import"./ChevronRight-CfHO682k.js";import"./SettingsItemBase-CDU1KS3L.js";import"./ItemMedia-CfPfvhkB.js";import"./ItemBase-CdLQP71A.js";import"./ItemLink-BZrHh3il.js";import"./ItemControls-MYYKbbE3.js";import"./SettingsModal-B7N099VA.js";import"./ButtonIcon-g3sANd5j.js";import"./ButtonLabel-CEapPxhA.js";const st={title:"Account/AccountNotificationSettings",component:S,tags:["autodocs"],parameters:{}},s={args:{}},o=n=>{const[c,a]=g.useState({...n}),e=p=>{const{type:A,checked:h,name:d,value:B}=p.target;a(A==="checkbox"?l=>({...l,[d]:h}):l=>({...l,[d]:B}))};return t.jsx(S,{...n,...c,onChange:e})},i=()=>t.jsx(o,{smsAlerts:!0,phone:"99005566"}),r=()=>t.jsx(o,{smsAlerts:!0,phone:"99005566",emailAlerts:!0,email:"mathias@brann.no"}),m=({title:n="Aktør"})=>{const[c,a]=g.useState(!1),e=()=>{a(p=>!p)};return t.jsxs(t.Fragment,{children:[t.jsx(u,{onClick:e,children:"Åpne modal"}),t.jsxs(f,{open:c,onClose:e,children:[t.jsx(x,{title:n,children:t.jsx(C,{children:t.jsx(v,{id:"bb",icon:{name:"Bergen Bar",type:"company"},title:"Bergen Bar",description:"Org. nr. XXX XXX XXX"})})}),t.jsxs(X,{children:[t.jsx(r,{}),t.jsxs(j,{children:[t.jsx(u,{onClick:e,children:"Lagre og avslutt"}),t.jsx(u,{onClick:e,variant:"outline",children:"Avbryt"})]})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
