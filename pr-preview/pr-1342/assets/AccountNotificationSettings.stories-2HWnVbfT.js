import{aa as g,a7 as t,c as u}from"./iframe-ju2_P8cU.js";import{A as S}from"./AccountNotificationSettings-Chpq0J75.js";import{M as f,b as x,a as X}from"./ModalBody-DN8l4H7v.js";import{L as C}from"./List-CUFUNE10.js";import{S as v}from"./SettingsItem-CF3vXzr3.js";import{B as j}from"./ButtonGroup-B2X4F04D.js";import"./preload-helper-PPVm8Dsz.js";import"./Fieldset-B10g1xVI.js";import"./Switch-DbxkCHqQ.js";import"./Field-BVh1vOLY.js";import"./Input-DOMevMNG.js";import"./Label-CCaZkUUa.js";import"./TextField-jtg2S-WL.js";import"./FieldBase-B0oEW9Tf.js";import"./Typography-B5wbJTRa.js";import"./useHighlightedText-Ds75xSSg.js";import"./Section-BBG26hDa.js";import"./Flex-BBjiPxTz.js";import"./Avatar-BseCFng7.js";import"./AvatarGroup-DlioajxJ.js";import"./Heading-BwdjGJ12.js";import"./ListItem-CMgPAGjD.js";import"./Badge-C5qbsRzf.js";import"./Tooltip-BIlU6ctt.js";import"./ChevronUp-DzbOnysK.js";import"./ChevronDown-DI9j-k90.js";import"./ChevronRight-C-B7qVOy.js";import"./SettingsItemBase-ByQ-5qi7.js";import"./ItemMedia-BZfNDLpv.js";import"./ItemBase-CkWChTpa.js";import"./ItemLink-nv4hDnw7.js";import"./ItemControls-DCzps0Gu.js";import"./SettingsModal-CRoAK6Cz.js";import"./ButtonIcon-B8rfoecA.js";import"./ButtonLabel-De0xiolO.js";const st={title:"Account/AccountNotificationSettings",component:S,tags:["autodocs"],parameters:{}},s={args:{}},o=n=>{const[c,a]=g.useState({...n}),e=p=>{const{type:A,checked:h,name:d,value:B}=p.target;a(A==="checkbox"?l=>({...l,[d]:h}):l=>({...l,[d]:B}))};return t.jsx(S,{...n,...c,onChange:e})},i=()=>t.jsx(o,{smsAlerts:!0,phone:"99005566"}),r=()=>t.jsx(o,{smsAlerts:!0,phone:"99005566",emailAlerts:!0,email:"mathias@brann.no"}),m=({title:n="Aktør"})=>{const[c,a]=g.useState(!1),e=()=>{a(p=>!p)};return t.jsxs(t.Fragment,{children:[t.jsx(u,{onClick:e,children:"Åpne modal"}),t.jsxs(f,{open:c,onClose:e,children:[t.jsx(x,{title:n,children:t.jsx(C,{children:t.jsx(v,{id:"bb",icon:{name:"Bergen Bar",type:"company"},title:"Bergen Bar",description:"Org. nr. XXX XXX XXX"})})}),t.jsxs(X,{children:[t.jsx(r,{}),t.jsxs(j,{children:[t.jsx(u,{onClick:e,children:"Lagre og avslutt"}),t.jsx(u,{onClick:e,variant:"outline",children:"Avbryt"})]})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
