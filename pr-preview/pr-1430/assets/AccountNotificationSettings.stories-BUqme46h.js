var x=Object.defineProperty;var e=(o,a)=>x(o,"name",{value:a,configurable:!0});import{aa as S,a7 as t,c as d}from"./iframe-C7zNVDTT.js";import{A}from"./AccountNotificationSettings-CKrM6KvF.js";import{M as X,b as C,a as v}from"./ModalBody-DHblQtRU.js";import{L as j}from"./List-Eab06pgk.js";import{S as k}from"./SettingsItem-DVvt3bI4.js";import{B as M}from"./ButtonGroup-CoqmCer7.js";import"./preload-helper-Cc2_yIPf.js";import"./Fieldset-DG2W5MhA.js";import"./Switch-BTuJol9o.js";import"./Field-C_oHAtV1.js";import"./Input-CFKt0A_s.js";import"./Label-CAjho_cW.js";import"./TextField-DUvaSDR4.js";import"./FieldBase-CRVXDoio.js";import"./Typography-4gq5i4xU.js";import"./useHighlightedText-CLjqXK08.js";import"./Section-B3YiwHQ7.js";import"./Flex-CVxm3AId.js";import"./Avatar-BME3B1PP.js";import"./AvatarGroup-nzaSXphj.js";import"./Heading-gv6s55oV.js";import"./ListItem-taDywDuL.js";import"./Badge-CtuHfbCg.js";import"./Tooltip-B3NWibom.js";import"./ChevronUp-wuByUJN5.js";import"./ChevronDown-wiRxhmw3.js";import"./ChevronRight-DIApXsrk.js";import"./SettingsItemBase-CJYffbTY.js";import"./ItemMedia-89sj9-D5.js";import"./ItemBase-DuoRnkB5.js";import"./ItemLink-B4RQLXhb.js";import"./ItemControls-CUub_53H.js";import"./SettingsModal-BI6AVWDn.js";import"./ButtonIcon-BPuZWt5t.js";import"./ButtonLabel-CpQPvS5S.js";const ct={title:"Account/AccountNotificationSettings",component:A,tags:["autodocs"],parameters:{}},m={args:{}},n=e(o=>{const[a,i]=S.useState({...o}),r=e(l=>{const{type:h,checked:B,name:g,value:f}=l.target;i(h==="checkbox"?u=>({...u,[g]:B}):u=>({...u,[g]:f}))},"onChange");return t.jsx(A,{...o,...a,onChange:r})},"Controlled"),c=e(()=>t.jsx(n,{smsAlerts:!0,phone:"99005566"}),"SmsAlerts"),s=e(()=>t.jsx(n,{smsAlerts:!0,phone:"99005566",emailAlerts:!0,email:"mathias@brann.no"}),"SmsAndEmailAlerts"),p=e(({title:o="Aktør"})=>{const[a,i]=S.useState(!1),r=e(()=>{i(l=>!l)},"onToggle");return t.jsxs(t.Fragment,{children:[t.jsx(d,{onClick:r,children:"Åpne modal"}),t.jsxs(X,{open:a,onClose:r,children:[t.jsx(C,{title:o,children:t.jsx(j,{children:t.jsx(k,{id:"bb",icon:{name:"Bergen Bar",type:"company"},title:"Bergen Bar",description:"Org. nr. XXX XXX XXX"})})}),t.jsxs(v,{children:[t.jsx(s,{}),t.jsxs(M,{children:[t.jsx(d,{onClick:r,children:"Lagre og avslutt"}),t.jsx(d,{onClick:r,variant:"outline",children:"Avbryt"})]})]})]})]})},"AccountNotificationsModal");m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
