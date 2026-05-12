import{r as g,j as t}from"./iframe-BUZW8AMM.js";import{A as S}from"./AccountNotificationSettings-CAfqyiAW.js";import{B as u}from"./Button-gpqpzK6E.js";import{M as f,a as x,b as X}from"./ModalBody-BtJGyYre.js";import{L as C}from"./List-C59qtuov.js";import{S as j}from"./SettingsItem-B6dEFvOZ.js";import{B as v}from"./ButtonGroup-BdRMlEte.js";import"./preload-helper-PPVm8Dsz.js";import"./Fieldset-D6j_8XE-.js";import"./lite-DaUVFjkg.js";import"./index-BxrYGQ_D.js";import"./use-merge-refs-Cq-TarIz.js";import"./Switch-CFAy6nJV.js";import"./index-DDG5Qp_D.js";import"./Label-EV3PcI6g.js";import"./Input-xWxScOYP.js";import"./input-Dl9c_xvZ.js";import"./TextField-De0Y2qe5.js";import"./FieldBase-D0VPfoZq.js";import"./Typography-DPxU9lqg.js";import"./useHighlightedText-Df1F8nSN.js";import"./Skeleton-2WT-jYKy.js";import"./button-Bzfkec0d.js";import"./Section-DQEzrtai.js";import"./Flex-ErkwFvdj.js";import"./XMark-N_5CtkVA.js";import"./useId-CoMggIDA.js";import"./Icon-pO_LYxKU.js";import"./Avatar-VmI9f2FC.js";import"./AvatarGroup-BSpRcNGO.js";import"./Heading-BBJzhiZm.js";import"./ListItem-DqPqNTbx.js";import"./Badge-CcUYqUUV.js";import"./Tooltip-4HkvDlDY.js";import"./floating-ui.dom-DCpi3RTt.js";import"./ChevronUp-Cmvg9ZuE.js";import"./ChevronDown-C7e7c8oq.js";import"./ChevronRight-Be2F8dIE.js";import"./SettingsItemBase-DZ_I7vZA.js";import"./ItemLink-pH7m12-R.js";import"./ItemMedia-lV46z_8W.js";import"./ItemControls-CILw3fe6.js";import"./SettingsModal-2DOGG5hN.js";import"./ButtonIcon-DbIrT_gT.js";import"./ButtonLabel-CQvjwTEk.js";const At={title:"Account/AccountNotificationSettings",component:S,tags:["autodocs"],parameters:{}},s={args:{}},r=n=>{const[p,a]=g.useState({...n}),e=c=>{const{type:A,checked:B,name:d,value:h}=c.target;a(A==="checkbox"?l=>({...l,[d]:B}):l=>({...l,[d]:h}))};return t.jsx(S,{...n,...p,onChange:e})},i=()=>t.jsx(r,{smsAlerts:!0,phone:"99005566"}),o=()=>t.jsx(r,{smsAlerts:!0,phone:"99005566",emailAlerts:!0,email:"mathias@brann.no"}),m=({title:n="Aktør"})=>{const[p,a]=g.useState(!1),e=()=>{a(c=>!c)};return t.jsxs(t.Fragment,{children:[t.jsx(u,{onClick:e,children:"Åpne modal"}),t.jsxs(f,{open:p,onClose:e,children:[t.jsx(x,{title:n,children:t.jsx(C,{children:t.jsx(j,{id:"bb",icon:{name:"Bergen Bar",type:"company"},title:"Bergen Bar",description:"Org. nr. XXX XXX XXX"})})}),t.jsxs(X,{children:[t.jsx(o,{}),t.jsxs(v,{children:[t.jsx(u,{onClick:e,children:"Lagre og avslutt"}),t.jsx(u,{onClick:e,variant:"outline",children:"Avbryt"})]})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
