import{r as g,j as t}from"./iframe-C30XMp4u.js";import{A as S}from"./AccountNotificationSettings-BN-65vnr.js";import{B as u}from"./Button-DDYo0e3Y.js";import{M as f}from"./ModalBase-8GeXxfmc.js";import{M as x,a as X}from"./ModalBody-BvZW9nvD.js";import{L as C}from"./List-BOu6KRbF.js";import{S as j}from"./SettingsItem-KOQsJ3rV.js";import{B as v}from"./ButtonGroup-B8wqqWfc.js";import"./preload-helper-PPVm8Dsz.js";import"./Fieldset-DDNOg6Y7.js";import"./lite-DaUVFjkg.js";import"./index-MPuYdx8K.js";import"./use-merge-refs-DdAPjJhd.js";import"./Switch-Bo_I4-2B.js";import"./index-Dfjgmy9H.js";import"./Label-CZ9Sm67x.js";import"./Input-BZkkYvOZ.js";import"./input-BbRzGenc.js";import"./TextField-DomInenN.js";import"./FieldBase-Cg7qaDyY.js";import"./Typography-C7Aiwmst.js";import"./useHighlightedText-BcdufPkD.js";import"./Skeleton-DYu3bsVd.js";import"./button-vIDiYGt4.js";import"./Section-DJhGIaQb.js";import"./Flex-Olz8YtsP.js";import"./XMark-ZCF0kQw6.js";import"./useId-k4Xjw1TB.js";import"./Icon-BW7eZq3t.js";import"./Avatar-md5Lcy6_.js";import"./AvatarGroup-BxUIiam6.js";import"./Heading-r7KrHQRq.js";import"./ListItem-BjER_6OV.js";import"./Badge-BL5WZhsc.js";import"./ChevronUp-Dd9Cdp1N.js";import"./ChevronDown-BpTniz1S.js";import"./ChevronRight-cMtudnfA.js";import"./SettingsItemBase-CMzfMjvH.js";import"./ItemLink-fzbmrdbP.js";import"./ItemMedia-DZiSht8H.js";import"./ItemControls-XLXkfke2.js";import"./SettingsModal-CbfYNbx6.js";import"./ButtonIcon-DGwnrj7G.js";import"./ButtonLabel-D_0Lmxqy.js";const St={title:"Account/AccountNotificationSettings",component:S,tags:["autodocs"],parameters:{}},s={args:{}},r=n=>{const[p,a]=g.useState({...n}),e=c=>{const{type:A,checked:B,name:d,value:h}=c.target;a(A==="checkbox"?l=>({...l,[d]:B}):l=>({...l,[d]:h}))};return t.jsx(S,{...n,...p,onChange:e})},i=()=>t.jsx(r,{smsAlerts:!0,phone:"99005566"}),o=()=>t.jsx(r,{smsAlerts:!0,phone:"99005566",emailAlerts:!0,email:"mathias@brann.no"}),m=({title:n="Aktør"})=>{const[p,a]=g.useState(!1),e=()=>{a(c=>!c)};return t.jsxs(t.Fragment,{children:[t.jsx(u,{onClick:e,children:"Åpne modal"}),t.jsxs(f,{open:p,onClose:e,children:[t.jsx(x,{title:n,children:t.jsx(C,{children:t.jsx(j,{id:"bb",icon:{name:"Bergen Bar",type:"company"},title:"Bergen Bar",description:"Org. nr. XXX XXX XXX"})})}),t.jsxs(X,{children:[t.jsx(o,{}),t.jsxs(v,{children:[t.jsx(u,{onClick:e,children:"Lagre og avslutt"}),t.jsx(u,{onClick:e,variant:"outline",children:"Avbryt"})]})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const At=["Default","Controlled","SmsAlerts","SmsAndEmailAlerts","AccountNotificationsModal"];export{m as AccountNotificationsModal,r as Controlled,s as Default,i as SmsAlerts,o as SmsAndEmailAlerts,At as __namedExportsOrder,St as default};
