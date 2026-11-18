var f=Object.defineProperty;var e=(n,a)=>f(n,"name",{value:a,configurable:!0});import{a9 as S,a6 as t,c as d}from"./iframe-Cf4UALw8.js";import{A}from"./AccountNotificationSettings-Vl6XFh8y.js";import{M as C,b as X,a as v}from"./ModalBody-D4pYrcnM.js";import{L as j}from"./List-C8bvHqyv.js";import{S as k}from"./SettingsItem-CZpLnMaq.js";import{B as M}from"./ButtonGroup-Cw0djEV1.js";import"./preload-helper-Cc2_yIPf.js";import"./Fieldset-CpxHlq1s.js";import"./Switch-DuCdX2cJ.js";import"./Field-t2hlVRTC.js";import"./Input-OKh8JSaI.js";import"./Label-COfT1-eu.js";import"./TextField-DiuOYn3x.js";import"./FieldBase-DSaLFDie.js";import"./Typography-CsGx0b_o.js";import"./useHighlightedText-BGOVKO4Q.js";import"./Section-B-7b4QAp.js";import"./Flex-CiSMsFR7.js";import"./Avatar-DPyI2gzd.js";import"./AvatarGroup-C1FgnCDS.js";import"./Heading-B2LEqvTq.js";import"./ListItem-BdmDs4G2.js";import"./Badge-A8SwLO0m.js";import"./Tooltip-vDvnT1in.js";import"./ChevronUp-BKdDwASh.js";import"./ChevronDown-B_UJ6uJ_.js";import"./ChevronRight-DcM2grMN.js";import"./SettingsItemBase-zn0lCP7Y.js";import"./ItemMedia-BhGUpV92.js";import"./ItemBase-CxBRYBgT.js";import"./ItemLink-B3qiGYfX.js";import"./ItemControls-C74k2R8j.js";import"./SettingsModal-YzyxvoqZ.js";import"./ButtonIcon-DQVaPbHm.js";import"./ButtonLabel-DhfYOY4K.js";const ct={title:"Account/AccountNotificationSettings",component:A,tags:["autodocs"],parameters:{}},m={args:{}},r=e(n=>{const[a,i]=S.useState({...n}),o=e(l=>{const{type:h,checked:B,name:g,value:x}=l.target;i(h==="checkbox"?u=>({...u,[g]:B}):u=>({...u,[g]:x}))},"onChange");return t.jsx(A,{...n,...a,onChange:o})},"Controlled"),c=e(()=>t.jsx(r,{smsAlerts:!0,phone:"99005566"}),"SmsAlerts"),s=e(()=>t.jsx(r,{smsAlerts:!0,phone:"99005566",emailAlerts:!0,email:"mathias@brann.no"}),"SmsAndEmailAlerts"),p=e(({title:n="Aktør"})=>{const[a,i]=S.useState(!1),o=e(()=>{i(l=>!l)},"onToggle");return t.jsxs(t.Fragment,{children:[t.jsx(d,{onClick:o,children:"Åpne modal"}),t.jsxs(C,{open:a,onClose:o,children:[t.jsx(X,{title:n,children:t.jsx(j,{children:t.jsx(k,{id:"bb",icon:{name:"Bergen Bar",type:"company"},title:"Bergen Bar",description:"Org. nr. XXX XXX XXX"})})}),t.jsxs(v,{children:[t.jsx(s,{}),t.jsxs(M,{children:[t.jsx(d,{onClick:o,children:"Lagre og avslutt"}),t.jsx(d,{onClick:o,variant:"outline",children:"Avbryt"})]})]})]})]})},"AccountNotificationsModal"),pt=["Default","Controlled","SmsAlerts","SmsAndEmailAlerts","AccountNotificationsModal"];m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...m.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`(args: AccountNotificationSettingsProps) => {
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
}`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
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
}`,...p.parameters?.docs?.source}}};export{p as AccountNotificationsModal,r as Controlled,m as Default,c as SmsAlerts,s as SmsAndEmailAlerts,pt as __namedExportsOrder,ct as default};
