var f=Object.defineProperty;var e=(n,a)=>f(n,"name",{value:a,configurable:!0});import{a9 as S,a6 as t,c as d}from"./iframe-Cb83cNHz.js";import{A}from"./AccountNotificationSettings-fHQo5Ht9.js";import{M as C,b as X,a as v}from"./ModalBody-CL-S6xSQ.js";import{L as j}from"./List-_fktTtX7.js";import{S as k}from"./SettingsItem-tnlpKRve.js";import{B as M}from"./ButtonGroup-BwzWu-pA.js";import"./preload-helper-Cc2_yIPf.js";import"./Fieldset-DKemD4C3.js";import"./Switch-DIW_Z6WH.js";import"./Field-SexvxzIl.js";import"./Input-DdatSh7d.js";import"./Label-CzmEce_d.js";import"./TextField-Cld7v0hg.js";import"./FieldBase-DBBKjPwf.js";import"./Typography-BPADIB9F.js";import"./useHighlightedText-DXF5vSCe.js";import"./Section-ClBUDaq7.js";import"./Flex-mAUGJKsG.js";import"./Avatar-CO1wzsxc.js";import"./AvatarGroup-DvuSBfuR.js";import"./Heading-I2bz7uBQ.js";import"./ListItem-DCX5xInW.js";import"./Badge-DGYSahl0.js";import"./Tooltip-Bacli5fs.js";import"./ChevronUp-BCG2x0JT.js";import"./ChevronDown-CvYcy6of.js";import"./ChevronRight-C-6CVVq7.js";import"./SettingsItemBase-Cp8OCg29.js";import"./ItemMedia-DqOX_qxk.js";import"./ItemBase-kQ84sUK4.js";import"./ItemLink-BQ17I7eJ.js";import"./ItemControls-B2ksNOht.js";import"./SettingsModal-BNJ4T6iX.js";import"./ButtonIcon-B4Ur9LKF.js";import"./ButtonLabel-DO3-EdGM.js";const ct={title:"Account/AccountNotificationSettings",component:A,tags:["autodocs"],parameters:{}},m={args:{}},r=e(n=>{const[a,i]=S.useState({...n}),o=e(l=>{const{type:h,checked:B,name:g,value:x}=l.target;i(h==="checkbox"?u=>({...u,[g]:B}):u=>({...u,[g]:x}))},"onChange");return t.jsx(A,{...n,...a,onChange:o})},"Controlled"),c=e(()=>t.jsx(r,{smsAlerts:!0,phone:"99005566"}),"SmsAlerts"),s=e(()=>t.jsx(r,{smsAlerts:!0,phone:"99005566",emailAlerts:!0,email:"mathias@brann.no"}),"SmsAndEmailAlerts"),p=e(({title:n="Aktør"})=>{const[a,i]=S.useState(!1),o=e(()=>{i(l=>!l)},"onToggle");return t.jsxs(t.Fragment,{children:[t.jsx(d,{onClick:o,children:"Åpne modal"}),t.jsxs(C,{open:a,onClose:o,children:[t.jsx(X,{title:n,children:t.jsx(j,{children:t.jsx(k,{id:"bb",icon:{name:"Bergen Bar",type:"company"},title:"Bergen Bar",description:"Org. nr. XXX XXX XXX"})})}),t.jsxs(v,{children:[t.jsx(s,{}),t.jsxs(M,{children:[t.jsx(d,{onClick:o,children:"Lagre og avslutt"}),t.jsx(d,{onClick:o,variant:"outline",children:"Avbryt"})]})]})]})]})},"AccountNotificationsModal"),pt=["Default","Controlled","SmsAlerts","SmsAndEmailAlerts","AccountNotificationsModal"];m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
