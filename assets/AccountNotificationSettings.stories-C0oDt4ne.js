import{aa as g,a7 as t,c as u}from"./iframe-Bg-ykIGY.js";import{A as S}from"./AccountNotificationSettings-gKE8bN80.js";import{M as f,b as x,a as X}from"./ModalBody-9RwRyUWe.js";import{L as C}from"./List-Cc9en0ov.js";import{S as v}from"./SettingsItem-BnyazG-P.js";import{B as j}from"./ButtonGroup-D3TFK-sP.js";import"./preload-helper-PPVm8Dsz.js";import"./Fieldset-CkD0GUNa.js";import"./Switch-BMj-uGOR.js";import"./Field-CtkuJ2u8.js";import"./Input-DE7Whw6H.js";import"./Label-Bd0qu7F0.js";import"./TextField-C5-1usr1.js";import"./FieldBase-DJSWyb1T.js";import"./Typography-DBpPrukr.js";import"./useHighlightedText-pfd0QjZv.js";import"./Section-3Ay22gMM.js";import"./Flex-BQ7Sfa4Q.js";import"./Avatar-DcnAq-Om.js";import"./AvatarGroup-BOIk740D.js";import"./Heading-BKVhZ0mC.js";import"./ListItem-TtjgHak_.js";import"./Badge-DsOcGMcG.js";import"./Tooltip-DQBCcEkE.js";import"./ChevronUp-C-UrHs7h.js";import"./ChevronDown-30JTV7H0.js";import"./ChevronRight-BubW3AYp.js";import"./SettingsItemBase-DbC3k_m0.js";import"./ItemMedia-CbKN8wGb.js";import"./ItemBase-oVSLgwcy.js";import"./ItemLink-D1jwa25l.js";import"./ItemControls-ChQuM1Jl.js";import"./SettingsModal-DoDAcvH9.js";import"./ButtonIcon-BN0vPuAv.js";import"./ButtonLabel-DGmLIPRz.js";const st={title:"Account/AccountNotificationSettings",component:S,tags:["autodocs"],parameters:{}},s={args:{}},o=n=>{const[c,a]=g.useState({...n}),e=p=>{const{type:A,checked:h,name:d,value:B}=p.target;a(A==="checkbox"?l=>({...l,[d]:h}):l=>({...l,[d]:B}))};return t.jsx(S,{...n,...c,onChange:e})},i=()=>t.jsx(o,{smsAlerts:!0,phone:"99005566"}),r=()=>t.jsx(o,{smsAlerts:!0,phone:"99005566",emailAlerts:!0,email:"mathias@brann.no"}),m=({title:n="Aktør"})=>{const[c,a]=g.useState(!1),e=()=>{a(p=>!p)};return t.jsxs(t.Fragment,{children:[t.jsx(u,{onClick:e,children:"Åpne modal"}),t.jsxs(f,{open:c,onClose:e,children:[t.jsx(x,{title:n,children:t.jsx(C,{children:t.jsx(v,{id:"bb",icon:{name:"Bergen Bar",type:"company"},title:"Bergen Bar",description:"Org. nr. XXX XXX XXX"})})}),t.jsxs(X,{children:[t.jsx(r,{}),t.jsxs(j,{children:[t.jsx(u,{onClick:e,children:"Lagre og avslutt"}),t.jsx(u,{onClick:e,variant:"outline",children:"Avbryt"})]})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const it=["Default","Controlled","SmsAlerts","SmsAndEmailAlerts","AccountNotificationsModal"];export{m as AccountNotificationsModal,o as Controlled,s as Default,i as SmsAlerts,r as SmsAndEmailAlerts,it as __namedExportsOrder,st as default};
