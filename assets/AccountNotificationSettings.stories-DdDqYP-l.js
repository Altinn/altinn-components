import{r as g,j as t}from"./iframe-yBEatwQ0.js";import{A as S}from"./AccountNotificationSettings-D1EyrcLa.js";import{B as u}from"./Button-Du_F5DdO.js";import{M as f}from"./ModalBase-C-XV4k6W.js";import{M as x,a as X}from"./ModalBody-0bKYBPzE.js";import{L as C}from"./List-FR3qe7-6.js";import{S as j}from"./SettingsItem-3XB8AtJJ.js";import{B as v}from"./ButtonGroup-Cw-wKcaM.js";import"./preload-helper-PPVm8Dsz.js";import"./Fieldset-Wydq2NK2.js";import"./lite-DaUVFjkg.js";import"./index-4yM6tgpO.js";import"./use-merge-refs-BCyRe6aJ.js";import"./Switch-BDdNKTmo.js";import"./index-B7J_eA84.js";import"./Label-jtu-OMH2.js";import"./Input-BprGT-wl.js";import"./input-ByeiaQUe.js";import"./TextField-N-ReZJz2.js";import"./FieldBase-DJNauVgJ.js";import"./Typography-ggurnZ72.js";import"./useHighlightedText-Dt8J34OD.js";import"./Skeleton-D2AOT5bt.js";import"./button-DDduZyu8.js";import"./Section-CLhotqus.js";import"./Flex-Co0GST2J.js";import"./XMark-DRdfunCf.js";import"./useId-DyCIbqyR.js";import"./Icon-m6GSRHhZ.js";import"./Avatar-BHAY-jNJ.js";import"./AvatarGroup-Em3MhneF.js";import"./Heading-gNorXCZa.js";import"./ListItem-CFEmGYjw.js";import"./Badge-Bt5kdhhY.js";import"./ChevronUp-BhUGhxGW.js";import"./ChevronDown-BJoDwoph.js";import"./ChevronRight-DNoffWLc.js";import"./SettingsItemBase-CtHYjpOw.js";import"./ItemLink-BJ7ieZn8.js";import"./ItemMedia-po0tYTET.js";import"./ItemControls-CsC9idfH.js";import"./SettingsModal-BtsjTNax.js";import"./ButtonIcon-kXMu6eE8.js";import"./ButtonLabel-DWbU693S.js";const St={title:"Account/AccountNotificationSettings",component:S,tags:["autodocs"],parameters:{}},s={args:{}},r=n=>{const[p,a]=g.useState({...n}),e=c=>{const{type:A,checked:B,name:d,value:h}=c.target;a(A==="checkbox"?l=>({...l,[d]:B}):l=>({...l,[d]:h}))};return t.jsx(S,{...n,...p,onChange:e})},i=()=>t.jsx(r,{smsAlerts:!0,phone:"99005566"}),o=()=>t.jsx(r,{smsAlerts:!0,phone:"99005566",emailAlerts:!0,email:"mathias@brann.no"}),m=({title:n="Aktør"})=>{const[p,a]=g.useState(!1),e=()=>{a(c=>!c)};return t.jsxs(t.Fragment,{children:[t.jsx(u,{onClick:e,children:"Åpne modal"}),t.jsxs(f,{open:p,onClose:e,children:[t.jsx(x,{title:n,children:t.jsx(C,{children:t.jsx(j,{id:"bb",icon:{name:"Bergen Bar",type:"company"},title:"Bergen Bar",description:"Org. nr. XXX XXX XXX"})})}),t.jsxs(X,{children:[t.jsx(o,{}),t.jsxs(v,{children:[t.jsx(u,{onClick:e,children:"Lagre og avslutt"}),t.jsx(u,{onClick:e,variant:"outline",children:"Avbryt"})]})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
