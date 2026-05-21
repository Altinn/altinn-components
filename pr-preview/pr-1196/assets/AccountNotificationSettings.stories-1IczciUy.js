import{r as g,j as t}from"./iframe-BDpWuaMs.js";import{A as S}from"./AccountNotificationSettings-DQcH0pKg.js";import{B as u}from"./Button-m_FXpHGO.js";import{M as f,a as x,b as X}from"./ModalBody-B45xukPd.js";import{L as C}from"./List-BnWl-S7K.js";import{S as j}from"./SettingsItem-DgmMIren.js";import{B as v}from"./ButtonGroup-DdOFFFWL.js";import"./preload-helper-PPVm8Dsz.js";import"./Fieldset-DcdEioN4.js";import"./tooltip-DLcd2lCg.js";import"./Switch-BV6144DA.js";import"./index-DVPUayQ0.js";import"./Label-7jR2lGh9.js";import"./Input-BoCHA0_0.js";import"./TextField-BVtlLRT2.js";import"./FieldBase-CGSHeWph.js";import"./Typography-DZRyPYmV.js";import"./useHighlightedText-B13W4IFy.js";import"./Skeleton-DC_TZb2p.js";import"./Section-B9Daowr7.js";import"./Flex-zEgiMRQg.js";import"./XMark-Cx5Omj8e.js";import"./useId-BKmV9YxM.js";import"./Icon-4_NTN6mD.js";import"./Avatar-CT8r-oMP.js";import"./AvatarGroup-C5RQzawa.js";import"./Heading-D4nA4ZwT.js";import"./ListItem-mkIEbDJT.js";import"./Badge-DPODtVho.js";import"./Tooltip-X0E0nlNG.js";import"./ChevronUp-CUbZcbs3.js";import"./ChevronDown-Bc_cVxBY.js";import"./ChevronRight-BJTZ2o3o.js";import"./SettingsItemBase-C3p6p24I.js";import"./ItemLink-CfhFFB25.js";import"./ItemMedia-CHwsaJTx.js";import"./ItemControls-BtUdj5a9.js";import"./SettingsModal-Bm7XFvqp.js";import"./ButtonIcon-BKilWA_u.js";import"./ButtonLabel-BQStCFIw.js";const lt={title:"Account/AccountNotificationSettings",component:S,tags:["autodocs"],parameters:{}},s={args:{}},r=n=>{const[c,a]=g.useState({...n}),e=p=>{const{type:A,checked:B,name:d,value:h}=p.target;a(A==="checkbox"?l=>({...l,[d]:B}):l=>({...l,[d]:h}))};return t.jsx(S,{...n,...c,onChange:e})},i=()=>t.jsx(r,{smsAlerts:!0,phone:"99005566"}),o=()=>t.jsx(r,{smsAlerts:!0,phone:"99005566",emailAlerts:!0,email:"mathias@brann.no"}),m=({title:n="Aktør"})=>{const[c,a]=g.useState(!1),e=()=>{a(p=>!p)};return t.jsxs(t.Fragment,{children:[t.jsx(u,{onClick:e,children:"Åpne modal"}),t.jsxs(f,{open:c,onClose:e,children:[t.jsx(x,{title:n,children:t.jsx(C,{children:t.jsx(j,{id:"bb",icon:{name:"Bergen Bar",type:"company"},title:"Bergen Bar",description:"Org. nr. XXX XXX XXX"})})}),t.jsxs(X,{children:[t.jsx(o,{}),t.jsxs(v,{children:[t.jsx(u,{onClick:e,children:"Lagre og avslutt"}),t.jsx(u,{onClick:e,variant:"outline",children:"Avbryt"})]})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ut=["Default","Controlled","SmsAlerts","SmsAndEmailAlerts","AccountNotificationsModal"];export{m as AccountNotificationsModal,r as Controlled,s as Default,i as SmsAlerts,o as SmsAndEmailAlerts,ut as __namedExportsOrder,lt as default};
