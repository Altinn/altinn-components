var x=Object.defineProperty;var e=(o,a)=>x(o,"name",{value:a,configurable:!0});import{aa as S,a7 as t,c as d}from"./iframe-BaqLtPTs.js";import{A}from"./AccountNotificationSettings-DnN_KbGl.js";import{M as X,b as C,a as v}from"./ModalBody-n_1CR2eM.js";import{L as j}from"./List-CSO-iXDD.js";import{S as k}from"./SettingsItem-DY3c7I8w.js";import{B as M}from"./ButtonGroup-BJPVaBTK.js";import"./preload-helper-Cc2_yIPf.js";import"./Fieldset-BHd0mRZg.js";import"./Switch-cEGCs3Qc.js";import"./Field-D5dVA89M.js";import"./Input-BbFz6Lbp.js";import"./Label-Wvr4cn-z.js";import"./TextField-C8XNl_7d.js";import"./FieldBase-BEQqqs0u.js";import"./Typography-DwSVJfAa.js";import"./useHighlightedText-sWqW6aCW.js";import"./Section-C__1PXg0.js";import"./Flex-DAfEpjHq.js";import"./Avatar-DvYNusc4.js";import"./AvatarGroup-BUa5IcMK.js";import"./Heading-CDNNIgnR.js";import"./ListItem-B1zZ41e6.js";import"./Badge-Dh4HGE2C.js";import"./Tooltip-DfSLGLjy.js";import"./ChevronUp-DC2GE9BE.js";import"./ChevronDown-T0hrSAlY.js";import"./ChevronRight-Dg4XRKaD.js";import"./SettingsItemBase-BqOvTG08.js";import"./ItemMedia-CLNTwl7K.js";import"./ItemBase-CZF7Y01p.js";import"./ItemLink-DASRyS3K.js";import"./ItemControls-BPS_hDHQ.js";import"./SettingsModal-1p4U1o-8.js";import"./ButtonIcon-vCCOEFdH.js";import"./ButtonLabel-CYdCAiFt.js";const ct={title:"Account/AccountNotificationSettings",component:A,tags:["autodocs"],parameters:{}},m={args:{}},n=e(o=>{const[a,i]=S.useState({...o}),r=e(l=>{const{type:h,checked:B,name:g,value:f}=l.target;i(h==="checkbox"?u=>({...u,[g]:B}):u=>({...u,[g]:f}))},"onChange");return t.jsx(A,{...o,...a,onChange:r})},"Controlled"),c=e(()=>t.jsx(n,{smsAlerts:!0,phone:"99005566"}),"SmsAlerts"),s=e(()=>t.jsx(n,{smsAlerts:!0,phone:"99005566",emailAlerts:!0,email:"mathias@brann.no"}),"SmsAndEmailAlerts"),p=e(({title:o="Aktør"})=>{const[a,i]=S.useState(!1),r=e(()=>{i(l=>!l)},"onToggle");return t.jsxs(t.Fragment,{children:[t.jsx(d,{onClick:r,children:"Åpne modal"}),t.jsxs(X,{open:a,onClose:r,children:[t.jsx(C,{title:o,children:t.jsx(j,{children:t.jsx(k,{id:"bb",icon:{name:"Bergen Bar",type:"company"},title:"Bergen Bar",description:"Org. nr. XXX XXX XXX"})})}),t.jsxs(v,{children:[t.jsx(s,{}),t.jsxs(M,{children:[t.jsx(d,{onClick:r,children:"Lagre og avslutt"}),t.jsx(d,{onClick:r,variant:"outline",children:"Avbryt"})]})]})]})]})},"AccountNotificationsModal");m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
