import{r as g,j as t}from"./iframe-DxxW_Hah.js";import{A as S}from"./AccountNotificationSettings-BdVK6kxC.js";import{B as u}from"./Button-CcwbSiKg.js";import{M as h}from"./ModalBase-CtAbLl_j.js";import{M as x,a as v}from"./ModalBody-Beg9EMdn.js";import{L as X}from"./List-C_geiOhU.js";import{S as C}from"./SettingsItem-DwFegIBO.js";import{B as j}from"./ButtonGroup-wgVYayc9.js";import"./preload-helper-PPVm8Dsz.js";import"./Fieldset-CXGM5LTr.js";import"./lite-DaUVFjkg.js";import"./index-D2WP85Bl.js";import"./use-merge-refs-BbTz5JXs.js";import"./Switch-Cl1wfjZx.js";import"./index-pOAXHZ6n.js";import"./Label-YFmv6AXl.js";import"./Input-Cs8lujA3.js";import"./input-B30SugQD.js";import"./TextField-CCvbU-0Y.js";import"./FieldBase-ttSv04zw.js";import"./Typography-CfTPPq_a.js";import"./useHighlightedText-C9OLcmcP.js";import"./Skeleton-DiRARuJ9.js";import"./button-BBYE_PPH.js";import"./Section-DDQuxuHV.js";import"./Flex-CRmH3H-L.js";import"./XMark-ChXBbXGN.js";import"./useId-CckRU7I8.js";import"./Icon-Cf03fdWw.js";import"./Avatar--rA6gsID.js";import"./AvatarGroup-C6j_8VXQ.js";import"./Heading-Bejow2zA.js";import"./ListItem-dSza7nWX.js";import"./Badge-CQ9EBUDZ.js";import"./ChevronUp-rIZe7Kl4.js";import"./ChevronDown-qSt-istD.js";import"./ChevronRight-CqOTbusb.js";import"./SettingsItemBase-CndiFJna.js";import"./SettingsModal-Cf3Cuw8u.js";import"./ButtonIcon-Bv6eEJQ5.js";import"./ButtonLabel-BEhiscYg.js";const ut={title:"Account/AccountNotificationSettings",component:S,tags:["autodocs"],parameters:{}},s={args:{}},r=n=>{const[c,a]=g.useState({...n}),e=p=>{const{type:f,checked:A,name:d,value:B}=p.target;a(f==="checkbox"?l=>({...l,[d]:A}):l=>({...l,[d]:B}))};return t.jsx(S,{...n,...c,onChange:e})},i=()=>t.jsx(r,{smsAlerts:!0,phone:"99005566"}),o=()=>t.jsx(r,{smsAlerts:!0,phone:"99005566",emailAlerts:!0,email:"mathias@brann.no"}),m=({title:n="Aktør"})=>{const[c,a]=g.useState(!1),e=()=>{a(p=>!p)};return t.jsxs(t.Fragment,{children:[t.jsx(u,{onClick:e,children:"Åpne modal"}),t.jsxs(h,{open:c,onClose:e,children:[t.jsx(x,{title:n,children:t.jsx(X,{children:t.jsx(C,{id:"bb",interactive:!1,icon:{name:"Bergen Bar",type:"company"},title:"Bergen Bar",description:"Org. nr. XXX XXX XXX"})})}),t.jsxs(v,{children:[t.jsx(o,{}),t.jsxs(j,{children:[t.jsx(u,{onClick:e,children:"Lagre og avslutt"}),t.jsx(u,{onClick:e,variant:"outline",children:"Avbryt"})]})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
