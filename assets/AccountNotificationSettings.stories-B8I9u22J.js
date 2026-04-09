import{r as g,j as t}from"./iframe-DgiLb7Jh.js";import{A as S}from"./AccountNotificationSettings-1g_Hc7eg.js";import{B as u}from"./Button-D7CoEZHH.js";import{M as h}from"./ModalBase-BLc5GE5E.js";import{M as x,a as v}from"./ModalBody-CYaAfA_z.js";import{L as X}from"./List-DTj7XRDi.js";import{S as C}from"./SettingsItem-rb0D60Fb.js";import{B as j}from"./ButtonGroup-Ds9mrFFQ.js";import"./preload-helper-PPVm8Dsz.js";import"./Fieldset-kjl2AGn_.js";import"./lite-DaUVFjkg.js";import"./index-Cu0iGtDM.js";import"./use-merge-refs-CpvzIuY-.js";import"./Switch-CQ9i4TBM.js";import"./index-CzzvqmNv.js";import"./Label-6LQ7LXNA.js";import"./Input-Cmck_kaL.js";import"./input-BBC2L6cA.js";import"./TextField-vX1ciD8r.js";import"./FieldBase-B0t89PB6.js";import"./Typography-Bp8CNLT3.js";import"./useHighlightedText-C3KXFHAg.js";import"./Skeleton-CjXkBVSw.js";import"./button-2pQtb28r.js";import"./Section-BoeinIOl.js";import"./Flex-BfnRV8tR.js";import"./XMark-DE16CL-6.js";import"./useId-6J1VG5PF.js";import"./Icon-uoDJWBW9.js";import"./Avatar-D2ea3_hU.js";import"./AvatarGroup-BGNg7yRW.js";import"./Heading-CAIwUoS2.js";import"./ListItem-DCHK_eIp.js";import"./Badge-DFo-bNGw.js";import"./ChevronUp-X_MpgVb_.js";import"./ChevronDown-1x60-vzB.js";import"./ChevronRight-B8GqJ6hU.js";import"./SettingsItemBase-CIYWNZwc.js";import"./SettingsModal-BHJhNZE_.js";import"./ButtonIcon-CpeMN0SU.js";import"./ButtonLabel-Ch_U16-K.js";const ut={title:"Account/AccountNotificationSettings",component:S,tags:["autodocs"],parameters:{}},s={args:{}},r=n=>{const[c,a]=g.useState({...n}),e=p=>{const{type:f,checked:A,name:d,value:B}=p.target;a(f==="checkbox"?l=>({...l,[d]:A}):l=>({...l,[d]:B}))};return t.jsx(S,{...n,...c,onChange:e})},i=()=>t.jsx(r,{smsAlerts:!0,phone:"99005566"}),o=()=>t.jsx(r,{smsAlerts:!0,phone:"99005566",emailAlerts:!0,email:"mathias@brann.no"}),m=({title:n="Aktør"})=>{const[c,a]=g.useState(!1),e=()=>{a(p=>!p)};return t.jsxs(t.Fragment,{children:[t.jsx(u,{onClick:e,children:"Åpne modal"}),t.jsxs(h,{open:c,onClose:e,children:[t.jsx(x,{title:n,children:t.jsx(X,{children:t.jsx(C,{id:"bb",interactive:!1,icon:{name:"Bergen Bar",type:"company"},title:"Bergen Bar",description:"Org. nr. XXX XXX XXX"})})}),t.jsxs(v,{children:[t.jsx(o,{}),t.jsxs(j,{children:[t.jsx(u,{onClick:e,children:"Lagre og avslutt"}),t.jsx(u,{onClick:e,variant:"outline",children:"Avbryt"})]})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
            <SettingsItem id="bb" interactive={false} icon={{
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
}`,...m.parameters?.docs?.source}}};const dt=["Default","Controlled","SmsAlerts","SmsAndEmailAlerts","AccountNotificationsModal"];export{m as AccountNotificationsModal,r as Controlled,s as Default,i as SmsAlerts,o as SmsAndEmailAlerts,dt as __namedExportsOrder,ut as default};
