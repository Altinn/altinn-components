import{r as g,j as t}from"./iframe-DUgQHy5z.js";import{A as S}from"./AccountNotificationSettings-BzTR5Gap.js";import{B as u}from"./Button-DAj4Vb1f.js";import{M as f}from"./ModalBase-BV94wsIh.js";import{M as x,a as X}from"./ModalBody-D3QXhoSO.js";import{L as C}from"./List-EmWT1t1G.js";import{S as j}from"./SettingsItem-CgWPEikZ.js";import{B as v}from"./ButtonGroup-Co0foBbC.js";import"./preload-helper-PPVm8Dsz.js";import"./Fieldset-BjkJQ7MW.js";import"./lite-DaUVFjkg.js";import"./index-DtFuKRqq.js";import"./use-merge-refs-tN_UguZ4.js";import"./Switch-B4GoFuUp.js";import"./index-CHKdKrFD.js";import"./Label-B-nIzD7x.js";import"./Input-DxofbABb.js";import"./input-BKf2w74T.js";import"./TextField-Zqz37qEC.js";import"./FieldBase-B3m8Pe0B.js";import"./Typography-CInfIHKg.js";import"./useHighlightedText-BXy_Fo0F.js";import"./Skeleton-BWHbMU5J.js";import"./button-D0axoqj3.js";import"./Section-BJevJr8H.js";import"./Flex-CL-SSZvT.js";import"./XMark-CIC6hSAY.js";import"./useId-BEmmm-9F.js";import"./Icon-D31Usj2D.js";import"./Avatar-CQy8D3NB.js";import"./AvatarGroup-DAp73R1d.js";import"./Heading-CGuufgH4.js";import"./ListItem-BxV254vh.js";import"./Badge-Tkc8PhNy.js";import"./Tooltip-svLS9stx.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ChevronUp-DELRJlHt.js";import"./ChevronDown-BTaF_AA-.js";import"./ChevronRight-DcPr7c69.js";import"./SettingsItemBase-wZ9q0lCm.js";import"./ItemLink-CrE95sD-.js";import"./ItemMedia-CtpZg4yw.js";import"./ItemControls-eEEzDso3.js";import"./SettingsModal-s9mgmAX2.js";import"./ButtonIcon-CVfXAbGb.js";import"./ButtonLabel-3HSCNrVA.js";const Bt={title:"Account/AccountNotificationSettings",component:S,tags:["autodocs"],parameters:{}},s={args:{}},r=n=>{const[p,a]=g.useState({...n}),e=c=>{const{type:A,checked:B,name:d,value:h}=c.target;a(A==="checkbox"?l=>({...l,[d]:B}):l=>({...l,[d]:h}))};return t.jsx(S,{...n,...p,onChange:e})},i=()=>t.jsx(r,{smsAlerts:!0,phone:"99005566"}),o=()=>t.jsx(r,{smsAlerts:!0,phone:"99005566",emailAlerts:!0,email:"mathias@brann.no"}),m=({title:n="Aktør"})=>{const[p,a]=g.useState(!1),e=()=>{a(c=>!c)};return t.jsxs(t.Fragment,{children:[t.jsx(u,{onClick:e,children:"Åpne modal"}),t.jsxs(f,{open:p,onClose:e,children:[t.jsx(x,{title:n,children:t.jsx(C,{children:t.jsx(j,{id:"bb",icon:{name:"Bergen Bar",type:"company"},title:"Bergen Bar",description:"Org. nr. XXX XXX XXX"})})}),t.jsxs(X,{children:[t.jsx(o,{}),t.jsxs(v,{children:[t.jsx(u,{onClick:e,children:"Lagre og avslutt"}),t.jsx(u,{onClick:e,variant:"outline",children:"Avbryt"})]})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ht=["Default","Controlled","SmsAlerts","SmsAndEmailAlerts","AccountNotificationsModal"];export{m as AccountNotificationsModal,r as Controlled,s as Default,i as SmsAlerts,o as SmsAndEmailAlerts,ht as __namedExportsOrder,Bt as default};
