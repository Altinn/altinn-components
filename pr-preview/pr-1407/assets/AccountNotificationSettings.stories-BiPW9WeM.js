var f=Object.defineProperty;var e=(n,a)=>f(n,"name",{value:a,configurable:!0});import{a8 as S,a5 as t,b as d}from"./iframe-CmcSEjvS.js";import{A}from"./AccountNotificationSettings-DfPndtei.js";import{M as C,b as X,a as v}from"./ModalBody-_pzP4G9c.js";import{L as j}from"./List-DKoS5qie.js";import{S as b}from"./SettingsItem-B7CMMYfk.js";import{B as k}from"./ButtonGroup-Cpml5GDI.js";import"./preload-helper-Cc2_yIPf.js";import"./Fieldset-DTtqGaAE.js";import"./Switch-DKqmfKoy.js";import"./Field-00i3_VLV.js";import"./Input-C0nOO2ZR.js";import"./Label-C2oW91xs.js";import"./TextField-DFisW25Z.js";import"./FieldBase-C-IkhlpM.js";import"./Typography-sASlV-kd.js";import"./useHighlightedText-DJAL4JcK.js";import"./Section-Bo2v-MBz.js";import"./Flex-DEGiHBSh.js";import"./Avatar-e7KasoHp.js";import"./AvatarGroup-CK0XwNSh.js";import"./Heading-vmMoflPs.js";import"./ListItem-CGdPgfN9.js";import"./Badge-DDzGMVSy.js";import"./Tooltip-BzKHjYiv.js";import"./ChevronUp-DVy7WPfM.js";import"./ChevronDown-CI4G7sPT.js";import"./ChevronRight-B5wtiA4y.js";import"./SettingsItemBase-DTDRF-eI.js";import"./ItemMedia-BefRyocx.js";import"./ItemBase-DGtB-EKc.js";import"./ItemLink-CfNuON4u.js";import"./ItemControls-YGZP0Vjk.js";import"./SettingsModal-CfdN6cEJ.js";import"./ButtonIcon-qcPphlSi.js";import"./ButtonLabel-C3jzDSjq.js";const ct={title:"Account/AccountNotificationSettings",component:A,tags:["autodocs"],parameters:{}},m={args:{}},r=e(n=>{const[a,i]=S.useState({...n}),o=e(l=>{const{type:h,checked:B,name:g,value:x}=l.target;i(h==="checkbox"?u=>({...u,[g]:B}):u=>({...u,[g]:x}))},"onChange");return t.jsx(A,{...n,...a,onChange:o})},"Controlled"),c=e(()=>t.jsx(r,{smsAlerts:!0,phone:"99005566"}),"SmsAlerts"),s=e(()=>t.jsx(r,{smsAlerts:!0,phone:"99005566",emailAlerts:!0,email:"mathias@brann.no"}),"SmsAndEmailAlerts"),p=e(({title:n="Aktør"})=>{const[a,i]=S.useState(!1),o=e(()=>{i(l=>!l)},"onToggle");return t.jsxs(t.Fragment,{children:[t.jsx(d,{onClick:o,children:"Åpne modal"}),t.jsxs(C,{open:a,onClose:o,children:[t.jsx(X,{title:n,children:t.jsx(j,{children:t.jsx(b,{id:"bb",icon:{name:"Bergen Bar",type:"company"},title:"Bergen Bar",description:"Org. nr. XXX XXX XXX"})})}),t.jsxs(v,{children:[t.jsx(s,{}),t.jsxs(k,{children:[t.jsx(d,{onClick:o,children:"Lagre og avslutt"}),t.jsx(d,{onClick:o,variant:"outline",children:"Avbryt"})]})]})]})]})},"AccountNotificationsModal"),pt=["Default","Controlled","SmsAlerts","SmsAndEmailAlerts","AccountNotificationsModal"];m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
