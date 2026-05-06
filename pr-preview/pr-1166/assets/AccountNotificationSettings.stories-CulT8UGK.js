import{r as g,j as t}from"./iframe-Cppd0qv6.js";import{A as S}from"./AccountNotificationSettings-BXd4rCwz.js";import{B as u}from"./Button-DZtlkh8w.js";import{M as f,a as x,b as X}from"./ModalBody-BEyoSkmL.js";import{L as C}from"./List-B3lNMupF.js";import{S as j}from"./SettingsItem-Dr-r7mZw.js";import{B as v}from"./ButtonGroup-DWofFi2X.js";import"./preload-helper-PPVm8Dsz.js";import"./Fieldset-DRaBeFp8.js";import"./lite-DaUVFjkg.js";import"./index-DZ9ad6Vq.js";import"./use-merge-refs-BVudX8AY.js";import"./Switch-BmVTV9XV.js";import"./index-BRImx9w3.js";import"./Label-BZYzljw4.js";import"./Input-BKVpgPJL.js";import"./input-DhtF3MwF.js";import"./TextField-CwO8NmCL.js";import"./FieldBase-AUbtsXZu.js";import"./Typography-CFy91Abt.js";import"./useHighlightedText-CnlmbfHa.js";import"./Skeleton-DZL_2b5i.js";import"./button-DXqTFqXv.js";import"./Section-B6Kfhq0f.js";import"./Flex-BPZu7a_-.js";import"./XMark-xtLLERRk.js";import"./useId-BBgZM5Xr.js";import"./Icon-DYZqEJGr.js";import"./Avatar-C8BEFMoW.js";import"./AvatarGroup-CkQ-nr_4.js";import"./Heading-CVWk1BMK.js";import"./ListItem-BWQ_dxae.js";import"./Badge-DKrs0UA7.js";import"./Tooltip-B3YY3plR.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ChevronUp-BQWLGwxf.js";import"./ChevronDown-DyFLAVGh.js";import"./ChevronRight-CWvUN_3J.js";import"./SettingsItemBase-BPkLG8tg.js";import"./ItemLink-C9wl5dRr.js";import"./ItemMedia-B28DyjI4.js";import"./ItemControls-D1uxt3OD.js";import"./SettingsModal-DDq2i2rR.js";import"./ButtonIcon-DZ5ghlk2.js";import"./ButtonLabel-BABBlGuL.js";const At={title:"Account/AccountNotificationSettings",component:S,tags:["autodocs"],parameters:{}},s={args:{}},r=n=>{const[p,a]=g.useState({...n}),e=c=>{const{type:A,checked:B,name:d,value:h}=c.target;a(A==="checkbox"?l=>({...l,[d]:B}):l=>({...l,[d]:h}))};return t.jsx(S,{...n,...p,onChange:e})},i=()=>t.jsx(r,{smsAlerts:!0,phone:"99005566"}),o=()=>t.jsx(r,{smsAlerts:!0,phone:"99005566",emailAlerts:!0,email:"mathias@brann.no"}),m=({title:n="Aktør"})=>{const[p,a]=g.useState(!1),e=()=>{a(c=>!c)};return t.jsxs(t.Fragment,{children:[t.jsx(u,{onClick:e,children:"Åpne modal"}),t.jsxs(f,{open:p,onClose:e,children:[t.jsx(x,{title:n,children:t.jsx(C,{children:t.jsx(j,{id:"bb",icon:{name:"Bergen Bar",type:"company"},title:"Bergen Bar",description:"Org. nr. XXX XXX XXX"})})}),t.jsxs(X,{children:[t.jsx(o,{}),t.jsxs(v,{children:[t.jsx(u,{onClick:e,children:"Lagre og avslutt"}),t.jsx(u,{onClick:e,variant:"outline",children:"Avbryt"})]})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
