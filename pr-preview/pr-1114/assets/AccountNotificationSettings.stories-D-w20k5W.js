import{r as g,j as t}from"./iframe-BbAJh2l_.js";import{A as S}from"./AccountNotificationSettings-D1jiLPMR.js";import{B as u}from"./Button-MneWcYDg.js";import{M as f}from"./ModalBase-BoJmG0Fd.js";import{M as x,a as X}from"./ModalBody-CkSLrsr5.js";import{L as C}from"./List-BLhrP6Wq.js";import{S as j}from"./SettingsItem-C5VvKO6X.js";import{B as v}from"./ButtonGroup-CfWicBai.js";import"./preload-helper-PPVm8Dsz.js";import"./Fieldset-CFvQhJLA.js";import"./lite-DaUVFjkg.js";import"./index-BNnwLbXZ.js";import"./use-merge-refs-B0vn2eeh.js";import"./Switch-DAFxZsdg.js";import"./index-D4eFSvt3.js";import"./Label-BPdBz656.js";import"./Input-3cVAucaE.js";import"./input-nlSK42jH.js";import"./TextField-Bgl0Fv4z.js";import"./FieldBase-DPxwAUyD.js";import"./Typography-Dc6esLAJ.js";import"./useHighlightedText-Dxl-Q7I2.js";import"./Skeleton-DCAPmpFX.js";import"./button-BOk0ljv4.js";import"./Section-DKBhzXh6.js";import"./Flex-c7I9zH32.js";import"./XMark-CBD09dy-.js";import"./useId-DlaeWOGU.js";import"./Icon-BPIDnrjf.js";import"./Avatar-j2CMQG5s.js";import"./AvatarGroup-D7oFGG3U.js";import"./Heading-DtMkhgFU.js";import"./ListItem-1XPivOtK.js";import"./Badge-Bayw0f9c.js";import"./ChevronUp-BK_whBfS.js";import"./ChevronDown-B5pHKuJa.js";import"./ChevronRight-C-emBdlp.js";import"./SettingsItemBase-CTklnRrH.js";import"./ItemLink-ByFnaisq.js";import"./ItemMedia-Cdf2Y2Gw.js";import"./ItemControls-B5jsMXbN.js";import"./SettingsModal-AaCSZwHI.js";import"./ButtonIcon-NlGHLcOm.js";import"./ButtonLabel-DIGtAAjs.js";const St={title:"Account/AccountNotificationSettings",component:S,tags:["autodocs"],parameters:{}},s={args:{}},r=n=>{const[p,a]=g.useState({...n}),e=c=>{const{type:A,checked:B,name:d,value:h}=c.target;a(A==="checkbox"?l=>({...l,[d]:B}):l=>({...l,[d]:h}))};return t.jsx(S,{...n,...p,onChange:e})},i=()=>t.jsx(r,{smsAlerts:!0,phone:"99005566"}),o=()=>t.jsx(r,{smsAlerts:!0,phone:"99005566",emailAlerts:!0,email:"mathias@brann.no"}),m=({title:n="Aktør"})=>{const[p,a]=g.useState(!1),e=()=>{a(c=>!c)};return t.jsxs(t.Fragment,{children:[t.jsx(u,{onClick:e,children:"Åpne modal"}),t.jsxs(f,{open:p,onClose:e,children:[t.jsx(x,{title:n,children:t.jsx(C,{children:t.jsx(j,{id:"bb",icon:{name:"Bergen Bar",type:"company"},title:"Bergen Bar",description:"Org. nr. XXX XXX XXX"})})}),t.jsxs(X,{children:[t.jsx(o,{}),t.jsxs(v,{children:[t.jsx(u,{onClick:e,children:"Lagre og avslutt"}),t.jsx(u,{onClick:e,variant:"outline",children:"Avbryt"})]})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
