import{s as g,p as t}from"./iframe-B0raGbVc.js";import{A as S}from"./AccountNotificationSettings-9j9E-obc.js";import{B as u}from"./Button-DaZ5Xj9O.js";import{M as f,b as x,a as X}from"./ModalBody-Bc7rXxzI.js";import{L as C}from"./List-BUxiMRhB.js";import{S as v}from"./SettingsItem-DZE3cKJE.js";import{B as j}from"./ButtonGroup-DlKQjFoe.js";import"./preload-helper-PPVm8Dsz.js";import"./Fieldset-DDHpvEYt.js";import"./tooltip-C563LrpG.js";import"./Switch-CQ1PRon6.js";import"./index-BFPoepm_.js";import"./Label-BU6sA0x8.js";import"./Input-DWL065bb.js";import"./TextField-BfjlbdAL.js";import"./FieldBase-COYRg4qt.js";import"./Typography-aMX_Xall.js";import"./useHighlightedText-Cy927kZm.js";import"./Skeleton-Bie46BNt.js";import"./Section-DlNTQI-0.js";import"./Flex-DAM9Vgpa.js";import"./XMark-Vu63tlKp.js";import"./useId-DjmMrSjF.js";import"./Icon-CkGS8ofh.js";import"./Avatar-C_p7vVVJ.js";import"./AvatarGroup-CCFl7ITU.js";import"./Heading-HwRbtbil.js";import"./ListItem-CBFwejwW.js";import"./Badge-LVeKbEwp.js";import"./Tooltip-drcV-Psw.js";import"./ChevronUp-Cz4MSlUQ.js";import"./ChevronDown-CNqUwOXO.js";import"./ChevronRight-B1cS3dE4.js";import"./SettingsItemBase-KAndVJGv.js";import"./ItemMedia-vIK6hHXj.js";import"./ItemBase-BOE3ch8M.js";import"./ItemLink-CuY20mCv.js";import"./ItemControls-0LHp_bwC.js";import"./SettingsModal-CrxZUlDd.js";import"./ButtonIcon-BDD4AILi.js";import"./ButtonLabel-C6Vo5Tgm.js";const ut={title:"Account/AccountNotificationSettings",component:S,tags:["autodocs"],parameters:{}},s={args:{}},o=n=>{const[c,a]=g.useState({...n}),e=p=>{const{type:A,checked:B,name:d,value:h}=p.target;a(A==="checkbox"?l=>({...l,[d]:B}):l=>({...l,[d]:h}))};return t.jsx(S,{...n,...c,onChange:e})},i=()=>t.jsx(o,{smsAlerts:!0,phone:"99005566"}),r=()=>t.jsx(o,{smsAlerts:!0,phone:"99005566",emailAlerts:!0,email:"mathias@brann.no"}),m=({title:n="Aktør"})=>{const[c,a]=g.useState(!1),e=()=>{a(p=>!p)};return t.jsxs(t.Fragment,{children:[t.jsx(u,{onClick:e,children:"Åpne modal"}),t.jsxs(f,{open:c,onClose:e,children:[t.jsx(x,{title:n,children:t.jsx(C,{children:t.jsx(v,{id:"bb",icon:{name:"Bergen Bar",type:"company"},title:"Bergen Bar",description:"Org. nr. XXX XXX XXX"})})}),t.jsxs(X,{children:[t.jsx(r,{}),t.jsxs(j,{children:[t.jsx(u,{onClick:e,children:"Lagre og avslutt"}),t.jsx(u,{onClick:e,variant:"outline",children:"Avbryt"})]})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const dt=["Default","Controlled","SmsAlerts","SmsAndEmailAlerts","AccountNotificationsModal"];export{m as AccountNotificationsModal,o as Controlled,s as Default,i as SmsAlerts,r as SmsAndEmailAlerts,dt as __namedExportsOrder,ut as default};
