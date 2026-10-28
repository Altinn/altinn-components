var f=Object.defineProperty;var e=(n,a)=>f(n,"name",{value:a,configurable:!0});import{a8 as S,a5 as t,b as d}from"./iframe-BfD7syly.js";import{A}from"./AccountNotificationSettings-ft8701_I.js";import{M as C,b as X,a as v}from"./ModalBody-BG0TjSSS.js";import{L as j}from"./List-ED_XuXRq.js";import{S as b}from"./SettingsItem-bBdNMt_4.js";import{B as k}from"./ButtonGroup-DFsWLoyK.js";import"./preload-helper-Cc2_yIPf.js";import"./Fieldset-B79kwUcw.js";import"./Switch-UQ3Ni1OJ.js";import"./Field-DGIr44pk.js";import"./Input-BppbGARe.js";import"./Label-KYDdO5cS.js";import"./TextField-Gc8uNQmn.js";import"./FieldBase-fk0uyKjd.js";import"./Typography-EJ3Vxj-4.js";import"./useHighlightedText-BiU1Xaf8.js";import"./Section-r6HY9TNV.js";import"./Flex-B7LQuBXt.js";import"./Avatar-DzXDYKXO.js";import"./AvatarGroup-x9OrqdJM.js";import"./Heading-M_gD0nhY.js";import"./ListItem-CBQXcdIJ.js";import"./Badge-tM6hClJt.js";import"./Tooltip-BbiC_D-U.js";import"./ChevronUp-Di_vjPCQ.js";import"./ChevronDown-CFgXCL2X.js";import"./ChevronRight-DeJMnotn.js";import"./SettingsItemBase-BtSbSFJ1.js";import"./ItemMedia-DHigLupS.js";import"./ItemBase-ns7uWmGI.js";import"./ItemLink-B9RuLI2u.js";import"./ItemControls-CvMksNjC.js";import"./SettingsModal-BAff8Jkt.js";import"./ButtonIcon-15F_DJjK.js";import"./ButtonLabel-Btjg_m5y.js";const ct={title:"Account/AccountNotificationSettings",component:A,tags:["autodocs"],parameters:{}},m={args:{}},r=e(n=>{const[a,i]=S.useState({...n}),o=e(l=>{const{type:h,checked:B,name:g,value:x}=l.target;i(h==="checkbox"?u=>({...u,[g]:B}):u=>({...u,[g]:x}))},"onChange");return t.jsx(A,{...n,...a,onChange:o})},"Controlled"),c=e(()=>t.jsx(r,{smsAlerts:!0,phone:"99005566"}),"SmsAlerts"),s=e(()=>t.jsx(r,{smsAlerts:!0,phone:"99005566",emailAlerts:!0,email:"mathias@brann.no"}),"SmsAndEmailAlerts"),p=e(({title:n="Aktør"})=>{const[a,i]=S.useState(!1),o=e(()=>{i(l=>!l)},"onToggle");return t.jsxs(t.Fragment,{children:[t.jsx(d,{onClick:o,children:"Åpne modal"}),t.jsxs(C,{open:a,onClose:o,children:[t.jsx(X,{title:n,children:t.jsx(j,{children:t.jsx(b,{id:"bb",icon:{name:"Bergen Bar",type:"company"},title:"Bergen Bar",description:"Org. nr. XXX XXX XXX"})})}),t.jsxs(v,{children:[t.jsx(s,{}),t.jsxs(k,{children:[t.jsx(d,{onClick:o,children:"Lagre og avslutt"}),t.jsx(d,{onClick:o,variant:"outline",children:"Avbryt"})]})]})]})]})},"AccountNotificationsModal"),pt=["Default","Controlled","SmsAlerts","SmsAndEmailAlerts","AccountNotificationsModal"];m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
