import{s as g,p as t}from"./iframe-HmDeAVAp.js";import{A as S}from"./AccountNotificationSettings-BhJpdOP_.js";import{B as u}from"./Button-SB9AH0kY.js";import{M as f,b as x,a as X}from"./ModalBody-HgcUYgus.js";import{L as C}from"./List-CZwq9NP_.js";import{S as v}from"./SettingsItem-CWr_X-jX.js";import{B as j}from"./ButtonGroup-IIZdVlDD.js";import"./preload-helper-PPVm8Dsz.js";import"./Fieldset-CwIulh6B.js";import"./tooltip-DaXe8rKK.js";import"./Switch-BqrMYGGB.js";import"./index-CDtevUxF.js";import"./Field-D-jjHIb3.js";import"./Input-Dd7kdPyi.js";import"./Label-Bwfk_b4F.js";import"./TextField-CQ0deXKf.js";import"./FieldBase-DgiW3HLY.js";import"./Typography-C3y2BBzr.js";import"./useHighlightedText-CVbcsWEJ.js";import"./Skeleton-C_Dxe6ID.js";import"./Section-0rDkal-t.js";import"./Flex-CKAWkLAd.js";import"./XMark-DFSmJjac.js";import"./useId-BNhfXdUV.js";import"./Icon-DE5JaAj2.js";import"./Avatar-CUX9SLHz.js";import"./AvatarGroup-CpvcYsvD.js";import"./Heading-CYuK0FXt.js";import"./ListItem-u6nNWWO6.js";import"./Badge-DVsrmVw9.js";import"./Tooltip-DFVNjhLt.js";import"./ChevronUp-DWlUIEYm.js";import"./ChevronDown-D8XmQ_JM.js";import"./ChevronRight-Cqfpq8PE.js";import"./SettingsItemBase-xPZwhobn.js";import"./ItemMedia-CLlob8fs.js";import"./ItemBase-p8rf4Jdz.js";import"./ItemLink-DyGCCHkK.js";import"./ItemControls-dRm3u7Mm.js";import"./SettingsModal-CygK-Zxf.js";import"./ButtonIcon-CIUJ6U7l.js";import"./ButtonLabel-fQ3RMke8.js";const dt={title:"Account/AccountNotificationSettings",component:S,tags:["autodocs"],parameters:{}},s={args:{}},o=n=>{const[p,a]=g.useState({...n}),e=c=>{const{type:A,checked:B,name:d,value:h}=c.target;a(A==="checkbox"?l=>({...l,[d]:B}):l=>({...l,[d]:h}))};return t.jsx(S,{...n,...p,onChange:e})},i=()=>t.jsx(o,{smsAlerts:!0,phone:"99005566"}),r=()=>t.jsx(o,{smsAlerts:!0,phone:"99005566",emailAlerts:!0,email:"mathias@brann.no"}),m=({title:n="Aktør"})=>{const[p,a]=g.useState(!1),e=()=>{a(c=>!c)};return t.jsxs(t.Fragment,{children:[t.jsx(u,{onClick:e,children:"Åpne modal"}),t.jsxs(f,{open:p,onClose:e,children:[t.jsx(x,{title:n,children:t.jsx(C,{children:t.jsx(v,{id:"bb",icon:{name:"Bergen Bar",type:"company"},title:"Bergen Bar",description:"Org. nr. XXX XXX XXX"})})}),t.jsxs(X,{children:[t.jsx(r,{}),t.jsxs(j,{children:[t.jsx(u,{onClick:e,children:"Lagre og avslutt"}),t.jsx(u,{onClick:e,variant:"outline",children:"Avbryt"})]})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const gt=["Default","Controlled","SmsAlerts","SmsAndEmailAlerts","AccountNotificationsModal"];export{m as AccountNotificationsModal,o as Controlled,s as Default,i as SmsAlerts,r as SmsAndEmailAlerts,gt as __namedExportsOrder,dt as default};
