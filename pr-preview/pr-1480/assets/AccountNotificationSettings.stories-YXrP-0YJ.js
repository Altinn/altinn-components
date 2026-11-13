var f=Object.defineProperty;var e=(n,a)=>f(n,"name",{value:a,configurable:!0});import{aa as S,a7 as t,c as d}from"./iframe-r-PzxnFG.js";import{A}from"./AccountNotificationSettings-CHKUHtsZ.js";import{M as C,b as X,a as v}from"./ModalBody-B-L7EXsI.js";import{L as j}from"./List-DKe_PVra.js";import{S as k}from"./SettingsItem-DxXxFwXC.js";import{B as M}from"./ButtonGroup-tpSmkUGs.js";import"./preload-helper-Cc2_yIPf.js";import"./Fieldset-CZCpLVdS.js";import"./Switch-BcyiU8sz.js";import"./Field-C8va_Ig3.js";import"./Input-BYbvd3yE.js";import"./Label-dzQU0Yg2.js";import"./TextField-CvCwRuU3.js";import"./FieldBase-D95hzyfr.js";import"./Typography-DZA02yZr.js";import"./useHighlightedText-D1CHWYs6.js";import"./Section-DH0F_yu4.js";import"./Flex-DRLqoZbu.js";import"./Avatar-Dzc1_6Ua.js";import"./AvatarGroup-D0dlHClc.js";import"./Heading-qFKPv3xm.js";import"./ListItem-SAy6Qdz6.js";import"./Badge-CQlPkK8J.js";import"./Tooltip-B_Gc3g4S.js";import"./ChevronUp-B0s8dawY.js";import"./ChevronDown-BD5i-hxE.js";import"./ChevronRight-DoF3revo.js";import"./SettingsItemBase-YCR0c7jg.js";import"./ItemMedia-BFk5syHA.js";import"./ItemBase-CTpIDqLP.js";import"./ItemLink-BAk2uFkE.js";import"./ItemControls-Di1aFGjk.js";import"./SettingsModal-BdZ7Q-Ay.js";import"./ButtonLabel-DKmNFHli.js";const mt={title:"Account/AccountNotificationSettings",component:A,tags:["autodocs"],parameters:{}},m={args:{}},r=e(n=>{const[a,i]=S.useState({...n}),o=e(l=>{const{type:h,checked:B,name:g,value:x}=l.target;i(h==="checkbox"?u=>({...u,[g]:B}):u=>({...u,[g]:x}))},"onChange");return t.jsx(A,{...n,...a,onChange:o})},"Controlled"),c=e(()=>t.jsx(r,{smsAlerts:!0,phone:"99005566"}),"SmsAlerts"),s=e(()=>t.jsx(r,{smsAlerts:!0,phone:"99005566",emailAlerts:!0,email:"mathias@brann.no"}),"SmsAndEmailAlerts"),p=e(({title:n="Aktør"})=>{const[a,i]=S.useState(!1),o=e(()=>{i(l=>!l)},"onToggle");return t.jsxs(t.Fragment,{children:[t.jsx(d,{onClick:o,children:"Åpne modal"}),t.jsxs(C,{open:a,onClose:o,children:[t.jsx(X,{title:n,children:t.jsx(j,{children:t.jsx(k,{id:"bb",icon:{name:"Bergen Bar",type:"company"},title:"Bergen Bar",description:"Org. nr. XXX XXX XXX"})})}),t.jsxs(v,{children:[t.jsx(s,{}),t.jsxs(M,{children:[t.jsx(d,{onClick:o,children:"Lagre og avslutt"}),t.jsx(d,{onClick:o,variant:"outline",children:"Avbryt"})]})]})]})]})},"AccountNotificationsModal"),ct=["Default","Controlled","SmsAlerts","SmsAndEmailAlerts","AccountNotificationsModal"];m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};export{p as AccountNotificationsModal,r as Controlled,m as Default,c as SmsAlerts,s as SmsAndEmailAlerts,ct as __namedExportsOrder,mt as default};
