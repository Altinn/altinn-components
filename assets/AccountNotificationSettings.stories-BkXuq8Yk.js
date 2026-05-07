import{r as g,j as t}from"./iframe-Cqj3AiBb.js";import{A as S}from"./AccountNotificationSettings-YJgSzzbv.js";import{B as u}from"./Button-DYwdzfZG.js";import{M as f,a as x,b as X}from"./ModalBody-jsg5kTGr.js";import{L as C}from"./List-kmWDlagH.js";import{S as j}from"./SettingsItem-4Dc5iI0g.js";import{B as v}from"./ButtonGroup-HmC79Nv3.js";import"./preload-helper-PPVm8Dsz.js";import"./Fieldset-W2wGG_nr.js";import"./lite-DaUVFjkg.js";import"./index-BZqr7PxG.js";import"./use-merge-refs-CZYKnUm1.js";import"./Switch-Dd7wCyBA.js";import"./index-CHG1hv9Q.js";import"./Label-URmODKr6.js";import"./Input-BUdc9Inw.js";import"./input-DoJ0-ffR.js";import"./TextField-CKQo9ppU.js";import"./FieldBase-DDsWnoQi.js";import"./Typography-CV-E4tqG.js";import"./useHighlightedText-Cyl54eZj.js";import"./Skeleton-B33vAz-c.js";import"./button-CcZ_KMhQ.js";import"./Section-BsXiOSXS.js";import"./Flex-DFnlILDc.js";import"./XMark-ReENydG3.js";import"./useId-Bi-DL88I.js";import"./Icon-CHi77IUK.js";import"./Avatar-D1U6ps5a.js";import"./AvatarGroup-CmMUwf3A.js";import"./Heading-CJiOkJPI.js";import"./ListItem-cfHlhQru.js";import"./Badge-Bd1M9WZo.js";import"./Tooltip-D1gbXzps.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ChevronUp-BaSPXXxx.js";import"./ChevronDown-g18mW4eX.js";import"./ChevronRight-CxmxTIkT.js";import"./SettingsItemBase-B6HYWitJ.js";import"./ItemLink-Bkhdk8v_.js";import"./ItemMedia-DihsrAKt.js";import"./ItemControls-eJMUKPOH.js";import"./SettingsModal-B16xHKIZ.js";import"./ButtonIcon-CRk-Fq7D.js";import"./ButtonLabel-BBQgFKVt.js";const At={title:"Account/AccountNotificationSettings",component:S,tags:["autodocs"],parameters:{}},s={args:{}},r=n=>{const[p,a]=g.useState({...n}),e=c=>{const{type:A,checked:B,name:d,value:h}=c.target;a(A==="checkbox"?l=>({...l,[d]:B}):l=>({...l,[d]:h}))};return t.jsx(S,{...n,...p,onChange:e})},i=()=>t.jsx(r,{smsAlerts:!0,phone:"99005566"}),o=()=>t.jsx(r,{smsAlerts:!0,phone:"99005566",emailAlerts:!0,email:"mathias@brann.no"}),m=({title:n="Aktør"})=>{const[p,a]=g.useState(!1),e=()=>{a(c=>!c)};return t.jsxs(t.Fragment,{children:[t.jsx(u,{onClick:e,children:"Åpne modal"}),t.jsxs(f,{open:p,onClose:e,children:[t.jsx(x,{title:n,children:t.jsx(C,{children:t.jsx(j,{id:"bb",icon:{name:"Bergen Bar",type:"company"},title:"Bergen Bar",description:"Org. nr. XXX XXX XXX"})})}),t.jsxs(X,{children:[t.jsx(o,{}),t.jsxs(v,{children:[t.jsx(u,{onClick:e,children:"Lagre og avslutt"}),t.jsx(u,{onClick:e,variant:"outline",children:"Avbryt"})]})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`(args: AccountNotificationSettingsProps) => {
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
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  return <Controlled smsAlerts={true} phone="99005566" />;
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  return <Controlled smsAlerts={true} phone="99005566" emailAlerts={true} email="mathias@brann.no" />;
}`,...o.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`({
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
}`,...m.parameters?.docs?.source}}};const Bt=["Default","Controlled","SmsAlerts","SmsAndEmailAlerts","AccountNotificationsModal"];export{m as AccountNotificationsModal,r as Controlled,s as Default,i as SmsAlerts,o as SmsAndEmailAlerts,Bt as __namedExportsOrder,At as default};
