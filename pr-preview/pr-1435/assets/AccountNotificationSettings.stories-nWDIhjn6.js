var x=Object.defineProperty;var e=(o,a)=>x(o,"name",{value:a,configurable:!0});import{aa as S,a7 as t,c as d}from"./iframe-C_3qWz8U.js";import{A}from"./AccountNotificationSettings-DDxWwEv0.js";import{M as X,b as C,a as v}from"./ModalBody-BKf16YWY.js";import{L as j}from"./List-DqRWyw1C.js";import{S as k}from"./SettingsItem-BDryr6tg.js";import{B as M}from"./ButtonGroup-Byo6nBQS.js";import"./preload-helper-Cc2_yIPf.js";import"./Fieldset-DuTv6cVj.js";import"./Switch-Br6FtIP2.js";import"./Field-D_aQ-GwQ.js";import"./Input-BnIvU9G4.js";import"./Label-El1js8iZ.js";import"./TextField-Zt09XX06.js";import"./FieldBase-2HPCGFYx.js";import"./Typography-BcJ8Dd08.js";import"./useHighlightedText-ChiMW-L8.js";import"./Section-CCH9N23g.js";import"./Flex-BTfeLS8w.js";import"./Avatar-DoTE2KMY.js";import"./AvatarGroup-CYCsQlmU.js";import"./Heading-mFc3Xe1m.js";import"./ListItem-CEzqSoAw.js";import"./Badge-BBubxNU6.js";import"./Tooltip-oYeDkYvf.js";import"./ChevronUp-CK8aUJr_.js";import"./ChevronDown-Du2hGOu_.js";import"./ChevronRight-Cfc1KVT6.js";import"./SettingsItemBase-Df9MmMMP.js";import"./ItemMedia-Cj3xkQia.js";import"./ItemBase-DGBv8zFK.js";import"./ItemLink-BlWZTpmg.js";import"./ItemControls-B-e7R4IL.js";import"./SettingsModal-DErnX0V6.js";import"./ButtonIcon-CkJ7s5gA.js";import"./ButtonLabel-IXPMuGu0.js";const ct={title:"Account/AccountNotificationSettings",component:A,tags:["autodocs"],parameters:{}},m={args:{}},n=e(o=>{const[a,i]=S.useState({...o}),r=e(l=>{const{type:h,checked:B,name:g,value:f}=l.target;i(h==="checkbox"?u=>({...u,[g]:B}):u=>({...u,[g]:f}))},"onChange");return t.jsx(A,{...o,...a,onChange:r})},"Controlled"),c=e(()=>t.jsx(n,{smsAlerts:!0,phone:"99005566"}),"SmsAlerts"),s=e(()=>t.jsx(n,{smsAlerts:!0,phone:"99005566",emailAlerts:!0,email:"mathias@brann.no"}),"SmsAndEmailAlerts"),p=e(({title:o="Aktør"})=>{const[a,i]=S.useState(!1),r=e(()=>{i(l=>!l)},"onToggle");return t.jsxs(t.Fragment,{children:[t.jsx(d,{onClick:r,children:"Åpne modal"}),t.jsxs(X,{open:a,onClose:r,children:[t.jsx(C,{title:o,children:t.jsx(j,{children:t.jsx(k,{id:"bb",icon:{name:"Bergen Bar",type:"company"},title:"Bergen Bar",description:"Org. nr. XXX XXX XXX"})})}),t.jsxs(v,{children:[t.jsx(s,{}),t.jsxs(M,{children:[t.jsx(d,{onClick:r,children:"Lagre og avslutt"}),t.jsx(d,{onClick:r,variant:"outline",children:"Avbryt"})]})]})]})]})},"AccountNotificationsModal");m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`(args: AccountNotificationSettingsProps) => {
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
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  return <Controlled smsAlerts={true} phone="99005566" />;
}`,...c.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  return <Controlled smsAlerts={true} phone="99005566" emailAlerts={true} email="mathias@brann.no" />;
}`,...s.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`({
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
}`,...p.parameters?.docs?.source}}};const pt=["Default","Controlled","SmsAlerts","SmsAndEmailAlerts","AccountNotificationsModal"];export{p as AccountNotificationsModal,n as Controlled,m as Default,c as SmsAlerts,s as SmsAndEmailAlerts,pt as __namedExportsOrder,ct as default};
