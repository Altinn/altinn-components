import{r as g,j as t}from"./iframe-B1AqnzaQ.js";import{A as S}from"./AccountNotificationSettings-DykRd2yF.js";import{B as u}from"./Button-7DVHhPF2.js";import{M as h}from"./ModalBase-D8Fgbk92.js";import{M as x,a as v}from"./ModalBody-CFyARQ-s.js";import{L as X}from"./List-BG7le78U.js";import{S as C}from"./SettingsItem-CV4vhB0N.js";import{B as j}from"./ButtonGroup-Kwyl4wzf.js";import"./preload-helper-PPVm8Dsz.js";import"./Fieldset-RuWcFVb6.js";import"./lite-DaUVFjkg.js";import"./index-DvbpjXY1.js";import"./use-merge-refs-BdRYIeb-.js";import"./Switch-CES7Axv9.js";import"./index-Ddi2Dmvi.js";import"./Label-CufZoml2.js";import"./Input-DvVIUV_H.js";import"./input-CzzL8SnL.js";import"./TextField-B-n87mcL.js";import"./FieldBase-BfQZNQHG.js";import"./Typography-lvuy6SF3.js";import"./useHighlightedText-D6JE0bc4.js";import"./Skeleton-6Posg2tf.js";import"./button-HgPz3r79.js";import"./Section-BiNpoqqK.js";import"./Flex-DsTgjl9e.js";import"./XMark-COJVLPGF.js";import"./useId-D3sFZbtB.js";import"./Icon-68Gi_xA8.js";import"./Avatar-Dhw0Atsj.js";import"./AvatarGroup-CFlzbLYZ.js";import"./Heading-Rbp_06UC.js";import"./ListItem-DtW6UlaD.js";import"./Badge-DUhzLQsC.js";import"./ChevronUp-DDB3rTR_.js";import"./ChevronDown-yd2Fwy4k.js";import"./ChevronRight-BOPTtlba.js";import"./SettingsItemBase-qMCsAtpC.js";import"./SettingsModal-4_6AHUU_.js";import"./ButtonIcon-B4FLSCwL.js";import"./ButtonLabel-CKRky11D.js";const ut={title:"Account/AccountNotificationSettings",component:S,tags:["autodocs"],parameters:{}},s={args:{}},r=n=>{const[c,a]=g.useState({...n}),e=p=>{const{type:f,checked:A,name:d,value:B}=p.target;a(f==="checkbox"?l=>({...l,[d]:A}):l=>({...l,[d]:B}))};return t.jsx(S,{...n,...c,onChange:e})},i=()=>t.jsx(r,{smsAlerts:!0,phone:"99005566"}),o=()=>t.jsx(r,{smsAlerts:!0,phone:"99005566",emailAlerts:!0,email:"mathias@brann.no"}),m=({title:n="Aktør"})=>{const[c,a]=g.useState(!1),e=()=>{a(p=>!p)};return t.jsxs(t.Fragment,{children:[t.jsx(u,{onClick:e,children:"Åpne modal"}),t.jsxs(h,{open:c,onClose:e,children:[t.jsx(x,{title:n,children:t.jsx(X,{children:t.jsx(C,{id:"bb",interactive:!1,icon:{name:"Bergen Bar",type:"company"},title:"Bergen Bar",description:"Org. nr. XXX XXX XXX"})})}),t.jsxs(v,{children:[t.jsx(o,{}),t.jsxs(j,{children:[t.jsx(u,{onClick:e,children:"Lagre og avslutt"}),t.jsx(u,{onClick:e,variant:"outline",children:"Avbryt"})]})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
